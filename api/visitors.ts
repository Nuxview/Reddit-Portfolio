import type { VercelRequest, VercelResponse } from "@vercel/node";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const headers = {
  "Content-Type": "application/json",
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
        return res
          .status(500)
          .json({ error: "Server is missing Supabase configuration" });
      }

      const { visitor_id } = req.body;

      if (!visitor_id) {
        return res.status(400).json({ error: "visitor_id required" });
      }

      const authHeaders = {
        ...headers,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        apiKey: SUPABASE_SERVICE_ROLE_KEY,
      };

      const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/visitors`, {
        method: "POST",
        headers: {
          ...authHeaders,
          Prefer: "resolution=ignore-duplicates",
        },
        body: JSON.stringify({ visitor_id }),
      });

      if (!insertRes.ok && insertRes.status !== 409) {
        const body = await insertRes.text();
        return res.status(500).json({
          error: "Failed to record visitor",
          details: body,
        });
      }

      const countRes = await fetch(
        `${SUPABASE_URL}/rest/v1/visitors?select=count`,
        {
          headers: {
            ...authHeaders,
            Prefer: "count=exact",
          },
        },
      );

      if (!countRes.ok) {
        const body = await countRes.text();
        return res.status(500).json({
          error: "Failed to read visitor count",
          details: body,
        });
      }

      const countHeader = countRes.headers.get("content-range");
      const count = Number(countHeader?.split("/")[1] ?? 0);

      return res.status(200).json({ count });
    } catch (error) {
      console.error("visitors api error:", error);
      return res.status(500).json({ error: "Unexpected server error" });
    }
  }
  return res.status(405).json({ error: "Method not allowed" });
}

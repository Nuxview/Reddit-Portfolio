import { getOrCreateFingerprint } from "@/lib/fingerprint";
import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";

const VisitorCount = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const track = async () => {
      const visitor_id = getOrCreateFingerprint();

      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visitor_id }),
        });

        if (!res.ok) {
          return;
        }

        const data = (await res.json()) as { count?: number };
        if (typeof data.count === "number") {
          setCount(data.count);
        }
      } catch {
        // Keep the footer quiet if the API is unavailable.
      }
    };

    track();
  }, []);

  const getOrdinal = (n: number) => {
    const v = n % 100;
    if (v >= 11 && v <= 13) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <div className="flex-row items-center justify-center rounded-lg">
      {count === null ? (
        <p className="text-muted-foreground text-sm">counting visitors...</p>
      ) : (
        <div className="flex items-center gap-2">
          <UserRound size={18} className="text-muted-foreground" />
          <p className="text-muted-foreground">
            You are{" "}
            <span className="text-foreground text-base">
              {count} <sup>{getOrdinal(count)}</sup>
            </span>{" "}
            visitor
          </p>
        </div>
      )}
    </div>
  );
};

export default VisitorCount;

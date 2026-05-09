import type { Blog } from "@/data/blog";
import { ArrowUpRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ title, description, tags, date, readTime }: Blog) => {
  return (
    <div className="flex flex-col gap-2 bg-card border border-dashed border-border/80 p-5 rounded-xl w-full overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <Clock size={12} />
          {readTime}
        </div>
      </div>
      <Link
        to={`/blogs/${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="flex flex-row items-center justify-between w-full group"
      >
        <span className="text-xl font-semibold text-foreground group-hover:underline decoration-1 underline-offset-4 transition-all duration-200">
          {title}
        </span>
        <ArrowUpRight className="w-5 h-5 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
      </Link>
      <p className="text-sm font-light leading-6 text-muted-foreground">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-dashed border-border/70 bg-background px-2 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;

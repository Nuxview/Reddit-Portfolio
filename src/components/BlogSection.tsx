import { blogs } from "@/data/blog";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section id="projects" className="w-full space-y-6">
      <div className="flex gap-3">
        <span className="text-3xl font-bold">|</span>
        <p className="text-3xl font-semibold">Blogs</p>
      </div>
      {blogs.map((blog) => (
        <BlogCard key={blog.title} {...blog} />
      ))}
    </section>
  );
};

export default BlogSection;

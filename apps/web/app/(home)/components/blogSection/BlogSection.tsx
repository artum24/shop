import React from "react";
import Link from "next/link";
import { Container } from "../container";

const BlogSection = () => {
  const blogLists = [
    {
      href: "#",
      src: "https://generated.vusercontent.net/placeholder.svg",
      title: "Measure Carefully",
      description:
        "Take accurate measurements to ensure the perfect fit for your space.",
    },
    {
      href: "#",
      src: "https://generated.vusercontent.net/placeholder.svg",
      title: "Read Reviews",
      description:
        "Check out what other customers have to say to make an informed decision.",
    },
    {
      href: "#",
      src: "https://generated.vusercontent.net/placeholder.svg",
      title: "Compare Prices",
      description:
        "Check out what other customers have to say to make an informed decision.",
    },
  ];
  return (
    <Container
      title="Helpful Advice for Shoppers"
      subtitle="Discover our top tips and tricks to get the most out of your shopping experience."
      topic="Blog"
    >
      {blogLists.map((blog) => {
        return (
          <div key={blog.title} className="flex flex-col items-start gap-4">
            <Link href={blog.href} prefetch={false}>
              <img
                src={blog.src}
                alt={blog.title}
                className="w-full sm:w-72 aspect-[3/2] overflow-hidden rounded-xl object-cover object-center"
              />
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-muted-foreground line-clamp-2">
                  {blog.description}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </Container>
  );
};

export default BlogSection;

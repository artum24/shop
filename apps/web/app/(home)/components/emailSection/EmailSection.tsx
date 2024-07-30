import React from "react";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";

const EmailSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 m-auto">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Stay Up-to-Date with Our Newsletter
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-600">
            Subscribe to our newsletter to receive the latest updates, exclusive
            offers, and product recommendations.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex gap-2 mb-4">
            <Input
              type="email"
              placeholder="Enter your email"
              classes="max-w-lg flex-1"
            />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-xs text-gray-600">
            We respect your privacy. Your email address will not be shared with
            any third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

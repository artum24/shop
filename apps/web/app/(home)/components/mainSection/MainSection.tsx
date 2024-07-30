import { Button } from "@repo/ui/button";

const MainSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-y">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-7xl mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <img
            src="https://generated.vusercontent.net/placeholder.svg"
            width="500"
            height="500"
            alt="Featured Product"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
          />
          <div className="flex flex-col items-start space-y-4">
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Discover the Perfect Product
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Browse our curated collection of high-quality products for your
              home, office, and lifestyle.
            </p>
            <Button variant="primary" appName="web">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

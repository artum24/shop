type ContainerProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  topic: string;
};

const Container = ({ children, topic, title, subtitle }: ContainerProps) => {
  return (
    <section className="flex justify-center w-full py-12 md:py-24 lg:py-32 border-y">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100  px-3 py-1 text-sm">
              {topic}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {title}
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {subtitle}
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Container;

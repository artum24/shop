import { BusIcon, LikeIcon, ShopIcon, StarIcon } from "@repo/ui/icons";
import { Container } from "../container";

const AdvantagesSection = () => {
  const advantagesList = [
    {
      icon: <BusIcon />,
      title: "Fast Shipping",
      description:
        "We offer lightning-fast shipping to get your products to you quickly.",
    },
    {
      icon: <LikeIcon />,
      title: "Quality Guarantee",
      description:
        "All our products are backed by a 100% satisfaction guarantee.",
    },
    {
      icon: <StarIcon />,
      title: "Exceptional Service",
      description:
        "Our dedicated customer support team is here to assist you every step of the way.",
    },
    {
      icon: <ShopIcon />,
      title: "Unbeatable Prices",
      description: "We offer the best prices on the market, guaranteed.",
    },
  ];
  return (
    <Container
      title="Our Unique Advantages"
      subtitle="Discover why our customers love our products and services."
      topic="Why Choose Us?"
    >
      {advantagesList.map((advantage) => {
        return (
          <div
            key={advantage.title}
            className="flex flex-col items-start gap-4"
          >
            {advantage.icon}
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-lg font-bold">{advantage.title}</h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default AdvantagesSection;

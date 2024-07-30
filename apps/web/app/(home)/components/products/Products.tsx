import Card from "@repo/ui/card";
import { Container } from "../container";

const Products = () => {
  const products = [
    {
      title: "Product 1",
      price: 49.99,
      description: "A high-quality product for your home",
    },
    {
      title: "Product 2",
      price: 99.99,
      description: "A stylish and functional product",
    },
    {
      title: "Product 3",
      price: 79.99,
      description: "A versatile product for your lifestyle",
    },
    {
      title: "Product 4",
      price: 59.99,
      description: "A must-have product for your home",
    },
  ];
  return (
    <Container
      title="Explore Our Collection"
      subtitle="Browse our curated selection of high-quality products for your
                home, office, and lifestyle."
      topic="Featured Products"
    >
      {products.map((card) => (
        <Card
          title={card.title}
          description={card.description}
          price={card.price}
          key={card.title}
        />
      ))}
    </Container>
  );
};

export default Products;

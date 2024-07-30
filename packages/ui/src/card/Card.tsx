import { Button } from "../button";

type CardType = {
  title: string;
  description: string;
  price: number;
};

const Card = ({ title, price, description }: CardType) => {
  return (
    <div className="flex flex-col items-center gap-2 sm:items-start">
      <img
        src="https://generated.vusercontent.net/placeholder.svg"
        alt="Product 1"
        className="aspect-square overflow-hidden rounded-xl object-cover object-center"
      />
      <div className="flex flex-col items-start gap-1 w-full">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between items-center w-full mt-2 sm:mt-0">
          <p className="font-bold">${price}</p>
          <Button size="small">+ Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;

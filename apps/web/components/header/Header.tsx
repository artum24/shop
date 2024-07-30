import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-between px-6 py-4 items-center border-b border-b-gray-400">
      <Image width={24} height={24} src="./logo.svg" alt="Logo" />
      <div className="">
        <ul className="flex gap-4">
          <li className="text-sm hover:underline underline-offset-4">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="text-sm hover:underline underline-offset-4">
            <Link href="/about">About</Link>
          </li>
          <li className="text-sm hover:underline underline-offset-4">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="text-sm hover:underline underline-offset-4">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

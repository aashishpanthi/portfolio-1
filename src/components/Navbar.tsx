import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center min-h-[125px] shadow-md px-2 lg:px-0">
      <div className="flex items-center justify-between mx-auto max-w-7xl w-full">
        <Link href="/" passHref>
          <Image
            src="/momayo-long-logo.png"
            alt="logo"
            width={150}
            height={100}
            className="cursor-pointer object-contain w-auto h-auto"
          />
        </Link>

        <Link href="/contact" passHref>
          <button className="px-10 py-4 bg-[#2D763A] text-white hover:shadow-md transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

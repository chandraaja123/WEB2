import React from "react";
import Logo from "./../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-red-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <Image src={Logo} alt="Jaya Bakery Logo" className="h-12 w-12" />
        </Link>
        <nav className="space-x-6">
          <Link className="hover:underline" href="/">
            Beranda
          </Link>
          <a className="hover:underline" href="#">
            Produk
          </a>
          <Link className="hover:underline" href="/tentang-kami">
            Tentang Kami
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Header;
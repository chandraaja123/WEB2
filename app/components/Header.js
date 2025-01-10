import React from "react";
import Logo from "./../assets/logo.png";
import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-red-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Image src={Logo} alt="Jaya Bakery Logo" className="h-12 w-12" />
        <nav className="space-x-6">
          <a className="hover:underline" href="#">
            Beranda
          </a>
          <a className="hover:underline" href="#">
            Produk
          </a>
          <a className="hover:underline" href="#">
            Tentang Kami
          </a>
          <a className="hover:underline" href="#">
            Kontak
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
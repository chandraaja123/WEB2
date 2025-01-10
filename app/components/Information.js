
import React from "react";
const Information = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <img
            alt="Inside Jaya Bakery"
            className="w-full md:w-1/2 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
            src="https://placehold.co/600x400"
          />
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Apa itu Jaya Bakery?</h2>
            <p className="text-gray-700">
              CV Jaya Bakery adalah perusahaan yang bergerak pada bidang
              industri pengolahan pangan khususnya roti dan kue. Perusahaan ini
              didirikan oleh bapak Siyono yang dahulu merupakan karyawan Roman
              Bakery. Beliau merintis usaha ini pada bulan Agustus 1997 yang
              dahulu dikenal dengan nama "Roti Kampas". Pada awalnya bapak
              Siyono menjual roti dengan cara door to door dari dari rumah ke
              rumah. Dengan berjalannya waktu usaha ini terus berkembang hingga
              pada tahun 2003 mendapat merek dagang "Jaya Bakery".
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Information;
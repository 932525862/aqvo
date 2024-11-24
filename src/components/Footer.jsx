import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-800 pb-10 pt-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-y-5 text-white">
          <p className="max-w-[564px] text-center">
            Siz izlagan ta'm, musaffolik, poklik va o‘zgachalik... Barchasi bir
            nuqtada jamlanib, “Evita”'ga aylanadi!
          </p>
          <div></div>
          <p>© Barcha huquqlar himoyalangan</p>
          <p className="text-white/80">Made by marketing agency Limsa</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

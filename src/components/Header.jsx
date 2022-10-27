import React from "react";

function Header() {
  return (
    <>
      <header className="">
        <div className="flex justify-around py-5 bg-[#f8f6f6]">
          <a href="/">
            <h1 className="font-bold text-[#eebaba]">Shopping cart</h1>
          </a>
          <a href="/">
            <h2 className="font-bold text-[#eebaba]">Cart</h2>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;

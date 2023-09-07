import React from "react";
import PurpleBtn from "./PurpleBtn";

function PriceBanner({
  price,
  offer,
  btnText,
  btnType = "",
  btnLink = () => null,
}) {
  return (
    <div className="price-banner w-full flex justify-between items-center px-6 py-5 bg-color-grey-900 bg-opacity-90 md:bg-price-banner-bg  mt-5 max-w-lg mx-auto rounded-md">
      <div className="price-details">
        <h1 className="font-semibold text-2xl pb-2">{price}</h1>
        <p className="offer-details text-color-grey-100 text-sm">{offer}</p>
      </div>
      <PurpleBtn text={btnText} link={btnLink} type={btnType} />
    </div>
  );
}

export default PriceBanner;

function GreyLabel({ img, text }) {
  return (
    <div className="grey-cont flex justity-center items-center gap-1 px-2 py-1 bg-color-grey-800 mb-3 mr-3 w-fit rounded-lg">
      <div className="img-cont w-6">
        <img src={img} alt="img" />
      </div>

      <p className="text-white text-xs sm:text-sm">
        {text}
      </p>
    </div>
  );
}

export default GreyLabel;

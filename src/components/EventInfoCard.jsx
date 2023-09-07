function EventInfoCard({ svg, heading, para="" }) {
  return (
    <div className="details-cont flex items-start gap-3  w-full ">
      <div className="img-cont w-8">
        <img src={svg} alt="svg" className="w-full"/>
      </div>

      <div className="details-text w-5/6">
        <h2 className="text-base text-color-grey-100 font-semibold">{heading}</h2>
        <p className="text-color-grey-400 font-normal text-sm">{para}</p>
      </div>
    </div>
  );
}

export default EventInfoCard;

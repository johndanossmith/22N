import { data } from "autoprefixer";
import {
  calendar,
  id_img,
  location,
  music as music_img,
  warning,
} from "../assets";
import GreyLabel from "./GreyLabel";
import EventInfoCard from "./EventInfoCard";
import EventForm from "./EventForm";

function Event({
  name,
  img,
  img_desk,
  date,
  time,
  place,
  age,
  type,
  music,
  type_svg,
  type_para,
}) {
  return (
    <div className="w-full lg:max-w-screen-lg lg:mx-auto ">
      <div className="img-container md:max-w-3xl lg:max-w-4xl mx-auto">
        <img
          src={img}
          alt="event-img"
          className="w-full md:hidden rounded-md"
        />
        <img
          src={img_desk}
          alt="event-img"
          className="w-full hidden md:block pb-4"
        />
      </div>

      <div className="event-content mt-5 pl-5 w-full ">
        <div className="event-main">
          <h1 className="event-name text-white text-left text-3xl font-semibold lg:text-5xl mb-3 md:text-center md:pb-3">
            {name}
          </h1>

          <div className="place pb-3 w-full  md:flex justify-center items-center ">
            <div className="wrapper flex">
              <GreyLabel img={calendar} text={`${date}, ${time}`} />
              <GreyLabel img={location} text={`${place}`} />
            </div>

            <GreyLabel img={music_img} text={music} />
          </div>

          <div className="ticket-details py-5  w-full border-b border-t border-color-grey-800 lg:max-w-xl mx-auto">
            <EventInfoCard svg={type_svg} heading={type} para={type_para} />
            <div className="wrapper py-4">
              <EventInfoCard
                svg={id_img}
                heading={`Minimale leeftijd ${age}+`}
              />
            </div>

            <EventInfoCard
              svg={warning}
              heading={`Ticket refund- en resell niet mogelijk`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;

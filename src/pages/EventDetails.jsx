import { useLocation } from "react-router-dom";
import Event from "../components/Event";
import { events } from "../constants";
import EventForm from "../components/EventForm";

import PriceBanner from "../components/PriceBanner";

function EventDetails() {
  const location = useLocation();
  const data = events.find((event) => {
    return event.id == location.state.id;
  });

  return (
    <div className="bg-color-bg-black pt-24 md:bg-event-bg bg-cover bg-no-repeat min-h-screen">
      <Event
        key={data.id}
        img={data.img}
        img_desk={data.img_desk}
        name={data.name}
        place={data.place}
        date={data.date}
        time={data.time}
        age={data.age}
        type={data.type}
        music={data.music}
        type_svg={data.type_svg}
        type_para={data.type_para}
      />
      <div
        className={`
          
          sticky bottom-0 left-0 right-0 md:relative`}>
        <PriceBanner
          price={data.price}
          offer={data.offer}
          btnLink={() => {
            document.getElementById("event_form").scrollIntoView(true);
          }}
          btnText={data.btn_text}
        />
      </div>

      <div className="form w-full px-5 mt-5" id="event_form">
        <EventForm
          age={data.age}
          price={data.price}
          offer={data.offer}
          btnText={data.btn_text}
        />
      </div>
    </div>
  );
}

export default EventDetails;

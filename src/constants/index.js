import {
  amsterdam,
  calendar,
  event_img,
  event_img_desk,
  friendTicket,
  friendTicketWhite,
  guestList,
  guestListWhite,
  rotterdam,
  show_img,
  show_img_2,
  show_img_2_desk,
  show_img_desk,
  weekend,
} from "../assets";

export const categories = [
  {
    img: amsterdam,
    text: "Amsterdam",
  },
  {
    img: rotterdam,
    text: "Rotterdam",
  },
];

export const calendar_info = [
  {
    img: calendar,
    text: "Vandaag",
  },

  {
    img: weekend,
    text: "Dit weekend",
  },

  {
    img: calendar,
    text: "Kies datum",
  },
];

export const searchList = [
  {
    content_id: "show_1",
    img: guestList,
    title: "Charlee - Lovelee",
    date: "8 juni 23:00",
    place: "Gastenlijst",
  },
  {
    content_id: "show_2",
    img: guestList,
    title: "Freaky - Supperclub",
    date: "8 juni 23:00",
    place: "Gastenlijst",
  },
  {
    content_id: "show_3",
    img: guestList,
    title: "Mimi - Chin Chin",
    date: "8 juni 23:00",
    place: "Gastenlijst",
  },
  {
    content_id: "show_4",
    img: friendTicket,
    title: "Super Social - Chicago Social Club",
    date: "8 juni 23:00",
    place: "Gastenlijst",
  },
];

export const events = [
  {
    id: "show_1",
    img: event_img,
    img_desk: event_img_desk,
    name: "Charlee",
    date: "8 June",
    time: "23:00",
    place: "Lovelee, Amsterdam",
    age: "21",
    type: "Gastenlijst",
    type_svg: guestListWhite,
    type_para:
      "Met een vriendenticket verzekeren wij voor jou het aller goedkoopste kaartje.",
    music: "House & Techno",
    price: "€0,-",
    offer: "Gratis voor gasten",
    btn_text: "Zet me op de lijst",
  },

  {
    id: "show_2",
    img: event_img,
    img_desk: event_img_desk,
    name: "Freaky",
    date: "8 June",
    time: "23:00",
    place: "Supperclub, Amsterdam",
    age: "18",
    type: "Gastenlijst",
    type_svg: guestListWhite,
    type_para:
      "Met een vriendenticket verzekeren wij voor jou het aller goedkoopste kaartje.",
    music: "House & Techno",
    price: "€0,-",
    offer: "Gratis voor gasten",
    btn_text: "Zet me op de lijst",
  },

  {
    id: "show_3",
    img: event_img,
    img_desk: event_img_desk,
    name: "Mimi",
    date: "8 June",
    time: "23:00",
    place: "Chin Chin, Amsterdam",
    age: "21",
    type: "Gastenlijst",
    type_svg: guestListWhite,
    type_para:
      "Met een vriendenticket verzekeren wij voor jou het aller goedkoopste kaartje.",
    music: "House & Techno",
    price: "€0,-",
    offer: "Gratis voor gasten",
    btn_text: "Zet me op de lijst",
  },

  {
    id: "show_4",
    img: event_img,
    img_desk: event_img_desk,
    name: "Super Social",
    date: "8 June",
    time: "23:00",
    place: "Chicago Social Club, Amsterdam",
    age: "21",
    type: "Vriendenticket",
    type_svg: friendTicketWhite,
    type_para:
      "Met een vriendenticket verzekeren wij voor jou het aller goedkoopste kaartje.",
    music: "House & Techno",
    price: "€15,-",
    offer: "in plaats van €25,-",
    btn_text: "Koop vriendenticket",
  },

  {
    id: "show_5",
    img: event_img,
    img_desk: event_img_desk,
    name: "Happy feelings ",
    date: "9 June",
    time: "16:00",
    place: "Thuishaven, Amsterdam",
    age: "18",
    type: "Gastenlijst",
    type_svg: guestListWhite,
    type_para:
      "Met een vriendenticket verzekeren wij voor jou het aller goedkoopste kaartje.",
    music: "House & Techno",
    price: "€0,-",
    offer: "Gratis voor gasten",
    btn_text: "Zet me op de lijst",
  },

  {
    id: "show_6",
    img: event_img,
    img_desk: event_img_desk,
    name: "Happy feelings",
    date: "9 June",
    time: "16:00",
    place: "Thuishaven, Amsterdam",
    age: "18",
    type: "Gastenlijst",
    type_svg: guestListWhite,
    type_para:
      "Met een vriendenticket verzekeren wij voor jou het aller goedkoopste kaartje.",
    music: "House & Techno",
    price: "€0,-",
    offer: "Gratis voor gasten",
    btn_text: "Zet me op de lijst",
  },
];

const Donderdag = [
  {
    content_id: "show_1",
    img: show_img,
    img_desk: show_img_desk,
    name: "Charlee",
    time: "23:00",
    place: "Lovelee, Amsterdam",
    age: "21+",
    ticket: "Gastenlijst",
    tooltip:
      "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan.",
  },
  {
    content_id: "show_2",
    img: show_img,
    img_desk: show_img_desk,
    name: "Freaky",
    time: "23:00",
    place: "Supperclub, Amsterdam",
    age: "18+",
    ticket: "Gastenlijst",
    tooltip:
      "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan.",
  },
  {
    content_id: "show_3",
    img: show_img,
    img_desk: show_img_desk,
    name: "Mimi",
    time: "23:00",
    place: "Chin Chin, Amsterdam",
    age: "21+",
    ticket: "Gastenlijst",
    tooltip:
      "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan.",
  },
  {
    content_id: "show_4",
    img: show_img,
    img_desk: show_img_desk,
    name: "Super Social",
    time: "23:00",
    place: "Chicago Social Club, Amsterdam",
    age: "21+",
    ticket: "Vriendenticket",
    tooltip:
      "Voor dit event verzekeren wij jou<br />van het aller goedkoopste <br />kaartje doormiddel een vriendenticket.",
  },
];

const Vrijdag = [
  {
    content_id: "show_5",
    img: show_img_2,
    img_desk: show_img_2_desk,
    name: "Happy feelings",
    time: "16:00",
    place: "Thuishaven, Amsterdam",
    age: "18+",
    ticket: "Gastenlijst",
    tooltip:
      "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan.",
  },
];

const Zaterdag = [
  {
    content_id: "show_6",
    img: show_img_2,
    img_desk: show_img_2_desk,
    name: "Happy feelings",
    time: "16:00",
    place: "Thuishaven, Amsterdam",
    age: "18+",
    ticket: "Gastenlijst",
    tooltip:
      "We zetten jouw naam op de gastenlijst, <br />zodat je gratis of goedkoper<br /> naar binnen kan.",
  },
];

const shows = [
  {
    show_name: "Donderdag",
    show_date: "8 June",
    shows: Donderdag,
  },

  {
    show_name: "Vrijdag",
    show_date: "5 July",
    shows: Vrijdag,
  },
  {
    show_name: "Zaterdag",
    show_date: "8 July",
    shows: Zaterdag,
  },
];

export default shows;

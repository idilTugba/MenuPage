export interface menuListTypo {
  id: number;
  name: string;
  type: string;
  description: string;
  img: string;
  price: number;
  popular: boolean;
  menu: boolean;
}

export const menuList: Array<menuListTypo> = [
  {
    id: 1,
    name: "Akdeniz Salata",
    type: "Salatalar",
    img: "akdeniz.png",
    description: "Lorem ipsum ...",
    price: 99,
    popular: false,
    menu: true,
  },
  {
    id: 2,
    name: "2li Hamburger Menu",
    type: "Ana Yemek",
    img: "hamburger.png",
    description: "Lorem ipsum ...",
    price: 129,
    popular: false,
    menu: false,
  },
  {
    id: 3,
    name: "Izgara Somon Balığı",
    type: "Ana Yemek",
    img: "somon.png",
    description: "Lorem ipsum ...",
    price: 99,
    popular: true,
    menu: false,
  },
  {
    id: 4,
    name: "Avakadolu Salata",
    type: "Salatalar",
    img: "gallery.png",
    description: "Lorem ipsum ...",
    price: 89,
    popular: false,
    menu: true,
  },
  {
    id: 5,
    name: "Cheddar Tost",
    type: "Kahvaltılık",
    img: "toast.png",
    description: "Lorem ipsum ...",
    price: 99,
    popular: true,
    menu: false,
  },
  {
    id: 6,
    name: "Mini Kahvaltı Menusü",
    type: "Kahvaltılık",
    img: "kahvalti.png",
    description: "Lorem ipsum ...",
    price: 99,
    popular: false,
    menu: true,
  },
  {
    id: 7,
    name: "Sezar Salata",
    type: "Salatalar",
    img: "tavuklu.png",
    description: "Lorem ipsum ...",
    price: 149,
    popular: true,
    menu: false,
  },
  {
    id: 8,
    name: "Güllaç",
    type: "Tatlılar",
    img: "gullac.png",
    description: "Lorem ipsum ...",
    price: 79,
    popular: true,
    menu: false,
  },
  {
    id: 9,
    name: "Çilekli Muse",
    type: "Tatlılar",
    img: "cilekli.png",
    description: "Lorem ipsum ...",
    price: 79,
    popular: true,
    menu: false,
  },
  {
    id: 10,
    name: "Karışık Pizza",
    type: "Pizzalar",
    img: "pizza.png",
    description: "Lorem ipsum ...",
    price: 79,
    popular: true,
    menu: false,
  },
  {
    id: 11,
    name: "Mozerella Pizza",
    type: "Pizzalar",
    img: "pizza.png",
    description: "Lorem ipsum ...",
    price: 79,
    popular: true,
    menu: false,
  },
];

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
    img: "./src/asset/image/menu/somon.png",
    description: "Lorem ipsum ...",
    price: 99,
    popular: false,
    menu: true,
  },
  {
    id: 2,
    name: "2li Hamburger Menu",
    type: "Ana Yemek",
    img: "./src/asset/image/menu/somon.png",
    description: "Lorem ipsum ...",
    price: 129,
    popular: false,
    menu: false,
  },
  {
    id: 3,
    name: "Izgara Somon Balığı",
    type: "Ana Yemek",
    img: "./src/asset/image/menu/somon.png",
    description: "Lorem ipsum ...",
    price: 99,
    popular: true,
    menu: false,
  },
  {
    id: 4,
    name: "Ispanaklı Börek",
    type: "Kahvaltılık",
    img: "./src/asset/image/menu/somon.png",
    description: "Lorem ipsum ...",
    price: 89,
    popular: false,
    menu: false,
  },
  {
    id: 5,
    name: "Cheddar Tost",
    type: "Atıştırmalık",
    img: "./src/asset/image/menu/somon.png",
    description: "Lorem ipsum ...",
    price: 99,
    popular: true,
    menu: false,
  },
  {
    id: 6,
    name: "Mini Kahvaltı Menusü",
    type: "Kahvaltılık",
    img: "./src/asset/image/menu/somon.png",
    description: "Lorem ipsum ...",
    price: 99,
    popular: false,
    menu: true,
  },
  {
    id: 7,
    name: "Sezar Salata",
    type: "Salatalar",
    img: "./src/asset/image/menu/somon.png",
    description: "Lorem ipsum ...",
    price: 149,
    popular: true,
    menu: false,
  },
  {
    id: 8,
    name: "Güllaç",
    type: "Tatlı",
    img: "./src/asset/image/menu/somon.png",
    description: "Lorem ipsum ...",
    price: 79,
    popular: true,
    menu: false,
  },
];

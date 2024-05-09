export interface menuListTypo {
  id: number;
  name: string;
  type: string;
  title: string;
  img: string;
  price: number;
  popular: boolean;
}

export const menuList: Array<menuListTypo> = [
  {
    id: 1,
    name: "Izgara Somon Balığı",
    type: "Ana Yemek",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 99,
    popular: false,
  },
  {
    id: 2,
    name: "Ispanaklı Börek",
    type: "Kahvaltı",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 89,
    popular: false,
  },
  {
    id: 3,
    name: "Cheddar Tost",
    type: "Atıştırmalık",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 99,
    popular: true,
  },
  {
    id: 4,
    name: "2li Hamburger Menu",
    type: "Ana Yemek",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 99,
    popular: false,
  },
  {
    id: 5,
    name: "Mini Kahvaltı Menusü",
    type: "Kahvaltılık",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 99,
    popular: false,
  },
  {
    id: 6,
    name: "Akdeniz Salata",
    type: "Salatalar",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 129,
    popular: false,
  },
  {
    id: 7,
    name: "Sezar Salata",
    type: "Salatalar",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 149,
    popular: false,
  },
  {
    id: 8,
    name: "Güllaç",
    type: "Tatlı",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 79,
    popular: true,
  },
];

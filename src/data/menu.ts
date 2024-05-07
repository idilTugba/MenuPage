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
    id: 12,
    name: "Izgara Somon Balığı",
    type: "Ana Yemek",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 99,
    popular: false,
  },
  {
    id: 12,
    name: "Ispanaklı Börek",
    type: "Kahvaltı",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 89,
    popular: false,
  },
  {
    id: 12,
    name: "Cheddar Tost",
    type: "Atıştırmalık",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 99,
    popular: true,
  },
  {
    id: 12,
    name: "2li Hamburger Menu",
    type: "Ana Yemek",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 99,
    popular: false,
  },
  {
    id: 12,
    name: "Mini Kahvaltı Menusü",
    type: "Kahvaltılık",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 99,
    popular: false,
  },
  {
    id: 12,
    name: "Akdeniz Salata",
    type: "Salatalar",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 129,
    popular: false,
  },
  {
    id: 12,
    name: "Sezar Salata",
    type: "Salatalar",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 149,
    popular: false,
  },
  {
    id: 12,
    name: "Güllaç",
    type: "Tatlı",
    img: "./src/asset/image/menu/somon.png",
    title: "Lorem ipsum ...",
    price: 79,
    popular: true,
  },
];

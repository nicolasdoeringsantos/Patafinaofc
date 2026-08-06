import { FaDog, FaCat, FaShower } from "react-icons/fa";

export const categories = [
  {
    id: 1,
    name: "Cães",
    icon: FaDog,
    color: "bg-blue-500/20 text-cyan-300",
    count: "Guias, coleiras e peitorais",
    path: "/caes",
  },
  {
    id: 2,
    name: "Gatos",
    icon: FaCat,
    color: "bg-pink-500/20 text-pink-300",
    count: "Peitorais e guias exclusivas",
    path: "/gatos",
  },
  {
    id: 3,
    name: "Banho & Tosa",
    icon: FaShower,
    color: "bg-teal-500/20 text-teal-300",
    count: "Lacinhos adesivos e gravatas",
    path: "/banho-e-tosa",
  },
];
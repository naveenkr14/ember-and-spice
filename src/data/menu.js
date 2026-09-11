import biryaniImage from "../assets/images/biryani.jpg";
import paneerImage from "../assets/images/paneer.avif";
import galoutiImage from "../assets/images/galouti.webp";

const menuItems = [
  {
    id: 1,
    number: "01",
    name: "Awadhi Dum Biryani",
    category: "Main",
    description:
      "Fragrant basmati rice layered with saffron, slow-cooked vegetables and aromatic Awadhi spices.",
    image: biryaniImage,
  },
  {
    id: 2,
    number: "02",
    name: "Charred Paneer",
    category: "Vegetarian",
    description:
      "Fire-charred paneer served with smoked seasonal vegetables and our house spice blend.",
    image: paneerImage,
  },
  {
    id: 3,
    number: "03",
    name: "Tandoori Galouti",
    category: "Signature",
    description:
      "A refined interpretation of the legendary Awadhi kebab, delicately spiced and finished over fire.",
    image: galoutiImage,
  },
];

export default menuItems;

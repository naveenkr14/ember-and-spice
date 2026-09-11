const fullMenu = [
  {
    id: 1,
    category: "Vegetarian Starters",
    description:
      "Fresh, vibrant and full of flavour — inspired by India's rich culinary traditions.",
    items: [
      {
        name: "Pani Puri",
        price: 295,
        tags: ["Vegan", "Gluten"],
      },
      {
        name: "Samosa Chaat",
        price: 325,
        tags: ["Vegetarian", "Dairy", "Gluten"],
      },
      {
        name: "Avocado Bails",
        price: 495,
        tags: ["Vegan", "Gluten"],
      },
      {
        name: "Onion Bhaji",
        price: 345,
        tags: ["Vegetarian", "Dairy"],
      },
      {
        name: "Spinach Chaat",
        price: 375,
        tags: ["Vegetarian", "Dairy"],
      },
      {
        name: "Hara Bhara Kebab",
        price: 425,
        tags: ["Vegetarian", "Dairy", "Gluten"],
      },
      {
        name: "Beetroot Tikki",
        price: 395,
        tags: ["Vegan", "Gluten"],
      },
      {
        name: "Crispy Bhajia",
        price: 395,
        tags: ["Vegan", "Gluten"],
      },
      {
        name: "Chilli Paneer",
        price: 475,
        tags: ["Vegetarian", "Dairy", "Gluten"],
      },
      {
        name: "Chilli Garlic Mushroom",
        price: 445,
        tags: ["Vegan", "Gluten"],
      },
      {
        name: "Veg Manchurian",
        price: 445,
        tags: ["Vegan", "Gluten"],
      },
      {
        name: "Paneer Tikka",
        price: 525,
        tags: ["Vegetarian", "Dairy"],
      },
    ],
  },

  {
    id: 2,
    category: "Non-Vegetarian Starters",
    description:
      "Chargrilled, bold and full of depth — crafted with traditional spices and techniques.",
    items: [
      {
        name: "Lamb Samosa",
        price: 425,
        tags: ["Dairy", "Gluten"],
      },
      {
        name: "Chicken Tikka",
        price: 575,
        tags: ["Dairy"],
      },
      {
        name: "Malai Chicken Tikka",
        price: 595,
        tags: ["Dairy"],
      },
      {
        name: "Chilli Chicken",
        price: 525,
        tags: ["Gluten"],
      },
      {
        name: "Lamb Chops",
        price: 795,
        tags: ["Dairy", "Gluten"],
      },
      {
        name: "Seekh Kebab",
        price: 625,
        tags: ["Dairy"],
      },
      {
        name: "Tandoori Prawns",
        price: 795,
        tags: ["Dairy", "Gluten"],
      },
      {
        name: "Mixed Grill Platter",
        price: 1095,
        tags: ["Dairy", "Gluten"],
      },
    ],
  },

  {
    id: 3,
    category: "Vegetarian Main Course",
    description:
      "Rich, slow-cooked and thoughtfully spiced vegetarian classics.",
    items: [
      {
        name: "Paneer Butter Masala",
        price: 525,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Palak Paneer",
        price: 495,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Veg Makhaniwala",
        price: 475,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Veg Kofta",
        price: 495,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Malai Kofta",
        price: 525,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Veg Kadhai",
        price: 475,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Soya Chaap Masala",
        price: 495,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Saag Aloo",
        price: 425,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Chana Masala",
        price: 395,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Baingan Bharta",
        price: 425,
        tags: ["Vegetarian", "Dairy"],
      },
      {
        name: "Delhi Chole",
        price: 395,
        tags: ["Vegetarian", "Dairy"],
      },
    ],
  },

  {
    id: 4,
    category: "Non-Vegetarian Main Course",
    description:
      "Carefully prepared meats and seafood, cooked with depth, spice and tradition.",
    items: [
      {
        name: "Chicken Curry",
        price: 595,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Lamb Curry",
        price: 695,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Butter Chicken",
        price: 625,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Chicken Korma",
        price: 625,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Lamb Korma",
        price: 695,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Chicken Tikka Masala",
        price: 625,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Kadhai Chicken",
        price: 625,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Kadhai Lamb",
        price: 725,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Saag Chicken",
        price: 645,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Saag Lamb",
        price: 725,
        tags: ["Nuts", "Dairy"],
      },
      {
        name: "Fish Molee",
        price: 745,
        tags: ["Dairy", "Fish"],
      },
      {
        name: "Prawn Curry",
        price: 795,
        tags: ["Dairy"],
      },
    ],
  },

  {
    id: 5,
    category: "Rice & Pulao",
    description:
      "Fragrant basmati rice, prepared simply or delicately spiced to accompany your meal.",
    items: [
      {
        name: "Steamed Basmati Rice",
        price: 225,
        tags: ["Vegan"],
      },
      {
        name: "Saffron Pulao",
        price: 325,
        tags: ["Vegan"],
      },
      {
        name: "Jeera Rice",
        price: 275,
        tags: ["Vegetarian", "Dairy"],
      },
      {
        name: "Egg Fried Rice",
        price: 375,
        tags: ["Eggs"],
      },
    ],
  },

  {
    id: 6,
    category: "Dal",
    description:
      "Slow-cooked lentils, rich in flavour and rooted in tradition.",
    items: [
      {
        name: "Dal Makhani",
        price: 425,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Lahsuni Tadka Dal",
        price: 395,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Dal Palak",
        price: 395,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
    ],
  },

  {
    id: 7,
    category: "Biryani",
    description:
      "Fragrant basmati rice layered with spices and finished with aromatic depth.",
    items: [
      {
        name: "Vegetable Biryani",
        price: 495,
        tags: ["Vegetarian", "Nuts", "Dairy", "Gluten"],
      },
      {
        name: "Chicken Biryani",
        price: 625,
        tags: ["Nuts", "Dairy", "Gluten"],
      },
      {
        name: "Lamb Biryani",
        price: 725,
        tags: ["Nuts", "Dairy", "Gluten"],
      },
      {
        name: "Prawn Biryani",
        price: 795,
        tags: ["Nuts", "Dairy", "Gluten"],
      },
    ],
  },

  {
    id: 8,
    category: "Breads From The Tandoor",
    description:
      "Freshly baked in the tandoor, soft, warm and perfect for sharing.",
    items: [
      {
        name: "Tandoori Roti",
        price: 75,
        tags: ["Vegan", "Gluten"],
      },
      {
        name: "Tandoori Butter Roti",
        price: 95,
        tags: ["Vegetarian", "Dairy", "Gluten"],
      },
      {
        name: "Plain Naan",
        price: 95,
        tags: ["Vegan", "Gluten"],
      },
      {
        name: "Butter Naan",
        price: 115,
        tags: ["Vegetarian", "Dairy", "Gluten"],
      },
      {
        name: "Garlic Naan",
        price: 135,
        tags: ["Vegetarian", "Dairy", "Gluten"],
      },
      {
        name: "Chilli Garlic Naan",
        price: 155,
        tags: ["Vegetarian", "Dairy", "Gluten"],
      },
      {
        name: "Cheese Naan",
        price: 175,
        tags: ["Vegetarian", "Dairy", "Gluten"],
      },
      {
        name: "Cheese Chilli Naan",
        price: 195,
        tags: ["Vegetarian", "Dairy", "Gluten"],
      },
      {
        name: "Peshwari Naan",
        price: 195,
        tags: ["Vegetarian", "Nuts", "Dairy", "Gluten"],
      },
      {
        name: "Keema Naan",
        price: 225,
        tags: ["Dairy", "Gluten", "Eggs"],
      },
      {
        name: "Amritsari Kulcha",
        price: 175,
        tags: ["Vegan", "Nuts", "Gluten"],
      },
    ],
  },

  {
    id: 9,
    category: "Desserts",
    description: "Sweet finishes, rich in tradition and indulgence.",
    items: [
      {
        name: "Kulfi",
        price: 225,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Gulab Jamun",
        price: 245,
        tags: ["Vegetarian", "Nuts", "Dairy", "Gluten"],
      },
      {
        name: "Ras Malai",
        price: 275,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Gajar Halwa",
        price: 265,
        tags: ["Vegetarian", "Nuts", "Dairy"],
      },
      {
        name: "Chocolate Brownie",
        price: 325,
        tags: ["Vegetarian", "Nuts", "Dairy", "Gluten"],
      },
    ],
  },
];

export default fullMenu;

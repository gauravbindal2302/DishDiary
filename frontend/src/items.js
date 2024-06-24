const items = [
  {
    id: 1,
    name: "Khandvi",
    time: "10 mins",
    servings: "4",
    image:
      "https://www.maggi.in/sites/default/files/srh_recipes/d1d74216ba5fa7ce5d72b8e121afe69f.jpg",
    description:
      "Khandvi is usually prepared from a batter of gram flour and yogurt seasoned with ginger paste, salt, water, turmeric, and sometimes green chili peppers. The batter is cooked down to a thick paste and then spread thinly on a flat surface.",
    ingredients: {
      "Moong Dal": "2 Cups",
      Sugar: "10 Spoons",
      Carrot: "1 piece",
      Ghee: "1 Kilo",
    },
  },
  {
    id: 2,
    name: "Pav Bhaji",
    time: "30 mins",
    servings: "3",
    image:
      "https://c.ndtvimg.com/2023-03/kk2oqqhg_pav-bhaji_625x300_05_March_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    description:
      "Pav Bhaji is a spicy blend of vegetables in tomato gravy served with butter-toasted pav. It is a popular street food from Mumbai.",
    ingredients: {
      Potatoes: "4 pieces",
      "Green Peas": "1 Cup",
      Tomatoes: "3 pieces",
      Butter: "100 grams",
    },
  },
  {
    id: 3,
    name: "Masala Dosa",
    time: "20 mins",
    servings: "2",
    image:
      "https://revi.b-cdn.net/wp-content/uploads/2017/03/masala-dosa-2.jpg",
    description:
      "Masala Dosa is a popular South Indian thin crispy pancake filled with spiced potatoes.",
    ingredients: {
      Rice: "1 Cup",
      "Urad Dal": "1/2 Cup",
      Potatoes: "2 pieces",
      "Mustard Seeds": "1 tsp",
    },
  },
  {
    id: 4,
    name: "Paneer Butter Masala",
    time: "40 mins",
    servings: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE2i0uRJZ9gTQXx5eJARrReUI82gHpDwC4xA&s",
    description:
      "Paneer Butter Masala is a rich and creamy dish of paneer (cottage cheese) cooked in a butter-based tomato sauce.",
    ingredients: {
      Paneer: "200 grams",
      Tomatoes: "4 pieces",
      Butter: "100 grams",
      Cream: "1/2 Cup",
    },
  },
  {
    id: 5,
    name: "Samosa",
    time: "25 mins",
    servings: "5",
    image:
      "https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg",
    description:
      "Samosa is a fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas, or lentils. It is popular as a street food and appetizer in many regions of South Asia.",
    ingredients: {
      Potatoes: "3 pieces",
      "Green Peas": "1/2 Cup",
      "All-purpose Flour": "2 Cups",
      Ghee: "3 tablespoons",
      "Cumin Seeds": "1 teaspoon",
      "Coriander Powder": "1 teaspoon",
      Salt: "to taste",
      "Garam Masala": "1/2 teaspoon",
    },
  },
  {
    id: 6,
    name: "Gulab Jamun",
    time: "15 mins",
    servings: "8",
    image:
      "https://aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg",
    description:
      "Gulab Jamun is a milk-solid-based sweet made from milk solids, flour, and a leavening agent, soaked in a rose-flavored sugar syrup. It is a popular dessert in the Indian subcontinent.",
    ingredients: {
      "Milk Powder": "1 Cup",
      "All-purpose Flour": "1/4 Cup",
      Ghee: "2 tablespoons",
      Sugar: "2 Cups",
      "Cardamom Powder": "1/4 teaspoon",
      "Rose Water": "1 tablespoon",
      Water: "as needed",
    },
  },
  {
    id: 7,
    name: "Rajma Chawal",
    time: "50 mins",
    servings: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2R3FJk9RJI9-1Ke3yTsz8g4du-rD--4DSg&s",
    description:
      "Rajma Chawal is a popular North Indian dish made with red kidney beans cooked in a thick gravy with whole spices, served with steamed rice. It is a comforting and wholesome meal.",
    ingredients: {
      "Rajma (Kidney Beans)": "1 Cup",
      Onions: "2 pieces",
      Tomatoes: "3 pieces",
      "Ginger-Garlic Paste": "1 tablespoon",
      "Basmati Rice": "1 Cup",
      "Cumin Seeds": "1 teaspoon",
      "Garam Masala": "1 teaspoon",
      "Coriander Powder": "1 teaspoon",
      Salt: "to taste",
    },
  },
  {
    id: 8,
    name: "Pani Puri",
    time: "15 mins",
    servings: "10",
    image:
      "https://www.awesomecuisine.com/wp-content/uploads/2007/11/Pani-Puri.jpg",
    description:
      "Pani Puri is a popular street food in India, consisting of a hollow, crispy puri filled with spicy, tangy water, tamarind chutney, and other fillings such as potatoes, chickpeas, or sprouts.",
    ingredients: {
      Puris: "30 pieces",
      Tamarind: "1/2 Cup",
      "Mint Leaves": "1/2 Cup",
      Potatoes: "3 pieces",
      Chickpeas: "1/2 Cup",
      "Green Chilies": "2 pieces",
      "Black Salt": "1/2 teaspoon",
      "Roasted Cumin Powder": "1 teaspoon",
    },
  },
  {
    id: 9,
    name: "Aloo Paratha",
    time: "25 mins",
    servings: "4",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg/640px-Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg",
    description:
      "Aloo Paratha is a popular Indian breakfast dish made with unleavened dough stuffed with a spiced mixture of mashed potatoes. It is typically served with butter, yogurt, or pickles.",
    ingredients: {
      "Wheat Flour": "2 Cups",
      Potatoes: "3 pieces",
      "Green Chilies": "2 pieces",
      Ghee: "2 tablespoons",
      "Coriander Leaves": "1/4 Cup",
      "Garam Masala": "1/2 teaspoon",
      Salt: "to taste",
      "Carom Seeds": "1/2 teaspoon",
    },
  },
];

export default items;

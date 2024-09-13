import {v4} from "uuid";

type Product = {
    id: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: v4(),
      title: "Sicilian",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/temporary/p1.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Bacon Deluxe",
      desc: "Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.",
      img: "/temporary/p2.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p3.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Spicy Arrabbiata",
      desc: "Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.",
      img: "/temporary/p4.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Jalapeño Fiesta",
      desc: "Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.",
      img: "/temporary/p5.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Margherita Magic",
      desc: "A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.",
      img: "/temporary/p6.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Garlic Parmesan Linguine",
      desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
      img: "/temporary/p7.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/temporary/p8.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Hawaiian Teriyaki",
      desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
      img: "/temporary/p9.png",
      price: 29.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  
  export const pizzas: Products = [
    {
      id: v4(),
      title: "Sicilian",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/temporary/p1.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id:v4(),
      title: "Mediterranean Delight",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/temporary/p8.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id:v4(),
      title: "Bella Napoli",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p3.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Pesto Primavera",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p10.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: v4(),
      title: "Veggie Supreme",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/temporary/p11.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id:v4(),
      title: "Four Cheese Fantasy",
      desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
      img: "/temporary/p12.png",
      price: 22.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];

  export const burgers:Products =  [
    {
      id: v4(),
      title: "Classic Cheeseburger",
      desc: "A juicy beef patty topped with melted cheddar cheese, fresh lettuce, tomatoes, pickles, and a dollop of tangy ketchup and mustard.",
      img: "/temporary/p2.png",  
      price: 14.9,
      options: [
        {
          title: "Single Patty",
          additionalPrice: 0,
        },
        {
          title: "Double Patty",
          additionalPrice: 3,
        },
        {
          title: "Triple Patty",
          additionalPrice: 5,
        },
      ],
    },
    {
      id: v4(),
      title: "Bacon BBQ Burger",
      desc: "A succulent beef patty smothered in smoky BBQ sauce, topped with crispy bacon, melted gouda cheese, and caramelized onions.",
      img: "/temporary/p2.png",  // Updated image path
      price: 16.9,
      options: [
        {
          title: "Single Patty",
          additionalPrice: 0,
        },
        {
          title: "Double Patty",
          additionalPrice: 3,
        },
        {
          title: "Triple Patty",
          additionalPrice: 5,
        },
      ],
    },
    {
      id: v4(),
      title: "Spicy Jalapeño Burger",
      desc: "A fiery burger featuring a spicy beef patty with fresh jalapeños, pepper jack cheese, lettuce, and a zesty chipotle mayo.",
      img: "/temporary/p2.png",  // Updated image path
      price: 15.9,
      options: [
        {
          title: "Single Patty",
          additionalPrice: 0,
        },
        {
          title: "Double Patty",
          additionalPrice: 3,
        },
        {
          title: "Triple Patty",
          additionalPrice: 5,
        },
      ],
    },
    {
      id: v4(),
      title: "Mushroom Swiss Burger",
      desc: "A savory burger topped with sautéed mushrooms, melted Swiss cheese, and a creamy garlic aioli on a toasted brioche bun.",
      img: "/temporary/p2.png",  
      price: 17.5,
      options: [
        {
          title: "Single Patty",
          additionalPrice: 0,
        },
        {
          title: "Double Patty",
          additionalPrice: 3,
        },
        {
          title: "Triple Patty",
          additionalPrice: 5,
        },
      ],
    },
    {
      id: v4(),
      title: "Veggie Burger",
      desc: "A delicious plant-based patty with fresh avocado, tomato, lettuce, and a tangy vegan mayo, perfect for vegetarians.",
      img: "/temporary/p2.png",  
      price: 13.9,
      options: [
        {
          title: "Single Patty",
          additionalPrice: 0,
        },
        {
          title: "Double Patty",
          additionalPrice: 3,
        },
        {
          title: "Triple Patty",
          additionalPrice: 5,
        },
      ],
    },
    {
      id: v4(),
      title: "Greek Lamb Burger",
      desc: "A flavorful lamb patty seasoned with Greek spices, topped with feta cheese, cucumber, tomato, and tzatziki sauce on a pita bun.",
      img: "/temporary/p2.png",  
      price: 18.9,
      options: [
        {
          title: "Single Patty",
          additionalPrice: 0,
        },
        {
          title: "Double Patty",
          additionalPrice: 3,
        },
        {
          title: "Triple Patty",
          additionalPrice: 5,
        },
      ],
    },
  ];
  
  export const pastas:Products = [
    {
      id:v4(),
      title: "Spaghetti Carbonara",
      desc: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper, creating a creamy, savory sauce.",
      img: "/temporary/p4.png",
      price: 18.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 3,
        },
        {
          title: "Large",
          additionalPrice: 5,
        },
      ],
    },
    {
      id: v4(),
      title: "Penne Arrabbiata",
      desc: "Penne pasta tossed in a spicy tomato sauce with garlic, red chili flakes, and parsley.",
      img: "/temporary/p4.png",
      price: 16.5,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 3,
        },
        {
          title: "Large",
          additionalPrice: 5,
        },
      ],
    },
    {
      id:v4(),
      title: "Fettuccine Alfredo",
      desc: "Fettuccine pasta in a rich and creamy Alfredo sauce made with butter, heavy cream, and Parmesan cheese.",
      img: "/temporary/p4.png",
      price: 19.5,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 3,
        },
        {
          title: "Large",
          additionalPrice: 5,
        },
      ],
    },
    {
      id: v4(),
      title: "Lasagna Bolognese",
      desc: "Layers of pasta with a rich meat sauce made from beef, pork, tomatoes, and a blend of cheeses.",
      img: "/temporary/p4.png",
      price: 21.0,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 3,
        },
        {
          title: "Large",
          additionalPrice: 5,
        },
      ],
    },
    {
      id: v4(),
      title: "Pesto Gnocchi",
      desc: "Soft gnocchi pasta in a vibrant basil pesto sauce with pine nuts and Parmesan cheese.",
      img: "/temporary/p4.png",
      price: 17.0,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 3,
        },
        {
          title: "Large",
          additionalPrice: 5,
        },
      ],
    },
    {
      id: v4(),
      title: "Shrimp Scampi",
      desc: "Linguine pasta tossed with succulent shrimp in a garlic lemon butter sauce, garnished with parsley.",
      img: "/temporary/p4.png",
      price: 22.5,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 3,
        },
        {
          title: "Large",
          additionalPrice: 5,
        },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: v4(),
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "pastas",
      title: "Italian Pastas",
      desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
      img: "/temporary/m1.png",
      color: "white",
    },
    {
      id: 2,
      slug: "burgers",
      title: "Juicy Burgers",
      desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
      img: "/temporary/m2.png",
      color: "black",
    },
    {
      id: 3,
      slug: "pizzas",
      title: "Cheesy Pizzas",
      desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
      img: "/temporary/m3.png",
      color: "white",
    },
  ];
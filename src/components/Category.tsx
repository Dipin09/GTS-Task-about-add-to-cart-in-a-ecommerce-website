import CategoryCard from "./CategoryCard";
const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 products",
        img:"/category__1.jpeg"
    },
    {
        id: 1,
        name: "Fresh Vegs",
        count: "8 products",
        img:"/category__2.jpeg"
    },
    {
        id: 2,
        name: "Canned Goods",
        count: "10 products",
        img:"/category__3.jpeg"
    },
    {
        id: 3,
        name: "Bread and Bakery",
        count: "12 products",
        img:"/category__4.jpeg"
    },
    {
        id: 4,
        name: "Fishes",
        count: "10 products",
        img:"/category__5.jpeg"
    },
    {
        id: 5,
        name: "Eggs & Dairy",
        count: "7 products",
        img:"/category__6.jpeg"
    },
    {
        id: 6,
        name: "Soft Drinks",
        count: "5 products",
        img:"/category__7.webp"
    },
    {
        id: 7,
        name: "Fresh Fruits",
        count: "9 products",
        img:"/category__8.jpeg"
    },
]

const Category = () => {
  return (
   <div className="ml-15 pt-16">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((el) => (
            <CategoryCard 
                key = {el.id}
                img = {el.img}
                name = {el.name}
                count = {el.count}
            />
        ))}
    </div>
  </div>
    );
  
};

export default Category

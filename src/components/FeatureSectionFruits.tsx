import ProductCard from "./ProductCard";

const data = [
    {id: 0, img: "product__1.jpeg", name:"Dried Mango", price:"$500"},
    {id: 1, img: "product__2.jpeg", name:"crunchy crisps", price:"$300"},
    {id: 2, img: "product__3.jpeg", name:"Jewel Cranberries", price:"$200"},
    {id: 3, img: "product__4.jpeg", name:"Almond organic", price:"$100"},
];

const FeatureSectionFruits = () => {
  return (
    <div className='ml-15 pt-16'>
      <div className="lg:flex justify-between itmes-center">
        <div>
            <h3 className='font-medium text-2xl'>Fruits & Vegetables</h3>
            <p className='text-gray-600 mt-2'>
                Buy farm fresh fruits and vegetables online at the best prices  
            </p>
        </div>

           <div className="space-x-4 mt-8 lg:mt-0">
            <button className='feature_btn'>Frits</button>
            <button className='text-gray-600 hover:text-green-900'>
                Vegetables
            </button>
            <button className='text-gray-600 hover:text-green-900'>
                Bread & Bakery
            </button>
            </div> 

      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
        <div>
            <img className='w-full h-full object-cover' src="/features__1.jpeg" alt="banner" />
        </div>

        {data.map((el) => (
            <ProductCard 
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
            />
        ))}

      </div>
    </div>
  )
}

export default FeatureSectionFruits

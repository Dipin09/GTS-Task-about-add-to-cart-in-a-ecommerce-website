import BlogCard from "./BlogCard"


const data =[
    {
        img: "post__1.jpeg",
        title:"Healthy Food Healthy Life",
        date: "Aug 23 2024",
        comment: 8,
    },
    {
        img: "post__2.jpeg",
        title:"Healthy Food Healthy Life",
        date: "Aug 25, 2024",
        comment: 1 ,
    },
    {
        img: "post__3.jpeg",
        title:"Healthy Food Healthy Life",
        date: "Aug 25, 2024",
        comment: 5,
    },
    
]

const BlogSection = () => {
    return (
        <div className="container ml-15 pt-16">
        <h2 className="font-bold text-2xl">Latest News</h2>
        <p className="text-gray-500">
            Present posts in a best way to highlight interestiong moments of your blog.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map((el) => (
                <BlogCard
                key={el.date}
                img={el.img}
                title={el.title}
                date={el.date}
                comment={el.comment}
                />
            ))}
        </div>
        </div>
    )
}

export default BlogSection;
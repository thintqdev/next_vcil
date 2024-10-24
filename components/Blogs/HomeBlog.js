import BlogItem from "./BlogItem";

const BlogHome = () => {
    const blogs = [
        {
            title: "Bibendum tortor et sit convallis nec morbi",
            image: "/images/placeholder.png",
            description: "Lorem ipsum auctor sit amet, consectetur adipiscing elit. Sit a egestas tortor viverra nisl, in non...",
        },
        {
            title: "Eu diam in magna blandit sit magna dolor proin velit",
            image: "/images/placeholder.png",
            description: "Lorem ipsum ac neque, consectetur adipiscing elit. Nibh neque, ut purus donec sed donec semper ac vestibulum...",
        },
        {
            title: "Viverra enim diam gravida risus nisl",
            image: "/images/placeholder1.png",
            description: "Lorem ipsum accumsan arcu, consectetur adipiscing elit. Sed eget enim vel...",
        },
    ];

    return (
        <div className="container mx-auto px-5 py-10">
            <div className="mx-auto px-5 pt-32 pb-24 lg:px-24">
                <div className="my-3 flex w-full flex-col text-left lg:text-center">
                    <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
                        Journals
                    </h2>
                </div>
                {blogs.map((blog, index) => (
                    <BlogItem
                        key={index}
                        title={blog.title}
                        image={blog.image}
                        description={blog.description}
                    />
                ))}
            </div>

            {/* View more button */}
            <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    View More
                </button>
            </div>
        </div>
    );
};

export default BlogHome;

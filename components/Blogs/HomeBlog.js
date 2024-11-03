import BlogItem from "./BlogItem";
import { useState, useEffect } from "react";
import { getImageUrl } from "../../utils";

const BlogHome = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL;
        fetch(`${apiUrl}/blogs?populate=*`)
            .then(response => response.json())
            .then(data => {
                setBlogs(data.data.slice(0, 3))
            })
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

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
                        title={blog?.attributes?.title}
                        image={getImageUrl(blog.image.url)}
                        description={blog.description[0].children[0].text}
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

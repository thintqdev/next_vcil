import Image from 'next/image';
import Link from 'next/link';

const BlogItem = ({ title, image, description }) => {
    return (
        <div className="bg-white text-black mb-10">
            <div className="flex flex-col items-center lg:flex-row">
                <div className="lg:w-1/2 lg:pr-6">
                    <Image
                        src={image}
                        alt="Blog Image"
                        className="rounded-lg"
                        width={500}
                        height={300}
                        objectFit='cover'
                    />      
                </div>
                <div className="lg:w-1/2 lg:pl-6">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-lg font-semibold leading-relaxed mb-6">{description}</p>
                    <Link href="/" className="text-blue-500 underline">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;
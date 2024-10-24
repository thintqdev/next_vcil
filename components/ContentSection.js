import Image from "next/image";
import Link from "next/link";

// components/ContentSection.js
export default function ContentSection() {
    return (
        <div className="text-black">
            <div className="max-w-9xl mx-auto flex flex-col items-center justify-center px-5">
                <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
                    <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                        Sem enim cursus orci at.
                    </h2>
                    <p className="mb-4 text-lg leading-relaxed">
                        In ullamcorper magna nunc, non molestie augue feugiat eget. Mauris, vitae et, vitae et cursus amet tincidunt feugiat nulla. Senectus maecenas diam risus sodales dictum eu. Eget cursus sit bibendum pulvinar faucibus vitae nam sed. Faucibus vel laoreet.
                    </p>
                    <Link href="/" className="underline-blue font-semibold">
                        Learn more
                    </Link>
                </div>
                <Image
                    className="lg:w-5/7 mb-40 hidden w-5/6 rounded object-cover object-center lg:inline-block lg:w-4/6"
                    src="/images/placeholder.png"
                    alt="img"
                    width={500}
                    height={500}
                />
                <Image
                    className="mb-24 inline-block w-5/6 rounded object-cover object-center lg:hidden lg:w-4/6"
                    src="/images/placeholder.png"
                    alt="img"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}

import Link from "next/link";
import Image from "next/image";
export function AboutUs() {
    return (
        <div className="mt-0 bg-white lg:mt-20">
            <div className="mx-auto"></div>
            <div className="text-black">
                <div
                    className="
              max-w-9xl
              mx-auto
              flex
              flex-col
              items-center
              justify-center
              px-5
            "
                >
                    <div className="mb-6 mr-0 w-full py-4 text-center lg:w-2/3">
                        <h2 className="mb-4 text-4xl font-bold sm:text-5xl">About Us</h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            <Link href="/" passHref>
                                <a className="underline-blue font-semibold">Learn more</a>
                            </Link>
                        </p>
                    </div>
                    <Image
                        className="
                lg:w-5/7
                mb-40
                hidden
                w-5/6
                rounded object-cover
                object-center
                lg:inline-block 
                lg:w-4/6
              "
                        src="/images/placeholder.png"
                        alt="img"
                        width={500}
                        height={300}
                    />

                    <Image
                        className="
              mb-24
              inline-block
              w-5/6
              rounded
              object-cover object-center
              lg:hidden
              lg:w-4/6 
            "
                        src="/images/placeholder.png"
                        alt="img"
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
}

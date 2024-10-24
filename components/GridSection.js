// components/GridSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function GridSection() {
  return (
    <div className="mt-0 bg-white lg:mt-20">
      <div className="mx-auto">
        <div className="mx-auto px-5 py-24 lg:px-24">
          <div className="my-10 flex w-full flex-col text-center">
            <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
              In ullamcorper magna nunc, non molestie augue feugiat eget.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-16 text-center lg:grid-cols-6">
            {Array(6).fill().map((_, index) => (
              <div
                key={index}
                className={`${index === 0 || index === 5 ? "hidden lg:inline-block" : "flex"
                  } items-center justify-center`}
              >
                <Image
                  src="/images/segment.png"
                  alt="Segment"
                  width={96} // Adjust the width as needed
                  height={96} // Adjust the height as needed
                  className="block h-24 object-contain"
                />
              </div>
            ))}
            <Link href="/" passHref>
              <a className="underline-blue mb-8 mt-6 text-xl font-bold text-black">
              </a>
            </Link>
            <Link href="/" passHref>
              <a className="underline-blue mb-8 mt-6 text-xl font-bold text-black">
                Ut eleifend.
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

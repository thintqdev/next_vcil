import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getImageUrl } from "../../utils";

export default function Definition() {
  const [definition, setDefinition] = useState(null);

  useEffect(() => {
    getDefinition();
  }, []);

  const getDefinition = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ADMIN_URL}/api/home-settings?populate=*&filters[name][$eq]=Definition`
    );
    const data = await response.json();
    setDefinition(data.data[0]);
  };

  return (
    <div className="mt-0 bg-white lg:mt-20">
      <div className="mx-auto"></div>
      <div className="text-black">
        <div className="max-w-9xl mx-auto flex flex-col items-center justify-center px-5">
          <div className="mb-6 mr-0 w-full py-4 text-center lg:w-2/3">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              What is Vcil?
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              {definition?.description[0]?.children[0]?.text}
            </p>
            <Link
              href={definition?.url || "/"}
              className="underline-blue font-semibold"
            >
              Learn more
            </Link>
          </div>
          <Image
            className="lg:w-5/7 mb-40 hidden w-5/6 rounded object-cover object-center lg:inline-block lg:w-4/6"
            src={
              definition?.image
                ? getImageUrl(definition.image.url)
                : "/images/placeholder.png"
            }
            alt={definition?.image?.alternativeText || "definition image"}
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

// components/ImageSection.js
import Image from 'next/image';

export default function ImageSection() {
    return (
      <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
        <Image src="/images/placeholder.png" alt="Hero" width={500} height={500} />
      </div>
    );
  }
  
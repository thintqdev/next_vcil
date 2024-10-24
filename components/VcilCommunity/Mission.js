import Link from 'next/link';

export function Mission() {
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
                        <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                            Mission
                        </h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            To create systemic social changes towards a new paradigm of development based on holistic well-being and sustainability by inner transformation and ecosystem building.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed">
                            <Link href="/">
                                <a className="underline-blue font-semibold">Learn more</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

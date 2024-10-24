import Link from 'next/link';

export function Strategy() {
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
                            Strategy
                        </h2>
                        <p className="mb-4 text-lg leading-relaxed text-justify">
                            Building a network and partnership of similar valued organizations and friends all over the world.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-justify">
                            Creating and developing alternative model in economy, education and development in Vietnam and different places
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-justify">
                            Collaborating and fostering experiments on alternative education, social economy, conviviality, community regeneration, etc.
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-justify">
                            Forming ecosystem to nurture initiatives that solves complex societal problems
                        </p>
                        <p className="mb-4 text-lg leading-relaxed text-justify">
                            Researching and educating people about complex social-economic issues and introducing alternative models.
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

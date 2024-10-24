import Image from "next/image";
export function VolunteerBasedOrganization() {
    return (
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
            <div className="lg:w-3/6">
                <h2 className="inline-block max-w-xl text-3xl font-bold leading-none text-black lg:text-[4.2em]">
                    Volunteer-based organization
                </h2>

                <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040] text-justify">
                    The core operating team of VCIL Community currently works entirely
                    as full-time volunteers. No one receives a salary for their work
                    at VCIL Community. Instead, the basic needs of the members are
                    covered by a common fund.
                </p>
                <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040] text-justify">
                    As the market economy is expanding in every corner of the world,
                    everything is slowly commodified which is exchanged for
                    credit-based anonymous currency. Even the most sacred thing such
                    as human energy and time are traded as “labor markets”.
                </p>
                <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040] text-justify">
                    To transcend this paradigm, the act of service in VCIL Community
                    is redeemed as PRICELESS. Since working for social change is as
                    prestigious as dedicating to something higher than individual
                    self, no precise amount of payment can justify the soul.
                </p>
                <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040] text-justify">
                    To free ourselves from hierarchical dichotomy between employee and
                    employers; all members co-own, co-create, and co-manage VCIL
                    Community. While there is organic leadership in an emergent
                    situation, we had no boss, no CEO or board of directors to make
                    decisions. This design also encourages entrepreneurship spirit
                    among core team.
                </p>
            </div>
            <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
                <Image src="/images/placeholder.png" alt="Hero" width={500} height={500} />
            </div>
            <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
                <Image src="/images/placeholder.png" alt="image" width={500} height={500} />
            </div>
        </div>
    );
}
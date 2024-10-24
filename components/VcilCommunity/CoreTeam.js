import Image from 'next/image';

const CoreTeamCard = ({ name, description, image }) => {
    return (
        <div className="w-full lg:w-1/3 p-4">
            <div className="h-full bg-white shadow-lg">
                <Image
                    alt="team"
                    className="w-full object-cover object-center h-64"
                    src={image}
                    layout="responsive"
                    width={500}
                    height={256}
                />
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-3">{name}</h2>
                    <p className="text-base leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};

export function CoreTeam() {
    const teams = [
        {
            name: 'Person 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
            image: '/images/placeholder.png'
        },
        {
            name: 'Person 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
            image: '/images/placeholder.png'
        },
        {
            name: 'Person 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
            image: '/images/placeholder.png'
        },
        {
            name: 'Person 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed',
            image: '/images/placeholder.png'
        }
    ];
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
                            Core Team
                        </h2>
                        <p className="mb-4 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        </p>
                        <div className="flex flex-wrap justify-center">
                            {teams.map((team, index) => (
                                <CoreTeamCard key={index} {...team} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

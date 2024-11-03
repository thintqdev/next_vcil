import Image from 'next/image';

const OrganizationItem = ({ logo, url, name }) => {
    return (
        <div className="flex items-center justify-center bg-black rounded-lg">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Image src={logo} alt={`${name} Logo`} width={200} height={200} className="object-contain" />
            </a>
        </div>
    );
};

export default OrganizationItem;
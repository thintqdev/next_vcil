import Image from 'next/image';

const OrganizationItem = ({ logo, url, name }) => {
    return (
        <div className="flex items-center justify-center p-4">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Image src={logo} alt={`${name} Logo`} width={100} height={100} className="object-contain" />
            </a>
        </div>
    );
};

export default OrganizationItem;
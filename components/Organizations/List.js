import OrganizationItem from "./Item";

const OrganizationsList = () => {
    const organizations = [
        {
            name: "Organization One",
            logo: "/images/placeholder.png",
            url: "https://organization-one.com",
        },
        {
            name: "Organization Two",
            logo: "/images/placeholder.png",
            url: "https://organization-two.com",
        },
        {
            name: "Organization Three",
            logo: "/images/placeholder.png",
            url: "https://organization-three.com",
        },
        {
            name: "Organization One",
            logo: "/images/placeholder.png",
            url: "https://organization-one.com",
        },
        {
            name: "Organization Two",
            logo: "/images/placeholder.png",
            url: "https://organization-two.com",
        },
        {
            name: "Organization Three",
            logo: "/images/placeholder.png",
            url: "https://organization-three.com",
        },
        {
            name: "Organization Two",
            logo: "/images/placeholder.png",
            url: "https://organization-two.com",
        },
        {
            name: "Organization Three",
            logo: "/images/placeholder.png",
            url: "https://organization-three.com",
        },
        {
            name: "Organization One",
            logo: "/images/placeholder.png",
            url: "https://organization-one.com",
        },
        {
            name: "Organization Two",
            logo: "/images/placeholder.png",
            url: "https://organization-two.com",
        },
        // Thêm các tổ chức khác tại đây
    ];

    return (
        <div className="container mx-auto px-5 py-10">
            <h2 className="mb-10 text-3xl font-bold text-center">Our Networks</h2>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
                {organizations.map((org, index) => (
                    <OrganizationItem
                        key={index}
                        logo={org.logo}
                        url={org.url}
                        name={org.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default OrganizationsList;

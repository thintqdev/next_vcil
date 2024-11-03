import OrganizationItem from "./Item";
import { useState, useEffect } from "react";
import { getImageUrl } from "../../utils";
const OrganizationsList = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
        const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL;
        fetch(`${apiUrl}/organizations?populate=*`)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                setOrganizations(data.data)
            })
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

  return (
    <div className="container mx-auto px-5 py-10">
      <h2 className="mb-10 text-3xl font-bold text-center">Our Networks</h2>
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
        {organizations.map((org, index) => (
          <OrganizationItem
            key={index}
            logo={getImageUrl(org?.logo?.url)}
            url={org?.url}
            name={org?.name}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationsList;

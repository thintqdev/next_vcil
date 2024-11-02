import { useEffect, useState } from "react";
import ProjectSlider from "../UpcomingProject";

export default function UpcomingProject() {
    const apiUrl = process.env.NEXT_PUBLIC_APP_API_URL;
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/projects?populate=*`)
            .then(response => response.json())
            .then(data => {
                setProjects(data.data)
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return <>
        <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
                Upcoming Project
            </h2>
        </div>
        <ProjectSlider projects={projects} />
    </>
}

"use client";

import { Tabs } from "./ui/Tabs";
import Projects from "./Projects";
import { projects, projects1, projects2 } from "@/data";

const AllProjects = () => {
    const tabs = [
        {
            title: "Mobile Dev",
            value: "mobile-dev",
            content: (

                <Projects projects={projects} />

            ),
        },
        {
            title: "Web Dev",
            value: "web-dev",
            content: (

                <Projects projects={projects1} />

            ),
        },
        {
            title: "Machine Learning",
            value: "ml",
            content: (

                <Projects projects={projects2} />

            ),
        },


    ];

    return (
        <section className="flex flex-col h-full w-full my-10 py-[5rem]" id="projects">
            <h1 className="heading mb-5">
                My <span className="text-purple">Projects</span>
            </h1>
            <Tabs tabs={tabs} />
        </section>
    );
}

export default AllProjects
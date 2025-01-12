"use client";

import Image from "next/image";
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
        <div className="flex flex-col h-full w-full my-10 py-[5rem]">
            <h1 className='text-3xl font-semibold text-center my-10'>Projects I Have Created</h1>
            <Tabs tabs={tabs} />
        </div>
    );
}

export default AllProjects
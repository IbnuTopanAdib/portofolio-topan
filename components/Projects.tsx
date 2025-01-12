import React from 'react';
import { PinContainer } from './ui/PinContainer';
import { FaEye } from 'react-icons/fa';
import { Carousel } from './ui/Carousel';

interface Project {
    id: string | number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
}

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {

    const projectCards =
        projects.map(({ id, title, des, img, iconLists, link }) => (
            <div key={id} className='h-[26rem] sm:w-96 w-[80vw] flex items-center justify-center'>
                <PinContainer title={link} href={link}>
                    <div className="relative flex items-center justify-center sm:w-80 w-[70vw] overflow-hidden h-[20vh] lg:h-[25vh] sm:h-[30vh] mb-10">
                        <div
                            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                            style={{ backgroundColor: "#13162D" }}
                        >
                            <img src="/bg.png" alt="bgimg" />
                        </div>
                        <img
                            src={img}
                            alt="cover"
                            className="z-10 absolute bottom-0"
                        />
                    </div>
                    <h1 className='font-semibold text-lg line-clamp-1'>{title}</h1>
                    <p className='text-base font-light line-clamp-2 mt-2'>{des}</p>
                    <div className='flex items-center justify-between mt-8'>
                        <div className='flex items-center'>
                            {iconLists.map((icon, index) => (
                                <div
                                    key={icon}
                                    className='border border-white/[0.2] rounded-full bg-black h-10 w-10 flex justify-center items-center'
                                    style={{
                                        transform: `translateX(-${6 * index}px)`
                                    }}
                                >
                                    <img src={icon} alt="icon" className='p-1' />
                                </div>
                            ))}
                        </div>

                    </div>
                </PinContainer>
            </div>
        ))

    return (

        <Carousel items={projectCards} />

    );
};

export default Projects;

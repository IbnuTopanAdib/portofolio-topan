import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import TailwindButton from "./ui/TailwindButton";
import { FaDownload, FaFileContract, FaLocationArrow } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="relative pb-20 pt-56 sm:pt-28">


            <div className="flex justify-center relative lg:my-[10rem] md:my-[5rem] sm:my-[5rem] z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mt-10">
                    <TextGenerateEffect words="Hi I'm Ibnu Topan Adib Amrulloh" className="text-center text-[40px] md:text-4xl lg:text-5xl" />
                    <p className="mt-4 text-lg md:text-xl text-center">
                        Software Engineer passionate about building exceptional digital experiences.
                    </p>
                    <div className="flex justify-center gap-12 mt-10">
                        <a
                            href="#about"
                        >
                            <TailwindButton
                                title="About me"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                        <a
                            href="#contact"

                        >
                            <TailwindButton
                                title="Downloaad my resume"
                                icon={<FaDownload />}
                                position="right"
                            />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;

import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import TailwindButton from "./ui/TailwindButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="relative pb-20 pt-30">
            <div>
                {/* Spotlight 2 - Menyoroti sisi kanan atas */}
                <Spotlight
                    className="absolute top-[-4rem] right-[3rem]
               md:top-[-3rem] md:right-[1rem]
               h-[90vh] w-[90vw]"
                    fill="purple" /* Purple */
                />

            </div>


            {/* Content */}
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mt-10">
                    <TextGenerateEffect words="Hi I'm Ibnu Topan Adib Amrulloh" className="text-center text-[40px] md:text-4xl lg:text-5xl" />
                    <p className="mt-4 text-gray-400 text-lg md:text-xl text-center">
                        Software Engineer passionate about building exceptional digital experiences.
                    </p>
                    <div className="flex my-10">
                        <a
                            href="#about"
                        >
                            <TailwindButton
                                title="View my work"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                        <a
                            href="#contact"
                            className="ml-4 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg shadow-md transition"
                        >
                            Contact Me
                        </a>
                    </div>
                    <div className="mt-8 flex space-x-4">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white text-2xl"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

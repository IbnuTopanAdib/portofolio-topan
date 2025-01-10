import React from 'react'

const TailwindButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string
}) => {
    return (
        <button
            onClick={handleClick}
            className={`relative inline-flex h-12 active:scale-95 transition-all duration-300 ease-in-out overflow-hidden rounded-lg p-[1px] focus:outline-none group ${otherClasses}`}
        >
            <span
                className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-transform duration-300 group-hover:scale-150"
            >
            </span>
            <span
                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:shadow-lg group-hover:shadow-pink-500/50"
            >
                {position === "left" && icon}
                {title}
                {position === "right" && icon}
            </span>
        </button>
    )
}

export default TailwindButton

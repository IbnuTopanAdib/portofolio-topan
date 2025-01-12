"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode;
};

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const [activeTab, setActiveTab] = useState<Tab>(propTabs[0]);

    return (
        <div className="w-full">
            {/* Tab Navigation */}
            <div
                className={cn(
                    "flex flex-row items-center justify-start overflow-auto no-visible-scrollbar max-w-full w-full mb-1",
                    containerClassName
                )}
            >
                {propTabs.map((tab) => (
                    <button
                        key={tab.title}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "relative px-3 py-1 rounded-full focus:outline-none",
                            tabClassName,
                            activeTab.value === tab.value && "font-semibold text-white"
                        )}
                    >
                        {activeTab.value === tab.value && (
                            <motion.div
                                layoutId="activeTabIndicator"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                                    activeTabClassName
                                )}
                            />
                        )}
                        <span className="relative z-10">{tab.title}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className={cn("relative w-full h-full mt-1", contentClassName)}>
                {propTabs.map((tab) => (
                    <div
                        key={tab.value}
                        className={cn(
                            "transition-opacity duration-300",
                            activeTab.value === tab.value ? "opacity-100" : "opacity-0 pointer-events-none"
                        )}
                    >
                        {activeTab.value === tab.value && tab.content}
                    </div>
                ))}
            </div>
        </div>

    );
};

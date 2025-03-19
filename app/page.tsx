"use client";

import CustomButton from "@/components/ui/custom-button";
import { MapPin, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
    // State for the animated counter
    const [count, setCount] = useState(0);
    const targetAmount = 1000000;
    const duration = 2000; // 2 seconds for the animation
    const framerate = 30; // updates per second
    
    useEffect(() => {
        // Start counting after the initial delay that matches your existing animation timing
        const startDelay = 1000; // 1 second delay before starting
        const delayTimeout = setTimeout(() => {
            // Calculate frames based on duration and framerate
            const totalFrames = (duration / 1000) * framerate;
            const increment = targetAmount / totalFrames;
            let currentFrame = 0;
            
            const counterInterval = setInterval(() => {
                currentFrame++;
                
                // Use easeOutExpo for more dramatic effect toward the end
                const progress = 1 - Math.pow(1 - (currentFrame / totalFrames), 4);
                const nextValue = Math.min(Math.floor(targetAmount * progress), targetAmount);
                
                setCount(nextValue);
                
                if (currentFrame >= totalFrames) {
                    clearInterval(counterInterval);
                }
            }, 1000 / framerate);
            
            return () => clearInterval(counterInterval);
        }, startDelay);
        
        return () => clearTimeout(delayTimeout);
    }, []);
    
    // Format the number with commas
    const formatNumber = (num: number): string => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <div className="relative h-screen flex flex-col items-center justify-between text-white p-6 pt-0 overflow-hidden">
            {/* Background gradient with top-down lighting effect */}
            <div className="absolute inset-0 -z-10 bg-black">
                {/* Minimal top accent gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#4FD1C5]/20 via-black to-black opacity-30" />

                {/* Subtle top spotlight - reduced size and opacity */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#4FD1C5]/30 to-transparent rounded-full blur-3xl opacity-5" />
            </div>

            {/* Empty space at top for balance */}
            <div className="h-8 md:h-12" />

            {/* Main Content - Centered */}
            <div className="flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-wider"
                >
                    THE WORLD&apos;S LARGEST HACKATHON
                </motion.h2>

                {/* Location and Date */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex items-center justify-center mb-6 bg-[#1C3743]/30 backdrop-blur-sm rounded-full border border-[#4FD1C5]/10 px-2 py-1"
                >
                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex items-center px-4 py-2"
                    >
                        <div className="bg-[#1C3743]/60 w-8 h-8 rounded-full flex items-center justify-center mr-3 border border-[#4FD1C5]/20">
                            <MapPin size={16} className="text-[#4FD1C5]" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] uppercase tracking-wider text-white/50 leading-tight">
                                Location
                            </span>
                            <span className="text-sm font-medium text-white leading-tight">
                                Virtual
                            </span>
                        </div>
                    </motion.div>

                    <div className="h-8 w-px bg-[#4FD1C5]/10 mx-1" />

                    {/* Date */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex items-center px-4 py-2"
                    >
                        <div className="bg-[#1C3743]/60 w-8 h-8 rounded-full flex items-center justify-center mr-3 border border-[#4FD1C5]/20">
                            <Calendar size={16} className="text-[#4FD1C5]" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-[10px] uppercase tracking-wider text-white/50 leading-tight">
                                Date
                            </span>
                            <span className="text-sm font-medium text-white leading-tight">
                                TBD
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.8,
                        type: "spring",
                        stiffness: 50,
                    }}
                    className="my-6 md:my-8 relative"
                >
                    {/* Subtle glow effect behind the counter */}
                    <div className="absolute -inset-4 bg-[#4FD1C5]/5 blur-3xl rounded-full opacity-30" />

                    <motion.div 
                        className="text-6xl md:text-8xl lg:text-9xl font-bold relative flex items-center justify-center"
                        initial={{ filter: "blur(0px)" }}
                        animate={{ filter: "blur(0px)" }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/80">
                            ${formatNumber(count)}
                            {count >= targetAmount && "+"}
                        </span>
                        
                        {/* Thin animated line underneath */}
                        <motion.div
                            className="absolute -bottom-2 h-[2px] bg-gradient-to-r from-transparent via-[#4FD1C5]/50 to-transparent"
                            initial={{ width: "0%" }}
                            animate={{ width: `${(count / targetAmount) * 100}%` }}
                            transition={{ duration: 0.05 }}
                        />
                    </motion.div>

                    {/* Prize Categories */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1.3 }}
                        className="flex flex-wrap justify-center gap-3 mt-6 max-w-2xl mx-auto"
                    >
                        {[
                            { name: "Prize 1", amount: "$500K" },
                            { name: "Prize 2", amount: "$200K" },
                            { name: "Prize 3", amount: "$100K" },
                            { name: "Prize 4", amount: "$100K" },
                            { name: "Prize 5", amount: "$100K" },
                        ].map((prize, idx) => (
                            <motion.div
                                key={`prize-${idx}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.4 + idx * 0.1,
                                }}
                                className="bg-[#1C3743]/20 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#4FD1C5]/10 group hover:border-[#4FD1C5]/30 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center">
                                    <span className="text-xs uppercase tracking-wider text-[#4FD1C5]/70 group-hover:text-[#4FD1C5] transition-colors">
                                        {prize.name}
                                    </span>
                                    <span className="text-sm font-medium text-white">
                                        {prize.amount}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                >
                    <CustomButton
                        className="cursor-pointer mt-4"
                        label="Register Now"
                    />
                </motion.div>
            </div>

            {/* Bottom section with Sponsors and Judges */}
            <div className="w-full z-10">
                {/* Sponsors section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.6 }}
                    className="mb-8"
                >
                    <p className="text-xs uppercase tracking-wider text-center mb-3 text-[#4FD1C5]/70">
                        Sponsors
                    </p>
                    <div className="flex justify-center flex-wrap gap-4 w-full px-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <motion.div
                                key={`sponsor-${idx}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.8 + idx * 0.1,
                                }}
                                className="w-20 h-10 md:w-28 md:h-14 bg-[#1C3743]/20 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-[#1C3743]/30 transition-all duration-300 border border-[#4FD1C5]/5 hover:border-[#4FD1C5]/20"
                            >
                                <div className="bg-[#1C3743]/30 rounded w-12 h-6 md:w-16 md:h-8 flex items-center justify-center backdrop-blur-sm">
                                    <span className="text-xs md:text-sm text-white/70 font-medium">
                                        LOGO
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Judges section - Bottom edge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
                    className="w-full"
                >
                    <p className="text-xs uppercase tracking-wider text-center mb-3 text-[#4FD1C5]/70">
                        Judges
                    </p>
                    <div className="flex justify-center gap-4 w-full px-4">
                        {[1, 2, 3, 4].map((judge, idx) => (
                            <motion.div
                                key={judge}
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 2.4 + idx * 0.15,
                                    type: "spring",
                                    damping: 12,
                                }}
                                className="relative w-16 h-20 md:w-24 md:h-24 bg-[#1C3743]/20 backdrop-blur-sm rounded rounded-b-none border border-[#1C3743]/30  cursor-pointer group"
                            >
                                {/* Judge placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xl font-bold text-white/30">
                                        J{judge}
                                    </span>
                                </div>

                                {/* Hover overlay with name and bio */}
                                <div className="absolute inset-0 bg-[#1C3743]/90 flex flex-col items-center justify-center p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <h3 className="text-xs md:text-sm font-bold text-[#4FD1C5]">
                                        Judge Name
                                    </h3>
                                    <p className="text-[8px] md:text-[10px] text-white/80 mt-1 leading-tight">
                                        Industry expert with 10+ years
                                        experience
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Wave pattern overlay - much more subtle */}
                <div className="absolute inset-0 bg-[url('/waves.svg')] bg-fixed opacity-20 bg-bottom bg-no-repeat bg-[length:100%_auto]" />

                {/* Minimal top glow */}
                <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-[#4FD1C5]/5 to-transparent opacity-20" />

                {/* Deep black bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black to-transparent opacity-90" />
            </div>
        </div>
    );
}

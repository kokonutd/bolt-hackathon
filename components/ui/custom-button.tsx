import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface CustomButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    className?: string;
}

export default function CustomButton({
    label = "Register Now",
    className,
    ...props
}: CustomButtonProps) {
    return (
        <Button
            variant="ghost"
            className={cn(
                "group relative w-fit h-14 px-10 overflow-hidden transition-all duration-500",
                className
            )}
            {...props}
        >
            {/* Animated outer glow */}
            <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-[#4FD1C5]/30 via-[#4FD1C5]/0 to-[#4FD1C5]/30 rounded-xl blur-md"
                animate={{ 
                    opacity: [0.4, 0.8, 0.4],
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                }}
            />
            
            {/* Gradient border using pseudo-element */}
            {/* <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#4FD1C5] via-[#1C3743] to-[#4FD1C5]">
                <div className="absolute inset-0 bg-[#0A0A0A] rounded-lg opacity-90" />
            </div> */}

            {/* Base dark background */}
            <div className="absolute inset-[2px] bg-[#0A0A0A] rounded-lg opacity-95" />

            {/* Multiple gradient layers */}
            <div className="absolute inset-[2px] bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A] to-[#0A0A0A] rounded-lg opacity-90" />
            <div className="absolute inset-[2px] bg-gradient-to-b from-[#1C3743]/60 via-[#0A0A0A] to-[#1C3743]/40 rounded-lg opacity-80" />
            <div className="absolute inset-[2px] bg-gradient-to-br from-[#4FD1C5]/15 via-[#0A0A0A] to-[#1C3743]/50 rounded-lg" />

            {/* Subtle edge glow */}
            <div className="absolute inset-[2px] shadow-[inset_0_0_10px_rgba(79,209,197,0.2)] rounded-lg" />

            {/* Animated inner accent line */}
            {/* <motion.div 
                className="absolute h-[1px] w-[80%] bg-gradient-to-r from-transparent via-[#4FD1C5] to-transparent top-[25%] left-[10%] opacity-60"
                animate={{ 
                    opacity: [0, 0.6, 0], 
                    left: ["10%", "10%", "10%"] 
                }}
                transition={{ 
                    duration: 2.5, 
                    repeat: Number.POSITIVE_INFINITY, 
                    repeatDelay: 3 
                }}
            /> */}

            {/* Content wrapper */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-lg font-medium text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#4FD1C5] bg-clip-text drop-shadow-[0_0_12px_rgba(79,209,197,0.6)] tracking-normal">
                    {label}
                </span>
            </div>

            {/* Hover effects */}
            <div className="absolute inset-0 opacity-0 transition-all duration-500 bg-gradient-to-r from-[#1C3743]/20 via-[#4FD1C5]/20 to-[#1C3743]/20 group-hover:opacity-100 rounded-lg" />
            
            {/* Additional hover animation - the shine effect */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
        </Button>
    );
}

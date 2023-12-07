/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Stenobot({ showText = true }: { showText?: boolean, className?: string }) {

    const [blink, setBlink] = useState(false);

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setTimeout(() => setBlink(true), 500);
            setBlink(false);
        }, 4500); // 0.5s blink every 4.5s
        return () => clearInterval(blinkInterval);
    }, []);

    return (
        <div className={`flex flex-row items-center space-x-2`}>
            <div className="relative z-10 h-[32px] w-[46px] bg-[url('/goggles.png')] bg-contain bg-no-repeat">
                <img
                    src="/stenobot-gradient.png"
                    loading="lazy"
                    alt="blur"
                    className="z-20"
                />
                <div className="absolute left-3 top-[10px] z-30 flex  items-center space-x-[6px]">
                    <motion.div
                        layout
                        animate={{
                            height: blink ? "11px" : "2px",
                            y: blink ? "0px" : "4px",
                        }}
                        className="h-[11px] w-[8px] origin-center rounded-full bg-[#fff]"
                    />
                    <motion.div
                        layout
                        animate={{
                            height: blink ? "11px" : "2px",
                            y: blink ? "0px" : "4px",
                        }}
                        className="h-[11px] w-[8px] origin-center rounded-full bg-[#fff]"
                    />
                </div>
            </div>
            {showText &&
                <img
                    src="/steno.ai.png"
                    loading="lazy"
                    alt=""
                    className="h-[24px] sm:h-[32px]"
                />}
        </div>
    );
}

export default Stenobot;

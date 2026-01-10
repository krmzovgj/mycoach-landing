import { Instagram, Sms } from "iconsax-react";
import ShinyText from "./ShinyText";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="md:w-2/3 flex md:flex-row overflow-visible flex-col justify-between items-center place-self-center pb-5 mb:pb-0 mt-50 ">
            <div className="overflow-visible">
                <div className="flex items-center">
                    <div className="flex items-center gap-x-3">
                        <a
                            href="https://www.instagram.com/mycoach.mk/"
                            target="_blank"
                        >
                            <Instagram variant="Bulk" size={20} color="#000" />
                        </a>
                        <div className="flex items-center gap-x-1">
                            <Sms variant="Bulk" size={20} color="#000" />
                            platform.mycoach.mk@gmail.com
                        </div>
                    </div>
                </div>

                <div className="mt-2 md:mt-5  text-muted-foreground">
                    © {currentYear} mycoach, built for personal trainers
                </div>
            </div>

            <div className="mt-2 overflow-visible md:mt-0 justify-center flex">
                <ShinyText
                    text="mycoach.mk"
                    speed={4}
                    delay={0}
                    color="#4a4a4a"
                    shineColor="#000000"
                    direction="left"
                    className="font-black  pb-5 over text-5xl md:text-9xl"
                />
            </div>
        </div>
    );
};

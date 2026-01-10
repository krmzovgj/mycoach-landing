import { Button } from "./ui/button";

export const Header = () => {
    return (
        <div className="fixed px-6 backdrop-blur-lg z-50 left-0 flex justify-center items-center py-5 w-full">
            <div className="w-full md:w-2/3 flex justify-between items-center">
                <img src="/favicon.png" className="w-10 h-10" alt="" />

                {/* <div className="hidden md:flex items-center gap-x-5">
                <p className="cursor-pointer">Home</p>
                </div> */}

                <Button variant="default" asChild>
                    <a
                        href="https://www.instagram.com/mycoach.mk/"
                        target="_blank"
                    >
                        Get Started
                    </a>
                </Button>
            </div>
        </div>
    );
};

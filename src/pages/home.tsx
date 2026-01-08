import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, RecordCircle } from "iconsax-react";

interface ProductShowcase {
    order: string;
    label: string;
    imgUrl: string;
}

export const Home = () => {
    const productShowcase: ProductShowcase[] = [
        { order: '01', label: "Clients", imgUrl: "/clients.png" },
        { order: '02', label: "Weekly Plan", imgUrl: "/plan.png" },
        { order: '03', label: "Workout Details", imgUrl: "/workout.png" },
        { order: '04', label: "Meals & Macros", imgUrl: "/diet.png" },
    ];

    return (
        <div className="tracking-tighter">
            <div className="flex items-center h-[90vh] justify-center">
                <div className="flex justify-center items-center flex-col text-center">
                    <Badge title="mycoach" />

                    <motion.h1
                        initial={{
                            y: 90,
                            opacity: 0,
                            filter: "blur(20px)",
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{ duration: 0.7, type: "spring" }}
                        className="text-4xl leading-9 md:leading-none  mt-5 md:text-6xl font-medium"
                    >
                        Manage Clients, <br className="flex md:hidden" />
                        Workouts & <br className="hidden md:flex" />
                        Meals <br className="borderblock md:hidden" />- All in
                        One Place
                    </motion.h1>
                    <motion.h3
                        initial={{
                            y: 60,
                            opacity: 0,
                            filter: "blur(20px)",
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.7,
                            type: "spring",
                            delay: 0.1,
                        }}
                        className="mt-8 text-muted-foreground text-md md:w-1/2 w-[90%]"
                    >
                        The all-in-one platform for personal trainers to create
                        workouts, plan diets, and track clients without
                        spreadsheets or chaos.
                    </motion.h3>

                    <Button asChild className="mt-5 w-full ">
                        <a
                            href="https://www.instagram.com/mycoach.mk/"
                            target="_blank"
                        >
                            Get Started{" "}
                            <ArrowRight
                                variant="Linear"
                                size={20}
                                color="#FF8C00"
                            />
                        </a>
                    </Button>
                </div>
            </div>

            <div className="flex mt-20 items-center md:w-2/3 place-self-center flex-col justify-center">
                <h1 className="text-center leading-9 md:leading-none  text-foreground md:text-5xl text-4xl">
                    What it actually <br className="flex md:hidden" /> looks like
                </h1>

                <h3 className="text-muted-foreground text-md text-center mt-5 md:w-1/3 w-full">Tired of clients asking ‘what’s next?’ every day? mycoach does all the work so you don’t have to repeat yourself.</h3>

                <div className="flex flex-col  md:grid mt-10 grid-cols-2 grid-rows-2 gap-4 md:gap-6">
                    {productShowcase.map((item: ProductShowcase) => (
                        <div key={item.imgUrl} className="flex flex-col">
                            <h3 className="mb-2 ml-1 text-lg flex items-center gap-x-1.5"><span className="text-muted-foreground">{item.order}</span> <RecordCircle variant="Bold" size={15} color="#000" /> {item?.label}</h3>

                            <div className="p-2 bg-foreground/10 rounded-xl md:rounded-2xl">
                            <img src={item.imgUrl} className="shadow-sm rounded-md md:rounded-xl" alt="" />
                            </div>
                                
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

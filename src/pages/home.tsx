import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    ArchiveBox,
    ArrowRight,
    ArrowSwapHorizontal,
    Box,
    Element2,
    ElementPlus,
    Instagram,
    MedalStar,
    People,
    RecordCircle,
    Send2,
    Star1,
    Stickynote,
    TimerPause,
} from "iconsax-react";

interface ProductShowcase {
    order: string;
    label: string;
    imgUrl: string;
}

export const Home = () => {
    const productShowcase: ProductShowcase[] = [
        { order: "01", label: "Clients", imgUrl: "/clients.png" },
        { order: "02", label: "Weekly Plan", imgUrl: "/plan.png" },
        { order: "03", label: "Workout Details", imgUrl: "/workout.png" },
        { order: "04", label: "Meals & Macros", imgUrl: "/diet.png" },
    ];

    const problemsSolutions = [
        {
            order: "01",
            problem: "Tracking programs across messages, spreadsheets...",
            solution: "Keep all your clients plans together in one place",
        },
        {
            order: "02",
            problem: "Repeating the same instructions to clients",
            solution: "Set instructions once so clients can see them anytime",
        },
        {
            order: "03",
            problem: "Losing track of who’s doing what and when",
            solution: "See what each client is doing and adjust their plan",
        },
        {
            order: "04",
            problem: "Spending more time organizing than coaching",
            solution:
                "Let the system organize things so you can focus on coaching",
        },
    ];

    const thisIsForTrainersWho = [
        {
            order: "01",
            content: "Want to deliver their service in better quality",
            icon: Star1,
        },
        {
            order: "02",
            content: "Struggle to keep programs organized",
            icon: Stickynote,
        },
        {
            order: "03",
            content: "Need to save time on creating programs",
            icon: TimerPause,
        },
        {
            order: "04",
            content: "Tired of switching apps for work",
            icon: ArchiveBox,
        },
        {
            order: "04",
            content: "Work with many clients at once",
            icon: People,
        },
        {
            order: "05",
            content: "Want a clear view of details for each client",
            icon: Element2,
        },
    ];

    return (
        <div className="tracking-tighter">
            <div className="flex items-center flex-col mt-30 md:mt-40 justify-center">
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
                        transition={{ duration: 0.5, type: "spring" }}
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
                            duration: 0.5,
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

                <motion.div
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
                        duration: 0.5,
                        type: "spring",
                        delay: 0.2,
                    }}
                    className="w-full md:w-2/3 mt-10"
                >
                    <img
                        src="/plan.png"
                        className="shadow-sm w-fullrounded-md md:rounded-xl"
                        alt=""
                    />
                </motion.div>
            </div>

            <div className="flex h-scre mt-30 items-center md:w-2/3 place-self-center flex-col justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-center leading-9 md:leading-none  text-foreground md:text-5xl text-4xl"
                >
                    What it actually <br className="flex md:hidden" /> looks
                    like
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-muted-foreground text-md text-center mt-5 md:w-1/3 w-full"
                >
                    Track your clients, build workouts, plan meals, and chat
                    with them, all without switching apps
                </motion.h3>

                <div className="flex flex-col md:grid mt-10 grid-cols-2 grid-rows-2 gap-4 md:gap-6">
                    {productShowcase.map((item: ProductShowcase) => (
                        <div key={item.imgUrl} className="flex flex-col">
                            <h3 className="mb-2 ml-1 text-lg flex items-center gap-x-1.5">
                                <span className="text-muted-foreground">
                                    {item.order}
                                </span>{" "}
                                <RecordCircle
                                    variant="Bold"
                                    size={15}
                                    color="#000"
                                />{" "}
                                {item?.label}
                            </h3>

                            <motion.div
                                initial={{
                                    y: 30,
                                    opacity: 0,
                                    filter: "blur(20px)",
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    filter: "blur(0px)",
                                }}
                                transition={{
                                    delay: 0.15,
                                    duration: 0.5,
                                    type: "spring",
                                }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="p-2 bg-foreground/10 rounded-xl md:rounded-2xl"
                            >
                                <img
                                    src={item.imgUrl}
                                    className="shadow-sm rounded-md md:rounded-xl"
                                    alt=""
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
            {/* 
            <div className="flex mt-30 items-center md:w-2/3 place-self-center flex-col justify-center">
                <h1 className="text-center leading-9 md:leading-none text-foreground md:text-5xl text-4xl">
                    Where mycoach <br className="flex md:hidden" /> hepls you
                </h1>

                <div className="mt-10 md:mt-20 flex flex-col gap-y-8 md:grid grid-rows-2 grid-cols-2 gap-5 md:gap-y-10">
                    {problemsSolutions.map((item) => (
                        <div className="flex items-start flex-col md:flex-row gap-x-3 gap-y-3 md:gap-y-0">
                            <div className="w-10 h-10 rounded-full bg-foreground/10 text-foreground flex justify-center items-center">
                                {item.order}
                            </div>

                            <div>
                                <h3 className="text-foreground/100 flex items-center gap-x-1 ">
                                    <CloseCircle
                                        variant="Bold"
                                        size={18}
                                        color="red"
                                    />
                                    {item.problem}
                                </h3>
                                <p className="text-foreground font-semibold flex items-center gap-x-1">
                                    <TickCircle
                                        variant="Bold"
                                        size={18}
                                        color="#66A786"
                                    />
                                    {item.solution}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="flex mt-30 md:w-2/3 flex-col md:flex-row relative justify-between items-start w-full place-self-center">
                <div className="md:sticky md:top-30">
                    <motion.h1
                        initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="leading-9 md:leading-none  text-foreground md:text-5xl text-4xl"
                    >
                        This is for trainers who..
                    </motion.h1>

                    <motion.h3
                        initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                            duration: 0.5,
                            type: "spring",
                            delay: 0.1,
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-muted-foreground text-md mt-5 md:w-2/3  w-full"
                    >
                        Tired of clients asking ‘what’s next?’ every day?
                        mycoach does all the work so you don’t have to repeat
                        yourself.
                    </motion.h3>

                    <ArrowRight
                        variant="Bold"
                        size={80}
                        color="#000"
                        className="md:flex hidden mt-10"
                    />
                </div>

                <div className="flex flex-col md:w-1/3 mt-10 gap-y-5">
                    {thisIsForTrainersWho.map((item) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 60,
                                filter: "blur(20px)",
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                            }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                delay: 0.15,
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex items-center w-full gap-x-4"
                        >
                            <item.icon variant="Bulk" size={32} color="#000" />
                            <div className="py-3 px-3 w-full rounded-2xl bg-secondary border-2 border-foreground flex">
                                <h3 className="text-foreground text-md ">
                                    {item.content}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                    filter: "blur(20px)",
                }}
                whileInView={{
                    opacity: 1,
                    filter: "blur(0px)",
                }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                }}
                viewport={{ once: true, amount: 0.2 }}
                className="mt-30 md:w-2/3 relative overflow-hidden p-10 md:p-20 w-full bg-foreground flex-col place-self-center flex justify-center items-center rounded-3xl"
            >
                <GridPattern
                    width={25}
                    height={25}
                    strokeDasharray="2 6"
                    className={cn(
                        "inset-0 z-0 pointer-events-none",
                        "mask-[radial-gradient(1000px_circle_at_center,white,transparent)]"
                    )}
                />
                <Send2 variant="Bulk" size={100} color="#fff" />

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 60,
                        filter: "blur(20px)",
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    transition={{
                        duration: 0.5,
                        type: "spring",
                        delay: 0.1,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-10 flex flex-col items-center"
                >
                    <h3 className="text-3xl md:text-4xl text-center text-background">
                        Ready to get started? <br /> DM us on instagram
                    </h3>{" "}
                    <Button
                        asChild
                        variant="ghost"
                        className="bg-background text-foreground mt-5 w-fit"
                    >
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
                </motion.div>
            </motion.div>
        </div>
    );
};

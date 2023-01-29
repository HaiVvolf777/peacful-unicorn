import React from "react";
import one from "../assets/1.png";

const Testimonials = () => {
    return (
        <div className="relative pt-20 pb-48 bg-black text-zinc-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl font-semibold font-Belmont">Clans</h2>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-3/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={one}
                                className="shadow-lg rounded-full max-w-full mx-auto lg:hover:scale-125 ease-in duration-500"
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">Guardian</h5>

                                <div className="mt-6">
                                    <ul>
                                        <li>
                                            {" "}
                                            - The Guardians of Garden are originally referred to as
                                            the Majestic Unicorns, they are the pinnacle of
                                            gracefulness and justice.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={one}
                                className="shadow-lg rounded-full max-w-full mx-auto lg:hover:scale-125 ease-in duration-500"
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">Bionic</h5>

                                <div className="mt-6">
                                    <ul>
                                        <li>
                                            {" "}
                                            - They inhabit the region of AU22, their genetics can
                                            control their armor and other robotic bodies, they believe
                                            they are the most powerful and frivolous. Their purpose is
                                            to dominate the world of Unicorn Island.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={one}
                                className="shadow-lg rounded-full max-w-full mx-auto lg:hover:scale-125 ease-in duration-500"
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">Hedonic</h5>

                                <div className="mt-6">
                                    <ul>
                                        <li>
                                            {" "}
                                            - The hedonists of Candy-land share the Peter Pan
                                            principle “I don’t want to grow up” These child-like
                                            unicorns can enjoy the most colorful landscapes and fun
                                            activities in the region.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                        <div className="px-6">
                            <img
                                alt="..."
                                src={one}
                                className="shadow-lg rounded-full max-w-full mx-auto lg:hover:scale-125 ease-in duration-500"
                                style={{ maxWidth: "120px" }}
                            />
                            <div className="pt-6 text-center">
                                <h5 className="text-xl font-bold">Lucifer</h5>

                                <div className="mt-6">
                                    <ul>
                                        <li>
                                            {" "}
                                            - The Lucifers of the Gutter are the shadow unicorns,
                                            living in an anarchist state, heavily polluted, stuck in a
                                            constant war against the other clans, fighting every day
                                            to survive.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

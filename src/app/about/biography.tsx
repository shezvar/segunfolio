import React, { useState } from 'react';

const Biography = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div className='mx-auto flex items-center mt-48 xl:max-w-7xl px-6 lg:px-8'>
                <div className='w-full space-y-16'>
                    <h1 className='text-4xl lg:text-8xl font-bold text-white'>About me.</h1>
                    {/* <img src='images/aboutme.png' /> */}
                    <div className='max-w-3xl leading-relaxed text-gray-400 text-lg space-y-12'>
                        <div className='space-y-4'>
                            <h3 className='text-gray-100 text-3xl font-medium'>A curious begining</h3>
                            <p className="">My name is Segun, and I hail from a small town in Nigeria. From a young age, my curiosity led me to dismantle and fix everything I could find around the house, earning me the nickname &quot;the tech guy&quot; among my peers. They joked that to be my friend, all you needed was a laptop—a luxury I cherished, spending hours exploring Windows OS and its myriad applications.</p>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='text-gray-100 text-3xl font-medium'>Creative endeavors</h3>
                            <p className="">My creativity extended beyond tech. I loved drawing and constructing things, and one of my favorite projects was building a mini airplane from PVC and aluminum propellers. Though it crashed just centimeters off the ground, it sparked my passion for making things.</p>
                        </div>

                    </div>
                </div>
            </div>

            {isExpanded && (
                <>
                    <div className='mx-auto flex items-center xl:max-w-7xl px-6 lg:px-8 mt-12'>
                        <div className='w-full space-y-16'>
                            <div className='max-w-3xl leading-relaxed text-gray-400 text-lg space-y-12'>
                                <div className='space-y-4'>
                                    <h3 className='text-gray-100 text-3xl font-medium'>Athletic aspirations</h3>
                                    <p className="">When I wasn&quot;t building or tinkering, I was either playing basketball or swimming. I even dreamed of going pro, but fate had other plans. Just as I was set to join a major basketball club, I got accepted into the Federal University of Technology, Akure (FUTA), where I studied Environmental Design.</p>
                                </div>
                                <div className='space-y-4'>
                                    <h3 className='text-gray-100 text-3xl font-medium'>Discovering design</h3>
                                    <p className="">Two years into my studies, I discovered graphic design and used it to fund my education. This led me to learn HTML, CSS, and eventually SCSS/SASS, diving deeper into frontend development. However, I often felt my designs lacked the finesse I envisioned, pushing me towards UI design.</p>
                                </div>
                                <div className='space-y-4'>
                                    <h3 className='text-gray-100 text-3xl font-medium'>Finding my true calling</h3>
                                    <p className="">In 2016, I made a significant leap from graphic and frontend design to product design. Here, I found my true calling—transforming complex problems into simple, beautiful, user-centered solutions. My journey, fueled by relentless curiosity and creativity, continues to evolve as I strive to make technology more intuitive and accessible.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className='mx-auto flex items-center mt-8 xl:max-w-7xl px-6 lg:px-8'>
                <button onClick={handleToggleReadMore} className='text-indigo-600'>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
};

export default Biography;

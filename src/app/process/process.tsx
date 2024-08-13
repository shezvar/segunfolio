import React, { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';

interface StateIndicatorProps {
    isActive: boolean;
}

const StateIndicator: React.FC<StateIndicatorProps> = ({ isActive }) => {
    return (
        <span>
            {isActive ? (
                <div>
                    <ArrowUpIcon className='w-4 h-4' />
                </div>
            ) : (
                <div>
                    <ArrowDownIcon className='w-4 h-4' />
                </div>
            )}
        </span>
    );
};

const ProcessBlock: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Collapse if already active
        } else {
            setActiveIndex(index); // Expand the clicked section
        }
    };

    return (
        <div className='mx-auto flex lg:max-w-7xl'>
            <div className="w-full text-gray-400">
                <div className={`border border-zinc-800 p-6 hover:bg-zinc-950/25 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(0)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-1'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>Setting the Stage</h3>
                                <p className='text-gray-100 text-2xl font-lora font-bold'>Requirement Gathering</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 0} />
                        </div>
                    </div>
                    {activeIndex === 0 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p className=' leading-relaxed'>Every great story begins with understanding the context, and in design, this means gathering requirements. Picture the scene: a new project lands on my desk. The first step is to sit down with the team and stakeholders, aligning on the business needs, project requirements, deliverables, and timelines. We discuss what success looks like and jot down initial hypotheses about potential problems. It&apos;s like sketching the first outline of a map for our journey—crucial for ensuring we&apos;re all heading in the same direction.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-950/25 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(1)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>The Exploration</h3>
                                <p className='text-gray-100 text-2xl font-lora font-bold'>Discovering the Issue</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 1} />
                        </div>
                    </div>
                    {activeIndex === 1 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p className=' leading-relaxed'>With our map in hand, the next phase is about exploration. This is where I delve into the problem space, gathering information and talking to people to understand the current state of the product. Sometimes, this involves sifting through user reports and other times, it means conducting ad hoc guerilla interviews when time or budget constraints prevent formal user research. Each conversation and piece of data is like a clue, helping to piece together the puzzle of why the product is the way it is. It&apos;s an investigative journey, uncovering the true nature of the problem.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-950/25 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(2)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>Interpreting Clues</h3>
                                <p className='text-gray-100 text-2xl font-lora font-bold'>Understanding Users</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 2} />
                        </div>
                    </div>
                    {activeIndex === 2 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p className=' leading-relaxed'>Armed with insights from our exploration, the next step is to make sense of the findings. This phase is all about interpreting the data to define who our users are, what they need, and where they face challenges. I create personas, journey maps, storyboards, and problem statements, each one adding depth to our understanding of the user experience. Setting clear goals and success metrics at this stage ensures we have a compass to guide us through the design process. It’s like turning raw data into a coherent story that informs our next steps.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-950/25 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(3)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>The Creative Burst</h3>
                                <p className='text-gray-100 text-2xl font-lora font-bold'>Ideation</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 3} />
                        </div>
                    </div>
                    {activeIndex === 3 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p className=' leading-relaxed'>Now comes the most exhilarating part of the journey—ideation. Imagine a room filled with developers, designers, stakeholders, and customer support, all buzzing with energy and ideas. We brainstorm solutions, focusing on quantity over quality at this stage. It’s a vibrant, collaborative session where no idea is too wild or impractical. This phase is about casting a wide net to capture as many potential solutions as possible, much like exploring various paths on our map before choosing the best route.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-950/25 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(4)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>Bringing Ideas to Life</h3>
                                <p className='text-gray-100 text-2xl font-lora font-bold'>Prototyping</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 4} />
                        </div>
                    </div>
                    {activeIndex === 4 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p className=' leading-relaxed'>With a treasure trove of ideas, it&apos;s time to bring them to life through prototyping. Depending on where we are in the process, these prototypes can range from detailed Figma designs to interactive websites. Each prototype is a tangible representation of our ideas, ready to be tested and refined. It&apos;s akin to building a prototype of our map, creating a miniature version of the world we&apos;re designing.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-950/25 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(5)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>The Reality Check</h3>
                                <p className='text-gray-100 text-2xl font-lora font-bold'>Testing and Iteration</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 5} />
                        </div>
                    </div>
                    {activeIndex === 5 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p className=' leading-relaxed'>No journey is complete without a reality check, and in design, this means testing the prototypes with real users. Whether through quick guerilla tests or comprehensive usability sessions, user feedback is invaluable. The results guide us on what needs to be changed and improved, ensuring that we iterate and refine our design until it&apos;s just right. This phase is often repeated multiple times, each iteration bringing us closer to the perfect product. It&apos;s like fine-tuning our map based on real-world exploration, ensuring it leads to our desired destination.</p>
                            </div>
                        </div>
                    )}
                </div>

                <p className='mt-8 max-w-2xl'>By following this process, I ensure that each project is thoroughly explored, well-researched, and iteratively refined to meet user needs and business goals.</p>
            </div>
        </div>
    );
};

export default ProcessBlock;

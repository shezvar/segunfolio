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
        <div className='mx-auto flex items-center my-48 xl:max-w-7xl'>
            <div className="w-full text-gray-400">
                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(0)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-1'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>PHASE ONE</h3>
                                <p className='text-gray-100 text-2xl'>Requirement Gathering</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 0} />
                        </div>
                    </div>
                    {activeIndex === 0 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p>The first step I take is to define the business needs and project requirements. This means understanding the deliverables, timeline, and expectations. It’s crucial to stay aligned with the rest of the team. At this stage, I jot down my hypotheses about what the problems might be.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(1)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>Phase Two</h3>
                                <p className='text-gray-100 text-2xl'>Discover the Issue</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 1} />
                        </div>
                    </div>
                    {activeIndex === 1 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p>In this phase, I gather information, talk to people, and explore the problem space. I look into user reports and understand why the product is the way it is. If budget or time constraints prevent formal user research, I conduct ad hoc guerilla interviews to avoid designing blindly.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(2)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>Phase Three</h3>
                                <p className='text-gray-100 text-2xl'>Interpret the Result</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 2} />
                        </div>
                    </div>
                    {activeIndex === 2 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p>Next, I interpret the findings to define the users, their needs, and pain points. This involves creating or refining personas, journey maps, storyboards, and problem statements. I also set goals and success metrics during this insightful phase.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(3)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>Phase Four</h3>
                                <p className='text-gray-100 text-2xl'>Ideate over solution</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 3} />
                        </div>
                    </div>
                    {activeIndex === 3 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p>The ideation phase is where the fun begins. I bring together developers, designers, stakeholders, and customer support for brainstorming sessions. We explore a wide range of solutions, focusing on quantity over quality at this stage.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(4)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>Phase Five</h3>
                                <p className='text-gray-100 text-2xl'>Prototype</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 4} />
                        </div>
                    </div>
                    {activeIndex === 4 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p>Here, I create interactive prototypes. These can range from high-fidelity Figma prototypes to interactive websites. The level of detail depends on how far along we are in the process and what needs to be tested.</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(5)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='uppercase text-gray-400 text-sm font-sans group-hover:text-zinc-100'>Phase Six</h3>
                                <p className='text-gray-100 text-2xl'>Test, iterate and test again</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 5} />
                        </div>
                    </div>
                    {activeIndex === 5 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4'>
                                <p>Finally, I test the prototypes with users. This could be a quick guerilla test or a comprehensive usability testing session. The results guide us on what needs to be changed and improved, ensuring we deliver the best possible product.</p>
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

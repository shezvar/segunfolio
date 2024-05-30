'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
import LockScreen from '@/components/passwordRequest'
import ProjectHeader from '@/components/project-header'
import { CheckIcon } from '@heroicons/react/16/solid'
import ImageGallery from '@/components/image-gallery'

const projectData = [
    { goBackUrl: '/', title: 'The #1 Operating System For E-commerce In Africa', subtext: 'RMS provides an all-in-one platform for retailers to run their businesses more efficiently and profitably.', imageUrl: '/images/sampleimage.png', alt: 'Booosta', role1: 'Research', role2: 'Information Architecture', role3: '', role4: '', role5: '', platform1: 'Desktop (Backoffice)', platform2: 'Mobile App', platform3: '' },
]

const imagePaths = [
    '/images/prowoks-designui-1.png',
    '/images/prowoks-designui-2.png',
    '/images/prowoks-designui-3.png',
    // Add more image paths as needed
];
export default function Prowoks() {

    return (
        <div className="bg-white">

            <HeaderLight />

            <main>
                <div className="relative isolate">

                    <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48" aria-hidden="true">
                        <div className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>

                    <div className="overflow-hidden">

                        {projectData.map((item) => (
                            <ProjectHeader
                                key={item.imageUrl}
                                goBackUrl={item.goBackUrl}
                                title={item.title}
                                subtext={item.subtext}
                                imageUrl={item.imageUrl}
                                alt={item.alt}
                                role1={item.role1}
                                role2={item.role2}
                                role3={item.role3}
                                role4={item.role4}
                                role5={item.role5}
                                platform1={item.platform1}
                                platform2={item.platform2}
                                platform3={item.platform3}
                            />
                        ))}

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-10'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>The What</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Prunedge’s Retail Solution</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>Nigeria’s retail sector is the third-highest contributing sector to the Nation’s Gross Domestic Product (GDP), contributing about 16% to the country’s GDP in 2017.</p>
                                <div className="flex-col w-full justify-start items-start inline-flex border rounded-lg">
                                    <div className="grid grid-cols-3 p-4 bg-grey-50 gap-8 border-b">
                                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                            <h3 className="text-gray-600 text-2xl font-bold leading-loose">16%</h3>
                                            <div className="self-stretch text-gray-600 text-sm font-normal leading-tight">GDP contribution</div>
                                        </div>
                                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                            <h3 className="text-gray-600 text-2xl font-bold leading-loose">20%</h3>
                                            <div className="self-stretch text-gray-600 text-sm font-normal leading-tight">Forecasted GDP contribution by 2025</div>
                                        </div>
                                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                            <h3 className="text-gray-600 text-2xl font-bold leading-loose">₦454Billion</h3>
                                            <div className="self-stretch text-gray-600 text-sm font-normal leading-tight">Forecasted value of GDP contribution by 2025</div>
                                        </div>
                                    </div>
                                    <div className="w-full p-4 bg-white justify-start items-center gap-5 inline-flex">
                                        <div className="w-9 pt-1.5 flex-col justify-end items-center inline-flex">
                                            <div className="Frame self-stretch h-9 p-px justify-center items-center inline-flex">
                                                <div className="Group w-8 h-8 relative">
                                                    Icon
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full text-gray-600 text-sm font-normal leading-normal">Nigeria’s retail sector is the 3rd highest contributing sector to the country’s Gross Domestic Product (GDP)</div>
                                    </div>
                                </div>
                            </div>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>The problem</h5>
                            <div className='grid grid-cols-3 gap-5 text-gray-700'>
                                <div className='p-6 rounded-3xl bg-gray-50'><strong className='block pb-2 font-semibold'>Credit</strong>82% of the respondents to research carried out by Prunedge indicated that they do not have any access to credit facilities.</div>
                                <div className='p-6 rounded-3xl bg-gray-50'><strong className='block pb-2 font-semibold'>Pension</strong>93% of the respondents to research carried out by Prunedge indicated that they do not have any access to Pension schemes.</div>
                                <div className='p-6 rounded-3xl bg-gray-50'><strong className='block pb-2 font-semibold'>Insurance</strong>81% of the respondents to research carried out by Prunedge indicated that they do not have any access to any form of insurance.</div>
                            </div>
                            
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-10'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>The Why</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Reason for the solution</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>The Retail Management System (RMS) is a robust retail solution targeted at different tiers of the retail market ranging from the micro & small-scale businesses, Itinerant retailers, mid-sized retailers and retail chains across all parts of Nigeria & subsequently across Africa.</p>
                                <p>The solution aims to solve challenges in the retail value distribution network such as; sales tracking & management, supply chain management and provide value added services (VAS) such as; business financing, savings & reinvestment, insurance and pension for the target retail groups.</p>
                            </div>
                            <div className="flex flex-col w-full border rounded-lg">
                                <div className="w-full p-4 border-b">
                                    <h3 className="text-gray-600 text-2xl font-bold leading-loose">Company&apos;s Aim</h3>
                                    <div className="self-stretch text-gray-600 text-sm font-normal leading-tight">To be the operating system for retail management across Africa</div>
                                </div>
                                <div className="w-full p-4 bg-white justify-start items-center gap-5 inline-flex">
                                    <div className="w-9 pt-1.5 flex-col justify-end items-center inline-flex">
                                        <div className="Frame self-stretch h-9 p-px justify-center items-center inline-flex">
                                            <div className="Group w-8 h-8 relative">
                                                Icon
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full text-gray-600 text-sm font-normal leading-normal">Task: Research and design a mobile  solution that will cater to small-scale business owners that only need the retail solution to manage their store. </div>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>The UX Process</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>This shows the guiding principle</h5>
                            <div className='text-gray-500'>
                                <p>I used the below research method as I feel this process is the best way to accumulate quantitative and qualitative data on users and competitors in the retail industry. This in turns informs my design decisions with a research and evidence based solution.</p>
                            </div>
                            <div className="mx-auto mt-2 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                                    <div className="p-8 sm:p-8 lg:flex-auto">
                                        <h3 className="text-2xl font-medium">Phases</h3>
                                        <p className="mt-3 text-base leading-7 text-gray-600">Recognizing the diverse responsibilities within the actor role, we subdivided users to ensure system flexibility:</p>
                                        <div className=''>
                                            <div className="mt-6 flex items-center gap-x-4">
                                                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Goals setting</h4>
                                                <div className="h-px flex-auto bg-gray-100" />
                                            </div>
                                            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                                                <li className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                    Requirement gathering
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                    Competitive benchmarking
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                    Data analysis
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                    User personas
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                    User flow diagram
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                    Information architecture
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                    Lo-fidelity
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                    Hi-fidelity
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                    Usability testing
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0">
                                        <div className="rounded-2xl h-full bg-gray-50 py-10 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:py-16">
                                            <div className="mx-auto max-w-xs px-4">
                                                <p className="text-base font-semibold text-gray-600">One of my principle</p>
                                                <p className="text-lg mt-6 flex justify-center gap-x-2">While we have structured models for carrying out product design tasks - I believe that standards are meant to guide and not necessarily follow them to the book. What works for A might not readily work for B.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Requirement gathering</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Stakeholders interview</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Competitive benchmarking</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Key players and features</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Data analysis</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Affinity diagram</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>User persona</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Explain the usage of one of the users</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>User flow diagram</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Discovering the right path</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Information architecture</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Mapping features and navigations</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Lo-fidelity design</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Creating wireframes and annotations</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Hi-fidelity designs</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Prototyping and components</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Usability testing</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>To maintain consistency, I created a design system for this enterprise solution using atomic design approach.</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Moving into design</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>To maintain consistency, I created a design system for this enterprise solution using atomic design approach.</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <p>To address the challenges at hand, I crafted an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                                <p>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-6xl sm:pt-60 lg:px-8 lg:pt-20'>
                            <div className='relative w-full min-h-[1rem] mt-16 group'>
                                <div className=''>
                                    <img src='/images/prowoks-workbench-taskdetails.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                </div>
                            </div>
                        </div>


                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Approval Process</h5>
                            <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                <p>Process by an officer to balance the state ledger and bank statement of account for the state.</p>
                            </div>
                        </div>

                        {/* Project starts here */}
                        <div className="mx-auto max-w-4xl px-6 lg:px-8 mb-8">
                            <ImageGallery imagePaths={imagePaths} />
                        </div>
                        {/* Projects ends here */}

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Reconcilliation Process</h5>
                            <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                <p>Process by an officer to balance the state ledger and bank statement of account for the state.</p>
                            </div>
                        </div>

                        <div className="mx-auto max-w-4xl px-6 lg:px-8 mb-8">
                            <ImageGallery imagePaths={imagePaths} />
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Conclusion</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Design an enterprise solution that offers improved transparency and accountability in the budget and expenditure management process.</h5>
                            <div className='grid grid-cols-1 md:grid-cols-3 pb-16 gap-6 text-gray-500'>
                                <div className='p-6 rounded-3xl bg-green-50 text-green-700'><strong className='text-7xl text-green-500'>90%</strong><br />budget automation in 3 states and counting</div>
                                <div className='p-6 rounded-3xl bg-green-50 text-green-700'><strong className='text-7xl text-green-500'>95%</strong><br />reduction in wait time for tasks completion and feedback</div>
                                <div className='p-6 rounded-3xl bg-green-50 text-green-700'><strong className='text-7xl text-green-500'>₦50m</strong><br />saved due to the reduction in the usage of paper and printing</div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-1'>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Metric used in measuring success</h5>
                            <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                <div className='grid grid-cols-2 gap-5 text-gray-700'>
                                    <div className='p-6 rounded-3xl bg-gray-50'><strong className='block pb-2 font-semibold'>Task Completion Rate: </strong>This metric measures the percentage of tasks completed successfully by users. It helps to determine if users can use the system to accomplish their goals effectively.</div>
                                    <div className='p-6 rounded-3xl bg-gray-50'><strong className='block pb-2 font-semibold'>Time on Task: </strong>This metric measures the amount of time it takes for users to complete tasks in the system. It helps to determine if the system is efficient and easy to use.</div>
                                    <div className='p-6 rounded-3xl bg-gray-50'><strong className='block pb-2 font-semibold'>Error Rate: </strong>This metric measures the percentage of errors made by users while completing tasks. It helps to identify areas of the system that are confusing or difficult to use.</div>
                                    <div className='p-6 rounded-3xl bg-gray-50'><strong className='block pb-2 font-semibold'>System Usability Scale (SUS): </strong>This metric is a standardised questionnaire used to measure the usability of a system. It helps to determine the overall usability of the system.</div>
                                    <div className='p-6 rounded-3xl bg-gray-50'><strong className='block pb-2 font-semibold'>User Satisfaction: </strong>This metric measures how satisfied users are with the system. It helps to determine if the system is meeting user needs and expectations.</div>
                                    <div className='p-6 rounded-3xl bg-gray-50'><strong className='block pb-2 font-semibold'>Feedback and Suggestions: </strong>This metric collects feedback and suggestions from users about the system. It helps to identify areas of improvement and new features that could be added to the system.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* <LockScreen /> */}
        </div>
    )
}


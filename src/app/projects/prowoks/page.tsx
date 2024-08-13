'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
import LockScreen from '@/components/passwordRequest'
import ProjectHeader from '@/components/project-header'
import { CheckIcon, InformationCircleIcon } from '@heroicons/react/16/solid'
import ImageGallery from '@/components/image-gallery'

const projectData = [
    { goBackUrl: '/', title: 'Automated Budget System In State Governance', subtext: 'An enterprise solution that offers improved transparency and accountability in the budget and expenditure management process.', imageUrl: '/images/sampleimage.png', alt: 'Prowoks EMS', role1: 'Research', role2: 'Information Architecture', role3: '', role4: '', role5: '', platform1: 'Desktop', platform2: 'Mobile Responsive', platform3: '' },
]

const imagePaths = [
    '/images/prowoks-designui-1.png',
    '/images/prowoks-designui-2.png',
    '/images/prowoks-designui-3.png',
    // Add more image paths as needed
];

const imageRecon = [
    '/images/prowoks-rec-1.png',
    '/images/prowoks-rec-2.png',
    '/images/prowoks-rec-3.png',
    '/images/prowoks-rec-4.png',
    '/images/prowoks-rec-5.png',
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
                            <h5 className='uppercase text-md font-medium text-zinc-400'>Summary</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>Nigeria&apos;s budget challenges and potential reforms: Nigeria faces significant challenges in managing its budget effectively, leading to inefficiencies and hindrances in economic growth and development.</h5>
                            <div className='grid grid-cols-1 pb-16 space-y-6 text-gray-500'>
                                <div className='grid grid-cols-1'>
                                    <div className='grid grid-cols-8 items-center mt-12'>
                                        <div className='overflow-hidden col-span-3 lg:col-span-3 mb-8 lg:mb-0'>
                                            <img src='/images/pw-outdated.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                        </div>
                                        <div className='lg:col-end-9 col-span-8 lg:col-span-4 text-gray-900'>
                                            <h5 className='text-2xl font-sans'>Tackling Financial Data Issue</h5>
                                            <h5 className='text-4xl font-semibold py-2'>Outdated & Decentralized Data</h5>
                                            <h5 className='font-sans text-sm pb-4 text-zinc-500'>Civil servants grapple with outdated financial data and decentralized information across government departments, contributing to a lack of transparency and accountability.</h5>
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-8 items-center mt-12'>
                                        <div className='col-span-8 lg:col-span-4 text-gray-900'>
                                            <h5 className='text-2xl font-sans text-zinc-400'>These issues are further compounded by corruption, inadequate revenue, and high expenses, resulting in a substantial budget <strong className='text-gray-900'> deficit of ₦5.60 trillion in 2021.</strong></h5>
                                            <div className='flex bg-green-100 p-5 mt-4 rounded-lg'>
                                                <InformationCircleIcon className='h-full w-[3rem] mr-3 mt-1 fill-green-600' />
                                                <p className='text-sm'>To address these challenges, the <strong>World Bank</strong> is sponsoring projects aimed at promoting transparency and accountability within state governance.</p>
                                            </div>
                                        </div>
                                        <div className='overflow-hidden lg:col-end-9 col-span-8 lg:col-span-3 hidden lg:block'>
                                            <img src='/images/pw-business-crash.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                        </div>
                                    </div>
                                    <hr className='my-6' />
                                    <p className='text-sm text-gray-400'>This external support underscores the international recognition of the importance of tackling these issues for Nigeria&apos;s development. The collaboration with the World Bank brings additional resources and expertise to the table, facilitating the implementation of reforms and strengthening the country&apos;s capacity to manage its budget effectively.</p>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-4 lg:px-8 lg:pt-10'>
                            <h5 className='uppercase text-lg font-medium text-zinc-400'>Design Process</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Comprehensive Research Unveils Budget Process Dynamics: Insights & Personas Revealed</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-400'>
                                <p className='text-sm'>To address the challenges at hand, I designed an enterprise-level solution aimed at enhancing transparency and accountability in budget and expenditure management processes.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-4 lg:px-8 lg:pt-10'>
                            <p className='text-sm text-gray-400'>My approach began with a comprehensive series of interviews to grasp the intricacies of user workflows. These interviews provided insights into user interactions, tasks, emotions, and timeframes involved in their processes. Through meticulous data collection and analysis, I identified key user roles and constructed an informative process flowchart illustrating their interactions and workflows.</p>
                            <h5 className='text-2xl font-sans pt-3 pb-4 mt-6'>Quick stats</h5>
                            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                                <div className='border p-2 bg-zinc-100 rounded-lg'>
                                    <div className='p-5 bg-white rounded-md shadow'>
                                        <p className='text-lg'><strong className='text-5xl'>2 <br /></strong>States</p>
                                    </div>
                                </div>
                                <div className='border p-2 bg-zinc-100 rounded-lg'>
                                    <div className='p-5 bg-white rounded-md shadow'>
                                        <p className='text-lg'><strong className='text-5xl'>53 <br /></strong>Participants</p>
                                    </div>
                                </div>
                                <div className='border p-2 bg-zinc-100 rounded-lg'>
                                    <div className='p-5 bg-white rounded-md shadow'>
                                        <p className='text-lg'><strong className='text-5xl'>23 <br /></strong>MDAs</p>
                                    </div>
                                </div>
                                <div className='border p-2 bg-zinc-100 rounded-lg'>
                                    <div className='p-5 bg-white rounded-md shadow'>
                                        <p className='text-lg'><strong className='text-5xl'>5.5 <br /></strong>Weeks</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-4 lg:px-8 lg:pt-10'>
                            <h5 className='text-2xl font-sans pt-3 pb-4 mt-6'>User persona</h5>
                            <div className='relative w-full min-h-[1rem] group'>
                                <div className=''>
                                    <img src='/images/pw-persona.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-4 lg:px-8 lg:pt-10'>
                            <h5 className='text-2xl font-sans pt-3 pb-2 mt-6'>Features</h5>
                            <p className='text-sm text-gray-500 mb-6'>During the ideation stage, we generated potential features and ideas for the budget and expenditure module. This list is not exhaustive.</p>
                            <div className='relative w-full min-h-[1rem] group'>
                                <div className=''>
                                    <img src='/images/pw-ideation.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                </div>
                            </div>
                        </div>



                        <div className='bg-zinc-50 mt-10'>
                            <div className='mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20'>
                                <div className='relative w-full min-h-[1rem] group'>
                                    <div className=''>
                                        <img src='/images/pw-process-flow.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-24 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-zinc-400'>What we uncovered</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-8'>Additionally, field surveys were conducted across two states to further refine our understanding and identify potential user personas:</h5>
                            <div className='grid lg:grid-cols-3 gap-6 text-gray-700'>
                                <div className='p-6 rounded-3xl bg-gray-50'><strong className='block font-semibold'>Administrators: </strong>Responsible for configuring statewide processes.</div>
                                <div className='p-6 rounded-3xl bg-indigo-50'><strong className='block font-semibold'>Actors: </strong>Engage with the system for day-to-day tasks.</div>
                                <div className='p-6 rounded-3xl bg-gray-50'><strong className='block font-semibold'>Moderators: </strong>Manage activities/processes within their respective Ministry, Department, or Agency (MDA).</div>
                            </div>
                            <div className=''>
                                <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 mt-20 lg:mx-0 lg:flex lg:max-w-none">
                                    <div className="p-8 sm:p-8 lg:flex-auto">
                                        <h3 className="text-2xl font-medium">Expanding the Actors</h3>
                                        <p className="mt-3 text-base leading-7 text-gray-600">Recognizing the diverse responsibilities within the actor role, we subdivided users to ensure system flexibility:</p>
                                        <div className="mt-6 flex items-center gap-x-4">
                                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                                            <div className="h-px flex-auto bg-gray-100" />
                                        </div>
                                        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                                            <li className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                Initiators
                                            </li>
                                            <li className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                Authors
                                            </li>
                                            <li className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                Directors
                                            </li>
                                            <li className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                Supervisor Officers
                                            </li>
                                            <li className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                Accounting Officers
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0">
                                        <div className="rounded-2xl bg-gray-50 py-10 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                            <div className="mx-auto max-w-xs px-4">
                                                <p className="text-base font-semibold text-gray-600">Output</p>
                                                <p className="text-lg mt-6 flex justify-center gap-x-2">This meticulous approach not only provided insights into budget implementation and expenditure initiation but also ensured the system&apos;s adaptability to varied user roles and responsibilities.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-24 lg:px-8'>
                            <h5 className='uppercase text-lg font-medium text-zinc-400'>Moving into design</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Pivoting to using a timeline approach to manage their activities</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-500'>
                                <p>Having explored series of UI designs, starting from wireframes with the technical team to creating hi-fidelity for the larger stakeholder, we pivoted to using <strong>A-Timeline approach</strong> for managing their day-to-day activities.</p>
                                <p>Due to the needed flexibility within each departments, I created process management tool, where users with the right access can specifiy the flow of certain tasks using some parameter</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-8 lg:px-8 lg:pt-10'>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Starting A Process</h5>
                            <div className='grid grid-cols-1 text-gray-500'>
                                <p>Process by an officer to balance the state ledger and bank statement of account for the state.</p>
                            </div>
                        </div>

                        <div className="mx-auto max-w-4xl px-6 lg:px-8 mb-8 pt-6 lg:pt-10">
                            <div className='relative w-full min-h-[1rem] group'>
                                <div className=''>
                                    <img src='/images/prowoks-create.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-8 lg:px-8 lg:pt-10'>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Approval Process</h5>
                            <div className='grid grid-cols-1 text-gray-500'>
                                <p>Process by an officer to balance the state ledger and bank statement of account for the state.</p>
                            </div>
                        </div>

                        {/* Project starts here */}
                        <div className="mx-auto max-w-4xl px-6 lg:px-8 mb-8 pt-6 lg:pt-10">
                            <ImageGallery imagePaths={imagePaths} />
                        </div>
                        {/* Projects ends here */}

                        <div className='mx-auto max-w-4xl px-6 pt-8 lg:px-8 lg:pt-10'>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Reconcilliation Process</h5>
                            <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                <p>Process by an officer to balance the state ledger and bank statement of account for the state.</p>
                            </div>
                        </div>

                        <div className="mx-auto max-w-4xl px-6 lg:px-8 mb-8">
                            <ImageGallery imagePaths={imageRecon} />
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-24 lg:px-8 lg:pt-20'>
                            <h5 className='uppercase text-lg font-medium text-zinc-400'>Conclusion</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Design an enterprise solution that offers improved transparency and accountability in the budget and expenditure management process.</h5>
                            <div className='grid grid-cols-1 md:grid-cols-3 pb-16 gap-6 text-gray-500'>
                                <div className='p-6 rounded-3xl bg-green-50 text-green-700'><strong className='text-7xl text-green-500'>90%</strong><br />budget automation in 3 states and counting</div>
                                <div className='p-6 rounded-3xl bg-green-50 text-green-700'><strong className='text-7xl text-green-500'>95%</strong><br />reduction in wait time for tasks completion and feedback</div>
                                <div className='p-6 rounded-3xl bg-green-50 text-green-700'><strong className='text-7xl text-green-500'>₦50m</strong><br />in one of the states saved due to the reduction in the usage of paper and printing</div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 sm:pt-60 lg:px-8 lg:pt-1'>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Metric used in measuring success</h5>
                            <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                <div className='grid lg:grid-cols-2 gap-5 text-gray-700'>
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


'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
// import LockScreen from '@/components/passwordRequest'
import ProjectHeader from '@/components/project-header'
import { CheckIcon, UserCircleIcon } from '@heroicons/react/16/solid'
import ImageGallery from '@/components/image-gallery'

const projectData = [
    { goBackUrl: '/', title: 'Operating System For The Freelance Economy', subtext: 'Designed to help creative professionals, particularly freelancers, manage their clients and projects effectively', imageUrl: '/images/fg-main.jpeg', alt: 'Fullgap', role1: 'UX Design', role2: 'UI Design', role3: 'Researcher', role4: 'Market Strategist', role5: 'Product Envisioning', platform1: 'Web Application', platform2: 'Mobile Responsive', platform3: '' },
]

const imageProjects = [
    '/images/fullgap-project-list.png',
    '/images/fullgap-listview.png',
    '/images/fullgap-kanbanview.png',
    '/images/fullgap-taskview.png',
    // Add more image paths as needed
];
const imageInvoices = [
    '/images/fullgap-invoice-main.png',
    '/images/fullgap-invoiceComps.png',
    '/images/fullgap-invoice-comp2.png',
    // Add more image paths as needed
];
export default function Fullgap() {

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

                        <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-10'>
                        <h5 className='uppercase text-md font-medium text-zinc-400'>The Summary</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Imagine a bustling hive of creative activity, where freelancers and small business owners juggle projects, tasks, and clients daily.</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-400'>
                                <p className='text-sm'>Fullgap was designed to be this hive—a one-stop platform for all their needs. However, we discovered that our hive wasn&apos;t buzzing as it should. I, as the product designer, researcher, and market strategist, embarked on a journey to transform Fullgap into the vibrant, efficient hub we envisioned.</p>
                                <hr />
                                <div className='grid grid-cols-1 lg:grid-cols-6'>
                                    <div className='col-span-1 lg:col-span-3 content-end'>
                                        <h5 className='text-2xl font-sans pt-3 pb-4'>This case study tells the <span className='text-gray-900'>story of how we</span> identified the issues, overcame challenges, and implemented solutions that led to a <span className='text-gray-900'>45% increase in user engagement</span> and an <span className='text-gray-900'>85% reduction in project creation time.</span></h5>
                                    </div>
                                    <div className='col-span-1 lg:col-end-7 lg:col-span-2 w-full min-h-[1rem]'>
                                        <div className='overflow-hidden'>
                                            <img src='/images/fg-pj-success.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-md font-medium text-zinc-400'>Problem Framing</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Identifying the problem</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-500 pb-6 lg:pb-0'>
                                <p className='text-sm'>Fullgap was meant to simplify life for creatives, offering tools for project management, task management, client management, invoice management, and collaboration. But the reality was different. Our Mixpanel data and user feedback painted a troubling picture:</p>
                            </div>

                            <div className="mx-auto mt-2 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                                <div className="p-8 sm:p-8 lg:flex-auto">
                                    <div className=''>
                                        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:gap-6">
                                            <li className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                Users couldn&apos;t easily find where to create new projects.
                                            </li>
                                            <li className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                The project creation process was daunting, requiring too much information upfront.
                                            </li>
                                            <li className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                The absence of a Kanban board made task management cumbersome.
                                            </li>
                                            <li className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                The task detail view, displayed in a drawer, didn&apos;t encourage collaboration, leading to poor retention.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-2 lg:mt-0 lg:w-full lg:max-w-sm lg:flex-shrink-0">
                                    <div className="rounded-2xl h-full bg-gray-50 py-10 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:py-16">
                                        <div className="mx-auto max-w-xs px-4">
                                            <p className="text-base font-semibold text-gray-600">Conclusion</p>
                                            <p className="text-lg mt-6 flex justify-center gap-x-2">These issues weren&apos;t just inconveniences; they were roadblocks preventing users from fully embracing our platform, which was supposed to be their ultimate productivity companion.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                        <h5 className='uppercase text-md font-medium text-zinc-400'>Team Composition</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>In this story, I was the protagonist—the product designer, researcher, and market strategist.</h5>
                            <div className='text-gray-500'>
                                <p className='text-sm'>My mission was to delve deep into the user experience, uncover their pain points, and craft solutions that would make Fullgap the go-to platform for creatives. But no hero works alone. I collaborated with:</p>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-4'>
                                <div className=''>
                                    <h2 className='text-md pb-2 pt-4'><UserCircleIcon className='h-5 w-5 text-gray-900 mr-2 inline-flex' aria-hidden='true' />Engineers</h2>
                                    <p className='text-gray-500 text-sm'>The wizards who brought our technical solutions to life.</p>
                                </div>
                                <div className=''>
                                    <h2 className='text-md pb-2 pt-4'><UserCircleIcon className='h-5 w-5 text-gray-900 mr-2 inline-flex' aria-hidden='true' />Product manager</h2>
                                    <p className='text-gray-500 text-sm'>The strategists who ensured our goals aligned with user needs and business objectives.</p>
                                </div>
                                <div className=''>
                                    <h2 className='text-md pb-2 pt-4'><UserCircleIcon className='h-5 w-5 text-gray-900 mr-2 inline-flex' aria-hidden='true' />Marketers</h2>
                                    <p className='text-gray-500 text-sm'>The communicators who kept our users informed and engaged.</p>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                        <h5 className='uppercase text-md font-medium text-zinc-400'>Approach</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Strategy and research method: Our journey began with understanding the terrain</h5>
                            
                            <div className='grid grid-cols-1 gap-5'>
                                <div className=''>
                                    <div className='relative w-full min-h-[1rem] mt-8 group'>
                                        <div className='bg-zinc-100 p-16 rounded-lg border'>
                                            <img src='/images/fg-mixpanel.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                        </div>
                                    </div>
                                    <p className='text-gray-500 text-sm mt-2'><strong>Data analysis:</strong> Like detectives, we scoured Mixpanel data to track user movements and pinpoint where they dropped off. We discovered that many users abandoned the project creation process halfway through.</p>
                                </div>
                                <div className=''>
                                    <div className='relative w-full min-h-[1rem] mt-8 group'>
                                        <div className='bg-zinc-100 p-16 rounded-lg border'>
                                            <img src='/images/fg-notion-interview.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                        </div>
                                    </div>
                                    <p className='text-gray-500 text-sm mt-2'><strong>User interview:</strong> We reached out to users, inviting them to share their stories. Their feedback revealed that the multi-page project creation was overwhelming, and they often didn&apos;t have tasks ready at the project&apos;s inception. The view captures some of the script I created using Notion Doc.</p>
                                </div>
                                <div className=''>
                                    <div className='relative w-full min-h-[1rem] mt-8 group'>
                                        <div className='bg-zinc-100 p-16 pb-0 rounded-lg border overflow-hidden'>
                                            <img src='/images/fg-notion-calls.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md -mb-1' />
                                        </div>
                                    </div>
                                    <p className='text-gray-500 text-sm mt-2'><strong>User Feedback:</strong>Our community forums and call center logs became treasure troves of insights. Sifting through these logs, though tedious, was crucial in understanding recurring complaints and frustrations.</p>
                                </div>
                                <div className=''>
                                    <div className='relative w-full min-h-[1rem] mt-8 group'>
                                        <div className='bg-zinc-100 p-16 rounded-lg border overflow-hidden'>
                                            <img src='/images/fg-iterations.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                        </div>
                                    </div>
                                    <p className='text-gray-500 text-sm mt-2'><strong>Design testing</strong>We sketched out new designs and tested them with users. Each iteration brought us closer to a solution that felt just right.</p>
                                </div>
                            </div>
                        </div>

                        

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-md font-medium text-zinc-400'>Challenges</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>We thought we knew all the challenges when we started but research had something in store for us - lol</h5>
                            <div className='grid grid-cols-1 lg:grid-cols-6 pt-8 gap-6'>
                                <div className='col-span-1 lg:col-span-3 pb-16 lg:pb-0'>
                                    <div className='relative w-full min-h-[1rem]'>
                                        <div className='overflow-hidden'>
                                            <img src='/images/fg-userengagement.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                        </div>
                                    </div>
                                    <h2 className='font-semibold pb-2'>User Engagement for Interviews:</h2>
                                    <p className='text-gray-500 text-sm'>Convincing users to participate in interviews was like persuading busy bees to pause their work. We offered incentives—discounts—to sweeten the deal, which helped increase participation.</p>
                                </div>

                                <div className='col-span-1 lg:col-end-7 lg:col-span-2 rounded-lg'>
                                    <div className='relative w-full min-h-[1rem]'>
                                        <div className='overflow-hidden'>
                                            <img src='/images/fg-analyze-data.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                        </div>
                                    </div>
                                    <h2 className='font-semibold pb-2'>Sifting Through Call Center Logs:</h2>
                                    <p className='text-gray-500 text-sm'>Diving into the depths of call logs was time-consuming but essential. Each log was a piece of the puzzle, helping us see the bigger picture of user pain points.</p>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-md font-medium text-zinc-400'>Solution</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Design Highlights:</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-500 '>
                                <p className='text-sm'>Creating the optimal design for Fullgap required <strong className='text-gray-900'>numerous visual drafts and prototypes</strong>. After extensive testing and multiple iterations, we identified the most effective solutions to address user pain points. These chosen designs represent the best of our efforts to enhance the user experience.</p>
                                <hr />
                                <p className='text-sm'>Nevertheless, our commitment to excellence means we will continue testing and optimizing these features to ensure they meet our users&apos; evolving needs. Here are the key changes we implemented:</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-10'>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Single-Page Project Creation</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-500'>
                                <p className='text-sm'>We transformed the project creation process from a five-page odyssey into a single-page sprint. This streamlined approach made it faster and less intimidating for users.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6'>
                            <div className='relative w-full min-h-[1rem] mt-8 group'>
                                <div className=''>
                                    <img src='/images/fullgap-project-creation.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-20'>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Task Creation Post-Project</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-500'>
                                <p className='text-sm'>By decoupling task creation from project setup, we gave users the flexibility to add tasks later. This change encouraged them to return to the platform, enhancing ongoing engagement.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6'>
                            <div className='relative w-full min-h-[1rem] mt-8 group'>
                                <div className=''>
                                    <img src='/images/fullgap-task-creation.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-20'>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Enhanced Project/Task View</h5>
                            <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                <p className='text-sm'>I revamped the project view, adding different layout and easy filter mechanism and task detail view, expanding it from a drawer to a full-page layout. We also added a commenting system, turning tasks into collaborative spaces where ideas could flow freely.</p>
                            </div>
                        </div>

                        {/* Project starts here */}
                        <div className="mx-auto max-w-4xl px-6 lg:px-8">
                            <ImageGallery imagePaths={imageProjects} />
                        </div>
                        {/* Projects ends here */}

                        <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-20'>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Invoice Management Update</h5>
                            <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                <p className='text-sm'>I liberated invoice creation from the shackles of projects, allowing users to generate standalone invoices. This provided much-needed flexibility and met users&apos; varying needs.</p>
                            </div>
                        </div>

                        <div className="mx-auto max-w-4xl px-6 lg:px-8">
                            <ImageGallery imagePaths={imageInvoices} />
                        </div>

                        <div className='bg-zinc-50 mt-20'>
                            <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:py-20'>
                                <h5 className='uppercase text-lg font-medium text-zinc-400'>Results and Impact</h5>
                                <h5 className='text-2xl font-sans pt-3 pb-4'>Key Performance Indicators (KPIs):</h5>
                                <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                    <p className='text-sm'>The results were nothing short of transformative:</p>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-700 rounded-xl overflow-hidden'>
                                    <div className='text-2xl font-sans p-6 bg-white rounded-lg'><strong className='text-4xl block pb-2 font-semibold text-indigo-500'>45% Engagement Increase </strong>thanks to the intuitive and streamlined processes.</div>
                                    <div className='text-2xl font-sans p-6 bg-white rounded-lg'><strong className='text-4xl block pb-2 font-semibold text-indigo-500'>85x time reduction </strong>time to create a project plummeted by 85% making users more productive and satisfied.</div>
                                    <div className='text-2xl font-sans p-6 bg-white rounded-lg'><strong className='text-4xl block pb-2 font-semibold text-indigo-500'>5.5x more tasks created </strong>more tasks added, boosting our return rate and ensuring continuous interaction.</div>
                                    <div className='text-2xl font-sans p-6 bg-white rounded-lg'><strong className='text-4xl block pb-2 font-semibold text-indigo-500'>4 comments/task </strong>The new commenting system sparked collaboration, with team members communicating more effectively within the platform.</div>
                                </div>
                                <hr className='mt-10 mb-6'/>
                                <p className='text-sm text-gray-500 pb-8 lg:pb-0'>With the help of Mixpanel, we were able to monitor how users interact with the features added, comparing previous data to the current </p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-lg font-medium text-zinc-400'>Next Steps</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4'>Ongoing Monitoring</h5>
                            <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                <p className='text-sm'>The journey doesn&apos;t end here. I will:</p>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 pb-16 text-gray-700 rounded-xl overflow-hidden'>
                                <div className='p-6 bg-indigo-50'>Continuously monitor user trends through Mixpanel, staying vigilant for new patterns and areas for improvement.</div>
                                <div className='p-6 bg-indigo-100'>Integrate Logrocket to observe live user interactions, allowing us to make real-time adjustments and enhancements.</div>
                            </div>

                            <h5 className='text-2xl font-sans pt-3 pb-4'>Future Enhancement</h5>
                            <div className='grid grid-cols-1 lg:grid-cols-2 pb-16 text-gray-700 rounded-xl overflow-hidden'>
                                <div className='p-6 bg-slate-50'>We plan to introduce additional features based on ongoing user feedback, further streamlining workflows and enhancing usability.</div>
                                <div className='p-6 bg-slate-100'>Regular workshops and usability tests will ensure Fullgap evolves with our users&apos; needs, staying ahead of the curve.</div>
                            </div>

                            <div className='text-2xl font-sans lg:text-3xl mb-20'>Through this transformative journey, Fullgap has become the vibrant, efficient hive of creativity we always envisioned. Our story is one of listening, learning, and continuously improving, ensuring our platform not only meets but exceeds the needs of creatives everywhere.</div>
                        </div>

                    </div>
                </div>
            </main>

            {/* <LockScreen /> */}
        </div>
    )
}


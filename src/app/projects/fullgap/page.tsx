'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
// import LockScreen from '@/components/passwordRequest'
import ProjectHeader from '@/components/project-header'
import { CheckIcon, UserCircleIcon, TrophyIcon, InformationCircleIcon, XMarkIcon, CheckBadgeIcon, MinusIcon } from '@heroicons/react/16/solid'
import ImageGallery from '@/components/image-gallery'

const projectData = [
    { goBackUrl: '/', title: 'Operating System For The Creative Economy', subtext: '...', imageUrl: '/images/fg-cover.png', alt: 'Fullgap', role1: 'UX Design', role2: 'UI Design', role3: 'Researcher', role4: 'Market Strategist', role5: 'Product Envisioning', platform1: 'Web Application', platform2: 'Mobile Responsive', platform3: '' },
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

                        {/* Introduction */}
                        <section className='mb-24'>
                            <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-10'>
                                <div className='border-slate-950 border-b mb-8'>
                                    <h5 className='text-6xl font-thin text-slate-950 mb-4'>Introduction</h5>
                                </div>
                                <div className='grid grid-cols-1 space-y-6 *:text-slate-950 *:text-lg'>
                                    <p>Fullgap began as a B2C platform aimed at helping freelancers manage their projects, tasks, and clients. Through research, we expanded it to include a B2B offering, increasing the platform&apos;s business reach. Much like Minviro&apos;s mission of helping businesses operate more sustainably, Fullgap sought to streamline operations for both freelancers and businesses by offering a flexible, modular system.</p>
                                    <p>The initial goal was to simplify the project creation process and boost engagement, but we later discovered that freelancers and businesses needed a more flexible system where they could manage projects, invoices, and contracts independently — <strong>a need identified during research and testing.</strong></p>
                                </div>
                            </div>
                        </section>

                        {/* Problem Definition & Research */}
                        <section className='mb-24'>
                            <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-10'>
                                <div className='border-slate-950 border-b mb-8'>
                                    <h5 className='text-6xl font-thin text-slate-950 mb-4'>Problem Definition & Research</h5>
                                </div>
                                <div className='grid grid-cols-1 space-y-12 mb-24'>
                                    <div className=''>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>The Challenge</h3>
                                        <p className='text-lg text-slate-800'>Fullgap initially required users to go through a tightly coupled series of steps—project details, deliverables, payment, agreement, and preview. This structure forced users to complete steps they didn’t always need, which led to frustration and lower engagement.</p>
                                    </div>

                                    <div className='relative bg-green-200 p-8 rounded-lg flex items-center'>
                                        <TrophyIcon className='size-12 text-green-700 mr-3' />
                                        <div className=''>
                                        <h4 className='text-lg text-green-900 font-bold'>Business Goal</h4>
                                        <div className='text-lg text-green-900'>Increase engagement and create more revenue opportunities by offering flexibility.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 mb-24'>
                                    <div className='border-purple-950 border-l-2 pl-4 mb-12'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>User Research</h3>
                                        <p className='text-lg text-slate-800 max-w-lg'>I want to understand the average user’s profile based on the current customer-base, and prove my hypothesis.</p>
                                    </div>
                                    <div className='space-y-6'>
                                        <div className=''>
                                            <h3 className='font-bold text-slate-950 mb-2'>Interviews</h3>
                                            <p className='text-lg text-slate-800 pb-4'>I’ve arranged calls via Google Meet with previous customers to understand what influenced their decision when creating project and what motivates them to return.</p>
                                            <p className='text-lg text-slate-800'>70% said it’s because they are able to manage most of their activities using one tool (Fullgap) while others said to track their invoice and generate contract</p>
                                        </div>

                                        <div className=''>
                                            <h3 className='font-bold text-slate-950 mb-2'>Quantitative Study</h3>
                                            <p className='text-lg text-slate-800'>I wanted to quantify the feedback on the current platform experience. At the end of my user interviews I’ve asked the attendees to assess the platform by completing a questionnaire that uses System Usability Scale (SUS). I used Google form to gather these insight</p>
                                        </div>

                                        <div className=''>
                                            <img src='/images/fg/sus.png' />
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className='grid grid-cols-1 mb-24'>
                                    <div className='border-purple-950 border-l-2 pl-4 mb-12'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>User Needs</h3>
                                        <p className='text-lg text-slate-800 max-w-lg'>After analysing the data from previous exercise, I was able to identify some key components</p>
                                    </div>
                                    
                                    <div className='grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8'>
                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-900 items-center mb-4'><InformationCircleIcon className='size-5 mr-2 text-purple-600' />Identification of Target Users:</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-purple-100/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>01</span>
                                                    <span className='text-slate-800'>Freelancers who manage multiple projects and clients.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>02</span>
                                                    <span className='text-slate-800'>Small businesses requiring project, invoice, and contract management.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>03</span>
                                                    <span className='text-slate-800'>B2B users who need flexibility in managing workflows without unnecessary steps.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-900 items-center mb-4'><InformationCircleIcon className='size-5 mr-2 text-purple-600' />Key User Pain Points:</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-purple-100/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>01</span>
                                                    <span className='text-slate-800'>Complex, multi-step project creation process.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>02</span>
                                                    <span className='text-slate-800'>Inability to manage projects, invoices, and contracts independently</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>03</span>
                                                    <span className='text-slate-800'>Lack of collaborative tools for task management.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-900 items-center mb-4'><InformationCircleIcon className='size-5 mr-2 text-green-600' />Desired Outcomes for Users:</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-green-100 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>01</span>
                                                    <span className='text-slate-800'>A simplified and streamlined project setup process.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>02</span>
                                                    <span className='text-slate-800'>The ability to choose and use only the features they need.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>03</span>
                                                    <span className='text-slate-800'>Improved collaboration through integrated tools</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 space-y-6 mb-24'>
                                    <div className='border-purple-950 border-l-2 pl-4 mb-8'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>Business Goals</h3>
                                        <p className='text-lg text-slate-800 max-w-lg'>After analysing the data from previous exercise, I was able to identify some key components</p>
                                    </div>
                                    
                                    <div className='grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8'>
                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-950 items-center mb-4'><InformationCircleIcon className='size-5 mr-2 text-purple-600' />Business Goals & Objectives:</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-purple-100/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>01</span>
                                                    <span className='text-slate-800'>Increase user engagement and retention.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>02</span>
                                                    <span className='text-slate-800'>Expand Fullgap’s market reach.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>03</span>
                                                    <span className='text-slate-800'>Generate additional revenue streams.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-950 items-center mb-4'><InformationCircleIcon className='size-5 mr-2 text-purple-600' />Constraint & Limitations:</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-purple-100/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>01</span>
                                                    <span className='text-slate-700'>Balance between advanced functionality and user simplicity.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>02</span>
                                                    <span className='text-slate-700'>Resource limitations for development and testing of new features.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>03</span>
                                                    <span className='text-slate-700'>Resistance from users accustomed to the original workflow and structure.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-950 items-center mb-4'><InformationCircleIcon className='size-5 mr-2 text-green-600' />Success Criteria for the Project:</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-green-100 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>01</span>
                                                    <span className='text-slate-800'>Achieving a 45% increase in user engagement metrics.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>02</span>
                                                    <span className='text-slate-800'>Reducing project creation time by 25%</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>03</span>
                                                    <span className='text-slate-800'>Successfully attracting B2B users and increasing service offerings.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-24'>
                                    <p className='text-lg text-slate-800 pb-2'>Following that, a <strong>user journey map</strong> was produced which included their thoughts and feelings in response to a problem situation.</p>
                                    <p className='text-lg text-slate-800'>I was able to envision their difficulties and develop possibilities in the issue space as a result of this.</p>
                                </div>

                                <div className='grid grid-cols-1 space-y-6 mb-24'>
                                    <div className='border-purple-950 border-l-2 pl-4 mb-12'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>How Might We</h3>
                                        <p className='text-lg text-slate-800 max-w-lg'>These HMW statements focus on the core challenges from both the user and business perspectives, guiding potential solutions to improve Fullgap&apos;s platform and business strategy.</p>
                                    </div>
                                    
                                    <div className='grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8'>
                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-900 items-center mb-4'><InformationCircleIcon className='size-5 mr-2 text-purple-600' />Users</h3>
                                            <div className='grid grid-cols-2 gap-4 *:bg-yellow-100 *:flex *:text-sm *:-rotate-2 *:shadow-md *:text-slate-800'>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we streamline the project setup process to make it faster and less overwhelming for freelancers and businesses?</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we enable users to add tasks at their own pace after project creation, fostering more flexible and intuitive workflows?</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we provide users with the flexibility to manage projects, invoices, and contracts independently, without forcing them through unnecessary steps?</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we enhance task management by integrating collaborative tools that encourage teamwork and communication within the platform?</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we create a modular system where users can select the specific tools (projects, invoicing, contracts) they need, meeting both freelancer and B2B requirements?</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-900 items-center mb-4'><InformationCircleIcon className='size-5 mr-2 text-purple-600' />Business Goals:</h3>
                                            <div className='grid grid-cols-2 gap-4 *:bg-yellow-100 *:flex *:text-sm *:rotate-3 *:shadow-md *:text-slate-800'>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we increase user engagement and retention by improving platform usability and creating a more intuitive user experience?</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we transition Fullgap from a B2C platform to also serve B2B users, expanding our market reach?s.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we offer modular services that open new revenue streams by allowing users to select the features they need?</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we offer modular services that open new revenue streams by allowing users to select the features they need?</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span>How might we offer modular services that open new revenue streams by allowing users to select the features they need?</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Ideation & Design */}
                        <section className='mb-24'>
                            <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-10'>
                                <div className='border-slate-950 border-b mb-16'>
                                    <h5 className='text-6xl font-thin text-slate-950 mb-4'>Ideation & Design</h5>
                                </div>

                                <div className='grid grid-cols-1 space-y-6 mb-8'>
                                    <div className='border-purple-950 border-l-2 pl-4'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>Wireframes</h3>
                                        <p className='text-lg text-slate-800 max-w-lg'>When we were designing the main screens, we had to think about how people would use them in different situations. This helped us figure out how to organize everything and make it easy to use.</p>
                                    </div>
                                </div>
                                
                                <div className='mb-8'>
                                    <p className='text-lg text-slate-800 pb-6'>First, I <strong>sketched out the process</strong> of creating a new project. I <strong>changed it a bunch of times until it felt just right!</strong> We had a lot of different <strong>versions</strong> and talked about how users would interact with each part of the app.  We even <strong>tested these versions</strong> to make sure they were clear and easy to use.</p>
                                    <p className='text-lg text-slate-800 pb-6'>This whole process helped us really understand our users — <strong>what they need, what they want, and what frustrates them</strong>. We also looked at what the company wanted to achieve with this product.  By combining all this information, we created the structure of the app and basic layouts for the screens (called wireframes).</p>
                                </div>

                                <div className='*:mb-16 mb-24'>
                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Project Creation</h3>
                                        <div className=''>
                                            <img src='/images/fg/Wireframe-project-create.png' />
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Project List</h3>
                                        <div className=''>
                                            <img src='/images/fg/Wireframe-project-list.png' />
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Milestone</h3>
                                        <div className=''>
                                            <img src='/images/fg/Wireframe-milestone-view.png' />
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Task Details</h3>
                                        <div className=''>
                                            <img src='/images/fg/Wireframe-task-details.png' />
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 space-y-6 mb-8'>
                                    <div className='border-purple-950 border-l-2 pl-4'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>Initial Concepts</h3>
                                        <p className='text-lg text-slate-800 max-w-lg'>After all that work, we finally got to the really fun part: designing how the app actually looks! This is what people will see and interact with.</p>
                                    </div>
                                </div>
                                
                                <div className='mb-8'>
                                    <p className='text-lg text-slate-800 pb-6'>These designs were some of my early explorations, but they didn&apos;t quite make the cut.  Sometimes user feedback steered us in a different direction, and other times we had to make changes based on technical limitations.</p>
                                </div>

                                <div className='*:mb-16 mb-24'>
                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Project Creation Concept</h3>
                                        <div className=''>
                                            <img src='/images/fg/project-creation-concept.png' />
                                        </div>
                                        <p className='bg-red-100 p-6 rounded-md text-base text-red-600 mt-12'>While this is a huge improvement from the 5 steps creation phases, during testing, I discovered some users don&apos;t need client/invoice/contract at all, additionally, the payment structure is not flexible enough.</p>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Earlier Iteration of Task View</h3>
                                        <div className=''>
                                            <img src='/images/fg/Initial-task-view.png' />
                                        </div>
                                        <p className='bg-red-100 p-6 rounded-md text-base text-red-600 mt-12'>The initial slide-out panel for task details had limitations. It restricted new features and scalability for collaborative tools.  Plus, the colors were confusing. So, I went back to the drawing board to come up with a better solution!</p>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Initial Invoice Manager</h3>
                                        <div className=''>
                                            <img src='/images/fg/Initial-invoice-manager.png' />
                                        </div>
                                        <p className='bg-red-100 p-6 rounded-md text-base text-red-600 mt-12'>The invoice management page is a bit clunky, especially on smaller screens. Some users have given us feedback that it&apos;s tough to find their way around.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Testing & Iteration */}
                        <section className='mb-24'>
                            <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-10'>
                                <div className='border-slate-950 border-b mb-12'>
                                    <h5 className='text-6xl font-thin text-slate-950 mb-4'>Testing & Iteration</h5>
                                </div>

                                {/* User Feedback */}
                                <div className='grid grid-cols-1 gap-y-6 mb-24'>
                                    <div className=''>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>User Feedback</h3>
                                        <p className='text-lg text-slate-800'>After designing the single page system, I conducted usability tests with targeted users identified through analytics. Freelancers appreciated the flexibility, and B2B users welcomed the ability to manage internal projects without unnecessary features.</p>
                                    </div>
                                    <div className='border p-2 rounded-3xl'>
                                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 border p-4 rounded-2xl bg-zinc-50'>
                                            <div className=''>
                                                <h3 className='font-bold text-slate-950 mb-2'>Method</h3>
                                                <p className='text-slate-800'>Remote and in-person testing</p>
                                            </div>
                                            <div className=''>
                                                <h3 className='font-bold text-slate-950 mb-2'>Area Tested</h3>
                                                <p className='text-slate-800 pb-4'>Projection creation, invoice, task and contract management, competitors analysis, problem valuation</p>
                                            </div>
                                            <div className=''>
                                                <h3 className='font-bold text-slate-950 mb-2'>Participants</h3>
                                                <p className='text-slate-800 pb-4'>24</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Participants */}
                                <div className='grid grid-cols-1 space-y-6 mb-24'>
                                    <div className='border-purple-950 border-l-2 pl-4 mb-6'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>Participants</h3>
                                        <p className='text-lg text-slate-800 max-w-lg'>Who did I test?</p>
                                    </div>
                                    <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                                        <div className='text-center'>
                                            <div className='mb-4 rounded-lg'>
                                                <img src='/images/fg/24.png' />
                                            </div>
                                            <h3 className='font-semibold text-slate-950 mb-2'>Number of Participants</h3>
                                        </div>

                                        <div className='text-center'>
                                            <div className='mb-4 rounded-lg'>
                                                <img src='/images/fg/participants.png' />
                                            </div>
                                            <h3 className='font-semibold text-slate-950 mb-2'>Years of Experience</h3>
                                        </div>

                                        <div className='text-center'>
                                            <div className='mb-4 rounded-lg'>
                                                <img src='/images/fg/background.png' />
                                            </div>
                                            <h3 className='font-semibold text-slate-950 mb-2'>Professional Background</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Executive summary */}
                                <div className='grid grid-cols-1 space-y-6 mb-24'>
                                    <div className='border-purple-950 border-l-2 pl-4 mb-6'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>Executive Summary</h3>
                                        <p className='text-lg text-slate-800 max-w-2xl'>The Fullgap usability test revealed a divided response among users regarding the product&apos;s readiness. Some users responded enthusiastically, expressing a desire to use the tool immediately and share it with their teams. In contrast, few others did not see enough value in the current version and indicated they would wait to see how the product evolves before adopting it.</p>
                                    </div>
                                    <div className='grid md:grid-cols-4 gap-6 *:bg-gray-100 *:rounded-xl *:p-6'>
                                        <div className=''>
                                            <h2 className='text-5xl text-green-600 font-lora mb-4'>87%</h2>
                                            <h3 className='text-slate-800 mb-2'>Participants stated that they prefer the single page project creation.</h3>
                                        </div>

                                        <div className=''>
                                            <h2 className='text-5xl text-green-600 font-lora mb-4'>70%</h2>
                                            <h3 className='text-slate-800 mb-2'>Participants completed all the tasks.</h3>
                                        </div>
                                        <div className=''>
                                            <h2 className='text-5xl text-green-600 font-lora mb-4'>40%</h2>
                                            <h3 className='text-slate-800 mb-2'>Stated that they see a great potential in the app.</h3>
                                        </div>
                                        <div className=''>
                                            <h2 className='text-5xl text-green-600 font-lora mb-4'>35%</h2>
                                            <h3 className='text-slate-800 mb-2'>Had a problem with the invoice and contract management.</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Key Insight */}
                                <div className='grid grid-cols-1 space-y-6 mb-24'>
                                    <div className='border-purple-950 border-l-2 pl-4 mb-6'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>Key Insight</h3>
                                        <p className='text-lg text-slate-800 max-w-2xl'>Lorem ipsum dolor amet.</p>
                                    </div>
                                    <div className='grid md:grid-cols-3 gap-6 *:bg-gray-100 *:rounded-xl *:p-8'>
                                        <div className='space-y-3'>
                                            <div className='inline-block p-2 bg-red-600/90 rounded-md shadow-md'><XMarkIcon className='size-7 text-white' /></div>
                                            <h2 className='text-xl text-slate-950'>11 Negative insights</h2>
                                            <p className='text-base text-slate-800'>Defined problems divided into three categories: Crucial, Major, and Minor.</p>
                                        </div>

                                        <div className='space-y-3'>
                                            <div className='inline-block p-2 bg-slate-600/90 rounded-md shadow-md'><MinusIcon className='size-7 text-white' /></div>
                                            <h2 className='text-xl text-slate-950'>9 Neutral insights</h2>
                                            <p className='text-base text-slate-800'>Ideas and suggestions made by test participants.</p>
                                        </div>

                                        <div className='space-y-3'>
                                            <div className='inline-block p-2 bg-green-600/90 rounded-md shadow-md'><CheckIcon className='size-7 text-white' /></div>
                                            <h2 className='text-xl text-slate-950'>10 Positive insights</h2>
                                            <p className='text-base text-slate-800'>All the positive feedback from the users.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Negative */}
                                <div className='grid grid-cols-1 space-y-6 mb-16 p-4 border rounded-xl'>
                                    <div className='mb-2 border-b pb-2'>
                                        <div className='flex items-center text-2xl text-slate-950 font-bold mb-2'>
                                            <div className='inline-block p-2 bg-red-600/90 rounded-md shadow-md items-center mr-2'><XMarkIcon className='size-4 text-white' /></div>11 Negative Insights
                                        </div>
                                    </div>
                                    
                                    <div className='grid gap-y-8 md:grid-cols-3 md:gap-x-8'>
                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-900 items-center mb-4'>
                                            <img src='/images/negative-bar-high.svg' alt='' className='size-7 mr-2' />Crucial</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-red-200/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>01</span>
                                                    <span className='text-slate-800'>Overwhelming Project Creation Process.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>02</span>
                                                    <span className='text-slate-800'>Lack of Flexibility for B2B Users.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>03</span>
                                                    <span className='text-slate-800'>Rigid Workflow.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>04</span>
                                                    <span className='text-slate-800'>Task Management Lacked Collaboration.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-900 items-center mb-4'>
                                            <img src='/images/negative-bar-medium.svg' alt='' className='size-7 mr-2' />Major</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-red-200/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>05</span>
                                                    <span className='text-slate-700'>Insufficient Visual Streamlining.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>06</span>
                                                    <span className='text-slate-700'>Complexity in Task Customization.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>07</span>
                                                    <span className='text-slate-700'>Limited Adaptability for Growing Teams.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>08</span>
                                                    <span className='text-slate-700'>Insufficient Discovery of User Needs.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-900 items-center mb-4'>
                                            <img src='/images/negative-bar-low.svg' alt='' className='size-7 mr-2' />Minor</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-red-200/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>09</span>
                                                    <span className='text-slate-700'>Low Adoption of Advanced Features.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>10</span>
                                                    <span className='text-slate-700'>Underwhelming Task Views.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>11</span>
                                                    <span className='text-slate-700'>Lack of Microservice Flexibility Early On.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Neutral */}
                                <div className='grid grid-cols-1 space-y-6 mb-16 p-4 border rounded-xl'>
                                    <div className='mb-2 border-b pb-2'>
                                        <div className='flex items-center text-2xl text-slate-950 font-bold mb-2'>
                                            <div className='inline-block p-2 bg-gray-600/90 rounded-md shadow-md items-center mr-2'><MinusIcon className='size-4 text-white' /></div>9 Neutral Insights
                                        </div>
                                    </div>
                                    
                                    <div className='grid gap-y-8 md:grid-cols-3 md:gap-x-8'>
                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-950 items-center mb-4'>
                                            <img src='/images/neutral-bar-high.svg' alt='' className='size-7 mr-2' />Crucial</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-gray-200/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>01</span>
                                                    <span className='text-slate-800'>Split User Opinions on Initial Value.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>02</span>
                                                    <span className='text-slate-800'>B2B Flexibility Was Previously Unknown.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>03</span>
                                                    <span className='text-slate-800'>Waiting for Further Product Development.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-950 items-center mb-4'>
                                            <img src='/images/neutral-bar-medium.svg' alt='' className='size-7 mr-2' />Major</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-gray-200/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>04</span>
                                                    <span className='text-slate-800'>User Expectations Evolving.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>05</span>
                                                    <span className='text-slate-800'>Gradual Increase in B2B Interest.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>06</span>
                                                    <span className='text-slate-800'>Potential for Further Refinement in Task Views.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-950 items-center mb-4'>
                                            <img src='/images/neutral-bar-low.svg' alt='' className='size-7 mr-2' />Minor</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-gray-200/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>07</span>
                                                    <span className='text-slate-800'>Decoupling Highlighted Flexibility Needs.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>08</span>
                                                    <span className='text-slate-800'>Gradual Acceptance of Modular Features.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>09</span>
                                                    <span className='text-slate-800'>Mixed Responses to Flexibility.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Positive */}
                                <div className='grid grid-cols-1 space-y-6 mb-24 p-4 border rounded-xl'>
                                    <div className='mb-2 border-b pb-2'>
                                        <div className='flex items-center text-2xl text-slate-950 font-bold mb-2'>
                                            <div className='inline-block p-2 bg-green-600/90 rounded-md shadow-md items-center mr-2'><CheckIcon className='size-4 text-white' /></div>10 Positive Insights
                                        </div>
                                    </div>
                                    
                                    <div className='grid gap-y-8 md:grid-cols-3 md:gap-x-8'>
                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-950 items-center mb-4'>
                                            <img src='/images/positive-bar-high.svg' alt='' className='size-7 mr-2' />Crucial</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-green-200/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>01</span>
                                                    <span className='text-slate-800'>Significant Increase in User Engagement.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>02</span>
                                                    <span className='text-slate-800'>Decoupled Features for Greater Flexibility.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>03</span>
                                                    <span className='text-slate-800'>B2B Engagement Expanded.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>04</span>
                                                    <span className='text-slate-800'>Improved Task Collaboration.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-950 items-center mb-4'>
                                            <img src='/images/positive-bar-medium.svg' alt='' className='size-7 mr-2' />Major</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-green-200/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>05</span>
                                                    <span className='text-slate-800'>Return Rate and Task Creation Boosted.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>06</span>
                                                    <span className='text-slate-800'>Positive User Reception to Modular Design.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>07</span>
                                                    <span className='text-slate-800'>Seamless Feature Integration.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>08</span>
                                                    <span className='text-slate-800'>Enhanced Collaboration Toolsn.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <h3 className='flex font-semibold text-slate-950 items-center mb-4'>
                                            <img src='/images/positive-bar-low.svg' alt='' className='size-7 mr-2' />Minor</h3>
                                            <div className='grid grid-cols-1 gap-y-4 *:bg-green-200/40 *:flex'>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>09</span>
                                                    <span className='text-slate-800'>Smoother Rollout Using Feature Flags.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>10</span>
                                                    <span className='text-slate-800'>Positive Impact on User Retention.</span>
                                                </div>
                                                <div className='p-3 rounded-md'>
                                                    <span className='text-slate-500 pr-2'>11</span>
                                                    <span className='text-slate-800'>User-Friendly Interface for Freelancers.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Insight 1 */}
                                <div className='mb-24'>
                                    <div className='mb-8'>
                                        <h4 className='text-lg text-slate-600 mb-4'>Insight #1</h4>
                                        <div className='border-purple-950 border-l-2 pl-4 mb-4'>
                                            <h3 className='text-2xl text-slate-950 font-bold mb-2'>Overwhelming Project Creation Process</h3>
                                            <p className='text-lg text-slate-800 max-w-2xl'>The original multi-step process (project details, deliverables, payment, contract, preview) was too complex, resulting in high drop-off rates.</p>
                                        </div>
                                    </div>

                                    <div className='grid md:grid-cols-2'>
                                        <div className="grid grid-cols-1 gap-6 max-w-sm">
                                            <div className="">
                                                <h3 className="font-semibold text-slate-950 mb-2">Location</h3>
                                                <p className="text-slate-800">online</p>
                                            </div>
                                            <div className='grid grid-cols-2 max-w-64'>
                                                <div className="">
                                                    <h3 className="font-semibold text-slate-950 mb-2">Severity</h3>
                                                    <h3 className='flex text-slate-800 items-center mb-4'><img src='/images/negative-bar-high.svg' alt='' className='size-6 mr-2' />Crucial</h3>
                                                </div>
                                                <div className="">
                                                    <h3 className="font-semibold text-slate-950 mb-2">Type</h3>
                                                    <h3 className='flex text-slate-800 items-center mb-4'><div className='inline-block p-1 bg-red-600/90 rounded-md shadow-md items-center mr-2'><XMarkIcon className='size-4 text-white' /></div>Negative</h3>
                                                </div>
                                            </div>
                                            <div className="">
                                                <h3 className="font-semibold text-slate-950 mb-2">Recommendation</h3>
                                                <p className="text-slate-800">Streamline the process and prioritise each component the user interact with</p>
                                            </div>
                                        </div>

                                        <div className='mt-12 md:mt-0'>
                                            <img src='/images/insight-1.png' className='size-56' />
                                        </div>
                                    </div>
                                </div>

                                {/* Insight 2 */}
                                <div className='mb-24'>
                                    <div className='mb-8'>
                                        <h4 className='text-lg text-slate-600 mb-4'>Insight #2</h4>
                                        <div className='border-purple-950 border-l-2 pl-4 mb-4'>
                                            <h3 className='text-2xl text-slate-950 font-bold mb-2'>Split User Opinions on Initial Value</h3>
                                            <p className='text-lg text-slate-800 max-w-2xl'>While some users saw immediate value in Fullgap’s new features, others felt that the product was not yet compelling enough to adopt fully.</p>
                                        </div>
                                    </div>

                                    <div className='grid md:grid-cols-2'>
                                        <div className="grid grid-cols-1 gap-6 max-w-sm">
                                            <div className="">
                                                <h3 className="font-semibold text-slate-950 mb-2">Location</h3>
                                                <p className="text-slate-800">Every tested method</p>
                                            </div>
                                            <div className='grid grid-cols-2 max-w-64'>
                                                <div className="">
                                                    <h3 className="font-semibold text-slate-950 mb-2">Type</h3>
                                                    <h3 className='flex text-slate-800 items-center mb-4'><div className='inline-block p-1 bg-gray-600/90 rounded-md shadow-md items-center mr-2'><MinusIcon className='size-4 text-white' /></div>Neutral</h3>
                                                    
                                                </div>
                                            </div>
                                            <div className="">
                                                <h3 className="font-semibold text-slate-950 mb-2">Recommendation</h3>
                                                <p className="text-slate-800">Competitive analysis and the use of feature flag</p>
                                            </div>
                                        </div>

                                        <div className='mt-12 md:mt-0'>
                                            <img src='/images/insight-2.png' className='size-56' />
                                        </div>
                                    </div>
                                </div>

                                {/* Insight 3 */}
                                <div className='mb-24'>
                                    <div className='mb-8'>
                                        <h4 className='text-lg text-slate-600 mb-4'>Insight #3</h4>
                                        <div className='border-purple-950 border-l-2 pl-4 mb-4'>
                                            <h3 className='text-2xl text-slate-950 font-bold mb-2'>Significant Increase in User Engagement</h3>
                                            <p className='text-lg text-slate-800 max-w-2xl'>The streamlined project creation process, combined with better task management, resulted in a 45% increase in user engagement.</p>
                                        </div>
                                    </div>

                                    <div className='grid md:grid-cols-2'>
                                        <div className="grid grid-cols-1 gap-6 max-w-sm">
                                            <div className="">
                                                <h3 className="font-semibold text-slate-950 mb-2">Location</h3>
                                                <p className="text-slate-800">Every tested method</p>
                                            </div>
                                            <div className='grid grid-cols-2 max-w-64'>
                                                <div className="">
                                                    <h3 className="font-semibold text-slate-950 mb-2">Type</h3>
                                                    <h3 className='flex text-slate-800 items-center mb-4'><div className='inline-block p-1 bg-green-600/90 rounded-md shadow-md items-center mr-2'><CheckIcon className='size-4 text-white' /></div>Positive</h3>
                                                    
                                                </div>
                                            </div>
                                            <div className="">
                                                <h3 className="font-semibold text-slate-950 mb-2">Recommendation</h3>
                                                <p className="text-slate-800">Decouple project components into standalone and expand task management</p>
                                            </div>
                                        </div>

                                        <div className='mt-12 md:mt-0'>
                                            <img src='/images/insight-3.png' className='size-56' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Outcome & Reflection */}
                        <section className='mb-24'>
                            <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-10'>
                                <div className='border-slate-300 border-b mb-8'>
                                    <h5 className='text-6xl font-thin text-slate-950 mb-4'>Outcome & Reflection</h5>
                                </div>

                                <div className='grid grid-cols-1 gap-y-6 mb-12'>
                                    <div className=''>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-3'>Refined Visuals</h3>
                                        <p className='text-lg text-slate-800'>After designing the single page system, I conducted usability tests with targeted users identified through analytics. Freelancers appreciated the flexibility, and B2B users welcomed the ability to manage internal projects without unnecessary features.</p>
                                    </div>
                                </div>

                                <div className='mb-24'>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8 mb-16'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>New Project Creation</h3>
                                        <div className=''>
                                            <img src='/images/fg/New-project-creation.png' />
                                        </div>
                                        <div className='mt-8'>
                                            <ul className='*:text-base *:mb-2 last-of-type:mb-0 *:p-4 *:text-green-600 *:font-medium *:bg-green-100 *:rounded-lg'>
                                                <li>To streamline project creation, I designed a single-page workflow. This simplified approach focuses on essential tasks, making it efficient and user-friendly.</li>
                                                <li>Features like invoice and contract generation were made optional, ensuring the design caters to a wider range of users.  Those who need these capabilities can easily add them later.</li>
                                                <li>To further boost efficiency, I created a reusable component for adding tasks and milestones. This component can be integrated into any page, eliminating the need for users to navigate away from their current context.</li>
                                                <li>Finally, I added a &quot;duplicate&quot; function for tasks and milestones. This allows users to quickly create similar entries with a single click, saving them time and effort.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8 mb-16'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Task View - List</h3>
                                        <div className=''>
                                            <img src='/images/fg/Task-view-list.png' />
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8 mb-16'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Task View - Board</h3>
                                        <div className=''>
                                            <img src='/images/fg/Task-list-board.png' />
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8 mb-16'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>New Task Details</h3>
                                        <div className=''>
                                            <img src='/images/fg/Task-details.png' />
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8 mb-16'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>Share Component</h3>
                                        <div className=''>
                                            <img src='/images/fg/Share-feature.png' />
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8 mb-16'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>New Invoice - Standalone</h3>
                                        <div className=''>
                                            <img src='/images/fg/New-invoice.png' />
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8 mb-16'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>New Invoice Details</h3>
                                        <div className=''>
                                            <img src='/images/fg/New-invoice-details.png' />
                                        </div>
                                    </div>

                                    <div className='rounded-xl bg-gradient-to-r from-purple-900 to-blue-800 p-4 md:p-8 mb-16'>
                                        <h3 className='flex items-center text-lg text-white font-black mb-8'>New Contract - Standalone</h3>
                                        <div className=''>
                                            <img src='/images/fg/New-contract-standalone.png' />
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 space-y-6 mb-24'>
                                    <div className='border-purple-950 border-l-2 pl-4 mb-6'>
                                        <h3 className='text-2xl text-slate-950 font-bold mb-2'>Lesson Learned</h3>
                                        <p className='text-lg text-slate-800 max-w-2xl'>Research is sometimes more about learning what not to do. It helps us avoid repeating mistakes and guides us towards better solutions.</p>
                                    </div>
                                    <div className='grid md:grid-cols-3 gap-6 *:bg-gray-100 *:rounded-xl *:p-8'>
                                        <div className='space-y-3'>
                                            <div className='inline-block p-2 bg-red-600/90 rounded-md shadow-md'><XMarkIcon className='size-7 text-white' /></div>
                                            <h2 className='text-xl text-slate-950'>What didn&apos;t work</h2>
                                            <p className='text-base text-slate-800'>The initial design relied too heavily on visual streamlining, which wasn’t enough without decoupling the features.</p>
                                        </div>

                                        <div className='space-y-3'>
                                            <div className='inline-block p-2 bg-slate-600/90 rounded-md shadow-md'><MinusIcon className='size-7 text-white' /></div>
                                            <h2 className='text-xl text-slate-950'>What I&apos;d do differently</h2>
                                            <p className='text-base text-slate-800'>Start with more modular thinking from the outset, rather than relying on visual design alone to solve complex user journeys.</p>
                                        </div>

                                        <div className='space-y-3'>
                                            <div className='inline-block p-2 bg-green-600/90 rounded-md shadow-md'><CheckIcon className='size-7 text-white' /></div>
                                            <h2 className='text-xl text-slate-950'>What worked</h2>
                                            <p className='text-base text-slate-800'>The modular design was key in meeting both freelancer and B2B needs, creating flexibility and improving user satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section className='mb-24'>
                            <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-10'>
                                <div className='border-slate-300 border-b mb-8'>
                                    <h5 className='text-6xl font-thin text-slate-950 mb-4'>Conclusion</h5>
                                </div>

                                <div className='grid grid-cols-1 gap-y-6 mb-12'>
                                    <div className=''>
                                        {/* <h3 className='text-2xl text-slate-950 font-bold mb-3'></h3> */}
                                        <p className='text-lg text-slate-800 pb-4'>This project highlights my ability to identify and address user pain points through research, test-driven design iterations, and modular solutions.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            {/* <LockScreen /> */}
        </div>
    )
}


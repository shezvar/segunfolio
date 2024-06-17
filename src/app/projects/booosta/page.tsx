'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
import LockScreen from '@/components/passwordRequest'
import ProjectHeader from '@/components/project-header'
// import ImageGallery from '@/components/image-gallery'

const projectData = [
    { goBackUrl: '/', title: 'The #1 Operating System For E-commerce In Africa', subtext: 'RMS provides an all-in-one platform for retailers to run their businesses more efficiently and profitably.', imageUrl: '/images/bs-market-women.jpeg', alt: 'Booosta', role1: 'UX Design', role2: 'UI Design', role3: 'Research', role4: 'Product Management', role5: 'Product Envisioning', platform1: 'Web Application', platform2: 'Mobile Application', platform3: '' },
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
export default function Booosta() {

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
                            <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>As the lead product designer for Prunedge&apos;s Retail Management System (RMS), I spearheaded a project that significantly impacted Nigeria&apos;s retail sector.</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-500'>
                                <p className='text-sm'>The RMS addressed critical pain points for micro, small-scale enterprises, and itinerant retailers, offering a comprehensive solution that includes sales tracking, supply chain management, and value-added services like business financing and insurance.</p>
                                <hr />
                                <h5 className='text-5xl font-sans text-gray-400'>This innovative system is poised to contribute to the retail sector&apos;s projected growth, <span className='text-gray-900'>potentially increasing its GDP contribution from 16% to 20% by 2025.</span></h5>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-md font-medium text-zinc-400'>Problem Framing</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>Nigeria&apos;s retail sector, while a significant contributor to the nation&apos;s economy, faces numerous challenges, particularly for micro and small-scale enterprises (MSMEs) and itinerant retailers.</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-500'>
                                <p className='text-sm text-gray-500'>Key issues include lack of access to credit, supply chain inefficiencies, and inadequate tools for business management and financial planning.</p>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 text-gray-900'>
                                <div className='border p-2 bg-zinc-100 rounded-lg'>
                                    <div className='p-5 bg-white rounded-md shadow'>
                                        <p className='text-lg'><strong className='text-5xl'>82%</strong> of MSMEs lack access to credit facilities.</p>
                                    </div>
                                </div>
                                <div className='border p-2 bg-zinc-100 rounded-lg'>
                                    <div className='p-5 bg-white rounded-md shadow'>
                                        <p className='text-xl'><strong className='text-5xl'>83%</strong> struggle with supply chain issues.</p>
                                    </div>
                                </div>
                                <div className='border p-2 bg-zinc-100 rounded-lg'>
                                    <div className='p-5 bg-white rounded-md shadow'>
                                        <p className='text-xl'><strong className='text-5xl'>76%</strong> would accept credit if provided.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-md font-medium text-zinc-400'>Role and Team</h5>
                            <div className=''>
                                <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>My role</h5>
                                <div className='text-gray-500'>
                                    <p className='text-sm'>As the senior product designer, I led a team of developers, a product designer, and product managers. My responsibilities included overseeing the design process, conducting research, and ensuring the final product met user needs and business goals.</p>
                                    <hr className='mt-6 mb-8' />
                                    <div className='grid grid-cols-1 lg:grid-cols-6 items-center'>
                                        <div className='col-span-1 lg:col-span-3'>
                                            <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-400'>Our team operated under the <span className='text-gray-900'>Agile methodology</span>, ensuring continuous communication and iterative development. The team consisted of: <span className='text-gray-900'>Chief Product Officer (CPO), Product Managers, Design Team Members, Engineers, and Field Agent and Support Officers</span></h5>
                                        </div>
                                        <div className='col-span-1 lg:col-end-7 lg:col-span-2 w-full min-h-[1rem]'>
                                            <div className='overflow-hidden'>
                                                <img src='/images/fg-leadership.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-md font-medium text-zinc-400'>Approach</h5>
                            <div className=''>
                                <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>Our approach was centered on user-centric design and iterative feedback. Key strategies included:</h5>
                                <div className='grid grid-cols-1 gap-5'>
                                    <div className=''>
                                        <div className='relative w-full min-h-[1rem] mt-8 group'>
                                            <div className='bg-zinc-100 p-16 rounded-lg border'>
                                                <img src='/images/bs-survey.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                            </div>
                                        </div>
                                        <p className='text-gray-500 text-sm mt-2'><strong>Ethnographic Research:</strong> This shows some of the research I did during <strong>field survey</strong>. I asked some users to perform certain task and <strong>recorded their interactions and cadence</strong>. I then later asked them some questions like how they would have expected some features to work and also issues about <strong>normenclature</strong>.</p>
                                    </div>
                                    <div className=''>
                                        <div className='relative w-full min-h-[1rem] mt-8 group'>
                                            <div className='bg-zinc-100 p-16 rounded-lg border'>
                                                <img src='/images/bs-journeymap.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                            </div>
                                        </div>
                                        <p className='text-gray-500 text-sm mt-2'><strong>Usability Testing:</strong> I also did usability testing in conjunction with the previous research, the type of users and technical savviness determined the type of research and interview I employed</p>
                                    </div>

                                    <div className=''>
                                        <div className='relative w-full min-h-[1rem] mt-8 group'>
                                            <div className='bg-zinc-100 p-16 rounded-lg border'>
                                                <img src='/images/bs-marketcomp.png' alt='' className='rounded-md h-full w-full block object-cover object-center shadow-md' />
                                            </div>
                                        </div>
                                        <p className='text-gray-500 text-sm mt-2'><strong>Competitive Benchmarking:</strong> During the Competitive Benchmarking phase, I meticulously examined some retail mobile apps and went deeper on four. I aimed to understand their strength and weaknesses in the retail industry.</p>
                                    </div>

                                    <div className=''>
                                        <div className='relative w-full min-h-[1rem] mt-8 group'>
                                            <div className='bg-zinc-100 p-16 rounded-lg border'>
                                                <img src='/images/bs-persona.png' alt='' className='rounded-2xl h-full w-full block object-cover object-center' />
                                            </div>
                                        </div>
                                        <p className='text-gray-500 text-sm mt-2'><strong>Persona:</strong> Having gathered valuable insights from my research, I created user personas. This helped throughout the design and development process, it ensures that the product is tailored to the specific needs and preferences of our target audience, leading to better user satisfaction and engagement.</p>
                                    </div>
                                    <hr className='my-8' />
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-1'>
                            <div className='grid grid-cols-1'>
                                <h5 className='text-2xl font-sans text-gray-400'><span className='text-gray-900'>Annotation on wireframes</span> to guide the <span className='text-gray-900'>engineering</span> team and technical stakeholder. I was able to make some iterations to align with some <span className='text-gray-900'>technical feasibility</span></h5>
                            </div>
                        </div>
                        <div className='mx-auto'>
                            <div className=''>
                                <div className='relative w-full min-h-[1rem] mt-8 group'>
                                    <div className='bg-zinc-100 p-16'>
                                        <img src='/images/bs-wd-wireframe.png' alt='' className='rounded-lg h-full w-full block object-cover object-center bg-white p-10 shadow' />
                                        <img src='/images/bs-pd-wireframe.png' alt='' className='rounded-lg h-full w-full block object-cover object-center bg-white p-10 shadow mt-10' />
                                        <img src='/images/bs-ob-wireframe.png' alt='' className='rounded-lg h-full w-full block object-cover object-center bg-white p-10 shadow mt-10' />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-md font-medium text-zinc-400'>Challenges</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>When integrating digital solutions into retail operations, several significant challenges often arise.</h5>
                            <div className='grid grid-cols-1 lg:grid-cols-3 pt-8 gap-6'>
                                <div className='p-4 bg-red-50 rounded-lg rotate-6'>
                                    <div className='overflow-hidden'>
                                        <img src='/images/bs-trust.png' alt='' className='rounded-md h-full w-full block object-cover object-center mb-4' />
                                    </div>
                                    <h2 className='font-semibold pb-2 text-gray-900'>Trust Issues:</h2>
                                    <p className='text-gray-700 text-sm'>Many retailers were skeptical about the security and reliability of digital solutions.</p>
                                </div>

                                <div className='p-4 bg-red-50 rounded-lg -rotate-12'>
                                    <div className='overflow-hidden'>
                                        <img src='/images/bs-useradoption.png' alt='' className='rounded-md h-full w-full block object-cover object-center mb-4' />
                                    </div>
                                    <h2 className='font-semibold pb-2 text-gray-900'>User Adoption:</h2>
                                    <p className='text-gray-700 text-sm'>Ensuring the solution was easy to use and addressed real needs to drive adoption.</p>
                                </div>

                                <div className='p-4 bg-red-50 rounded-lg -rotate-3'>
                                    <div className='overflow-hidden'>
                                        <img src='/images/bs-resource.png' alt='' className='rounded-md h-full w-full block object-cover object-center mb-4' />
                                    </div>
                                    <h2 className='font-semibold pb-2 text-gray-900'>Resource Constraints:</h2>
                                    <p className='text-gray-700 text-sm'>Balancing thorough research and design within limited time and budget.</p>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-md font-medium text-zinc-400'>Solution</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>The Retail Management System (RMS) was developed to address the identified challenges:</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-500 '>
                                <p className='text-sm'>Creating the optimal design for Fullgap required <strong className='text-gray-900'>numerous visual drafts and prototypes</strong>. After extensive testing and multiple iterations, we identified the most effective solutions to address user pain points. These chosen designs represent the best of our efforts to enhance the user experience.</p>
                                <hr />
                                <p className='text-sm'>Nevertheless, our commitment to excellence means we will continue testing and optimizing these features to ensure they meet our users&apos; evolving needs. Here are the key screens we implemented:</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-20'>
                            <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>Colourful illustrations</h5>
                            <div className='grid grid-cols-1 space-y-6 text-gray-500'>
                                <p className='text-sm'>To capture users&apos; attention based on their ethnography, we used bright and colorful illustrations. Our research showed that most users engage more with visuals than text, which we considered when designing the illustration theme.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6'>
                            <div className='bg-zinc-100 p-16 rounded-lg mt-10 border'>
                                <div className='relative w-full min-h-[1rem] group'>
                                    <div className=''>
                                        <img src='/images/bs-bright-illustrations.png' alt='' className='bg-white rounded-lg shadow p-16 h-full w-full block object-cover object-center' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-20'>
                                <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>Onboarding solution</h5>
                                <div className='grid grid-cols-1 space-y-6 text-gray-500'>
                                    <p className='text-sm'>To ensure inclusivity, we allowed users to select their preferred language. For registration, we used mobile numbers instead of email addresses, as the majority of our users have mobile phones but few have email accounts.</p>
                                </div>
                            </div>

                            <div className='mx-auto max-w-4xl lg:px-8'>
                                <div className='bg-zinc-100 rounded-lg border p-16 mt-10'>
                                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                        <img src='/images/bs-mobile-1.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-mobile-2.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-mobile-3.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-mobile-4.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-mobile-5.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-mobile-6.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-20'>
                                <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>Inventory</h5>
                                <div className='grid grid-cols-1 space-y-6 text-gray-500'>
                                    <p className='text-sm'>Users can now see low-stock products from the inventory list and take immediate action, resolving restocking issues. To prevent duplicates, a feature shows matching products when adding new items, allowing updates instead. Key actions can also be performed directly from the product details page.</p>
                                </div>
                            </div>

                            <div className='mx-auto max-w-4xl lg:px-8'>
                                <div className='bg-zinc-100 p-16 mt-10 rounded-lg border'>
                                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                        <img src='/images/bs-inv-1.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-inv-2.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-inv-3.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-inv-4.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-inv-6.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-inv-5.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-20'>
                                <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>Sales & Debt Recovery</h5>
                                <div className='grid grid-cols-1 space-y-6 text-gray-500'>
                                    <p className='text-sm'>We realized sellers often struggle to track partial payments, view sales data, and maintain customer records. The Sales page addresses all these issues, and the data and features are also accessible through other modules.</p>
                                </div>
                            </div>

                            <div className='mx-auto max-w-4xl lg:px-8'>
                                <div className='bg-zinc-100 p-16 mt-10 rounded-lg border'>
                                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                        <img src='/images/bs-sales-1.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-sales-2.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-sales-3.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-sales-4.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-sales-5.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                        <img src='/images/bs-sales-6.png' alt='' className='bg-gray-300 rounded-lg shadow-lg h-full w-full block object-cover object-center' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-zinc-50 mt-20'>
                            <div className='mx-auto max-w-4xl px-6 pt-20 lg:px-8 lg:py-20'>
                                <h5 className='uppercase text-lg font-medium text-zinc-400'>Results and Impact</h5>
                                <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>Key Performance Indicators (KPIs):</h5>
                                <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                    <p className='text-sm'>The results were nothing short of transformative:</p>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-700 rounded-xl overflow-hidden'>
                                    <div className='text-2xl font-sans p-6 bg-white rounded-lg'><strong className='text-4xl block pb-2 font-semibold text-indigo-500'>Increased Adoption: </strong>Early usability tests showed a high acceptance rate among users, particularly millennials and Gen Z retailers.</div>
                                    <div className='text-2xl font-sans p-6 bg-white rounded-lg'><strong className='text-4xl block pb-2 font-semibold text-indigo-500'>Positive Feedback: </strong>Users appreciated the comprehensive features, especially the integration of financial services.</div>
                                    <div className='col-span-1 lg:col-span-3 text-2xl font-sans p-6 bg-white rounded-lg'><strong className='text-4xl block pb-2 font-semibold text-indigo-500'>Improved KPIs: </strong>Key performance indicators such as user engagement, transaction volume, and customer satisfaction improved significantly.</div>
                                </div>
                                <hr className='mt-10 mb-6' />
                                <p className='text-sm text-gray-500'>The RMS is expected to play a crucial role in boosting the retail sector&apos;s GDP contribution, supporting the growth and scalability of MSMEs, and enhancing the overall efficiency of the retail value chain in Nigeria.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-4xl px-6 pt-10 lg:px-8 lg:pt-40'>
                            <h5 className='uppercase text-lg font-medium text-zinc-400'>Next Steps</h5>
                            <h5 className='text-2xl font-sans pt-3 pb-4 text-gray-900'>Future plans</h5>
                            <div className='grid grid-cols-1 pb-8 space-y-6 text-gray-500'>
                                <p className='text-sm'>The journey doesn&apos;t end here. I will:</p>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-3 pb-16 text-gray-700 rounded-xl overflow-hidden'>
                                <div className='p-6 bg-indigo-50'>Feature Enhancements: Based on user feedback, further refine and enhance features.</div>
                                <div className='p-6 bg-indigo-100'>Scalability: Expand the RMS to other African markets.</div>
                                <div className='p-6 bg-indigo-200'>Ongoing Support: Provide continuous support and training to ensure successful adoption and usage.</div>
                            </div>

                            <div className='text-2xl font-sans lg:text-3xl mb-20 text-gray-900'>By addressing critical pain points and offering a robust solution, the Retail Management System is set to transform Nigeria&apos;s retail landscape, empowering small businesses and driving economic growth.</div>
                        </div>

                    </div>
                </div>
            </main>

            {/* <LockScreen /> */}
        </div>
    )
}


'use client'
import React, { createContext, useContext, useState } from "react";
import { HeaderLight, HeaderDark } from '@/components/header'
import Footer from '@/components/footer'
import { ArchiveCard } from '@/components/itemCards'



export default function Archive() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const archiveList = [
        { title: 'HRPay', description: 'HrPay is a web app for managing HR tasks like employee data, leave, performance, recruitment, and payroll.' },
        { title: 'Fullgap', description: 'System for the freelance economy, designed to help creatives in managing their clients and projects effectively.' },
        { title: 'Century-Tech', description: 'Optimizing the onboarding processes means no more navigating complex menus, deciphering jargon, or wrestling with confusing interfaces.' },
        { title: 'Booosta', description: 'RMS provides an all-in-one platform for retailers to run their businesses more efficiently and profitably.' },
        { title: 'ALAT by WEMA', description: 'Amazing ways to enjoy Nigeria first truly digital bank' },
        { title: 'YipCart', description: 'Sell with ease your one-stop social media ecommerce system for SME sellers' },
        { title: 'PollEasy', description: 'PollEasy is an election service offering strategy, research, campaigning, and communication tools.' },
        { title: 'FCMB', description: 'Your financial goals, our banking solutions: current accounts, loans, savings, investments, and easy payments.' },
        { title: 'Distru', description: 'The central hub for your cannabis operation, driving sales, ensuring compliance, managing inventory, and tracking costs from seed to sale.' },
        { title: 'iPOS by Walure', description: 'Aautomates your retail business processes with a comprehensive suite of powerful and flexible products.' },
        { title: 'EventEdge', description: 'Create, manage and track your event activitites seamlessly' },
        { title: 'Vetiva', description: 'A world class Investment Banking Practice with core Pan-African competence.' },
        { title: 'BiTams', description: 'The Biometric Time and Attendance Management System handles attendance, captures biometric data, and manages identity, logging, and reporting.' },
        { title: 'Prowoks', description: 'Prowoks is a comprehensive business process automation and document management system for enterprises and the public sector.' },
        { title: 'BIMS', description: 'Biometric solution streamlines identity management and ID card generation.' },
        { title: 'iProkure', description: 'E-procurement system streamlines public procurement for state parastatals, enhancing transparency, competition, and efficiency.' },
        { title: 'MTN Stanbic Loan', description: 'Invest in MTN with the MTN Loan Application Management Solution and simplify share ownership with Stanbic loans.' },
        { title: 'IMS', description: 'The Infrastructure Monitoring Solution includes a web app and IoT devices for parameter monitoring, maintenance, reporting, analytics, user management, and alerts.' },
        { title: 'Nakise', description: 'A platform that enables organisations seamlessly manage the lifecycle of their programs and its beneficiaries.' },
        { title: 'GloEpid', description: 'A dual-purpose technology for tracking & surveillance, focusing on contact tracing, self-assessment, & reporting to swiftly contain COVID-19 spread.' },
        { title: 'Pneuma Care', description: 'Empowering healthcare through accessible technology and services, ensuring quality care for all, anywhere.' },
        { title: 'VTS', description: 'The Vehicle Tracking Solution is a GPS-based system for fleet management with real-time tracking, web and mobile apps, and management tools.' },
        // { title: 'MIPAD', description: '...' },
        { title: 'Ondo Linyi', description: 'Retail management platform' },
        { title: 'Lotus Investment', description: 'A full-service ethical investment management company specializing in Asset Management, Private Wealth Management, and Financial Advisory services' },
        { title: 'BMS', description: 'The Beneficiary Management System digitizes & manages empowerment schemes, ensuring transparency across state MDAs with program tracking & attendance logging.' },
        { title: 'Total Metrics', description: 'Total Metrics is an interactive web application for monitoring projects, managing resources, and supporting project strategy.' },
        { title: 'ABEMS', description: 'The Automated Budget and Expenditure Management System is a robust Web and Mobile application managing state government budgets and expenditures.' },
    ]

    return (
        <div className="bg-page">

            <HeaderDark />

            <main>
                <div className="relative isolate">
                    <svg
                        className="hidden absolute inset-x-0 top-0 -z-10 h-[68rem] w-full stroke-gray-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-800">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
                    </svg>

                    <div
                        className="hidden absolute left-1/2 right-0 -top-60 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div className="aspect-[801/1036] w-[59rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-10"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>

                    <div className="overflow-hidden">

                        {/* Experience starts */}
                        <div className='mx-auto flex items-center mt-48 mb-16 xl:max-w-7xl px-6 lg:px-8'>
                            <div className='w-full space-y-8'>
                                <h1 className='text-3xl lg:text-[3rem] text-white font-[Lora] leading-normal font-black'>Archive</h1>
                                <div className='grid grid-cols-12 text-white'>
                                    <div className='mx-auto max-w-2xl col-span-full lg:col-span-5 mb-6 lg:mb-0'>
                                        <h2 className='text-lg lg:text-[1.5rem] text-gray-200 leading-[1.7] tracking-wide'>These are some projects I&apos;ve worked on trying to put my dent in the universe</h2>
                                    </div>
                                    <div className='space-y-4 text-lg col-span-full lg:col-start-7 lg:col-span-5 leading-relaxed'>
                                        <p className='font-bold'>The list includes internal tooling applications spanning web, mobile, and IoT.</p>
                                        <p className=''> Most were solo projects; others involved collaboration with fellow designers. Leveraging my engineering background, I also implemented designs using JavaScript frameworks.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* What I have learnt */}
                        <div className='mx-auto flex items-center mb-48 xl:max-w-7xl px-6 lg:px-8'>
                            <div className='w-full space-y-8'>
                                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-zinc-400'>
                                    {archiveList.map((item, index) => (
                                        <ArchiveCard
                                            key={item.title}
                                            number={currentIndex + index}
                                            title={item.title}
                                            description={item.description}
                                        />
                                    ))}
                                </div>
                                <div className='hidden group flex flex-col border text-white border-gray-800 bg-zinc-950 gap-4 rounded h-full p-6'>
                                    <h3 className='text-xl font-medium'>That&apos;s not all!</h3>
                                    <p className=" leading-relaxed">There are other projects I am not at liberty to display on this site</p>
                                </div>
                            </div>
                        </div>
                        {/* What I have learnt ends here */}

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}


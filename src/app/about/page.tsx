'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
import { ComingSoon, ProjectCard2 } from '@/components/itemCards'
import Footer from '@/components/footer'
import Biography from '@/app/about/biography'

const projectData = [
  { image: 'images/fg-cover1.png', alt: 'first image', title: 'System for the freelance economy, designed to help creatives in managing their clients and projects effectively.', description: 'Product Design at Fullgap', link: '/projects/fullgap' },
  { image: 'images/bs-cover.png', alt: 'first image', title: 'Optimizing the onboarding processes means no more navigating complex menus, deciphering jargon, or wrestling with confusing interfaces.', description: 'Booosta by Prunedge', link: 'projects/booosta' },
  { image: 'images/pw-cover1.png', alt: 'first image', title: 'The automated budget system in state governance is an enterprise solution that offers improved transparency and accountability in the budget and expenditure management process.', description: 'Prowoks by World Bank', link: 'projects/prowoks' }
]

const comingSoon = [
  { image: 'images/ct-cover.png', alt: 'first image', title: 'Century Tech', description: 'Optimizing the onboarding processes means no more navigating complex menus, deciphering jargon, or wrestling with confusing interfaces.', industry: 'Edutech', year: '2023' },
  { image: 'images/ip-cover.png', alt: 'first image', title: 'iPOS by Walure', description: 'IPOS by Smartware offers powerful and flexible products to automate your retail management processes.', industry: 'E-commerce', year: '2024' },
  { image: 'images/mt-cover.png', alt: 'first image', title: 'MTN Nigeria', description: 'Invest in MTN with the MTN Loan Application Management Solution and simplify share ownership with Stanbic loans.', industry: 'Fintech', year: '2020' }
]

export default function Home() {

  return (
    <div className="bg-page">

      <HeaderDark />

      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[68rem] w-full stroke-gray-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
            className="absolute left-1/2 right-0 -top-60 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
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

            <Biography />

            <div className='mx-auto flex items-center my-48 xl:max-w-7xl px-6 lg:px-8 hidden'>
              <div className='w-full space-y-16'>
                <h1 className='text-4xl lg:text-8xl font-bold text-white'>About me</h1>
                <div className='max-w-3xl leading-relaxed text-gray-400 text-lg space-y-12'>
                  <div className='space-y-4'>
                    <h3 className='text-gray-100 text-3xl font-medium'>A curious begining</h3>
                    <p className="">My name is Segun, and I hail from a small town in Nigeria. From a young age, my curiosity led me to dismantle and fix everything I could find around the house, earning me the nickname &quot;the tech guy&quot; among my peers. They joked that to be my friend, all you needed was a laptop—a luxury I cherished, spending hours exploring Windows OS and its myriad applications.</p>
                  </div>
                  <div className='space-y-4'>
                    <h3 className='text-gray-100 text-3xl font-medium'>Creative endeavors</h3>
                    <p className="">My creativity extended beyond tech. I loved drawing and constructing things, and one of my favorite projects was building a mini airplane from PVC and aluminum propellers. Though it crashed just centimeters off the ground, it sparked my passion for making things.</p>
                  </div>
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

            <div className='mx-auto flex items-center my-48 xl:max-w-7xl px-6 lg:px-8'>
              <div className='w-full space-y-8'>
                <h1 className='text-5xl font-bold text-white'>Key things I&quot;ve learnt</h1>
                <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">Here are a few key takeaways I’ve learned over my years as a designer. They’ve come in handy for me, hopefully they’ll come in handy for you too.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-400'>

                  <div className='flex flex-col md:flex-row border border-gray-800 bg-zinc-950 gap-4 rounded h-full transition duration-500 p-6'>
                    <div className='w-[5rem] h-[5rem] min-h-[4rem] min-w-[4rem] items-center justify-center text-white'>
                      <img src='images/BalanceIcon.png' />
                    </div>

                    <div className='space-y-2'>
                      <h3 className='text-gray-100 text-xl font-medium'>Balancing Design Freedom</h3>
                      <p className="">Let standards guide, not dictate, our design processes. What works in one situation may not apply universally.</p>
                    </div>
                  </div>

                  <div className='flex flex-col md:flex-row border border-gray-800 bg-zinc-950 gap-4 rounded h-full transition duration-500 p-6'>
                    <div className='w-[5rem] h-[5rem] min-h-[4rem] min-w-[4rem] items-center justify-center text-white'>
                      <img src='images/HarmonyIcon.png' />
                    </div>
                    <div className='space-y-2'>
                      <h3 className='text-gray-100 text-xl font-medium'>Unvailing The Harmony</h3>
                      <p className="">Design is similar to mathematics; understanding the problem simplifies proposing a solution.</p>
                    </div>
                  </div>

                  <div className='flex flex-col md:flex-row border border-gray-800 bg-zinc-950 gap-4 rounded h-full transition duration-500 p-6'>
                    <div className='w-[5rem] h-[5rem] min-h-[4rem] min-w-[4rem] items-center justify-center text-white'>
                      <img src='images/PrecisionIcon.png' />
                    </div>
                    <div className='space-y-2'>
                      <h3 className='text-gray-100 text-xl font-medium'>Precision and Purpose</h3>
                      <p className="">I focus on design details, understanding the core problem, and identifying success metrics.</p>
                    </div>
                  </div>

                  <div className='flex flex-col md:flex-row border border-gray-800 bg-zinc-950 gap-4 rounded h-full transition duration-500 p-6'>
                    <div className='w-[5rem] h-[5rem] min-h-[4rem] min-w-[4rem] items-center justify-center text-white'>
                      <img src='images/SuccessIcon.png' />
                    </div>
                    <div className='space-y-2'>
                      <h3 className='text-gray-100 text-xl font-medium'>Successful Product Development</h3>
                      <p className="">Balancing business goals, user needs, and available technology is key to creating a successful product.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


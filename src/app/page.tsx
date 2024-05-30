'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
import { ComingSoon, ProjectCard2 } from '@/components/itemCards'
import { ArrowDownRightIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/footer'

const projectData = [
  { image: 'images/fg-cover1.png', alt: 'first image', title: 'System for the freelance economy, designed to help creatives in managing their clients and projects effectively.', description: 'Product Design at Fullgap', link: '/projects/fullgap' },
  { image: 'images/bs-cover.png', alt: 'first image', title: 'Optimizing the onboarding processes means no more navigating complex menus, deciphering jargon, or wrestling with confusing interfaces.', description: 'Booosta by Prunedge', link: 'projects/booosta' },
  { image: 'images/pw-cover1.png', alt: 'first image', title: 'The automated budget system in state governance is an enterprise solution that offers improved transparency and accountability in the budget and expenditure management process.', description: 'Prowoks by World Bank', link: 'projects/prowoks' }
]

const comingSoon = [
  { image: 'images/ct-cover.png', alt: 'first image', title: 'Century Tech', description: 'Optimizing the onboarding processes means no more navigating complex menus, deciphering jargon, or wrestling with confusing interfaces.', industry: 'Edutech', year: '2023' },
  { image: 'images/ip-cover.png', alt: 'first image', title: 'iPOS by Walure', description: 'IPOS by Smartware offers powerful and flexible products to automate your retail management processes.', industry: 'E-commerce', year: '2024' },
  { image: 'images/mt-cover.png', alt: 'first image', title: 'MTN Nigeria', description: 'Invest in MTN with the MTN Loan Application Management Solution and Stanbic loans, simplifying share ownership and investing in you.', industry: 'Fintech', year: '2020' }
]

export default function Home() {

  return (
    <div className='bg-black'>

      <HeaderDark />

      <main>
        <div className="relative isolate">
          <svg
            className="hidden absolute inset-x-0 top-0 -z-10 h-[68rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>

          <div
            className="hidden absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div className="aspect-[801/1036] w-[59rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>

          <div className="overflow-hidden">

            <div className='mx-auto flex items-center mt-16 h-[75vh] xl:max-w-7xl px-6 lg:px-8'>
              <div className='w-full space-y-8'>
                <h1 className='text-4xl lg:text-8xl font-semibold text-white'>Meet Segun - Product Designer working and living in London</h1>
                <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">When I am not designing, you will find me exploring London looking for basketball courts, writing lines of codes using Next JS, like I did this site, jogging and hitting new milestones. I love listening to music (Old Blues)</p>
              </div>
            </div>

            <div className="hidden flex mx-auto max-w-7xl px-6 lg:px-8 justify-center text-center mb-16">
              <div className="mx-auto max-w-4xl lg:mx-0 space-y-6">
                <h2 className="text-4xl lg:text-8xl font-semibold text-white">
                  {/* <ArrowDownRightIcon className='h-5 w-5'/> */}
                  My list of <br />selected projects
                </h2>
                <p className="mx-auto text-lg text-gray-200 max-w-3xl leading-relaxed">These are the ones that I’m most proud of, trying to put my dent in the universe</p>
              </div>
            </div>

            <div className="flex mx-auto max-w-7xl px-6 lg:px-8 mb-12">
              <div className="mx-auto max-w-4xl lg:mx-0 space-y-6">
                <h2 className="text-4xl font-semibold text-white">
                  {/* <ArrowDownRightIcon className='h-5 w-5'/> */}
                  My list of selected projects
                </h2>
                <p className="hidden mx-auto text-lg text-gray-200 max-w-3xl leading-relaxed">These are the ones that I’m most proud of, trying to put my dent in the universe</p>
              </div>
            </div>

            {/* Project starts here */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-40">
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='grid grid-cols-1 gap-8'>
                  {projectData.map((item) => (
                    <ProjectCard2
                      key={item.image}
                      imageUrl={item.image}
                      alt={item.alt}
                      title={item.title}
                      description={item.description}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Projects ends here */}

            {/* Project starts here */}
            <div className="flex mx-auto max-w-7xl px-6 lg:px-8 mb-12">
              <div className="mx-auto max-w-4xl lg:mx-0 space-y-6">
                <h2 className="text-4xl font-semibold text-white">
                  {/* <ArrowDownRightIcon className='h-5 w-5'/> */}
                  Coming soon
                </h2>
              </div>
            </div>

            {/* Coming soon starts here */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-40">
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                  {comingSoon.map((item) => (
                    <ComingSoon
                      key={item.image}
                      imageUrl={item.image}
                      title={item.title}
                      description={item.description}
                      industry={item.industry}
                      year={item.year}
                      />
                  ))}
                </div>
              </div>
            </div>
            {/* Coming soon ends here */}

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


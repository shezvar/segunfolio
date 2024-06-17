'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
import { Articles, ProjectCard2 } from '@/components/itemCards'
import Footer from '@/components/footer'
import { ArrowDownIcon } from '@heroicons/react/24/outline'

const projectData = [
  { image: 'images/fg-cover1.png', alt: 'first image', type: 'Case study', title: 'Product Design at Fullgap', description: 'System for the freelance economy, designed to help creatives in managing their clients and projects effectively.', link: '/projects/fullgap' },
  { image: 'images/bs-cover.png', alt: 'first image', type: 'Case study', title: 'Booosta by Prunedge', description: 'RMS provides an all-in-one platform for retailers to run their businesses more efficiently and profitably.', link: 'projects/booosta' },
  { image: 'images/pw-cover1.png', alt: 'first image', type: 'Case study', title: 'Prowoks by World Bank', description: 'Streamlined business process automation and document management for SMEs and the public sector.', link: 'projects/prowoks' },
  { image: 'images/ip-cover.png', alt: 'first image', type: 'Coming soon', title: 'iPOS by Walure', description: 'IPOS by Walure offers powerful and flexible products to automate your retail management processes.', link: '#' },
  { image: 'images/cp-cover.png', alt: 'first image', type: 'Coming soon', title: 'Campaign manager', description: 'Manage your campaign with ease integrating with your workflow', link: '#' },
  { image: 'images/pc-cover.png', alt: 'first image', type: 'Coming soon', title: 'Pneuma Care', description: 'A digital full-service pharmacy for quality and affordable medications delivered at your convenience. ', link: '#' },
]

const articles = [
  { image: 'images/4-reasons.png', alt: 'first image', title: '4 reasons to invest in UX design', description: 'There’re still components of uncertainty around the financial returns of user experience design. Probably because the of time it takes for a UX-oriented approach to “pay off,” the relative uniqueness of the field, and awareness about UX design in Nigeria.', link: 'https://www.linkedin.com/pulse/4-reasons-invest-ux-design-segun-oroyo' },
  { image: 'images/workless.png', alt: 'first image', title: 'Workless to do more.', description: 'The human mind has the ability to control more than one task. But it’s a known fact that if you try to do multiple things at the same time, you will not be able to perform your best in any of those tasks. So, it’s a better option to let go of the desire of controlling everything and focus on just one main task at a time and perform to the best of your abilities.', link: 'https://www.linkedin.com/pulse/workless-do-more-segun-oroyo' },
  { image: 'images/growing-startup.png', alt: 'first image', title: 'Growing a startup with no financial investment - By Ane E', description: 'I have had my share of reads on this subject as I too walk down this path. Many articles on this topic talk about forging business ideas with little to no investment but that is not what I wish to write about. This article is about what happens after you have an idea.', link: 'https://www.linkedin.com/pulse/growing-startup-financial-investment-ane-e-segun-oroyo' }
]

// const comingSoon = [
//   { image: 'images/ct-cover.png', alt: 'first image', title: 'Century Tech', description: 'Optimizing the onboarding processes means no more navigating complex menus, deciphering jargon, or wrestling with confusing interfaces.', industry: 'Edutech', year: '2023' },
//   { image: 'images/ip-cover.png', alt: 'first image', title: 'iPOS by Walure', description: 'IPOS by Smartware offers powerful and flexible products to automate your retail management processes.', industry: 'E-commerce', year: '2024' },
//   { image: 'images/mt-cover.png', alt: 'first image', title: 'MTN Nigeria', description: 'Invest in MTN with the MTN Loan Application Management Solution and simplify share ownership with Stanbic loans.', industry: 'Fintech', year: '2020' }
// ]

export default function Home() {

  return (
    <div className="bg-page">

      <HeaderDark />

      <main className=''>
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

            <div className='mx-auto flex xl:max-w-5xl px-6 lg:px-8'>
              <div className='h-[100lvh] lg:h-[95lvh] flex-col justify-center items-center flex relative'>
                <div className='relative flex flex-col items-center my-4 lg:my-24 py-4 lg:py-24 self-stretch mx-auto max-w-5xl text-center space-y-4 -mt-24 lg:mt-0'>
                  <h1 className="text-3xl lg:text-[3rem] text-white font-[Lora] leading-normal font-black">I&lsquo;m <a href='https://www.linkedin.com/in/segun-oroyo/' target='_blank'>
                    <span className='underline underline-offset-8 decoration-indigo-500 decoration-4'>Segun</span></a>, a product designer with practical experience working and living in London</h1>
                  <p className="text-lg lg:text-[1.5rem] text-gray-200 mx-auto max-w-2xl leading-[1.7] tracking-wide">My expertise spans the <strong className='font-extrabold'>entire design process</strong>, from conducting research and gathering insights to creating wireframes and bringing digital products to life.</p>
                </div>

                <div className='items-center w-full h-32 mx-auto py-4 block absolute top-auto bottom-0 left-0 right-0 animate-bounce'>
                  <a href='#cases' className="text-white text-center mx-auto">
                    <span className='w-full appearance-auto text-center'>scroll down</span>
                    <ArrowDownIcon className='w-full h-4 appearance-auto text-center' />
                  </a>
                </div>
              </div>
            </div>

            {/* Project starts here */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-56 lg:pb-80 transition" id='cases'>
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='grid grid-cols-1 gap-16'>
                  {projectData.map((item) => (
                    <ProjectCard2
                      key={item.image}
                      imageUrl={item.image}
                      alt={item.alt}
                      type={item.type}
                      title={item.title}
                      description={item.description}
                      link={item.link}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Projects ends here */}

            <div className='bg-indigo-950 py-32 lg;py-56'>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h1 className='text-white text-3xl lg:text-4xl font-lora font-black max-w-4xl leading-relaxed lg:leading-[1.4]'>In the dynamic world of product design, every project brings unique challenges and opportunities. As a seasoned designer, I&apos;ve developed a structured yet <a href='/process'><span className='underline underline-offset-8 decoration-indigo-500 decoration-4'>flexible process</span></a> that meets business objectives and delights users. This journey of discovery, creativity, and refinement guides me from concept to completion.</h1>
              </div>
            </div>

            <div className=''>
              {/* Project starts here */}
              <div className="flex mx-auto max-w-7xl px-6 lg:px-8 mb-12 pt-32 lg:pt-56">
                <div className="mx-auto max-w-4xl lg:mx-0 space-y-6">
                  <h2 className="text-5xl font-lora font-bold text-white">
                    Articles
                  </h2>
                </div>
              </div>

              {/* Article starts here */}
              <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-40">
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                  <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
                    {articles.map((item) => (
                      <Articles
                        key={item.image}
                        imageUrl={item.image}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Article ends here */}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


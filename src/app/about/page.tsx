'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
import ExperienceBlock from '@/app/about/ExperienceBlock'
import Footer from '@/components/footer'
import DesignPhilosophy from '@/components/designPhilosophy'

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

export default function About() {

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

            <div className='mx-auto flex items-center my-48 xl:max-w-7xl px-6 lg:px-8'>
              <div className='flex flex-col lg:flex-row text-white w-full gap-12'>
                <div className='basis-full lg:basis-1/3'>
                  <div className='h-full bg-cover text-white'>
                    <div className='h-[24rem] lg:h-full w-full bg-[center_top_30%]' style={{ backgroundImage: 'url(images/my-image-1.png)' }}></div>
                  </div>
                </div>
                <div className='basis-full lg:basis-4/6'>
                  <div className='h-full'>
                    <div className='space-y-4'>
                      <h1 className='text-5xl font-sans text-white'>Hello, I&apos;m Segun Oroyo, but you can call me &quot;Segun.&quot; <span className='text-[2rem]'>😜</span></h1>
                      <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">/sheh•goon/</p>
                      <p className='text-lg tracking-wide font-serif'>I am a product designer based in Nigeria. I value curiosity, creativity, user-centered design, and making technology intuitive and accessible. I enjoy transforming complex problems into simple, beautiful solutions.</p>
                      <div className='text-gray-400 space-y-8'>
                        <p className=''>Previously, I was a graphic and frontend designer, diving deep into HTML, CSS, SCSS/SASS, Angular JS, and Vue. I attended the Federal University of Technology, Akure (FUTA), where I studied Environmental Design and funded my studies through graphic design and WordPress development.</p>
                        <p className=''>With a background in graphic design and frontend development, I am well-equipped to connect design and development teams. I leverage my diverse skills to make well-informed decisions efficiently. To learn more about working with me, feel free to reach out on <a href='https://www.linkedin.com/in/segun-oroyo/' target='_blank' className='text-indigo-600'>LinkedIn.</a></p>
                        <p className=''>When I&apos;m not tackling design challenges, you can find me in London either hunting for a basketball court, playing basketball, swimming, drawing, cooking, or exploring new technology.</p>
                        <p className=''>I aim to be an exemplary designer and mentor. My aspiration is to become a compassionate, open-minded, and accessible design leader in the future. For now, I am wholeheartedly enjoying creating and implementing innovative solutions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mx-auto flex items-center my-48 xl:max-w-7xl px-6 lg:px-8 hidden'>

            </div>

            {/* Experience starts */}
            <div className='mx-auto flex items-center my-48 xl:max-w-7xl px-6 lg:px-8'>
              <div className='w-full space-y-8'>
                <h1 className='text-5xl font-bold text-white'>Experience</h1>
                <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">A timeline view of some of the companies I have worked with</p>
                <ExperienceBlock />
              </div>
            </div>
            {/* Experience ends */}


            {/* What I have learnt */}
            <div className='mx-auto flex items-center my-48 xl:max-w-7xl px-6 lg:px-8'>
              <DesignPhilosophy />
            </div>
            {/* What I have learnt ends here */}

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


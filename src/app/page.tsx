'use client'
import React from 'react'
import Header from '@/components/header'
import ProjectCard from '@/components/project-card'
import { ArrowDownRightIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/footer'

const projectData = [
  { image: 'images/fg-cover.png', alt: 'first image', title: 'Operating System For The Freelance Economy', description: 'Product Design at Fullgap', link: '/projects/fullgap' },
  { image: 'images/bs-cover.png', alt: 'first image', title: 'The #1 Operating System For E-commerce In Africa', description: 'Booosta by Prunedge', link: 'projects/booosta' },
  { image: 'images/pw-cover.png', alt: 'first image', title: 'Automated Budget System in State Governance', description: 'Prowoks by World Bank', link: 'projects/prowoks' },
  { image: 'images/ct-cover.png', alt: 'first image', title: 'Optimising The Onboarding Processes', description: 'Century Tech (COMING SOON)', link: '#' }
]

export default function Home() {

  return (
    <div style={{backgroundColor: '#FEFDF8'}}>

      <Header />

      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[68rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
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

            <div className='mx-auto flex items-center mt-16 max-w-2xl h-[55vh] md:max-w-3xl xl:max-w-7xl px-6 lg:px-8'>
              <div className='w-full'>
                <h1 className='text-4xl lg:text-7xl font-semibold'>Meet Segun - Product Designer working and living in London</h1>
                <h3 className='text-3xl lg:text-4xl font-medium mt-5 lg:mt-8'>I crafting innovation using design</h3>
                <p className="text-md lg:text-lg leading-8 text-gray-600 mt-4 max-w-5xl font-mono">When I am not designing, you will find me exploring London looking for basketball courts, writing lines of codes using Next JS, like I did this site, jogging and hitting new milestones. I love listening to music (Old Blues)</p>
              </div>
            </div>

            <div className="mx-auto max-w-7xl mt-[2rem] lg:mt-[15rem] px-6 lg:px-8">
              <div className="mx-auto max-w-5xl lg:mx-0">
                <h2 className="text-xl font-mono text-gray-900 sm:text-2xl">
                  <ArrowDownRightIcon className='h-5 w-5'/>
                  View projects</h2>
                <p className="mt-6 text-md text-gray-600">Things I&apos;ve made trying to put my dent in the universe. I&apos;ve worked on tons of little projects over the years but these are the ones that I’m most proud of.</p>
              </div>
            </div>

            {/* Project starts here */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8">
              <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                  {projectData.map((item) => (
                    <ProjectCard
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

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


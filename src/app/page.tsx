'use client'
import React from 'react'
import Header from '@/components/header'
import ProjectCard from '@/components/project-card'

const projectData = [
  { image: 'images/fullgapcover.png', alt: 'first image', title: 'Fullgap', description: 'Creative Economy', link: '/projects/fullgap' },
  { image: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png', alt: 'first image', title: 'Booosta', description: 'The #1 Operating System For E-commerce In Africa', link: 'projects/booosta' },
  { image: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png', alt: 'first image', title: 'Prowoks', description: 'Automated Budget System in State Governance', link: 'projects/prowoks' },
  { image: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png', alt: 'first image', title: 'Century Tech', description: 'Optimising The Onboarding Processes', link: '#' }
]

export default function Home() {

  return (
    <div className="bg-white">

      <Header />

      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
            <div className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>

          <div className="overflow-hidden">

            <div className='mx-auto flex items-center max-w-2xl md:max-w-3xl xl:max-w-7xl px-6 pb-[2rem] pt-56 sm:pt-60 lg:px-8 lg:pt-[20rem]'>
              <div className='w-full'>
                <h1 className='text-6xl lg:text-8xl font-extrabold text-center'>CRAFTING INNOVATION USING DESIGNS</h1>
                <h3 className='text-3xl lg:text-4xl font-medium mt-8 text-center'>Meet Segun - Product Designer working and living in London</h3>
                <p className="mx-auto text-center text-lg leading-8 text-gray-600 mt-8 max-w-5xl">
                  When I am not designing, you will find me exploring London looking for basketball courts, writing lines of codes using Next JS, like I did this site, jogging and hitting new milestones amongst others...
                </p>
              </div>
            </div>

            <div className='mx-auto mt-0 items-center max-w-[93rem] md:mt-[4rem] lg:mt-[3rem]'>
              
              <div className='flex justify-between gap-2'>

                <div className="flex justify-start gap-2 sm:justify-end sm:pl-20 lg:pl-0">

                  <div className="mr-auto w-[6rem] lg:w-[15rem] lg:mt-[-6rem] flex-none space-y-2 sm:mr-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="React code"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1566230555350-59683b1d16e0?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Swimming"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>

                  <div className="w-[6rem] lg:w-[15rem] flex-none space-y-2">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1609605988071-0d1cfd25044e?q=80&w=2817&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Cycling"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1563166647-18db48f73987?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Running"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>

                  <div className="ml-auto w-[6rem] lg:w-[15rem] lg:mt-[7rem] flex-none space-y-2 sm:ml-0 xl:order-none">
                    <div className="relative">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1671436822885-0ef977b97959?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Basketball"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 -ml-[6.5rem] sm:justify-end sm:pr-20 lg:pr-0">
                  <div className="ml-auto w-[6rem] lg:w-[15rem] lg:mt-[2.5rem] flex-none space-y-2 sm:ml-0 xl:order-none pt-[4.5rem]">
                    <div className="relative">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1671436822885-0ef977b97959?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Basketball"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>

                  <div className="mr-auto w-[6rem] lg:w-[15rem] flex-none space-y-2 sm:mr-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="React code"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1566230555350-59683b1d16e0?q=80&w=1828&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Swimming"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-[6rem] lg:w-[15rem] lg:mt-[-6rem] flex-none space-y-2">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1609605988071-0d1cfd25044e?q=80&w=2817&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Cycling"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1563166647-18db48f73987?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Running"
                        className="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-7xl mt-[15rem] px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">Selected projects.</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">Things I’ve made trying to put my dent in the universe. I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
              </div>
            </div>

            {/* Project starts here */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
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
    </div>
  )
}


'use client'
import React from 'react'
import Header from '@/components/header'
import LockScreen from '@/components/passwordRequest'
import ProjectHeader from '@/components/project-header'

const projectData = [
    { title: 'Automated Budget System In State Governance', subtext: 'An enterprise solution that offers improved transparency and accountability in the budget and expenditure management process.', imageUrl: '/images/sampleimage.png', alt: 'Prowoks EMS', role1: 'Research', role2: 'Information Architecture', role3: '', role4: '', role5: '', platform1: 'Desktop', platform2: 'Mobile Responsive', platform3: '' },
]
export default function Fullgap() {

    return (
        <div className="bg-white">

            <Header />

            <main>
                <div className="relative isolate">

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

                        {projectData.map((item) => (
                            <ProjectHeader
                            key={item.imageUrl}
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

                        <div className='mx-auto max-w-7xl px-6 sm:pt-60 lg:px-8 lg:pt-10'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Background</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Monnify has simplified how businesses accept payments in Nigeria</h5>
                            <div className='grid grid-cols-1 md:grid-cols-2 pb-16 space-0'>
                                <p className="text-base text-gray-600">Nigerians used online payment methods more in 2019. Customers might pay from home with a click. Businesses may receive payments via web/mobile applications, cash, and POS transfers with this feature. Nigerians used online payment methods more in 2019. Customers might pay from home with a click. Businesses may receive payments via web/mobile applications, cash, and POS transfers with this feature.</p>
                                <p className="text-base text-gray-600">Nigerians used online payment methods more in 2019. Customers might pay from home with a click. Businesses may receive payments via web/mobile applications, cash, and POS transfers with this feature.</p>
                            </div>
                        </div>

                        <div className='mx-auto max-w-7xl px-6 pb-[2rem] sm:pt-60 lg:px-8 lg:pt-10'>
                            <h5 className='uppercase text-lg font-medium text-gray-600'>Design Process</h5>
                            <h5 className='text-2xl font-medium pt-3 pb-4'>Monnify has simplified how businesses accept payments in Nigeria</h5>
                            <div className='grid grid-cols-1 pb-16 space-0'>
                                <p className="text-base text-gray-600">Nigerians used online payment methods more in 2019. Customers might pay from home with a click. Businesses may receive payments via web/mobile applications, cash, and POS transfers with this feature. Nigerians used online payment methods more in 2019. Customers might pay from home with a click. Businesses may receive payments via web/mobile applications, cash, and POS transfers with this feature.</p>
                                <p className="text-base text-gray-600">Nigerians used online payment methods more in 2019. Customers might pay from home with a click. Businesses may receive payments via web/mobile applications, cash, and POS transfers with this feature.</p>
                            </div>
                        </div>

                        {/* Project starts here */}
                        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
                            <div className='mx-auto max-w-2xl lg:max-w-none'>
                                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>

                                </div>
                            </div>
                        </div>
                        {/* Projects ends here */}

                    </div>
                </div>
            </main>

            <LockScreen />
        </div>
    )
}


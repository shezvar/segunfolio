'use client'
import React from 'react'
import Header from '@/components/header'
import LockScreen from '@/components/passwordRequest'

export default function Booosta() {

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

                        <div className='mx-auto flex items-center max-w-2xl md:max-w-3xl xl:max-w-7xl px-6 pb-[2rem] pt-56 sm:pt-60 lg:px-8 lg:pt-[20rem]'>
                            <div className='w-full'>
                                <h1 className='text-6xl font-medium'>Automated Budget System in State Governance</h1>
                                <h3 className='text-3xl font-normal mt-8 text-slate-600'>Designed to help creative professionals, particularly freelancers, manage their clients and projects effectively</h3>
                                <div className='relative w-full h-[40rem] mt-16 group'>
                                    <div className='absolute top-0 right-0 left-0 bottom-0 p-2 border bg-slate-100 rounded-3xl shadow-2xl'>
                                        <img src="/images/sampleimage.png" className='transition group-hover:scale-110 rounded-2xl h-full w-full block object-cover object-center' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto max-w-7xl px-6 pb-[2rem] sm:pt-60 lg:px-8 lg:pt-10'>
                            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-2 border-b pb-16'>

                                <div className=''>
                                    <h5 className='uppercase text-lg font-medium text-gray-600'>Role</h5>
                                    <div className='pt-3'>
                                        <p className="text-base text-gray-900">Research</p>
                                        <p className="text-base text-gray-900">Information Architecture</p>
                                    </div>
                                </div>

                                <div className=''>
                                    <h5 className='uppercase text-lg font-medium text-gray-600'>Platform</h5>
                                    <div className='pt-3'>
                                        <p className="text-base text-gray-900">Desktop</p>
                                        <p className="text-base text-gray-900">Mobile Responsive</p>
                                    </div>
                                </div>
                            </div>
                        </div>

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


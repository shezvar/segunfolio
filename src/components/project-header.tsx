import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function ProjectHeader(props: { goBackUrl: any; title: any; subtext: any; imageUrl: any; alt: any;  role1: any; role2: any; role3: any; role4: any; role5: any; platform1: any; platform2: any; platform3: any}) {
    const { goBackUrl, title, subtext, imageUrl, alt, role1, role2, role3, role4, role5, platform1, platform2, platform3 } = props;
    return (
        <div className="">
            <div className='mx-auto flex items-center max-w-2xl md:max-w-3xl xl:max-w-6xl px-6 pb-[2rem] pt-56 sm:pt-60 lg:px-8 lg:pt-[15rem]'>
                <div className='w-full'>
                    <div className='relative mb-6'>
                        <a href={goBackUrl} className='inline-flex rounded-full items-center pl-2 pr-4 py-1.5 font-sans text-sm border bg-zinc-100 text-gray-500'><ChevronLeftIcon className='h-4 w-4 mr-2' />Back</a>
                    </div>
                    <h1 className='text-3xl lg:text-6xl font-medium text-slate-950'>{title}</h1>
                    <h3 className='text-xl lg:text-2xl font-normal mt-8 text-slate-800'>{subtext}</h3>
                    <div className='relative w-full min-h-[1rem] mt-16 group'>
                        <div className='p-2 border bg-slate-100 rounded-3xl shadow-2xl'>
                            <img src={imageUrl} alt={alt} className='transition group-hover:scale-110 rounded-2xl h-full w-full block object-cover object-center' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto max-w-4xl px-6 pb-[2rem] sm:pt-60 lg:px-8 lg:pt-10'>
                <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-2 border-b pb-16'>

                    <div className=''>
                        <h5 className='uppercase text-lg font-medium text-gray-600'>Role</h5>
                        <div className='pt-3'>
                            <p className="text-base text-gray-900">{role1}</p>
                            <p className="text-base text-gray-900">{role2}</p>
                            <p className="text-base text-gray-900">{role3}</p>
                            <p className="text-base text-gray-900">{role4}</p>
                            <p className="text-base text-gray-900">{role5}</p>
                        </div>
                    </div>

                    <div className=''>
                        <h5 className='uppercase text-lg font-medium text-gray-600'>Platform</h5>
                        <div className='pt-3'>
                            <p className="text-base text-gray-900">{platform1}</p>
                            <p className="text-base text-gray-900">{platform2}</p>
                            <p className="text-base text-gray-900">{platform3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
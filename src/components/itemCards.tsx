import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { url } from "inspector";

export function ProjectCard1(props: { imageUrl: any; alt: any; title: any; description: any; link: any; }) {
    const { imageUrl, alt, title, description, link } = props;

    return (
        <div className='flex opacity-100 transform-none'>
            <article className='relative flex w-full flex-col rounded-3xl p-6 transition hover:bg-neutral-50 sm:p-4'>
                <h3>
                    <a href={link} className="group">
                        <img
                            className="transition max-w-full ease-in-out rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 group-hover:scale-[1.05]"
                            src={imageUrl}
                            alt={alt}
                        />
                        <div className="flex flex-col justify-between sm:flex-row">
                            <div className="pb-3 sm:pb-0">
                                <p className="text-base mt-6 font-mono text-gray-500">{description}</p>
                                <h3 className="text-lg font-medium text-gray-800 group-hover:text-indigo-500">{title}</h3>
                            </div>
                            {/* <ArrowLongRightIcon className="transition w-6 group-hover:translate-x-2"/> */}
                        </div>
                    </a>
                </h3>
            </article>
        </div>
    );
}

export function ProjectCard2(props: { imageUrl: any; alt: any; title: any; description: any; link: any; }) {
    const { imageUrl, alt, title, description, link } = props;

    return (
        <div className='flex opacity-100 transform-none'>
            <article className="relative flex w-full flex-col border border-zinc-800 hover:bg-zinc-900/20 rounded transition duration-500 text-left overflow-hidden shadow hover:shadow-2xl">
                <div className="flex relative z-10 lg:min-h-[35rem] p-8 items-start">
                    <div className="flex gap-2 items-start flex-col lg:max-w-[20rem]">
                        <h3 className="text-gray-200 font-semibold text-2xl my-0">{description}</h3>
                        <p className="my-0 text-md">
                            <span className="text-zinc-400/80 leading-relaxed">{title}</span>
                        </p>
                        <a href={link} className="flex text-gray-200 group mt-2 hover:text-indigo-600">
                            <div className="">Read more</div>
                            <ArrowLongRightIcon className="transition w-6 group-hover:translate-x-2 ml-1" />
                        </a>
                    </div>
                </div>
                <div className="flex relative lg:absolute top-8 left-8 lg:left-1/3 right-auto">
                    <div className="transform overflow-hidden relative bg-gray-950 border border-gray-800 rounded w-[91rem]">
                        <img
                            className="lg:w-[65%] max-w-full rounded bg-gray-900 shadow-xl"
                            src={imageUrl}
                            alt={alt}
                        />
                    </div>
                </div>

                <a href={link} className="group hidden">
                    <img
                        className="transition max-w-full ease-in-out rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 group-hover:scale-[1.05]"
                        src={imageUrl}
                        alt={alt}
                    />
                    <div className="flex flex-col justify-between sm:flex-row">
                        <div className="pb-3 sm:pb-0">
                            <p className="text-base mt-6 font-mono text-gray-500">{description}</p>
                            <h3 className="text-lg font-medium text-gray-800 group-hover:text-indigo-500">{title}</h3>
                        </div>

                    </div>
                </a>
            </article>
        </div>
    );
}

export function ComingSoon(props: { imageUrl: any; title: any; description: any; industry: any; year: any; }) {
    const { imageUrl, title, description, industry, year } = props;

    return (
        <div className="" role="itemlist">
            <div className="relative flex w-full max-w-full flex-col border border-zinc-800 hover:bg-zinc-900/50 rounded transition duration-500 text-left overflow-hidden shadow hover:shadow-2xl">
                <div style={{backgroundImage: `url(${imageUrl})`, backgroundPosition: "50%" }} className="border-b border-gray-800 object-cover bg-cover relative aspect-[2]"></div>
                <div className="flex gap-2 flex-col p-6">
                    <h3 className="text-gray-200 font-bold my-0">{title}</h3>
                    <p className=" overflow-hidden mb-0 text-sm text-zinc-400/80">{description}</p>
                </div>
                <div className="gap-2 border-t border-zinc-800 flex mt-auto">
                    <div className="flex-1 px-6 py-3 border-r border-zinc-800 items-center flex">
                        <p className="text-xs text-gray-200">{industry}</p>
                    </div>
                    <div className="px-6 py-3 border-r border-zinc-800 items-center flex">
                        <p className="text-xs text-gray-200">{year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { ArrowLongRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

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

export function ProjectCard2(props: { imageUrl: any; alt: any; type: any; title: any; description: any; link: any; }) {
    const { imageUrl, alt, type, title, description, link } = props;

    return (
        <div className='flex opacity-100 transform-none'>
            <a href={link} className="group relative flex w-full flex-col border border-zinc-800 hover:bg-zinc-900/20 rounded transition duration-500 text-left overflow-hidden shadow hover:shadow-2xl">
                <div className="flex relative z-10 lg:min-h-[35rem] p-8 items-start">
                    <div className="flex gap-2 items-start flex-col lg:max-w-[20rem]">
                        <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-extrabold text-slate-300 bg-indigo-900 mb-2 uppercase">{type}</span>
                        <h3 className="text-gray-200 font-[lora] font-bold text-3xl my-0">{title}</h3>
                        <p className="my-0 text-md">
                            <span className="text-zinc-400 leading-relaxed">{description}</span>
                        </p>
                        <div className="flex text-gray-200 group mt-2 group-hover:text-indigo-600 items-center">
                            <div className=" font-extrabold uppercase text-sm">Read more</div>
                            <ArrowLongRightIcon className="transition w-6 group-hover:translate-x-2 ml-1" />
                        </div>
                    </div>
                </div>
                <div className="flex relative lg:absolute top-8 left-8 lg:left-1/3 right-auto">
                    <div className="transform overflow-hidden relative bg-page border border-gray-800 rounded w-[91rem]">
                        <img
                            className="lg:w-[65%] max-w-full rounded bg-gray-900 shadow-xl"
                            src={imageUrl}
                            alt={alt}
                        />
                    </div>
                </div>
            </a>
        </div>
    );
}

export function ComingSoon(props: { imageUrl: any; title: any; description: any; industry: any; year: any; }) {
    const { imageUrl, title, description, industry, year } = props;

    return (
        <div className="" role="itemlist">
            <div className="relative flex w-full max-w-full h-full flex-col border border-zinc-800 hover:bg-zinc-900/50 rounded transition duration-500 text-left overflow-hidden shadow hover:shadow-2xl">
                <div style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: "50%" }} className="border-b border-gray-800 object-cover bg-cover relative aspect-[2]"></div>
                <div className="flex gap-2 flex-col p-6">
                    <h3 className="text-gray-200 font-bold my-0">{title}</h3>
                    <p className=" overflow-hidden mb-0 text-sm text-zinc-400/80 leading-relaxed">{description}</p>
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

export function Articles(props: { imageUrl: any; title: any; description: any; link: any; }) {
    const { imageUrl, title, description, link } = props;

    return (
        <div className="" role="itemlist">
            <a href={link} target="_blank" className="group relative flex w-full max-w-full h-full flex-col border border-zinc-800 hover:bg-zinc-900/50 rounded transition duration-500 text-left overflow-hidden shadow hover:shadow-2xl">
                <div style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition: "50%" }} className="border-b border-gray-800 object-cover bg-cover relative aspect-[2]"></div>
                <div className="flex flex-col justify-between h-full">
                    <div className="flex gap-2 flex-col p-6 pb-0">
                        <h3 className="font-[Lora] leading-normal font-black text-gray-200 my-0">{title}</h3>
                        <p className="font-medium overflow-hidden mb-0 text-md text-zinc-400 leading-relaxed line-clamp-3">{description}</p>
                    </div>
                    <div className="p-6 pt-0 flex text-gray-200 group group-hover:text-indigo-600 items-center">
                        <div className=" font-extrabold uppercase text-sm">Read more</div>
                        <ArrowUpRightIcon className="transition w-6 group-hover:translate-x-2 ml-1" />
                    </div>
                </div>

            </a>
        </div>
    );
}

export function ArchiveCard(props: { number: number; title: any; description: any; }) {
    const { number, title, description } = props;
    const formattedNumber = number.toString().padStart(2, "0"); // Pad with '0' if single digit

    return (
        <div className='overflow-hidden group flex flex-col border border-gray-800 bg-page gap-4 rounded h-full ease-in-out transition duration-200 delay-200 p-6 hover:bg-indigo-900'>
            <h2 className='text-gray-100 text-6xl font-medium mb-4 group-hover:-translate-y-24 ease-in-out transition duration-200 delay-200'>{formattedNumber}</h2>

            <div className='space-y-2 group-hover:-translate-y-24 ease-in-out transition duration-200 delay-200'>
                <h3 className='text-gray-100 text-xl font-lora font-bold group-hover:text-zinc-200'>{title}</h3>
                <p className=" leading-relaxed group-hover:text-indigo-100/70 ease-in-out transition duration-200 delay-200">{description}</p>
            </div>
        </div>
    );
}

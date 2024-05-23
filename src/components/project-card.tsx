import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function ProjectCard(props: { imageUrl: any; alt: any; title: any; description: any; link: any; }) {
    const { imageUrl, alt, title, description, link } = props;

    return (
        <div className='flex opacity-100 transform-none'>
            <article className='relative flex w-full flex-col rounded-3xl p-6  transition hover:bg-neutral-50 sm:p-4'>
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

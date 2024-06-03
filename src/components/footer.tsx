import { EnvelopeIcon } from "@heroicons/react/24/outline"

const navigation = [
    { name: 'shezvar@gmail.com', href: 'mailto:shezvar@gmail.com?Subject=Hello!' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com' }
]

export default function Footer() {

    return (
        <footer className="inset-x-0 mt-16 z-50 bg-page" aria-label="Global">
            <div className="border-t border-zinc-800 py-4 lg:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* <a href="mailto:shezvar@gmail.com?Subject=Hello!" target="_blank" className="text-white font-bold text-4xl lg:text-6xl hover:text-indigo-500 hover:blur-xs">Thanks for visiting my portfolio</a> */}
                    <img src="segunoroyologo.svg" className="w-12 mb-8" />
                    <p className="text-5xl font-bold text-white max-w-md leading-normal">Thanks for visiting my portfolio</p>
                </div>
            </div>

            <div className="border-t border-zinc-800 py-2">
                <div className="mx-auto text-white flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex justify-between items-center w-full">
                        <div className="space-y-2">
                            <span className="font-semibold">Made by me using</span>
                            <img src="next.svg" className="" alt="Next Js" />
                        </div>

                        <div className="">
                            <a href="mailto:shezvar@gmail.com?Subject=Hello!" target="_blank"><EnvelopeIcon className="text-white w-8 hover:text-indigo-500 hover:blur-xs" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
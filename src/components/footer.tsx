import { EnvelopeIcon } from "@heroicons/react/24/outline"

const navigation = [
    { name: 'shezvar@gmail.com', href: 'mailto:shezvar@gmail.com?Subject=Hello!' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com' }
]

export default function Footer() {

    return (
        <footer className="inset-x-0 mt-16 z-50" aria-label="Global">
            <div className="border-t border-zinc-800 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <img src="segunoroyologo.svg" className="w-12 mb-8" />
                    <p className="text-5xl font-bold max-w-md leading-normal bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">Thanks for visiting my portfolio</p>
                </div>
            </div>

            <div className="border-t border-zinc-800 py-2">
                <div className="mx-auto text-white flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex justify-between items-center w-full">
                        <div className="space-y-2">
                            <span className="font-semibold">Made by me using</span>
                            <img src="next.svg" className="w-24" alt="Next Js" />
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
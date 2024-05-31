

const navigation = [
    { name: 'shezvar@gmail.com', href: 'mailto:shezvar@gmail.com?Subject=Hello!' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com' }
]

export default function Footer() {

    return (
        <footer className="inset-x-0 mt-16 z-50 bg-page" aria-label="Global">
            <div className="border-t border-zinc-800 py-4 lg:py-12">
                <div className="mx-auto text-white flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <a href="mailto:shezvar@gmail.com?Subject=Hello!" target="_blank" className="text-white font-bold text-4xl lg:text-9xl hover:text-indigo-500 hover:blur-xs">shezvar<br />@gmail.com</a>
                </div>
            </div>

            <div className="border-t border-zinc-800 py-2">
                <div className="mx-auto text-white flex max-w-7xl items-center justify-between p-6 lg:px-8">
                    <div className="flex justify-between flex-col lg:flex-row w-full">
                        <div className="inline-flex">
                            <p className="font-sans">©2024 segun oroyo</p>
                        </div>

                        <div className="inline-flex">
                            <p className="font-sans">Created using <span className="text-indigo-600 font-bold">Next JS</span> by me</p>
                        </div>
                    </div>

                    {/* <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-md font-sans leading-6 text-white">
                                {item.name}
                            </a>
                        ))}
                    </div> */}
                </div>
            </div>

        </footer>
    )
}
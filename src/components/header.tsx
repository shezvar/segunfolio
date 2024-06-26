import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import LinkedInLogo from "@/assets/Linkedin-Logo.png"

const navigation = [
    { name: 'About me', href: '/about', target: '_self' },
    { name: 'My Process', href: '/process', target: '_self' },
    { name: 'Archive', href: '/archive', target: '_self' },
    { name: 'Download CV', href: 'https://drive.google.com/file/d/1046vZMvXbljzhS3w_TVM8GFK0R0B9jkp/view?usp=sharing', target: '_blank' }
  ]

export function HeaderLight() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 text-black">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Segun Oroyo</span>
                        <img
                                className="h-8 w-auto"
                                src="/segunoroyologodark.svg"
                                alt="segunoroyo"
                                style={{fill: '#000'}}
                            />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-md font-semibold leading-6 text-gray-900 hover:text-indigo-500">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="https://www.linkedin.com/in/segun-oroyo/" target='_blank' className="flex text-md font-semibold leading-6 text-gray-900">
                        LinkedIn
                        <Image src={LinkedInLogo} className=' ml-1 w-auto h-5 rounded' alt='LinkedIn'/>
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 transition ease-in-out duration-700" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Segun Oroyo</span>
                            <img
                                className="h-8 w-auto"
                                src="/segunoroyologodark.svg"
                                alt="segunoroyo"
                                style={{fill: '#000'}}
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 mt-12">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target={item.target}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:text-indigo-500"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="https://www.linkedin.com/in/segun-oroyo/"
                                    target='_blank'
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black"
                                >
                                    <Image src={LinkedInLogo} className=' ml-1 mr-2 -mt-1 w-auto h-5 rounded inline-flex' alt='LinkedIn'/>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export function HeaderDark() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky inset-x-0 top-0 z-50 border-b border-gray-800 backdrop-blur-md bg-slate-900/60 backdrop-opacity-90">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 text-white">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Segun Oroyo</span>
                        <img src="segunoroyologo.svg" className="w-12" alt='segunoroyo' />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-md font-semibold leading-6 text-white hover:text-indigo-500" target={item.target}>
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="https://www.linkedin.com/in/segun-oroyo/" target='_blank' className="flex text-md font-semibold leading-6 text-white">
                        LinkedIn
                        <Image src={LinkedInLogo} className=' ml-1 w-auto h-5 rounded' alt='LinkedIn'/>
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 transition ease-in-out duration-700" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">segun oroyo</span>
                            <img
                                className="h-8 w-auto"
                                src="segunoroyologo.svg"
                                alt="segunoroyo"
                                style={{fill: '#000'}}
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-black"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-zinc-700">
                            <div className="space-y-2 py-6 mt-12">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target={item.target}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:text-indigo-500"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="https://www.linkedin.com/in/segun-oroyo/"
                                    target='_blank'
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white"
                                >
                                    <Image src={LinkedInLogo} className=' ml-1 mr-2 -mt-1 w-auto h-5 rounded inline-flex' alt='LinkedIn'/>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
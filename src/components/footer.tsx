import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import LinkedInLogo from "@/assets/Linkedin-Logo.png"

const navigation = [
    { name: 'shezvar@gmail.com', href: 'mailto:shezvar@gmail.com?Subject=Hello!' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com' }
  ]

export default function Footer() {

    return (
        <footer className="inset-x-0 mt-16 z-50 bg-black">
            <div className="mx-auto text-white flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <p>2024 segun oroyo | created with Next Js by Segun</p>

                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-md font-sans leading-6 text-white">
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
            
        </footer>
    )
}
'use client'
import React from 'react'
import { HeaderLight, HeaderDark } from '@/components/header'
import LockScreen from '@/components/passwordRequest'
import ProjectHeader from '@/components/project-header'
import { CheckIcon } from '@heroicons/react/16/solid'
import ImageGallery from '@/components/image-gallery'

const projectData = [
    { goBackUrl: '/', title: 'The #1 Operating System For E-commerce In Africa', subtext: 'RMS provides an all-in-one platform for retailers to run their businesses more efficiently and profitably.', imageUrl: '/images/sampleimage.png', alt: 'Booosta', role1: 'Research', role2: 'Information Architecture', role3: '', role4: '', role5: '', platform1: 'Desktop (Backoffice)', platform2: 'Mobile App', platform3: '' },
]

const imagePaths = [
    '/images/prowoks-designui-1.png',
    '/images/prowoks-designui-2.png',
    '/images/prowoks-designui-3.png',
    // Add more image paths as needed
];
export default function ProjectList() {

    return (
        <div className="bg-white">

            <HeaderLight />

            <LockScreen />
        </div>
    )
}


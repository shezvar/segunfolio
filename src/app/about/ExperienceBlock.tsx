import React, { useState } from 'react';
// import StateIndicator from '../../components/StateIndicator'; // Import the new component
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';


const fg = [
    "Customer-Centric Design",
    "Cross-Functional Collaboration",
    "Data-Driven Decision Making",
    "Iterative Design and Development",
    "Creating Intuitive and Engaging Experiences",
    "Empathy and Strategic Thinking",
    "Industry Knowledge and Adaptability"
];

const ct = [
'Design and Development',
'Product Management',
'User Research and Insights',
'Collaboration and Communication',
'User Experience (UX) Design',
'Data Analysis and Decision Making',
'Project Management',
'Innovation and Problem Solving',
'Quality Assurance and Testing',
'Technical Skills'
];

const pr = [
"Team leadership and management",
"Design system maintenance and enhancement",
"Technical oversight of design implementation",
"Collaboration with developers for prototype development",
"Facilitation of product envisioning sessions",
"Cross-disciplinary stakeholder engagement",
"Conducting and leading design reviews",
"Incorporation of feedback and iterative design",
"Product requirements analysis",
"User persona development",
"Market trend analysis",
"Integration of user research insights",
"Collaboration with marketing teams",
"Strategic alignment of design and marketing",
"Creation of user-centered and innovative designs"
];

const is = [
'Product Development',
'Research and Analysis',
'Conceptualization',
'User Experience (UX) Design',
'Implementation',
'Stakeholder Management',
'Business Development',
'Market Positioning',
'Innovation',
'Strategic Product Vision',
'Problem Solving',
'Leadership',
'Data-Driven Decision Making',
'Communication',
'Adaptability',
'Quality Assurance',
'Team Collaboration',
'Creativity',
'Project Management',
'User Research',
'Technical Skills',
];

const wb = [
'Design System Overhaul',
'Analysis and Evaluation',
'Collaboration',
'User-Centered Design',
'Technological Proficiency',
'Implementation',
'Business Impact',
'Recognition and Funding',
'Innovation',
];

const ds = [
'User Feedback Conversion',
'Insight Extraction',
'Implementation Precision',
'Metrics Analysis',
'Usability Improvement',
'Adoption Increase',
'Retention Enhancement',
'Venture Capital Engagement',
'Resource Utilization',
'Growth Initiatives',
'Visionary Leadership',
];

const fc = [
'Brand Design',
'Publication Design',
'Flyer Design',
'Brand Guidelines',
'Visual Communication',
'Typography',
'Layout Design',
'Attention to Detail',
'Client Understanding',
'Collaboration',
'Creativity',
'Innovation',
'Project Management',
'Community Impact',
'Professional Growth',
];

interface StateIndicatorProps {
    isActive: boolean;
}

const StateIndicator: React.FC<StateIndicatorProps> = ({ isActive }) => {
    return (
        <span>
            {isActive ? (
                <div>
                    <ArrowUpIcon className='w-4 h-4' />
                </div>
            ) : (
                <div>
                    <ArrowDownIcon className='w-4 h-4' />
                </div>
            )}
        </span>
    );
};

const ExperienceBlock: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Collapse if already active
        } else {
            setActiveIndex(index); // Expand the clicked section
        }
    };

    return (
        <div className='mx-auto flex items-center my-48 xl:max-w-7xl'>
            <div className="w-full text-gray-400">
                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(0)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-1'>
                                <h3 className='text-gray-400 text-sm font-sans group-hover:text-zinc-100'>JAN 2024 - PRESENT, USA</h3>
                                <p className='text-gray-100 text-2xl'>Fullgap Inc / Senior Product Designer (Contract)</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 0} />
                        </div>
                    </div>
                    {activeIndex === 0 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4 leading-relaxed'>
                                <p>As part of the team behind an award-winning learning platform widely used in educational institutions, I had the privilege of contributing to the creation of innovative and engaging learning experiences. The platform leveraged the latest technologies to enhance the teaching and learning process, catering to the diverse needs of students and educators.</p>
                                <p>In close collaboration with the product manager, I played a pivotal role in planning and executing new releases and features. We conducted extensive research and gathered feedback from users to ensure that the platform addressed real-world challenges and provided valuable solutions.</p>
                                <p>One of the key aspects of my role was conducting user interviews. I had the opportunity to engage with students, teachers, and administrators to understand their pain points, aspirations, and expectations from the platform. These insights were instrumental in shaping the design and development of new features and improvements.</p>
                                <p>Additionally, I was responsible for monitoring how people interacted with the product. Through data analysis and user feedback, I gained valuable insights into user behavior and patterns. This information helped us make informed decisions about product enhancements and prioritize features that would deliver the most impact.</p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-white'>Key skills</h3>
                                <div className='flex flex-wrap gap-4'>
                                    {fg.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-md bg-page px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(1)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='text-gray-400 text-sm font-sans group-hover:text-zinc-100'>FEB 2023 - JAN 2024, United Kingdom</h3>
                                <p className='text-gray-100 text-2xl'>Century Tech / Senior Product Designer</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 1} />
                        </div>
                    </div>
                    {activeIndex === 1 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4 leading-relaxed'>
                                <p>As part of the team behind an award-winning learning platform widely used in educational institutions, I had the privilege of contributing to the creation of innovative and engaging learning experiences. The platform leveraged the latest technologies to enhance the teaching and learning process, catering to the diverse needs of students and educators.</p>
                                <p>In close collaboration with the product manager, I played a pivotal role in planning and executing new releases and features. We conducted extensive research and gathered feedback from users to ensure that the platform addressed real-world challenges and provided valuable solutions.</p>
                                <p>One of the key aspects of my role was conducting user interviews. I had the opportunity to engage with students, teachers, and administrators to understand their pain points, aspirations, and expectations from the platform. These insights were instrumental in shaping the design and development of new features and improvements.</p>
                                <p>Additionally, I was responsible for monitoring how people interacted with the product. Through data analysis and user feedback, I gained valuable insights into user behavior and patterns. This information helped us make informed decisions about product enhancements and prioritize features that would deliver the most impact.</p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-white'>Key skills</h3>
                                <div className='flex flex-wrap gap-4'>
                                    {ct.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-md bg-page px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(2)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='text-gray-400 text-sm font-sans group-hover:text-zinc-100'>SEP 2019 - JAN 2023, NIGERIA.</h3>
                                <p className='text-gray-100 text-2xl'>Prunedge / Senior Product Designer</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 2} />
                        </div>
                    </div>
                    {activeIndex === 2 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4 leading-relaxed'>
                                <p>In my current role as an individual contributor, I lead a team of designers to maintain and enhance our internal design system, ensuring consistency, usability, and visual coherence across all projects. I oversee the technical aspects of design implementation, collaborating closely with developers to translate concepts into functional prototypes while aligning design decisions with technical feasibility.</p>
                                <p>I actively participate in product envisioning sessions, facilitating discussions with stakeholders from various disciplines to guide the team toward a shared vision that meets business goals and user needs. Regular design reviews with stakeholders allow for feedback and alignment with project objectives, leading to necessary design modifications.</p>
                                <p>Collaboration is central to my approach. I work with product managers to understand requirements, user personas, and market trends, creating aesthetically pleasing designs that address real user problems. I stay informed on user research findings to incorporate insights into my designs and collaborate with the marketing team to ensure designs align with marketing strategies and communicate value to customers.</p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-white'>Key skills</h3>
                                <div className='flex flex-wrap gap-4'>
                                    {pr.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-md bg-page px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(3)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='text-gray-400 text-sm font-sans group-hover:text-zinc-100'>MAR 2019 - AUG 2019, NIGERIA.</h3>
                                <p className='text-gray-100 text-2xl'>Interswitch Group / Product Designer / Frontend (Contract)</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 3} />
                        </div>
                    </div>
                    {activeIndex === 3 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4 leading-relaxed'>
                                <p>As a seasoned product designer at Interswitch Group, a leading fintech company in Africa, I undertook a challenging project to develop innovative products aimed at enhancing platform performance and user experience. Through rigorous research and analysis, I identified key pain points and opportunities within the financial sector.</p>
                                <p>With a clear understanding of market needs, I conceptualized and designed two groundbreaking products tailored to address specific challenges faced by users. These products focused on increasing transaction volumes and improving success rates, ensuring a seamless user experience for all stakeholders.</p>
                                <p>The successful implementation of these products significantly boosted transaction volumes, establishing Interswitch Group as a key player in the financial sector. They also enhanced platform efficiency and user satisfaction, contributing to increased loyalty.</p>
                                <p>This success elevated Interswitch Group&apos;s reputation, attracting new partnerships and opportunities and solidifying its position as a leading provider of financial solutions in Africa. The project highlighted my ability to create innovative solutions that deliver tangible business outcomes and positively impact stakeholders.</p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-white'>Key skills</h3>
                                <div className='flex flex-wrap gap-4'>
                                    {is.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-md bg-page px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(4)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='text-gray-400 text-sm font-sans group-hover:text-zinc-100'>APR 2018 - SEP 2018, NIGERIA.</h3>
                                <p className='text-gray-100 text-2xl'>WEMA Bank Plc / Product Designer / Frontend (Contract)</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 4} />
                        </div>
                    </div>
                    {activeIndex === 4 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4 leading-relaxed'>
                                <p>As a full-stack design engineer, I overhauled the legacy design systems of the WEMA Corporate Internet Banking Platform, known as ALAT. The existing systems were outdated and hindering the platform&apos;s growth. My goal was to streamline and modernize the design infrastructure to reduce the time needed to add new features and enhance the overall user experience.</p>
                                <p>I conducted a comprehensive analysis of the existing systems to identify areas for improvement and potential bottlenecks. Collaborating closely with designers and developers, I created a cohesive and user-centered design system aligned with the platform&apos;s goals. Leveraging modern technologies and best practices, I developed a scalable and maintainable design framework to accommodate future growth and changes.</p>
                                <p>The implementation of the new design system resulted in significant improvements. It reduced the time required to add new features by 30%, enabling the team to respond more quickly to market demands. The platform saw a notable increase in customer engagement and satisfaction, attracting over 10,000 new customers within the first two weeks of launch.</p>
                                <p>This design overhaul contributed to the company&apos;s overall growth and revenue. The enhanced functionality and user-friendliness of the platform attracted a wider customer base, resulting in a significant increase in revenue. The success of this initiative was recognized by the Islamic Corporation for the Development of the Private Sector (ICD), which extended a $20 million Line of Credit (LOC) to ALAT.</p>
                                <p>The overhauled design systems not only improved the platform&apos;s efficiency and user experience but also played a crucial role in securing external funding, demonstrating the value of investing in a well-designed and user-centric digital banking platform. The success of ALAT showcases how effective design can drive business growth and innovation in the digital banking sector.</p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-white'>Key skills</h3>
                                <div className='flex flex-wrap gap-4'>
                                    {wb.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-md bg-page px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(5)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='text-gray-400 text-sm font-sans group-hover:text-zinc-100'>APR 2016 - DEC 2018, CALIFORNIA, USA</h3>
                                <p className='text-gray-100 text-2xl'>Distru Inc / UX Designer</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 5} />
                        </div>
                    </div>
                    {activeIndex === 5 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4 leading-relaxed'>
                                <p>During my tenure as a User Experience Designer at Distru, I collaborated closely with a talented team of developers and key stakeholders to translate valuable customer feedback into tangible product improvements. Through rigorous analysis and implementation, we extracted actionable insights and witnessed a significant uptick in usability, adoption, and retention rates. These metrics affirmed the positive impact of our efforts on users and the overall success of Distru.</p>
                                <p>Later, Distru made a bold move into venture capital, securing funding from visionary investors to propel our company to greater heights. This capital infusion enabled us to expand our product offerings, strengthen our team, and pursue ambitious growth initiatives. The VC funding marked a pivotal moment in Distru&apos;s evolution, allowing us to pursue our long-term vision and capitalize on emerging market trends.</p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-white'>Key skills</h3>
                                <div className='flex flex-wrap gap-4'>
                                    {ds.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-md bg-page px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={`border border-zinc-800 p-6 hover:bg-zinc-900 ${activeIndex === 0 ? 'transition duration-300 ease-in-out' : ''}`}>
                    <div className="group" onClick={() => toggleAccordion(6)}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div className='space-y-2'>
                                <h3 className='text-gray-400 text-sm font-sans group-hover:text-zinc-100'>MAR 2014 - DEC 2017, NIGERIA.</h3>
                                <p className='text-gray-100 text-2xl'>FourthCanvas / Design Consultant</p>
                            </div>
                            <StateIndicator isActive={activeIndex === 6} />
                        </div>
                    </div>
                    {activeIndex === 6 && (
                        <div className="mt-6 space-y-6">
                            <div className='space-y-4 leading-relaxed'>
                                <p>During my time at FourthCanvas, I went beyond designing publications and flyers and working on brand guidelines for clients. I collaborated with talented designers on a significant project—branding for The Future Project, a social enterprise communications firm affiliated with Red Africa. This project aimed to celebrate young achievers aged 18 to 31, showcasing our team&apos;s creative capabilities and securing major projects for FourthCanvas.</p>
                                <p>We became the design agency for a gubernatorial election campaign and two presidential elections in African countries, all resulting in victories. These achievements highlighted the impact and effectiveness of our branding and design solutions.</p>
                                <p>In my role, I approached each project with a commitment to exceptional results, leveraging skills in visual communication, typography, and layout. Attention to detail and a strong understanding of client objectives ensured designs resonated with target audiences, achieving desired outcomes.</p>
                                <p>Collaboration with other designers fostered creativity and innovation, pushing design boundaries and delivering outstanding results. The environment encouraged learning, embracing diverse perspectives, and creating designs that exceeded expectations.</p>
                                <p>FourthCanvas shaped my professional growth with diverse projects, talented collaborators, and contributions to company success. Projects like branding for The Future Project, impacting the community, were particularly fulfilling, laying a foundation for my ongoing design career.</p>
                            </div>
                            <div className='space-y-4'>
                                <h3 className='text-white'>Key skills</h3>
                                <div className='flex flex-wrap gap-4'>
                                    {fc.map((skill) => (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center rounded-md bg-page px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExperienceBlock;

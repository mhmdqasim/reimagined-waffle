import Link from 'next/link';
import Sidebar from '../Sidebar'
import { useState } from 'react'
import { Button } from "../Typography";

const Index = () => {
    const [toggle, setToggle] = useState(false)

    const navItems = [{ name: 'Services', link: '/services' }, { name: 'Portfolio', link: '/our-portfolio' }, { name: 'Case Studies', link: '/our-blogs' }, { name: 'About Us', link: '/about-us' }, { name: 'Contact Us', link: '/lets-talk' }]
    return (
        <>
            <nav className="py-20 lg:py-28">
                <div className="container mx-auto px-20 md:px-24 lg:px-32">
                    <div className="flex items-center justify-between gap-20">
                        <Link href={'/'}>
                            <img className='h-26 md:h-28' src="/assets/svg/logo-nav.svg" alt="" />
                        </Link>
                        <ul className="hidden lg:flex items-center gap-28 ml-auto">
                            {navItems?.map((item, _index) => (
                                <li key={_index} className='text-base text-white font-normal transition-all cursor-pointer hover:underline hover:opacity-90'>
                                    <Link href={item?.link}>
                                        {item?.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center">
                            <span className='inline-block xs:hidden text-sm text-black font-medium transition-all cursor-pointer hover:underline hover:opacity-90 mr-6'>Register Now</span>
                            <Button arrow={false} className='hidden xs:block !h-40 lg:!h-60 md:!text-base ml-16 mr-6 px-26 md:px-36'>Get Started</Button>
                            <div onClick={() => setToggle(!toggle)} className="bg-transparent text-white grid lg:hidden place-content-center w-40 h-40 rounded-full cursor-pointer">
                                <svg width="18" height="10" viewBox="0 0 18 10" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="18" height="2" rx="1" fill="white" />
                                    <rect y="4" width="18" height="2" rx="1" fill="white" />
                                    <rect y="8" width="18" height="2" rx="1" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Sidebar
                toggle={toggle}
                navItems={navItems}
                setToggle={setToggle}
            />
        </>
    )
}

export default Index;
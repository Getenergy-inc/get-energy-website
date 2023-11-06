import { useRouter } from 'next/router';
import { FaBars } from 'react-icons/fa'
import { links } from "./data";
import { variables } from '@/constants';
import Link from "next/link";
import Logo from "../logo";
import React from 'react';
import { Dropdown } from 'flowbite-react';

export default function Header() {
    const [show, setShow] = React.useState(false);
    const location = useRouter().pathname;
    const output = links.map((link) => (
        <Link
            key={link._id}
            href={link.url}
            className={`px-6 hover:underline mb-4 md:mb-0 ${location === link.url && "underline"}`}
        >
            {link.title}
        </Link>
    ));

    return (
        <div className="bg-white w-full flex items-center justify-center p-6 mb-10">
            <div className="container lg:hidden">
                <div className='w-full flex items-center justify-between'>
                    <Logo size={100} />

                    <button type="button" onClick={() => setShow(prev => !prev)}>
                        <FaBars size="20px" />
                    </button>
                </div>

                {
                    show &&
                    <div className="lg:hidden border-b w-full flex flex-col md:flex-row items-center justify-center mt-4">
                        {output}
                    </div>
                }
            </div>


            <div className="hidden lg:flex container mx-auto -mb-14 w-full items-center justify-between bg-white p-4 px-10 rounded-full shadow-md z-10">
                <Logo size={100} />
                
                <div className="flex items-center">
                    {output}
                </div>
                <div className='flex items-center'>
                    {/**
                    <Link className="sub-button p-2 px-6 me-3 rounded-full" href={variables.SHOP_NOW_ADDRESS}>
                        Shop Now
                    </Link>
                    <Link className="main-button p-2 px-6 rounded-full" href={variables.GET_STARTED_ADDRESS}>
                        Get Started
                    </Link>
                    
                    <Link className="main-button p-2 px-6 rounded-full" href={variables.WAITLIST_ADDRESS}>
                        Join Wait List
                    </Link>
                    */} 
                    <div className='main-button p-2 px-6 rounded-full'>
                        <Dropdown className='absolute z-50 font-medium text-xl' inline={true} label="Join Us">
                    
                            <Dropdown.Item className='z-50'>
                                <Link href={variables.INTERN_FORM_URL}>As an Intern</Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href={variables.VOLUNTEER_FORM_URL}>As a Volunteer</Link>
                            </Dropdown.Item>
                            
                        </Dropdown>
                    </div>
                    


                </div>
            </div>
        </div>
    )
}

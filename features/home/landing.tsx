import { variables } from "@/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Dropdown } from "flowbite-react";

const LandingImage = dynamic(() => import('./landing-img'), { ssr: false });

export default function Landing() {
    return (
        <div className="w-full flex flex-col lg:flex-row items-center py-10 p-0 lg:pt-24">
            <div className="w-full lg:w-7/12">
                <h1 className="text-start md:text-center lg:text-start text-5xl font-bold p-4 lg:pe-32 leading-[50px]">
                    <span>Unlocking Sustainable Energy Solutions, Discover the Power of</span>
                    <span className="main-text ms-3">GetEnergy</span>
                </h1>
                <p className="w-full text-start md:text-center lg:text-start text-sm p-4 lg:pe-72 mb-2">
                    We are a leading provider of
                    energy trading solutions,
                    offering a comprehnsive range of
                    services to clients in the energy sector
                </p>
                {/**
                <div className="flex justify-center lg:justify-start">
                    <Link className="main-button p-3 px-10 text-sm rounded-full" href={variables.GET_STARTED_ADDRESS}>
                        Get Started
                    </Link>
                </div>
                */}
                <div className="flex justify-center lg:justify-start my-10">
                    
                    <div className="flex items-center justify-center">
                        <Link className="main-button p-2 px-6 rounded-full" href={variables.WAITLIST_ADDRESS}>
                            Join Wait List
                        </Link>
                        <div className='main-button p-2 px-6 rounded-full mx-4'>
                            <Dropdown className='font-medium text-xl' inline={true} label="Join Us">
                        
                                <Dropdown.Item>
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

            <div className="w-2/3 lg:w-5/12 mt-20 lg:mt-0 flex justify-center">
                <LandingImage />
                <div
                    className="hidden lg:block lg:w-[500px] lg:h-[800px] absolute top-0 right-0"
                    style={{ background: 'rgba(102, 153, 204, 0.6)' }}
                />
            </div>
        </div>
    )
}

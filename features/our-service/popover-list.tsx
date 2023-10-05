import * as React from 'react';
import { PopoverContent } from '@/components/ui/popover';
import { FiChevronDown } from 'react-icons/fi';

import {
    Accordion,
    AccordionContent,
    AccordionTrigger,
    AccordionItem
} from "@/components/ui/accordion"

const data = [
    {
        id: 1,
        title: "Energy Commodities",
        body: `                    
        - Renewable Energy Sources:
        - Solar Power Solutions
        - Wind Power Solutions
        - Biomass Energy
        - Non-Renewable Energy Sources:
        - Oil and Natural Gas
        - Coal
        - CNG Gas:
        - For B2B
        - For B2I
        - Electricity Token & Vending Services:
        - Token Sales for DISCOs
        - Vending Services for Estates
        - Electricity Supply and Vending for Companies and Organization`
    },
    {
        id: 2,
        title: "Green Energy Equipment and Products",
        body: `    
        - Solar Panels and Kits
        - Wind Turbines and Kits
        - Energy Storage Batteries
        - Energy Efficient Appliances
        - Energy Management Systems
        - Energy Saver Bulbs
        - Household Appliances [e.g energy efficient refrigerators, washing machines, air conditioners]
        - Home Energy Monitoring and Control Systems`
    },
    {
        id: 3,
        title: "Strategic Partners and Ecosystem Stakeholders",
        body: `
        - Utility Companies: Collaborative efforts for grid integration 
        energy supply and grid storage solutions.
        - Financial Institutions: Partnership for facilitating transactions
            providing credit solutions and fostering investment 
            opportunities
        - Local Government and Regulators: Cooperation for adherence
            to standards, regulation and incentivizing renewable energy 
            endeavors
        - Research Institutions and Universities: Continuous efforts towards
            research development and implementation of advanced energy
            solutions
        - Equipment Manufacturers: Aligning with top-tier equipment 
            manufacturers ensures the provision of high quality and reliable 
            products.
        - Training Institute: For ensuring the continous skill development of 
            service providers and promoting best practices in the energy sector
        - Logistics Companies: Seamless, safe and efficient product and 
        equipment delivery to customers,collaborating under the protection
        of Get Finance Escrow Services. 
        - For B2B
        - For B2I
        - Electricity Token & Vending Services: 
        `
    },
    {
        id: 4,
        title: "Vehicles and Transport Solutions",
        body: `
        Hybrid Cars
        - Electric Vehicles [EVs]
        - EV Charging Solutions
        - Maintenance Supplies for Green Vehicles 
        `
    },
    {
        id: 5,
        title: "Engine Oil and Related Products",
        body: `
        Motor Oils:
        - Fully Synthetic
        - Semi Synthetic
        - Conventional
        - High Mileage
        Transmission Fluids:
        - Automatic Transmission Fluid [ATF]
        -Manual Transmission Fluid [MTF]
        Additives and Treatments: 
        -Fuel Stabilizers
        - Oil Stabilizers
        -Fuel System Cleaners
        Filters:
        -Oil Filters
        -Air Filters
        -Cabin Air Filters
        -Fuel Filters
        Lubricants:
        -Greases
        -Hydraulic Fluids
        Cooling System Products:
        -Antifreeze/Coolannts
        -Radiator Additives and Treatments
        `
    },
    {
        id: 6,
        title: "Solid Minerals For Energy Products and Manufacturing",
        body: `
        Uranium
        - Thorium
        - Lithium
        - Rare Earth Elements
        - Clay
        -Silica 
        `
    },
    {
        id: 7,
        title: "Services and Solutions for Solid Minerals",
        body: `
        - Exploration and Mining Consultation
        - Processing and Refinement Services
        - Supply Chain Management for Mineral Resources
        - Environmental Impact Assessment [EIA]
        - Waste Management and Recycling Solutions for Mining 
        `
    },
    {
        id: 8,
        title: "Energy Solutions and Services",
        body: `
        - Energy Audits
        - Energy Management Consulting
        - Renewable Energy System Installation
        - Energy Storage Solutions
        - Maintenance and Repair 
        `
    },
    {
        id: 9,
        title: "Energy Services Providers",
        body: `
        - Independent Solar Installers
        - Wind Energy Consultants
        - Biomass Solution Specialist
        - Energy Efficiency Experts
        - Traditional Energy Consultants
        - Engine Oil Service Centers
        - Energy Oil Service Centers
        - Energy Asset Maintenance Providers
        -  Solid Mineral Mining and Processing Experts
        `
    },
    {
        id: 10,
        title: "Online Financial Services Through Get Finance",
        body: `
        - Escrow Account Services
        - Secure fund holding for product and service transactions
        - Assurance for Investors during traditional activities
        - Trust for buyers and suppliers
        - Integration with logistics companies for complete supply chain transparency
        - Point Trading System
        - Cashback on Transactions
        - Investment Portfolio Management
        -  Advanced Blockchain Integration with Smart Contracts
        -Get Finance Wallet Integration for Seamless Transactions
        `
    }
]

export default function PopoverList() {
    return (
        <PopoverContent className="w-[80%] md:w-[900px] bg-[#F7F7FB]">
            <Accordion type="single" collapsible className='block lg:grid lg:grid-cols-2 gap-4'>
                {data.map((item) => (
                    <AccordionItem value={`item-${item.id}`} className='border-0 mb-2 mb:mb-0' key={item.id}>
                        <div>
                            <div className='rounded-xl bg-white p-2 flex items-center justify-between'>
                                <p>{item.title}</p>
                                <AccordionTrigger>
                                    <FiChevronDown />
                                </AccordionTrigger>
                            </div>
                            <AccordionContent>
                                <div className='bg-[#F7F7FB] p-2'>{item.body}</div>
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </PopoverContent>
    )
}

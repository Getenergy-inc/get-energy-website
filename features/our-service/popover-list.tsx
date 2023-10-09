import * as React from 'react';
import { PopoverContent } from '@/components/ui/popover';
import { FiChevronDown } from 'react-icons/fi';
import { data } from './popover-data-list';
import {
    Accordion,
    AccordionContent,
    AccordionTrigger,
    AccordionItem
} from "@/components/ui/accordion"

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
                                {item.list.map((list_item) => (
                                    <div className='w-full my-5' key={list_item.id}>
                                        <div>
                                            <span>{list_item.title}</span>
                                            {list_item.body.trim() && <span>: {list_item.body}</span>}
                                        </div>

                                        <div>
                                            {list_item.sub.map((sub) => (
                                                <p>- {sub}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </AccordionContent>
                        </div>
                    </AccordionItem>
                ))}
            </Accordion>
        </PopoverContent>
    )
}

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const partnersList = [
    { name: "worten", partnerType: 'sponsor' },
    { name: "meo", partnerType: 'sponsor' },
    { name: "agon", partnerType: 'sponsor' },
    { name: "monster energy", partnerType: 'sponsor' },
    { name: "esc online", partnerType: 'sponsor' },
    { name: "banzai noodle", partnerType: 'sponsor' },
    { name: "noblechairs", partnerType: 'sponsor' },
    { name: "prozis", partnerType: 'sponsor' },
    { name: "force by insys", partnerType: 'sponsor' },
    { name: "sushi & poke", partnerType: 'sponsor' },
    { name: "cidade fm", partnerType: 'sponsor' },
    { name: "rtp arena", partnerType: 'sponsor' },
    { name: "santa casa", partnerType: 'sponsor' },
    { name: "lenovo legion", partnerType: 'sponsor' },
    { name: "e2tech", partnerType: 'sponsor' },
    { name: "actigamer", partnerType: 'media' },
    { name: "otakupt", partnerType: 'media' },
    { name: "central comics", partnerType: 'media' },
    { name: "oitobits.org", partnerType: 'media' },
    { name: "wasd", partnerType: 'media' },
    { name: "salao de jogos", partnerType: 'media' }
];

const Partners = () => {
    const itemsRef = useRef([]);
    const [highlightedItemId, setHighlightedItemId] = useState(0);

    useGSAP(() => {
        itemsRef.current.forEach((item, index) => {
            if (item) {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                    onEnter: () => {
                        item.classList.add('text-red-600');
                        setHighlightedItemId(index);
                    },
                    onLeave: () => {
                        if (index === itemsRef.current.length - 1) {
                            item.classList.add('text-red-600');
                        } else {
                            item.classList.remove('text-red-600');
                        }
                    },
                    onEnterBack: () => {
                        item.classList.add('text-red-600');
                        setHighlightedItemId(index);
                    },
                    onLeaveBack: () => {
                        if (index === 0) {
                            item.classList.add('text-red-600');
                        } else {
                            item.classList.remove('text-red-600');
                        }
                    },
                });
            }
        });
    }, { revertOnUpdate: true });

    return (
        <section id='partners' className='min-h-screen w-screen py-72 bg-white text-black'>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-self-end items-center w-1/2 col-span-1 pr-64">
                    {partnersList.map((item, index) => {
                        if (highlightedItemId === index) {
                            if (item.partnerType === 'sponsor') {
                                return (
                                    <span key={index} className="text-justify">
                                        <b>Os nossos patrocinadores</b> cobrem os
                                        setores de tecnologia, jogos, entretenimento
                                        e restauração, permitindo uma melhor
                                        experiência aos visitantes e jogadores."
                                    </span>
                                );
                            } else {
                                return (
                                    <span key={index} className="text-justify">
                                        <b>Os nossos parceiros de media </b>
                                        proporcionam um maior alcance e cobertura
                                        do evennto."
                                    </span>
                                );
                            }
                        } else {
                            return null;
                        }
                    })}
                </div>
                <div className='flex flex-start flex-row col-span-1'>
                    <div>
                        <h1 className='bento-title special-font text-black'>
                            Parceiros
                        </h1>
                        <ul className='relative flex flex-col items-start'>
                            {partnersList.map((item, index) => (
                                <li
                                    key={index}
                                    ref={(el) => (itemsRef.current[index] = el)}
                                    className={`text-black ${index === 0 ? 'text-red-600' : ''} flex items-center justify-between`}
                                >
                                    <aside className='absolute uppercase right-full font-general whitespace-nowrap mr-4 text-base'>
                                        {item.partnerType}
                                    </aside>
                                    <div className={`text-center bento-title !leading-[0.9]`}>
                                        {item.name}
                                    </div>
                                    <img
                                        src={`img/PartnerLogos/${item.name}.png`}
                                        alt={partnersList[highlightedItemId]?.name}
                                        className={`absolute h-16 mx-[40rem] ${highlightedItemId === index ? 'inline' : 'hidden'}`}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
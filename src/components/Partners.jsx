import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const partnersList = [
    "worten",
    "meo",
    "agon",
    "monster energy",
    "esc online",
    "banzai noodle",
    "noblechairs",
    "prozis",
    "force by insys",
    "sushi & poke",
    "cidade_fm",
    "rtp arena",
    "santa casa",
    "lenovo legion",
    "e2tech",
    "actigamer",
    "OtakuPT",
    "central comics",
    "oitbits.org",
    "waso",
    "Salao de jogos",
];

const Partners = () => {
    const itemsRef = useRef([]);

    useGSAP(() => {
        itemsRef.current.forEach((item, index) => {
            if (item) {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top center",
                    end: "bottom center",
                    toggleActions: "play reverse play reverse",
                    onEnter: () => item.classList.add('text-red-600'),
                    onLeave: () => item.classList.remove('text-red-600'),
                    onEnterBack: () => item.classList.add('text-red-600'),
                    onLeaveBack: () => {
                        if (index === 0) {
                            item.classList.add('text-red-600');
                        }else(
                            item.classList.remove('text-red-600')
                        )
                    },
                });
            }
        });
    }, { revertOnUpdate: true });

    return (
        <section id='partners' className='min-h-screen w-screen py-72 bg-white text-black'>
            <div className="grid grid-cols-2 gap-7">
                <div className="flex justify-self-end items-center w-1/2 col-span-1">
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Exercitationem officiis quod veniam repudiandae ipsum
                        ducimus consequatur. Obcaecati, id temporibus.
                        Voluptatibus nemo commodi quia delectus impedit adipisci
                        porro odio inventore numquam.
                    </p>
                </div>
                <div className='flex flex-start flex-col col-span-1'>
                    <h1 className='bento-title special-font text-black'>
                        Parceiros
                    </h1>
                    <ul className='relative flex flex-col items-start'>
                        {partnersList.map((item, index) => (
                            <li
                                key={index}
                                ref={(el) => (itemsRef.current[index] = el)}
                                className={`text-center bento-title !leading-[0.9] text-black ${index === 0 ? 'text-red-600' : ''}`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Partners;
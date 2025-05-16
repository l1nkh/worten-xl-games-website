import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import wortenLogo from '../assets/img/PartnerLogos/worten.png';
import meoLogo from '../assets/img/PartnerLogos/meo.png';
import agonLogo from '../assets/img/PartnerLogos/agon.png';
import monsterEnergyLogo from '../assets/img/PartnerLogos/monster energy.png';
import escOnlineLogo from '../assets/img/PartnerLogos/esc online.png';
import banzaiNoodleLogo from '../assets/img/PartnerLogos/banzai noodle.png';
import noblechairsLogo from '../assets/img/PartnerLogos/noblechairs.png';
import prozisLogo from '../assets/img/PartnerLogos/prozis.png';
import forceByInsysLogo from '../assets/img/PartnerLogos/force by insys.png';
import sushiPokeLogo from '../assets/img/PartnerLogos/sushi & poke.png';
import cidadeFmLogo from '../assets/img/PartnerLogos/cidade fm.png';
import rtpArenaLogo from '..../assets/img/PartnerLogos/rtp arena.png';
import santaCasaLogo from '../assets/img/PartnerLogos/santa casa.png';
import lenovoLegionLogo from '../assets/img/PartnerLogos/lenovo legion.png';
import e2techLogo from '../assets/img/PartnerLogos/e2tech.png';
import actigamerLogo from '../assets/img/PartnerLogos/actigamer.png';
import otakuptLogo from '../assets/img/PartnerLogos/otakupt.png';
import centralComicsLogo from '../assets/img/PartnerLogos/central comics.png';
import oitobitsLogo from '../assets/img/PartnerLogos/oitobits.org.png';
import wasdLogo from '../assets/img/PartnerLogos/wasd.png';
import salaoJogosLogo from '../assets/img/PartnerLogos/salao de jogos.png';

gsap.registerPlugin(ScrollTrigger);

const partnersList = [
  { name: "worten", partnerType: 'sponsor', logo: wortenLogo },
  { name: "meo", partnerType: 'sponsor', logo: meoLogo },
  { name: "agon", partnerType: 'sponsor', logo: agonLogo },
  { name: "monster energy", partnerType: 'sponsor', logo: monsterEnergyLogo },
  { name: "esc online", partnerType: 'sponsor', logo: escOnlineLogo },
  { name: "banzai noodle", partnerType: 'sponsor', logo: banzaiNoodleLogo },
  { name: "noblechairs", partnerType: 'sponsor', logo: noblechairsLogo },
  { name: "prozis", partnerType: 'sponsor', logo: prozisLogo },
  { name: "force by insys", partnerType: 'sponsor', logo: forceByInsysLogo },
  { name: "sushi & poke", partnerType: 'sponsor', logo: sushiPokeLogo },
  { name: "cidade fm", partnerType: 'sponsor', logo: cidadeFmLogo },
  { name: "rtp arena", partnerType: 'sponsor', logo: rtpArenaLogo },
  { name: "santa casa", partnerType: 'sponsor', logo: santaCasaLogo },
  { name: "lenovo legion", partnerType: 'sponsor', logo: lenovoLegionLogo },
  { name: "e2tech", partnerType: 'sponsor', logo: e2techLogo },
  { name: "actigamer", partnerType: 'media', logo: actigamerLogo },
  { name: "otakupt", partnerType: 'media', logo: otakuptLogo },
  { name: "central comics", partnerType: 'media', logo: centralComicsLogo },
  { name: "oitobits.org", partnerType: 'media', logo: oitobitsLogo },
  { name: "wasd", partnerType: 'media', logo: wasdLogo },
  { name: "salao de jogos", partnerType: 'media', logo: salaoJogosLogo },
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
                        item.classList.add('!text-red-600');
                        setHighlightedItemId(index);
                    },
                    onLeave: () => {
                        if (index === itemsRef.current.length - 1) {
                            item.classList.add('!text-red-600');
                        } else {
                            item.classList.remove('!text-red-600');
                        }
                    },
                    onEnterBack: () => {
                        item.classList.add('!text-red-600');
                        setHighlightedItemId(index);
                    },
                    onLeaveBack: () => {
                        if (index === 0) {
                            item.classList.add('!text-red-600');
                        } else {
                            item.classList.remove('!text-red-600');
                        }
                    },
                });
            }
        });
    }, { revertOnUpdate: true });

    return (
        <section id='parceiros' className='min-h-screen w-screen pt-32 pb-60 bg-black text-white'>
            <div className="grid grid-cols-2 gap-4">
                <div className="w-1/2 col-span-1 pr-64 hidden md:flex justify-self-end items-center">
                    {partnersList.map((item, index) => {
                        if (highlightedItemId === index) {
                            if (item.partnerType === 'sponsor') {
                                return (
                                    <span key={index} className="text-justify">
                                        <b>Os nossos patrocinadores</b> cobrem os
                                        setores de tecnologia, jogos, entretenimento
                                        e restauração, permitindo uma melhor
                                        experiência aos visitantes e jogadores.
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
                <div className='flex flex-col items-center col-span-2 md:col-span-1 md:flex-row'>
                    <div>
                        <h1 className='bento-title special-font text-white'>
                            Parceiros
                        </h1>
                        <ul className='relative flex flex-col items-start'>
                            {partnersList.map((item, index) => (
                                <li
                                    key={index}
                                    ref={(el) => (itemsRef.current[index] = el)}
                                    className={`text-white ${index === 0 ? '!text-red-600' : ''} flex items-center justify-between`}
                                >
                                    <aside className='hidden absolute uppercase right-full font-general whitespace-nowrap mr-4 text-base md:block'>
                                        {item.partnerType}
                                    </aside>
                                    <div className={`text-center bento-title !leading-[0.9]`}>
                                        {item.name}
                                    </div>
                                    <img
                                        src={item.logo}
                                        alt={partnersList[highlightedItemId]?.name}
                                        className={`hidden absolute h-16 mx-[40rem] ${highlightedItemId === index ? 'md:inline' : 'md:hidden'}`}
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
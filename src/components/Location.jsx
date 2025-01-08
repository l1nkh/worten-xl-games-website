import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimatedTitle from './AnimatedTitle';

import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const Location = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState('default');

    useGSAP(() => {
        gsap.to('#location-section', {
            backgroundColor: darkMode ? 'white' : 'black',
            color: darkMode ? 'black' : 'white',
            duration: 0,
            scrollTrigger: {
                trigger: '#location-section',
                start: 'center center',
                end: 'center center',
                scrub: true,
                onEnter: () => setDarkMode(true),
                onLeaveBack: () => setDarkMode(false),
            }
        });
    }, [darkMode]);

    const handleRouteChange = (route) => {
        setSelectedRoute(route);
    };

    const getIframeSrc = () => {
        switch (selectedRoute) {
            case 'cascaisOeiras':
                return 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d99' +
                    '575.24252897123!2d-9.373670729416895!3d38.74704186244395!2m3!1f' +
                    '0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0xd1ec47379b79' +
                    'a97%3A0x870d3b7e1807bbc2!2sCascais!3m2!1d38.6960614!2d-9.430364' +
                    '599999999!4m5!1s0xd1933dfa4c1a7ed%3A0xb02c31f8a9405b74!2sPolo%2' +
                    '0de%20Inova%C3%A7%C3%A3o%20Social%20da%20Mitra%2C%20Beco%20da%2' +
                    '0Mitra%2C%201950-051%20Lisboa!3m2!1d38.7391821!2d-9.1034858!5e0' +
                    '!3m2!1spt-PT!2spt!4v1736299013910!5m2!1spt-PT!2spt';
            case 'linhaAzambuja':
                return 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d198896.27525923224!2d-9.239058378806167!3d38.83808745863906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0xd18ddd75511bfd7%3A0xd221fe2e07aec0fb!2sAzambuja!3m2!1d39.0704397!2d-8.8730393!4m5!1s0xd1933dfa4c1a7ed%3A0xb02c31f8a9405b74!2sPolo%20de%20Inova%C3%A7%C3%A3o%20Social%20da%20Mitra%2C%20Beco%20da%20Mitra%2C%201950-051%20Lisboa!3m2!1d38.7391821!2d-9.1034858!5e0!3m2!1spt-PT!2spt!4v1736299935641!5m2!1spt-PT!2spt'
            case 'margemSul':
                return 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d99668.05938190706!2d-9.140983622179762!3d38.68044284677096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0xd19351c09ff1135%3A0xfca6dceb642ad67a!2sAlmada!3m2!1d38.6765238!2d-9.165104699999999!4m5!1s0xd1933dfa4c1a7ed%3A0xb02c31f8a9405b74!2sPolo%20de%20Inova%C3%A7%C3%A3o%20Social%20da%20Mitra%2C%20Beco%20da%20Mitra%2C%201950-051%20Lisboa!3m2!1d38.7391821!2d-9.1034858!5e0!3m2!1spt-PT!2spt!4v1736300018074!5m2!1spt-PT!2spt'
            default:
                return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112' +
                    '.0686759313103!2d-9.106060722825514!3d38.739186256021824!2m3!1f0!' +
                    '2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933dfa4c1a7ed%3A0xb' +
                    '02c31f8a9405b74!2sPolo%20de%20Inova%C3%A7%C3%A3o%20Social%20da%20' +
                    'Mitra!5e0!3m2!1spt-PT!2spt!4v1736297435065!5m2!1spt-PT!2spt';
        }
    }

    return (
        <section id='location-section' className='minn-h-screen w-screen py-72 bg-black text-white'>
            <div className='container mx-auto flex flex-col items-center gap-4'>
                <AnimatedTitle
                    title='l<b>o</b>c<b>a</b>lizacao'
                    containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
                />
                <p 
                    className='text-center text-lg font-light rounded-full px-4 py-1 cursor-pointer hover:bg-black hover:text-white'
                    onClick={() => handleRouteChange('default')}
                >
                    Beco da Mitra, 1950-051 Lisboa
                </p>
                <div className="inline-flex rounded-full" role="group">
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium
                            ${selectedRoute === 'cascaisOeiras' ?
                                'bg-black text-white' :
                                'bg-white text-black'}
                            rounded-s-full
                            border-2 border-black
                            hover:bg-black hover:text-white`}
                        onClick={() => handleRouteChange('cascaisOeiras')}
                    >
                        Cascais/Oeiras
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium 
                            ${selectedRoute === 'linhaAzambuja' ?
                                'bg-black text-white' :
                                'bg-white text-black'
                            }
                            border-y-2 border-black
                            hover:bg-black hover:text-white`}
                        onClick={() => handleRouteChange('linhaAzambuja')}
                    >
                        Linha da Azambuja
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 text-sm font-medium 
                            ${selectedRoute === 'margemSul' ?
                                'bg-black text-white' :
                                'bg-white text-black'
                            }
                            rounded-e-full
                            border-2 border-black
                            hover:bg-black hover:text-white`}
                        onClick={() => handleRouteChange('margemSul')}
                    >
                        Margem Sul
                    </button>
                </div>
                <iframe
                    title='locationMap'
                    src={getIframeSrc()}
                    width='600'
                    height='450'
                    style={{ border: 0, filter: darkMode ? 'none' : 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen=''
                    loading='lazy'
                ></iframe>
            </div>
        </section>
    )
}

export default Location
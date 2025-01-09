import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimatedTitle from './AnimatedTitle';

import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const Location = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [selectedRoute, setSelectedRoute] = useState('default');

    useGSAP(() => {
        gsap.to('#localização', {
            backgroundColor: darkMode ? 'black' : 'white',
            color: darkMode ? 'white' : 'black',
            duration: 0,
            scrollTrigger: {
                trigger: '#localização',
                start: 'center center',
                end: 'center center',
                scrub: true,
                onEnter: () => setDarkMode(false),
                onLeaveBack: () => setDarkMode(true),
            }
        });
    }, [darkMode]);

    useGSAP(() => {
        gsap.from('#locationMap', {
            y: 100, // Starts 100px below its original position
            opacity: 0, // Starts fully transparent
            filter: darkMode ? 'invert(90%) hue-rotate(180deg)' : 'none',
            transformOrigin: 'center center',
            duration: 1.5, // Animation duration
            ease: 'power1.inOut', // Easing for smooth animation
            scrollTrigger: {
                trigger: '#locationMap', // The element to watch for scrolling
                start: 'top bottom', // Start animation when the top of the element enters the bottom of the viewport
                end: 'top center', // End animation when the top of the element reaches the center of the viewport
                toggleActions: 'play none none reverse', // Play animation on scroll and do nothing on reverse
            },
        });

        gsap.from('#location-description', {
            x: 100, // Starts 100px below its original position
            opacity: 0, // Starts fully transparent
            transformOrigin: 'center center',
            duration: 1.5, // Animation duration
            ease: 'power1.inOut', // Easing for smooth animation
            scrollTrigger: {
                trigger: '#locationMap', // The element to watch for scrolling
                start: 'top bottom', // Start animation when the top of the element enters the bottom of the viewport
                end: 'top center', // End animation when the top of the element reaches the center of the viewport
                toggleActions: 'play none none reverse', // Play animation on scroll and do nothing on reverse
            },
        });

    }, []);

    const handleRouteChange = (route) => {
        setSelectedRoute(route);
        console.log(darkMode);
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
        <section id='localização' className='min-h-dvh w-screen bg-black text-white'>
            <div className='flex size-full flex-col items-center py-10'>
                <AnimatedTitle
                    title='l<b>o</b>c<b>a</b>lizacao'
                    containerClass='mt-5 pointer-events-none mix-blend-difference relative z-10'
                />
                <p
                    className={`col-span-1 text-center text-lg font-light rounded-full mt-24 px-4 py-1 cursor-pointer 
                        ${(darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white')}`}
                    onClick={() => handleRouteChange('default')}
                >
                    Beco da Mitra, 1950-051 Lisboa
                </p>
                <div className='grid grid-cols-2 gap-x-16 mt-7'>
                    <div className='col-span-2 xl:col-span-1'>
                        <iframe
                            id='locationMap'
                            title='locationMap'
                            src={getIframeSrc()}
                            className='rounded-md'
                            width='600'
                            height='450'
                            style={{ border: 0, filter: darkMode ? 'invert(90%) hue-rotate(180deg)' : 'none' }}
                            allowFullScreen=''
                            loading='lazy'
                        ></iframe>
                    </div>
                    <div id='location-description' className='col-span-2 xl:col-span-1'>
                        <div className="inline-flex rounded-full">
                            <button
                                type="button"
                                className={`px-4 py-2 text-sm font-medium
                            ${selectedRoute === 'cascaisOeiras' ?
                                        (darkMode ? 'bg-white text-black' : 'bg-black text-white') :
                                        (darkMode ? 'bg-black text-white' : 'bg-white text-black')
                                    }
                            rounded-s-md
                            border-2 ${darkMode ? 'border-white' : 'border-black'}
                            ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}
                                onClick={() => handleRouteChange('cascaisOeiras')}
                            >
                                Cascais/Oeiras
                            </button>
                            <button
                                type="button"
                                className={`px-4 py-2 text-sm font-medium
                              ${selectedRoute === 'linhaAzambuja' ?
                                        (darkMode ? 'bg-white text-black' : 'bg-black text-white') :
                                        (darkMode ? 'bg-black text-white' : 'bg-white text-black')
                                    }
                              border-y-2 ${darkMode ? 'border-white' : 'border-black'}
                              ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}
                                onClick={() => handleRouteChange('linhaAzambuja')}
                            >
                                Linha da Azambuja
                            </button>
                            <button
                                type="button"
                                className={`px-4 py-2 text-sm font-medium
                            ${selectedRoute === 'margemSul' ?
                                        (darkMode ? 'bg-white text-black' : 'bg-black text-white') :
                                        (darkMode ? 'bg-black text-white' : 'bg-white text-black')
                                    }
                            rounded-e-md
                            border-2 ${darkMode ? 'border-white' : 'border-black'}
                            ${darkMode ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}
                                onClick={() => handleRouteChange('margemSul')}
                            >
                                Margem Sul
                            </button>
                        </div>
                        <p className='w-[600px] mt-5 text-wrap text-justify	'>
                            A Estação do Braço de Prata é o grande hub de 
                            transportes para o nosso evento, oferecendo um fácil 
                            e cómodo acesso a todos os visitantes. Localizada a 
                            menos de cinco minutos a pé da nova zona 
                            de Lisboa e dos seus espaços de entretenimento, 
                            cultura e lazer, faz a ligação entre todas as 
                            linhas ferroviárias urbanas da grande Lisboa 
                            (Sintra, Cascais, Azambuja e Fertagus + Estação de 
                            Sta. Apolónia, com ligação via Metro ou a pé, aos 
                            transportes marítimos da Margem  Sul) e com as 
                            principais estações de interface do Metro com a CP, 
                            como a Gare Oriente (apenas a uma estação de comboio
                            de distância), Entre Campos (3 estações), Areeiro 
                            (2 estações) e ainda Sete Rios (4 estações). 
                            É ainda opção, o transporte directo rodoviário 
                            através dos autocarros 718, 728, 210,781 e 782 da 
                            Carris Metropolitana.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location
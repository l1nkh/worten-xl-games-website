import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

import aboutImage from '../assets/img/about.webp';

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })
  return (
    <div id='sobre' className='min-h-screen w-screen'>
        <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
            <h2 className='font-general text-sm uppercase md:text-[10px]'>
                Bem-vindo ao XL Games
            </h2>

            <AnimatedTitle
                title="Entra dentro do <br /> <b>m</b>aior evento <br /> de <b>v</b>ideo<b>j</b>ogos em <b>P</b>ortugal"
                highlightWords="maior evento"
                containerClass="mt-5 !text-black text-center"
            />

            <div className='about-subtext'>
                <p>O XL Games em Lisboa é o destino definitivo para 
                    gamers e entusiastas, com competições épicas, demonstrações 
                    exclusivas e uma comunidade vibrante pronta para celebrar o 
                    universo dos videojogos contigo. Não percas a oportunidade 
                    de fazer parte desta aventura inesquecível!</p>
            </div>
        </div>

        <div className='h-dvh w-screen' id='clip'>
            <div className='mask-clip-path about-image'>
                <img
                    src={aboutImage}
                    alt='Background'
                    className='absolute left-0 top-0 size-full object-cover'
                />
            </div>
        </div>
    </div>
  )
}

export default About
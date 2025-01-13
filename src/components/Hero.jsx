import React, { useEffect, useRef, useState, useContext } from 'react'
import Button from './Button';
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
import { AudioContext } from '../contexts/AudioContext';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const { isAudioPlaying } = useContext(AudioContext);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 1;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1)
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1
    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

    useEffect(() => {
        if (loadedVideos === totalVideos - 1) {
            setIsLoading(false);
        }
    }, [loadedVideos])

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' })

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            })

            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(25% 14%, 2% 13%, 30% 52%, 0 94%, 30% 91%, 50% 74%, 69% 92%, 99% 96%, 68% 54%, 95% 11%, 73% 14%, 49% 38%)',
            borderRadius: '0 0 10% 15%',
            transition: '1.5s ease',
        })

        gsap.from('#video-frame', {
            clipPath: 'polygon(20% 0%, 0 0, 0 53%, 0 100%, 20% 100%, 50% 100%, 80% 100%, 100% 100%, 100% 48%, 100% 0, 80% 0%, 52% 0)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })

    }, { dependencies: [currentIndex], revertOnUpdate: true });

    const getVideoSrc = (index) => `src/assets/videos/hero-${index}.mp4`;

    return (
        <div id='home'>
            <div className='relative h-dvh w-screen overflow-x-hidden'>

                {isLoading && (
                    <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden'>
                        <div className='three-body'>
                            <div className='three-body__dot' />
                            <div className='three-body__dot' />
                            <div className='three-body__dot' />
                        </div>
                    </div>
                )}

                <div id='video-frame' className='relative z-10 h-dvh w-screen
                    overflow-hidden rounded-lg bg-white'>
                    <div>
                        <div className='mask-clip-path absolute-center absolute z-50
                            size-64 cursor-pointer overflow-hidden rounded-lg'>
                            <div onClick={handleMiniVdClick} className='origin-center
                            scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100
                            hover:opacity-100'>
                                <video
                                    ref={nextVideoRef}
                                    src={getVideoSrc(upcomingVideoIndex)}
                                    loop
                                    muted={!isAudioPlaying}
                                    id='current-video'
                                    className='size-64 origin-center scale-150
                    object-cover object-center'
                                    onLoadedData={handleVideoLoad}
                                    webkitallowfullscreen='true'
                                    mozallowfullscreen='true'
                                    allowfullscreen='true'
                                />
                            </div>
                        </div>

                        <video
                            ref={nextVideoRef}
                            src={getVideoSrc(currentIndex)}
                            loop
                            muted={!isAudioPlaying}
                            id='next-video'
                            className='absolute-center invisible absolute z-20 size-64
                                object-cover object-center'
                            onLoadedData={handleVideoLoad}
                            webkitallowfullscreen='true'
                            mozallowfullscreen='true'
                            allowfullscreen='true'
                        />

                        <video
                            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                            autoPlay
                            loop
                            muted={!isAudioPlaying}
                            id='next-video'
                            className='absolute left- top-0 size-full object-cover
                                object-center'
                            onLoadedData={handleVideoLoad}
                            webkitallowfullscreen='true'
                            mozallowfullscreen='true'
                            allowfullscreen='true'
                        />
                    </div>

                    <h1 className='special-font hero-heading absolute bottom-5 right-5
                        z-40 text-white'>
                        <b>W</b>orten
                    </h1>

                    <div className='absolute left-0 top-0 z-40 size-full'>
                        <div className='mt-24 px-5 sm:px-10'>
                            <h1 className='special-font hero-heading text-white'>
                                <b>X</b>L<b>G</b>ames
                            </h1>
                            <p className='mb-5 max-w-64 font-robert-regular text-white'>
                                De 14 a 17 de Novembro <br /> Espaço Mitra
                            </p>

                            {/* 
                            <Button
                                id="watch-trailer"
                                title="Watch Trailer"
                                leftIcon={<TiLocationArrow />}
                                containerClass="!bg-yellow-300"
                                flex-center
                                gap-1
                            />
                            */}
                        </div>
                    </div>
                </div>

                <h1 className='special-font hero-heading absolute bottom-5 right-5
text-red-600'>
                    <b>W</b>orten
                </h1>
            </div>
        </div>

    )
}

export default Hero
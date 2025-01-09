import React, { useState, useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg)
        rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;

        setTransformStyle(newTransform);
    }

    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return (
        <div ref={itemRef} className={className} style={{ transform: transformStyle }}
            onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    )
}

const BentoCard = ({ src, title, description }) => {

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div className='relative size-full'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <video
                ref={videoRef}
                src={src}
                loop
                muted
                className='absolute left-0 top-0 size-full object-cover object'
            />
            <div className="relative z-10 flex size-full flex-col justify-between
            p-5 text-blue-50">
                <div>
                    <h1 className='bento-title special-font'>
                        {title}
                    </h1>
                    {
                        description &&
                        (<p className='mt-3 max-w-64 text-xs md:text-base'>
                            {description}
                        </p>)
                    }
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section id='atividades' className='bg-black pb-52'>
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-white">
                        Entra maior evento de videojogos em portugal
                    </p>
                    <p className="max-w-md font-circular-web text-lg text-white opacity-50">
                        Immerse yourself in a rich and ever-expanding universe where
                        a vibrant array of products converge into an interconnected
                        overlay experience on your world.
                    </p>
                </div>

                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden
                rounded-md md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={<><b>V</b>ideo<b>J</b>ogos</>}
                        description="Experimenta os mais diversos títulos,
                        como Spider-Man 2, Gran Turismo 7, Call of Duty: MWIII
                        e muito mais..."
                    />
                </BentoTilt>

                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1
                    md:row-span-2">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<>Cri<b>a</b>dores de <b>C</b>onteudo</>}
                            description="Vem conhecer os teus criadores de conteúdo
                            favoritos."
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1
                    md:ms-0">
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<><b>m</b>aster <b>l</b>eague</>}
                            description="Assista aos melhores jogadores de ESPORTS
                             em ação na competição de mais alto nível no nosso
                             país."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-32 md:col-span-1
                    md:me-0">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={<>Jogos <b>RETRO</b></>}
                            description="Reviva a nostalgia dos clássicos! Venha
                             ao evento e experimente os melhores jogos retro que
                              marcaram gerações!"
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between
                        bg-red-600 p-5">
                            <h1 className='bento-title special-font max-w-64 text-white'>
                                M<b>a</b>is no<b>v</b>idades em <b>breve</b>!
                            </h1>
                            <TiLocationArrow className='m-5 scale-[5] self-end text-white' />
                        </div>
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2">
                        <BentoCard
                            src="videos/feature-5.mp4"
                            title={<>Realidade <b>Virtual</b></>}
                            description="Entre no mundo da realidade virtual! 
                            Experimente atividades e jogos imersivos com óculos VR
                             e descubra uma nova dimensão de diversão."
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
}

export default Features
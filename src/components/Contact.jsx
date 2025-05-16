import { React, useContext } from 'react';
import Button from './Button.jsx'
import { ThemeContext } from '../contexts/ColorThemeContext.jsx';

import contact1 from '../assets/img/contact-1.jpg';
import contact2 from '../assets/img/contact-2.jpg';
import contact3 from '../assets/img/contact-3.jpg';

const ImageClipBox = ({ src, clipClass, imgClass }) => (
    <div className={clipClass}>
        <img className={imgClass} src={src} />
    </div>
)

const Contact = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div id="contactos" className={`${darkMode ? 'bg-black py-20' : 'bg-white py-20'}  min-h-96 w-screen px-10`}>
            <div className="relative rounded-lg bg-black py-24 text-white
        sm:overflow-hidden">
                <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden 
            sm:block lg:left-20 lg:w-96'>
                    <ImageClipBox
                        src={contact3}
                        clipClass="contact-clip-path-1"
                        imgClass="relative -top-5 left-5"
                    />
                    <ImageClipBox
                        src={contact2}
                        clipClass="contact-clip-path-2 lg:translate-y-40
                            translate-y-60"
                    />
                </div>

                <div className='absolute -top-[7rem] left-14 w-60
            sm:top-1/2 md:left-auto md:right-10 lg:top-40 lg:w-80'>
                    <ImageClipBox
                        src={contact1}
                        clipClass="contact-clip-path-3 md:scale-125"
                    />
                </div>

                <div className='flex flex-col items-center text-center'>
                    <p className='font-general text-[10px] uppercase'>
                        WORTEN XL GAMING
                    </p>
                    <p className='special-font mt-10 w-full font-zentry text-5xl
                    leading-[0.9] md:text-[6rem]'>
                        Junta-te a <b>Nos</b><br />no <b>Maior</b><br />
                        evento de gaming
                    </p>

                    <a href='https://www.instagram.com/direct/t/17842539129312779' target='_blank' rel='noopener noreferrer'>
                        <Button
                            title="Contácta-nos"
                            containerClass="mt-10 cursor-pointer !bg-red-600 text-white"
                        />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Contact
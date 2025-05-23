import { useEffect, useRef, useState, useContext } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { IoTicket } from "react-icons/io5";
import { AudioContext } from '../contexts/AudioContext';
import { AlertContext } from '../contexts/AlertContext';

import logo from '../assets/img/logo.png';

const navItems = ['Atividades', 'Parceiros', 'localização', 'Sobre', 'Contactos'];

const Navbar = () => {
    const { isAudioPlaying, setIsAudioPlaying } = useContext(AudioContext);
    const { showAlert } = useContext(AlertContext);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    return (
        <div ref={navContainerRef} className={`fixed inset-x-0 
            ${showAlert ? 'top-12' : 'top-4'} z-50 h-16 border-none transition-all duration-700 sm:inset-x-6`}>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    <div className='flex items-center gap-7'>
                        <a href="#home">
                            <img src={logo} alt="logo" className='w-10' />
                        </a>
                        <a href='https://www.worten.pt/produtos/bilhete-worten-xl-games-8159633' target='_blank' rel='noopener noreferrer'>
                            <Button
                                id='tickets-button'
                                title='Bilheteira'
                                rightIcon={<IoTicket />}
                                containerClass='text-white !bg-red-600 md:flex hidden items-center justify-center gap-1'
                            />
                        </a>
                    </div>

                    <div className='flex h-full items-center'>
                        <div className='hidden md:block'>
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className='nav-hover-btn'>
                                    {item}
                                </a>
                            ))}
                        </div>

                        <button
                            className='ml-10 flex items-center space-x-0.5'
                            onClick={toggleAudioIndicator}
                        >
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                                    style={{ animationDelay: `${bar * 0.1}s` }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
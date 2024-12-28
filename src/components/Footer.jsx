import React from 'react'
import { FaDiscord, FaGithub, FaTwitch } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const links = [
    {
        href: 'https://discord.com',
        icon: <FaDiscord />
    },
    {
        href: 'https://x.com',
        icon: <FaXTwitter />
    },
    {
        href: 'https://github.com',
        icon: <FaGithub />
    },
    {
        href: 'https://twitch.tv',
        icon: <FaTwitch />
    },
]

const Footer = () => {
    return (
        <footer className='w-screen bg-red-600 py-4 text-white'>
            <div className='container mx-auto flex flex-col items-center
        justify-between gap-4 px-4 md:flex-row'>
                <p className='text-center text-sm md:text-left'>
                    &copy; Diogo Henriques 2024. All rights reserved
                </p>

                <div className='flex justify-center gap-4 md:justify-start'>
                    {links.map((link => (
                        <a key={link} href={link.href} target='_blank' rel='noopener
                    noreferrer' className='text-white transition-colors
                    duration-500 ease-in-out hover:text-black'>
                            {link.icon}
                        </a>
                    )))}
                </div>

                <a href="#privacy-policy" className="text-center text-sm 
                font-light hover:underline md:text-right">
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}

export default Footer
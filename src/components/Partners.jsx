import React from 'react'

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
]

const Partners = () => {
    return (
        <section id='partners' className='min-h-screen w-screen py-72 bg-white text-black'>
            <div className="grid grid-cols-2 gap-7">
                <div className="flex justify-self-end items-center w-1/2">

                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Exercitationem officiis quod veniam repudiandae ipsum
                        ducimus consequatur. Obcaecati, id temporibus.
                        Voluptatibus nemo commodi quia delectus impedit adipisci
                        porro odio inventore numquam.
                    </p>
                </div>
                <div className='flex flex-start'>
                    <ul className='relative flex flex-col items-start'>
                        {partnersList.map((item, index) => (
                            <li key={index} className='text-center bento-title !leading-[0.9]'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Partners
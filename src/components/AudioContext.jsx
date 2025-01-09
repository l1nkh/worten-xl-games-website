import { React, createContext, useState } from 'react';

export const AudioContext = createContext(null); // this null value will be used if the context is used outsite of the provider

export const AudioProvider = ({ children }) => {

    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    return (
        <AudioContext.Provider value={{ isAudioPlaying, setIsAudioPlaying }}>
            {children}
        </AudioContext.Provider>
    );
};

export default AudioContext;
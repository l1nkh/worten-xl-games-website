import {React, useState, useContext} from 'react'
import { IoMdClose } from "react-icons/io";
import { AlertContext } from '../contexts/AlertContext';


const Alert = () => {

    const { showAlert, setShowAlert } = useContext(AlertContext);

    const handleClick = () => {
        setShowAlert(false);
    }

    return (
        <div className={`fixed top-0 left-0 w-full ${showAlert ? 'flex' : 'hidden'} items-center justify-between bg-red-600 text-white text-center px-10 py-2 z-50`}>
            <div></div>
            <p>Este website não é oficial.</p>
            <button
            className='text-white hover:cursor-pointer'
            onClick={handleClick}>
                    <IoMdClose />
            </button>
        </div>
    )
}

export default Alert
import React from "react";
import { link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs';

const BackButton = ({destination = '/'}) => {

    return (
        <div className="flex">
            <link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-1g w-fit'>
                <BsArrowLeft className="text-2xl" />
            </link>
        </div>
    )   
}

export default BackButton;
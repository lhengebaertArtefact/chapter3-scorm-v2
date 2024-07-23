import React from 'react'

import clockIcon from '../../assets/clock.svg'

const DisplayZone = () => {
    return (
        <div className="col-span-1 row-span-2 sm:col-span-2 sm:row-span-5 flex flex-col justify-between items-center">
            <div
                className="w-full h-fit flex flex-row justify-between items-center"
            >
                <span
                    className="text-2xl text-white"
                >
                    Generative AI acculturation
                </span>
                <div
                    className="flex flex-row justify-end items-center w-fit h-fit"
                >
                    <img src={clockIcon} alt="A clock icon" />
                    <span
                        className="text-bordersCyan ml-3"
                    >00:26</span>
                </div>
            </div>

        </div>
    )
}

export default DisplayZone
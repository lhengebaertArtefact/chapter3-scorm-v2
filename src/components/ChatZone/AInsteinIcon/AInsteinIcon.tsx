import React from 'react'

import ainsteinIcon from '../../../assets/ainstein.png'
import splittingBar from '../../../assets/chatSplitingBar.png'

const AInsteinIcon = () => {
    return (
        <div
            className="flex flex-col justify-between items-center w-4/5 h-1/12 mt-5"
        >
            <div
                className="flex flex-row justify-start items-center h-fit w-fit"
            >
                <img src={ainsteinIcon} className='h-12' alt="An AI looking Einstein" />
                <div
                    className="flex flex-col justify-center items-start ml-5"
                >
                    <span
                        className="text-white text-xl"
                    >
                        Ai-nstein
                    </span>
                    <span
                        className="text-bordersCyan text-sm"
                    >
                        Personal Gen AI Assistant
                    </span>
                </div>
            </div>

            <img
                className="w-full"
                src={splittingBar}
                alt="a ui img"
            />
        </div>
    )
}

export default AInsteinIcon
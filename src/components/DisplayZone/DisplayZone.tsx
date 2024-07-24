

import clockIcon from '../../assets/clock.svg'

import DisplayedElement from './DisplayedElement/DisplayedElement'

const DisplayZone = () => {

    


    return (
        <div className="col-span-1 row-span-2 sm:col-span-2 sm:row-span-5 flex flex-col justify-between items-center">
            <div
                className="w-full h-[8%] flex flex-row justify-between items-center"
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
            <div
                className='w-full h-[90%] border-2 border-bordersCyan'
            >
                <DisplayedElement/>
            </div>

        </div>
    )
}

export default DisplayZone
import React from 'react'

import bgLeftProgressZone from '../../assets/bgProgressZone.png'
import bgRightProgressZone from '../../assets/rightProgressZone.png'

const ProgressZone = () => {
    return (
        <div className="col-span-1 row-span-1 sm:col-span-2 relative">
            <img
                className="absolute left-0 top-0 h-full w-3/4"
                src={bgLeftProgressZone}
                alt="an ui related image"
            />

            <img
                className="absolute right-0 top-0 h-full w-1/4"
                src={bgRightProgressZone}
                alt="an ui related image"
            />
        </div>
    )
}

export default ProgressZone
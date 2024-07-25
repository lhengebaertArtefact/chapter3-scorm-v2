import React, { useEffect } from 'react'
import { MiniGameObjective } from '../../../../types/Objective'
import DoAndDont from './Minigames/DoAndDont/DoAndDont'

const MinigameElement = ({
    minigame
}:{
    minigame:MiniGameObjective
}) => {

    switch (minigame.content.game.type){
      case "doAndDont" :
        return <DoAndDont content={minigame.content.game.gameInfos}/>
      default :
        return <span>PB</span>
    }

}

export default MinigameElement
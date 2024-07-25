import { Application } from "pixi.js"
import BaseItem from "./BaseItem"



export default class PixiApp {
    static _instance:PixiApp
    public instance!:Application
    private items!:BaseItem[]
    public elapsedTime!:number

    constructor(){
        if(PixiApp._instance){
            return PixiApp._instance
        }

        PixiApp._instance = this
        this.instance = new Application()
        this.items = []
        this.elapsedTime = 0
        
        
    }

    add(obj:BaseItem){
        this.items.push(obj)
        this.instance.stage.addChild(obj.item)
        if(obj.update){
            const updateFunction = obj.update
            this.instance.ticker.add((e)=>updateFunction(e))
        }
    }

    

    resize(){
        this.items.forEach(item=>item.resize())
    }


    dispose(){
        this.instance.destroy(true, { children: true, texture: true});
    }
}
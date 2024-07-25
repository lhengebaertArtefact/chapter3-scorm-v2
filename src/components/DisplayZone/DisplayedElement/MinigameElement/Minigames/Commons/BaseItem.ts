import { Container, ContainerChild, Rectangle, Ticker } from "pixi.js";
import PixiApp from "./PixiApp";


export default class BaseItem {

    public pixiApp:PixiApp
    public stage:ContainerChild
    public item:Container
    private screen:Rectangle
    public screenSize:{
        width:number,
        height:number
    }
    public defaultPosition:null|number
    public currentPosition:null|number
    public update:null|((e:Ticker)=>void)


    constructor(){
        this.pixiApp = new PixiApp()
        this.stage = this.pixiApp.instance.stage
        this.item = new Container()

        this.screen = this.pixiApp.instance.screen
        this.screenSize = {
            width:this.screen.width,
            height:this.screen.height
        }

        this.defaultPosition = null

        this.currentPosition = null
        this.update = null

    }



    resize(){
        this.item.x = this.screen.width * this.item.x / this.screenSize.width
        this.item.y = this.screen.height * this.item.y / this.screenSize.height
        this.screenSize.width = this.screen.width
        this.screenSize.height = this.screen.height
    }

    
}
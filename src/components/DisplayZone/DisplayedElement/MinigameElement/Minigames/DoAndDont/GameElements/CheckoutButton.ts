import { Container, Graphics, Text, TextStyle } from "pixi.js";
import BaseItem from "../../Commons/BaseItem";

export default class CheckoutButton extends BaseItem {

    private width:number
    private checkout:()=>void

    constructor({
        width,
        checkout
    }:{
        width:number,
        checkout:()=>void
    }){
        super()

        this.width = width
        this.checkout = checkout

        this.onPointerDown = this.onPointerDown.bind(this)

        this.init()
    }

    onPointerDown(){
        this.checkout()
    }



    init(){
        const container = new Container()

        

        const txtStyle = new TextStyle({
            fontFamily:'Arial',
            fontSize:12,
            fill:'#0E2135',
            align:"center",
        })

        const txt = new Text({
            text:'Submit',
            style:txtStyle
        })

        txt.pivot.set(txt.width*0.5,txt.height*0.5)
        txt.x = this.width * this.screenSize.width * 0.5
        txt.y = (txt.height +20) * 0.5

        const bg = new Graphics()
        .rect(
            0,
            0,
            this.width * this.screenSize.width,
            txt.height + 20
        )
        .fill({
            color:'#26E5D3'
        })

        container.addChild(bg)
        container.addChild(txt)

        container.pivot.set(container.width*0.5, container.height)
        container.x = this.screenSize.width * 0.5
        container.y = this.screenSize.height
        
        container.interactive = true
        container.on('pointerdown',this.onPointerDown)

        this.item = container
        this.pixiApp.add(this)
    }
}
import { Container, Graphics, Text, TextStyle } from "pixi.js";
import BaseItem from "../../Commons/BaseItem";


export default class DoDontArea extends BaseItem {

    private size : {width:number,height:number}
    private position : {x:number,y:number}
    private label:string
    private isLabelOnLeft:boolean
    private fontSize: number

    constructor(
        { width, height, x, y, label, isLabelOnLeft, fontSize }:{width:number,height:number,x:number,y:number, label:string, isLabelOnLeft:boolean, fontSize:number}
    ){
        super()

        this.position = {x,y}
        this.size = {width, height}
        this.label = label
        this.isLabelOnLeft = isLabelOnLeft
        this.fontSize = fontSize


        this.init()
        

    }

    init(){
        const container = new Container()
        container.x = this.position.x * this.screenSize.width
        container.y = this.position.y * this.screenSize.height
        container.width = this.size.width * this.screenSize.width
        container.height = this.size.height * this.screenSize.height

        

        const labelStyle = new TextStyle({
            fontFamily:'Arial',
            fontSize:this.fontSize,
            fill:'#26E5D3',
            stroke:{color:'#000000',width:0}, 
        })
        const containerLabel = new Text({
            text:this.label,
            style:labelStyle
        })

        if(!this.isLabelOnLeft){
            containerLabel.anchor.set(1,0)
            containerLabel.x = this.size.width * this.screenSize.width
        }
        

        const zone = new Graphics()
        .rect(
            0,
            0,
            this.size.width * this.screenSize.width,
            this.size.height * this.screenSize.height * 0.9 - this.fontSize
        )
        .stroke({color:'#26E5D3',width:2})
        .fill({
            color:0xFF0000,
            alpha:0
        })
        zone.y = this.fontSize * 1.5
        zone.interactive = true
        zone.eventMode = 'static'
        zone.label = this.label


        container.addChild(containerLabel)
        container.addChild(zone)

        this.item = container
        this.pixiApp.add(this)
    }

    resize(){
       super.resize()

       const text = this.item.children[0]
       const zone = this.item.children[1]

    
        if(!this.isLabelOnLeft){
            text.x = this.size.width * this.screenSize.width
        }

        

        zone.width = this.size.width * this.screenSize.width
        zone.height = this.size.height * this.screenSize.height * 0.9 - this.fontSize
        zone.y = this.fontSize * 1.5
    }


}
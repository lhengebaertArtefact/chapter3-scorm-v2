import { Container, Graphics, Text, TextStyle, FederatedPointerEvent, EventBoundary } from "pixi.js";
import BaseItem from "../../Commons/BaseItem";


export default class AnswerCard extends BaseItem {

    private text:string
    private width:number
    private id:number
    public correctAnswer:string
    private yPos:number
    private isDragging:boolean
    private boundary:EventBoundary
    private pushCard:(el:AnswerCard,label:string)=>void
    private removeCard:(el:AnswerCard)=>void
    

    constructor(
        {
            text,
            width,
            id, 
            correctAnswer,
            pushCard, 
            removeCard
        }:{
            text:string,
            width:number,
            id:number,
            correctAnswer:string
            pushCard:(el:AnswerCard,label:string)=>void,
            removeCard:(el:AnswerCard)=>void
        }
    ){
        super()

        this.text = text
        this.width = width
        this.id = id
        this.correctAnswer = correctAnswer
        this.pushCard = pushCard
        this.removeCard = removeCard

        this.yPos = 0
        this.isDragging = false
        this.boundary = new EventBoundary(this.stage)

        this.onPointerDown = this.onPointerDown.bind(this)
        this.onPointerUp = this.onPointerUp.bind(this)
        this.onPointerMove = this.onPointerMove.bind(this)


        this.init()
    }

    onPointerDown(e:FederatedPointerEvent){
        this.isDragging = true
        this.removeCard(this)
    }

    onPointerUp(e:FederatedPointerEvent){
        this.isDragging = false
        const pointerPos = e.global
        const position = this.stage.toLocal(pointerPos)

        this.item.visible = false
        const hitResult = this.boundary.hitTest(position.x,position.y)
        this.item.visible=true

        if(hitResult && (hitResult.label === 'DO' || "DON'T")){
            this.pushCard(this,hitResult.label)
        }else{
            this.item.x = this.screenSize.width * 0.5
            this.item.y = this.yPos
        }
        
    }

    onPointerMove(e:FederatedPointerEvent){
       if(this.isDragging){
            const pointerPos = e.global
            const position = this.stage.toLocal(pointerPos)
            this.item.x = position.x
            this.item.y = position.y + this.item.height * 0.5
       } 
    }

    init(){

        const container = new Container()
        container.interactive = true

        const textStyle = new TextStyle({
            fontFamily:'Arial',
            fontSize:12,
            fill:'#0E2135',
            align:"center",
            wordWrap:true,
            wordWrapWidth:this.width*this.screenSize.width * 0.8
        })

        const txt = new Text({
            text:this.text,
            style:textStyle
        })

        txt.x = this.width*this.screenSize.width * 0.1
        txt.y = 10

        

        const card = new Graphics()
        .rect(
            0,
            0,
            this.width * this.screenSize.width,
            txt.height + 20
        )
        .fill('rgba(255,255,255,0.7)')

        container.addChild(card)
        container.addChild(txt)
        container.label = `answerCard${this.id}`

        container.pivot.set(container.width*0.5,container.height)
        container.position.set(this.screenSize.width*0.5,this.screenSize.height*0.9)

        container.on('pointerdown',this.onPointerDown)

        container.on('pointerup', this.onPointerUp)
        container.on('pointerupoutside', this.onPointerUp)

        container.on('globalmousemove', this.onPointerMove)
        
        

        this.item = container
        this.pixiApp.add(this)
    }

    replaceElement(){

        this.yPos = this.screenSize.height * 0.9

        for(let i=1; i<=this.id; i++){
            this.yPos -= this.item.parent.getChildByLabel(`answerCard${i-1}`)!.height + 10
        }

        this.item.y = this.yPos
        this.item.x = this.screenSize.width * 0.5

    }

    resize(): void {
        super.resize()

        
        const bg = this.item.children[0]
        const txt = this.item.children[1] as Text

       
        txt.style.wordWrapWidth = this.width*this.screenSize.width * 0.8
        bg.width = this.width * this.screenSize.width
        bg.height = txt.height + 20

        this.replaceElement()
        
    }

}
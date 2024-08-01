import { Container, Graphics, Text, TextStyle } from "pixi.js";
import BaseItem from "../../Commons/BaseItem";
import AnswerCard from "./AnswerCard";


export default class DoDontArea extends BaseItem {

    private size: { width: number, height: number }
    private position: { x: number, y: number }
    public label: string
    private isLabelOnLeft: boolean
    private fontSize: number
    public currentCards: AnswerCard[]

    constructor(
        { width, height, x, y, label, isLabelOnLeft, fontSize }: { width: number, height: number, x: number, y: number, label: string, isLabelOnLeft: boolean, fontSize: number }
    ) {
        super()

        this.position = { x, y }
        this.size = { width, height }
        this.label = label
        this.isLabelOnLeft = isLabelOnLeft
        this.fontSize = fontSize

        this.currentCards = []


        this.init()


    }

    init() {
        const container = new Container()
        container.x = this.position.x * this.screenSize.width
        container.y = this.position.y * this.screenSize.height
        container.width = this.size.width * this.screenSize.width
        container.height = this.size.height * this.screenSize.height



        const labelStyle = new TextStyle({
            fontFamily: 'Arial',
            fontSize: this.fontSize,
            fill: '#26E5D3',
            stroke: { color: '#000000', width: 0 },
        })
        const containerLabel = new Text({
            text: this.label,
            style: labelStyle
        })

        if (!this.isLabelOnLeft) {
            containerLabel.anchor.set(1, 0)
            containerLabel.x = this.size.width * this.screenSize.width
        }


        const zone = new Graphics()
            .rect(
                0,
                0,
                this.size.width * this.screenSize.width,
                this.size.height * this.screenSize.height * 0.9 - this.fontSize
            )
            .stroke({ color: '#26E5D3', width: 2 })
            .fill({
                color: 0xFF0000,
                alpha: 0
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

    addCard(el: AnswerCard) {
        this.currentCards.push(el)
        this.replaceCards()
    }

    replaceCards() {
        for (let i = 0; i < this.currentCards.length; i++) {
            const card = this.currentCards[i].item
            let previousCardPosY:null|number = null
            if(this.currentCards[i-1]){
                previousCardPosY = this.currentCards[i-1].item.y
            }

            card.x = (this.position.x + this.size.width * 0.5) * this.screenSize.width
            if(previousCardPosY){
                card.y = previousCardPosY + 10 + card.height
            }else{
                card.y = this.position.y * this.screenSize.height + this.fontSize * 1.5 + card.height + 10
            }
            
        }
    }

    removeCard(el: AnswerCard) {
        
        const index = this.currentCards.indexOf(el)
        if (index !== -1) {
            this.currentCards.splice(index, 1)
        }
        this.replaceCards()

    }

    checkAnswers(){
        for(const card of this.currentCards){
            if(card.correctAnswer === this.label){
                const bg = card.item.children[0] as Graphics
                const width = bg.width
                const height = bg.height
                bg.clear()
                bg.rect(0,0,width,height).fill('#00FF00')
            }else{
                const bg = card.item.children[0] as Graphics
                const width = bg.width
                const height = bg.height
                bg.clear()
                bg.rect(0,0,width,height).fill('#FF0000')
            }
        }
    }

    resize() {
        super.resize()

        const text = this.item.children[0]
        const zone = this.item.children[1]


        if (!this.isLabelOnLeft) {
            text.x = this.size.width * this.screenSize.width
        }



        zone.width = this.size.width * this.screenSize.width
        zone.height = this.size.height * this.screenSize.height * 0.9 - this.fontSize
        zone.y = this.fontSize * 1.5

        this.replaceCards()
    }


}
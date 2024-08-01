import React, { MutableRefObject, useContext, useEffect, useRef } from 'react'
import PixiApp from '../Commons/PixiApp'
import DoDontArea from './GameElements/DoDontArea'
import AnswerCard from './GameElements/AnswerCard'
import CheckoutButton from './GameElements/CheckoutButton'
import { GlobalContext } from '../../../../../../context/GlobalContext'

const DoAndDont = ({
    content
}: {
    content: {
        answers: {
            label: string
            id: number
            correctAnswer: 'DO' | "DON'T"
        }[]
    }
}) => {

    const {setIsCurrentDisplayedElementCompleted} = useContext(GlobalContext)

    const containerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    useEffect(() => {
        if (containerRef.current) {

            const initPixi = async () => {
                const app = new PixiApp();
                await app.instance.init({
                    resizeTo: containerRef.current!,
                    background: '#05111F',
                    backgroundAlpha: 1
                });

                containerRef.current!.appendChild(app.instance.canvas);

                let startTime = performance.now();
                app.instance.ticker.add(() => {
                    let currentTime = performance.now();
                    app.elapsedTime = currentTime - startTime;
                });

                

                const doArea = new DoDontArea({
                    width: 0.3,
                    height: 0.9,
                    x: 0.05,
                    y: 0.1,
                    label: 'DO',
                    isLabelOnLeft: true,
                    fontSize: 26
                })

                const dontArea = new DoDontArea({
                    width: 0.3,
                    height: 0.9,
                    x: 0.65,
                    y: 0.1,
                    label: "DON'T",
                    isLabelOnLeft: false,
                    fontSize: 26
                })

                const areas = [doArea, dontArea]

                const pushCardIntoZone = (el:AnswerCard, label:string) => {
                    
                    for(const area of areas){
                        if(area.label === label){
                            area.addCard(el)
                        }
                    }
                }

                const removeCardFromZone = (el:AnswerCard) => {
                    for(const area of areas){
                        area.removeCard(el)
                    }
                }

                const answerArray:AnswerCard[] = []

                for (const answer of content.answers) {
                    answerArray.push(
                        new AnswerCard({
                            text: answer.label,
                            width: 0.2,
                            id: answer.id, 
                            correctAnswer:answer.correctAnswer,
                            pushCard:pushCardIntoZone,
                            removeCard:removeCardFromZone
                        })
                    )

                }

                for (const card of answerArray) {
                    card.replaceElement()
                }

                const checkoutAnswers = () => {
                    for(const area of areas){
                        area.checkAnswers()
                    }
                    setIsCurrentDisplayedElementCompleted(true)
                }

                new CheckoutButton({
                    width:0.2,
                    checkout:checkoutAnswers
                })



                const handleResize = () => {
                    app.resize();
                };

                window.addEventListener('resize', handleResize);


                return () => {
                    window.removeEventListener('resize', handleResize);
                    app.dispose();
                };
            };


            initPixi();
        }
    }, [])

    return (
        <div className='w-full h-full' ref={containerRef} />
    )
}

export default DoAndDont
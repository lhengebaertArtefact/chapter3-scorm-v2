import React, { MutableRefObject, useEffect, useRef } from 'react'
import PixiApp from '../Commons/PixiApp'
import DoDontArea from './GameElements/DoDontArea'
import AnswerCard from './GameElements/AnswerCard'

const DoAndDont = ({
    content
}: {
    content: {
        answers: {
            label: string
            id: number
            correctAnswer: 'do' | 'dont'
        }[]
    }
}) => {

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

                new DoDontArea({
                    width: 0.3,
                    height: 0.9,
                    x: 0.05,
                    y: 0.1,
                    label: 'DO',
                    isLabelOnLeft: true,
                    fontSize: 32
                })

                new DoDontArea({
                    width: 0.3,
                    height: 0.9,
                    x: 0.65,
                    y: 0.1,
                    label: "DON'T",
                    isLabelOnLeft: false,
                    fontSize: 32
                })

                const answerArray:AnswerCard[] = []

                for (const answer of content.answers) {
                    answerArray.push(
                        new AnswerCard({
                            text: answer.label,
                            width: 0.2,
                            id: answer.id
                        })
                    )

                }

                for (const card of answerArray) {
                    card.replaceElement()
                }




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
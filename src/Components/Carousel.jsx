import React, { useState } from 'react'

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const [startTouch, setStartTouch] = useState(null)

    const length = slides.length

    const previousState = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const nextState = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const handleTouchStart = (e) => {
        setStartTouch(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
        if (startTouch && startTouch > e.targetTouches[0].clientX + 75) {
            nextState()
            setStartTouch(null)
        }
        if (startTouch && startTouch < e.targetTouches[0].clientX - 75) {
            previousState()
            setStartTouch(null)
        }
    }

    return (
        <div className='slider overflow-hidden relative'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div
                className='card flex transition ease-out duration-400'
                style={{
                    transform: `translateX(-${current * 100}%)`
                }}
            >
                {slides.map((s, index) => {
                    return <img src={s} key={index} alt={`slide ${index}`} />
                })}
            </div>
            <div className='absolute bottom-1 flex justify-center gap-5 w-full'>
                {slides.map((s, i) => {
                    return (
                        <div
                            onClick={() => {
                                setCurrent(i)
                            }}
                            key={'circle' + i}
                            className={`cursor-pointer rounded-full w-3 h-3 ${
                                i === current ? 'bg-[#C2410C]' : 'bg-gray-500'
                            }  border-[1.5px] border-black`}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
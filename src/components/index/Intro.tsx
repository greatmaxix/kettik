import React, { useState } from 'react';
import { animated, useSpring } from '@react-spring/web'
import friends1 from '../../assets/friends1.jpeg'
import './index.css'

export default function IntroIndex() {
    const [items, setItems] = useState([
        {
            text: 'Хочешь найти людей для спортивной игры?',
            show: false
        },
        {
            text: 'Хочешь найти место для проведения спортивных мероприятий?',
            show: false
        },
        {
            text: 'Хочешь организовать свои спортивные ивенты?',
            show: false
        },
        {
            text: 'А может ты хочешь заработать сдавая свою площадку?',
            show: false
        },
    ])

    return (
        <div id="intro" className="indexPager introBg">
            <div className='d-flex flex-column h-100'>
                {items.map((el: any, index: number) => {
                    return (
                        <animated.div
                            // style={{ color }}
                            key={index}
                            className={`wantDiv-${index + 1} m-3 rounded text-center text-light p-2`}
                            // onMouseEnter={() => setAnim({ y: 0, color: "#000" })}
                            // onMouseLeave={() => setAnim({ y: 100, color: "#fff" })}
                        >
                            <h1 className='display-2 wantDiv-text'>{el.text}</h1>
                        </animated.div>
                    )
                })}
            </div>
        </div>
    )
}
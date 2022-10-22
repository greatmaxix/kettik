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
        <div id="intro" className="indexPager mt-5">
            <div className='row h-100 indexPager'>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6 introBg-1 bg-warning'>
                    <div className='row h-100'>
                        <div className='col-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center flex-column'>
                            <div className='row mx-1 mt-4'>
                                <div className='col-12 col-md-12 col-lg-12 col-xl-12 bg-light rounded-5'>
                                    <h1 className='text-center display-1'>Kettik</h1>
                                    <h3 className='text-center display-5'>Спортивные игры и мероприятия</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
                                    <div className='row mx-1 mb-4'>
                                        <div className='col-12 col-md-12 col-lg-12 col-xl-12 mt-4 bg-light rounded-5'>
                                            <p className='text-center display-6'>Kettik - это сервис, который поможет тебе найти людей для спортивных игр, найти место для проведения спортивных мероприятий, организовать свои спортивные ивенты и заработать сдавая свою площадку.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6 introBg'>
                    <div className='d-flex justify-content-center align-items-center h-100 flex-column'>
                        {items.map((el: any, index: number) => {
                            return (
                                <animated.div
                                    // style={{ color }}
                                    key={index}
                                    className={`wantDiv wantDiv-${index + 1} m-3 rounded-5 text-center text-light p-2 lead`}
                                    // onMouseEnter={() => setAnim({ y: 0, color: "#000" })}
                                    // onMouseLeave={() => setAnim({ y: 100, color: "#fff" })}
                                >
                                    <h1 className='display-6-lg wantDiv-text'>{el.text}</h1>
                                </animated.div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}
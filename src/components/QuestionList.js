import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Question from './Question';
import LoadButton from './LoadButton';

const QuestionList = () => {
    const url = 'https://lxpi9qne2a.api.quickmocker.com/getReactFAQs';
    const [firstHalf, setFirstHalf] = useState([]);
    const [secondHalf, setSecondHalf] = useState([]);
    const even = [];
    const odd = [];
    useEffect(() => {
        axios.get(url).then(res => {
            const resp = res.data.response;

            resp.map((question, index) => {
                const qElement = <Question question={question}></Question>;
                if (index % 2 === 0) {
                    even.push(qElement);
                } else {
                    odd.push(qElement);
                }
            })
            setFirstHalf(even);
            setSecondHalf(odd);
        })
    }, [])
    return (
        <div className='grid 
        grid-cols-1 
        lg:grid-cols-2

        mt-[3rem]

        md:mt-[5rem]

        lg:mt-[15rem]
        ml-[1rem]
        
        md:ml-[10rem]

        lg:ml-[0rem]
        lg:gap-[33rem]
        xl:mt-[8rem]
        xl:gap-[35.5rem]'>
            <div>{firstHalf}</div>
            <div>{secondHalf}<LoadButton/></div>
        </div>
    )
}

export default QuestionList

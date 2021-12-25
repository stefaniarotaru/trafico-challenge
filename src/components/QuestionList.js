import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Question from './Question';
import LoadButton from './LoadButton'

const QuestionList = () => {
    const url = 'https://lxpi9qne2a.api.quickmocker.com/getReactFAQs';
    const [questions, setQuestions] = useState([]);

    const [amount, setAmount] = useState(10);
    const loadMore = () => {
        setAmount((prevAmount) => prevAmount + 5);
    }

    const loadLess = () => {
        setAmount((prevAmount) => prevAmount - 5);
    }

    useEffect(() => {
        axios.get(url).then(res => {
            const resp = res.data.response;

            setQuestions(resp);
        })
    }, [])
    return (
        <div>
            <div className='grid 
            grid-cols-1 
            lg:grid-cols-2

            mt-[3rem]

            md:mt-[5rem]

            lg:mt-[15rem]
            ml-[1rem]
            
            md:ml-[10rem]

            lg:ml-[0rem]
            lg:gap-x-[33rem]
            xl:mt-[8rem]
            xl:gap-x-[35.5rem]'>

                {questions.slice(0, amount).map((question) => <Question question={question} />)}

            </div>
            
            <button className='
            ml-[1rem]
            md:ml-[10rem]
            lg:ml-[33.6rem]
            xl:ml-[35.5rem]'
                onClick={amount < questions.length ? loadMore : loadLess}><LoadButton /></button>

        </div>

    )
}

export default QuestionList

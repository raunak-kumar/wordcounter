import React, { useState } from 'react';
import { Details } from './Details';
import { TestLetter } from './TestLetter'


const rawData = ["Business meetings, and professional recordings can contain sensitive data, so security is something a transcription company should not overlook when providing services. Companies should therefore follow the various laws and industry best practice, especially so when serving law firms, government agencies or courts. Medical Transcription specifically is governed by HIPAA, which elaborates data security practices and compliance measures to be strictly followed, failure of which leads to legal action and penalties. Transcription security includes maintaining confidentiality of the data through information security practices including limiting access with passwords and ensuring a secure environment for data and appropriate methods of disposal of all materials and deletion of files. Personnel may be required to sign non-disclosure agreements on a regular basis as well as take various oaths regarding confidentiality and accuracy.",
    "Self-confidence is a tricky subject for many people. For some, it's impossible to feel good about themselves without outside validation. When you're in a situation where the people in your life aren't helping you to feel better about yourself, this can become a problem in your day to day life. Most insecurity stems from feelings of not being attractive or feelings of loneliness. If your insecurity doesn't necessarily stem from a lack of interaction, but more a lack of feeling attractive, there are other options that will help you online. Sometimes the best way to put your insecurities to rest can simply be to get an honest opinion.",
    "There are multiple support groups online where you can share a picture of yourself with other members and they will give honest feedback on your appearance. In most cases, they will point out good qualities that you may have missed in yourself. But you can trust them to be honest and many members give very valuable style and posture advice to increase your attractiveness. These practical tips and unbiased opinions from supportive strangers will immediately help you feel better about yourself, and if the tips are implemented it will also improve your self-esteem in the long-run.",
    "A transcription service is a business which converts speech (either live or recorded) into a written or electronic text document. Transcription services are often provided for business, legal, or medical purposes. The most common type of transcription is from a spoken-language source into text such as a computer file suitable for printing as a document such as a report. Common examples are the proceedings of a court hearing such as a criminal trial (by a court reporter) or a physician's recorded voice notes (medical transcription)."]

let randomText = rawData[Math.floor(Math.random() * rawData.length)]
const randomWordArr = randomText.split(" ")
const randomCharArr = randomText.split('')

export function Typing(props) {
    const [wordDetails, setWordDetails] = useState({})
    const [flag, setFlag] = useState(true)
    const [outputText, setOutputText] = useState(
        randomCharArr.map((item, index) => {
            return {
                testLetter: item,
                status: "notVisited"
            }
        })
    )


    const handleInput = event => {
        event.preventDefault();
        let input = event.target.innerText
        const characters = input.length;
        const index = characters - 1;
        if (input[0] === randomText[0] && flag) {
            props.isToggleTimer(true)
            setFlag(false)
        }

        let newArray = [...outputText]
        if (characters === 0) {
            setOutputText(
                randomCharArr.map((item, index) => {
                    return {
                        testLetter: item,
                        status: "notVisited"
                    }
                })
            )
        }
        else {
            if (input[index] === outputText[index].testLetter) {
                newArray[index].status = "correct"
            }
            else {
                newArray[index].status = "incorrect"
            }

            setOutputText(newArray)
        }

        let correct = 0
        let incorrect = 0
        input.split(" ").map(
            (item, index) => {

                if (item.trim() === randomWordArr[index]) {
                    correct++
                }
                else {
                    incorrect++
                }
            })
        setWordDetails({
            correct: correct,
            incorrect: incorrect
        })

    };


    return (
        <>
            <div id="output" contentEditable={true} suppressContentEditableWarning={true}>{
                outputText.map((letterinfo, index) => {
                    return <TestLetter key={index} letterInfo={letterinfo} />
                })
            }</div>
            <div id="input" contentEditable={props.timeZero ? false : true} onInput={handleInput} onPaste={(e) =>{
                e.preventDefault();
                return false
            }}></div>

            {props.timeZero === true && <Details wordDetails={wordDetails} time={props.timeZero} />}
        </>
    );

}



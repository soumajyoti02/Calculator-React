import React, { useState } from 'react'

const Calculator = () => {
    const [display, setDisplay] = useState([])
    const [sign, setSign] = useState('')

    const handleClick = (num) => {
        if (num === 'cs') setDisplay([])

        else if (num === '=') {
            try {
                // let pos = display.findIndex(elem => elem === '+'); // Because findIndex takes a function
                let pos;
                if (display.indexOf('+') !== -1) {
                    pos = display.indexOf('+')
                }
                else if (display.indexOf('-') !== -1) {
                    pos = display.indexOf('-')
                }
                else if (display.indexOf('*') !== -1) {
                    pos = display.indexOf('*')
                }
                else if (display.indexOf('/') !== -1) {
                    pos = display.indexOf('/')
                }

                /* Here Display Array is splitted into 2 part. 0 to Left of operator and Right of Operator to end. Then Both part is converted into number and then operation is Performed. */
                let arr1 = display.slice(0, pos)
                let arr2 = display.slice(pos + 1,)
                let num1 = Number(arr1.join(''))
                let num2 = Number(arr2.join(''))

                switch (display[pos]) {
                    case '+':
                        setDisplay([num1 + num2])
                        break;
                    case '-':
                        setDisplay([num1 - num2])
                        break;
                    case '*':
                        setDisplay([num1 * num2])
                        break;
                    case '/':
                        setDisplay([num1 / num2])
                        break;
                    default:
                        throw new Error('Invalid operator');
                }
            }
            catch (error) {
                setDisplay(["Error"])
            }

        }
        else setDisplay([...display, num])
    }

    return (
        <>
            <div className="h-[100vh] w-[100vw] bg-sky-600">
                <nav className="h-[10%] bg-black w-screen flex items-center justify-center">
                    <p className="text-4xl text-slate-300 font-serif">Calculator</p>
                </nav>
                <div className="h-[90%] flex justify-center items-center">
                    <div className="h-[500px] w-[500px] border-2 border-dotted border-black box-border">

                        <div className="display bg-gray-500 h-[40%]">
                            {/* DISPLAY THE ANSWER */}
                            <div className="top-bar h-[40%] bg-slate-900 flex justify-center items-center">
                                <p className="text-3xl text-gray-300 font-semibold">Calculate And Enjoy</p>
                            </div>
                            <div className="h-[60%] rounded-xl bg-yellow-900 p-5">
                                <p className="text-white font-semibold text-2xl">
                                    {display}
                                </p>
                            </div>
                        </div>

                        <div className="lines h-[15%] flex">
                            <button onClick={() => handleClick(7)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">7</button>
                            <button onClick={() => handleClick(8)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">8</button>
                            <button onClick={() => handleClick(9)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">9</button>
                            <button onClick={() => handleClick('cs')} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">CS</button>
                        </div>
                        <div className="lines h-[15%] flex">
                            <button onClick={() => handleClick(4)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">4</button>
                            <button onClick={() => handleClick(5)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">5</button>
                            <button onClick={() => handleClick(6)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">6</button>
                            <button onClick={() => handleClick('+')} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">+</button>
                        </div>
                        <div className="lines h-[15%] flex">
                            <button onClick={() => handleClick(1)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">1</button>
                            <button onClick={() => handleClick(2)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">2</button>
                            <button onClick={() => handleClick(3)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">3</button>
                            <button onClick={() => handleClick('-')} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">-</button>
                        </div>
                        <div className="lines h-[15%] flex">
                            <button onClick={() => handleClick(0)} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">0</button>
                            <button onClick={() => handleClick('.')} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">.</button>
                            <button onClick={() => handleClick('=')} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">=</button>
                            <button onClick={() => handleClick('/')} className="w-1/4 border-2 border-gray-400 bg-black text-white text-xl rounded-xl">/</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator

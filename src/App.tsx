import React, {useState} from 'react';
import './App.css';
import Button from "./Button";
import Display from "./Display";
import Wrapper from "./Wrapper";

function App() {
    const [counter, setCounter] = useState(0)

    const maxCount = 5
    const minCount = 0
    const stopCount = counter === maxCount

    const increaseCounter = () => {
        // setCounter(counter + 1)
        setCounter(prevState => prevState + 1)
    }
    const resetCounter = () => {
        setCounter(minCount)
    }
    return (
        <div className="App">
            <Wrapper>
                <Display stopCount={stopCount} counter={counter}/>
                <Wrapper>
                    <Button isActive={stopCount} onClick={increaseCounter} name={"INC"}/>
                    <Button isActive={counter === minCount} onClick={resetCounter} name={"RESET"}/>
                </Wrapper>
            </Wrapper>
        </div>
    );
}

export default App;

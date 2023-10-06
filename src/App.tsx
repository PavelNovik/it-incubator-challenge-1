import React, {useState} from 'react';
import './App.css';
import Button from "./Button";
import Display from "./Display";
import Counter from "./Counter";

function App() {
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        const num = counter + 1
        setCounter(num)
    }
    const resetCounter = () => {
        setCounter(0)
    }
    return (
        <div className="App">
            <Counter>
                <Display counter={counter}/>
                <Button isActive={counter > 4} onClick={increaseCounter} name={"INC"}/>
                <Button isActive={counter < 1} onClick={resetCounter} name={"RESET"}/>
            </Counter>
        </div>
    );
}

export default App;

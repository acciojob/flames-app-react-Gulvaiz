import React, { useState } from "react";
import '../styles/App.css';

const App = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [output, setOutput] = useState("");

    function handleCalculation() {
        if (input1 === '' || input2 === '') {
            setOutput("Please Enter valid input");
            return;
        }

        // Convert strings to arrays of characters
        let firstArr = input1.split("");
        let secondArr = input2.split("");
        let newArr = [];

        // Remove common characters
        for (let i = 0; i < firstArr.length; i++) {
            let flag = false;
            for (let j = 0; j < secondArr.length; j++) {
                if (firstArr[i] === secondArr[j]) {
                    secondArr.splice(j, 1); // Remove matching character from secondArr
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                newArr.push(firstArr[i]); // Add unique characters to newArr
            }
        }

        // Calculate relationship status based on the length of the unique characters
        let length = newArr.length + secondArr.length;
        let n = length % 6;
        switch (n) {
            case 1:
                setOutput("Friends");
                break;
            case 2:
                setOutput("Love");
                break;
            case 3:
                setOutput("Affection");
                break;
            case 4:
                setOutput("Marriage");
                break;
            case 5:
                setOutput("Enemy");
                break;
            case 0:
                setOutput("Siblings");
                break;
            default:
                setOutput("Please Enter valid input");
        }
    }

    function handleClear() {
        setInput1("");
        setInput2("");
        setOutput("");
    }

    return (
        <div id="main">
            {/* Do not remove the main div */}
            <input
                type="text"
                name="name1"
                value={input1}
                placeholder="enter first name"
                data-testid="input1"
                onChange={(e) => setInput1(e.target.value)}
            />
            <input
                type="text"
                name="name2"
                value={input2}
                placeholder="enter second name"
                data-testid="input2"
                onChange={(e) => setInput2(e.target.value)}
            />
            <button data-testid="calculate_relationship" onClick={handleCalculation}>
                Calculate relationship
            </button>
            <button data-testid="clear" onClick={handleClear}>Clear</button>
            <h3 data-testid="answer">{output}</h3>
        </div>
    );
}

export default App;

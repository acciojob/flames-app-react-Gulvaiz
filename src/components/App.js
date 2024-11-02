import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        const [input1, setInput1] = useState("")
        const [input2, setInput2] = useState("") 
        const [output, setOutput] = useState("")
                     
                        

        function handleCalculation() { 
            if(input1 && input2)  {
              const uncommonAplhabets = [...input1].filter(char => ![...input2].includes(char)).concat([...input2].filter(char => ![...input1].includes(char)))
        
              const length = uncommonAplhabets.length

              
        if(length%6 === 0) setOutput("Siblings")
            else if(length % 6 === 1) setOutput("Friends")
             else if(length % 6 === 2) setOutput("Love")
                 else if(length % 6 === 3) setOutput("Affection")
                     else if(length % 6 === 4) setOutput("Marriage")
                         else if(length % 6 === 5) setOutput("Enemy")
            }
            else{
                setOutput("Please Enter valid input")
            }
        } 

        function handleClear(){
             setInput1("")
             setInput2("")
             setOutput("")
        }

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <input type="text" value={input1} placeholder="enter first name" data-testid="input1" onChange={(e) => setInput1(e.target.value)} />
               <input type="text" value={input2} placeholder="enter second name" data-testid="input2" onChange={(e) => setInput2(e.target.value)}/>
               <button data-testid="calculate_relationship" onClick={handleCalculation}>Calculate relationship</button>
               <button data-testid="clear" onClick={handleClear}>Clear</button>
               <h3 data-testid="answer">{output}</h3>
            </div>
        )
    }
}


export default App;

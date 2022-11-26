import './Main.css';
import {useState} from "react";


function Main() {
    const [message, setMessage] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions=["how","what","why"];
    const handleChange = event => {
        setMessage(event.target.value);
    };
    const Anssubmit = () => {
        if(message==''){
            console.log("please type anything")
        }
        else {
            const nextQuestion = currentQuestion + 1;
            setCurrentQuestion(nextQuestion);
            setMessage('')
        }
    }



    return (
        <div className="container">

            <div className="wrap-top">
                <div id="quote">
                    <p>{questions[currentQuestion]}</p>
                </div>
                <div id="author-source" className="clearfix">
                   <input className="Answerfield" type="text" autoFocus='True' value={message} onChange={handleChange} required/>
                </div>
            </div>

            <div className="wrap-mid">

                <button onClick={Anssubmit}>SUBMIT</button>
            </div>



        </div>

    );
}

export default Main;

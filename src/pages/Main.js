import './Main.css';
import {useState} from "react";


 function Main() {
    const [message, setMessage] = useState(" ");
    const [wrong, setWrong] = useState(" ");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = {
        "level": "1",
        "level_name": null,
        "questions": [
            {
                "question": "kjhgdsdfghjkjhfdsdfghjksfghjkjhgfdsdfghj",
                "image_url": "",
                "solved": false,
                "answer": "SDFffGHJK",
                "return_img": "",
                "q_id": "qhcpibqyvb"
            },
            {
                "question": "how do you doe?",
                "image_url": "",
                "solved": false,
                "answer": "qwertyh",
                "return_img": "",
                "q_id": "bsyjasknef"
            }
        ]
    }

    const handleChange = event => {
        setMessage(event.target.value);
    };
    let response=200;
    // const options = {method: 'GET'};
    // let response = await fetch('https://oyster-app-cmvre.ondigitalocean.app/questions/?level=1', options);
    if (response===200)
    {//let q=response.json();
        console.log("Questions fetched");
    }
    else{
        console.log("Fetch failed");
    }
    const Anssubmit = () => {
        if (message === '') {
            console.log("please type something")
        } else {

            if (response === 200) {
                const nextQuestion = currentQuestion + 1;
                setCurrentQuestion(nextQuestion);
                setMessage('')
            } else {
                setWrong("Wrong answer");
            }
        }
    }


    return (
        <div className="container">

            <div className="wrap-top">
                <div id="quote">
                    <p>{questions.questions[currentQuestion].question}</p>
                </div>
                <div id="author-source" className="clearfix">
                    <input className="Answerfield" type="text" autoFocus='True' value={message} onChange={handleChange}
                           required/>
                </div>
            </div>

            <div className="wrap-mid">

                <button onClick={Anssubmit}>SUBMIT</button>
            </div>
            <p>{wrong}</p>


        </div>

    );
}

export default Main;

import './Main.css';
import {useEffect, useState} from "react";

 function  Main () {
     const [index,setIndex]=useState(0);
     const [isLoading, setLoading] = useState(true);
     const [tem,setTem]=useState({})
     const [message, setMessage] = useState('');
     const [wrong, setWrong] = useState('');
     const [currentQuestion, setCurrentQuestion] = useState(0);

     const handleChange = event => {
         setMessage(event.target.value);
     };


         useEffect( ()=> {
             const options = {method: 'GET'};
             const url='https://oyster-app-cmvre.ondigitalocean.app/questions/?level=1';
             const fetchData = async() => {

                 await fetch(url, options)
                     .then(async response => {
                         if (response.ok) {
                             return await response.json()
                         }
                         throw response;
                     })
                     .then(tem => {
                         setTem(tem);
                         console.log((tem.questions).length);
                         console.log(tem);
                         setLoading(false);
                     })
                     .catch(error => {
                         console.log("Error fetching questions")
                     })
             }
             fetchData();
         },[]);
    const Anssubmit = async () => {
        if (message === '') {
            console.log("please type something")
        } else {
            const options = {method: 'GET'};

            const res = await fetch('https://oyster-app-cmvre.ondigitalocean.app/questions/validate?level=1&qid='+tem.questions[currentQuestion].q_id+'&answer='+tem.questions[currentQuestion].answer, options)
            console.log(res.status);

            if (res.status === 200) {
            const limit=tem.questions.length;
                 setWrong("Correct answer")

                setTimeout(() => {
                    setMessage('')
                    setWrong(" ")
                    console.log(limit);
                    if(index<limit-1) {
                        const nextQuestion = currentQuestion + 1;
                        setCurrentQuestion(nextQuestion);
                        setIndex(index+1)
                    }
                    else{
                        setWrong("Challenge completed!")
                    }

                }, 1000);


            } else {
                setWrong("Wrong answer");
            }
        }

    }

if(isLoading){
    return (
        <div className="container">

            <div className="wrap-top">
                <div id="quote">
                    <p>Loading Questions</p>
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
     return (
         <div className="container">

             <div className="wrap-top">
                 <div id="quote">
                     <p>{tem.questions[currentQuestion].question}</p>
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

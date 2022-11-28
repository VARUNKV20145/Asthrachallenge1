import './Login.css';
import {useEffect, useState} from "react";


 function  Main () {
     ;
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



             const fetchData = async() => {
                 const options = {method: 'GET', headers: {Authorization: 'Basic '+btoa(localStorage.getItem('username')+':'+localStorage.getItem('password'))}};


                 await fetch('https://oyster-app-cmvre.ondigitalocean.app/questions?level=1', options)
                     .then(async response => {
                         if (response.ok) {
                             return await response.json()
                         }
                         throw response;
                     })
                     .then(tem => {
                         setTem(tem);
                         console.log( tem.level_name);
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
            setWrong("please type something")
        } else {
            const options = {method: 'GET',headers: {Authorization: 'Basic '+btoa(localStorage.getItem('username')+':'+localStorage.getItem('password'))}};

            const res = await fetch('https://oyster-app-cmvre.ondigitalocean.app/questions/validate?level=1&qid='+tem.questions[currentQuestion].q_id+'&answer='+message, options)


            if (res.status === 200) {
                console.log(res.status)
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


            } else if(res.status===202) {
                setWrong("Wrong answer");
            }

        }

    }
     const anscheck = async () => {
         console.log("anscheck")
         const options = {method: 'GET',headers: {Authorization: 'Basic '+btoa(localStorage.getItem('username')+':'+localStorage.getItem('password'))}};

         const r = await fetch('https://oyster-app-cmvre.ondigitalocean.app/questions/check?level=1&qid='+tem.questions[currentQuestion].q_id, options)

         if(r.status===200){
             setCurrentQuestion(currentQuestion+1);
             console.log("200");

         }
         else {
             console.log("not resolved");
         }




     }
     useEffect(() => {
         const interval = setInterval(async () => {
             await anscheck();
         }, 5000);

         return () => clearInterval(interval);
     }, []);

     if(isLoading){
    return (
        <div className="con">
          <div className="container">
              <p>{tem.level_name}</p>
            <div className="wrap-top">

                <div id="quote">

                    <p>Loading Questions</p>
                </div>

                <div id="author-source" className="clearfix">
                    <input className="Answerfield" type="text" autoFocus='True' value={message} onChange={handleChange}
                           required/>
                    <button className="anssubmit" onClick={Anssubmit}>SUBMIT</button>
                </div>
                </div>
            </div>

            <div className="wrap-mid">


            </div>
            <p>{wrong}</p>



        </div>

    );
}
     return (
         <div className="container">

             <div className="wrap-top">
                 <div id="quote">
                     <img src={tem.questions[currentQuestion].image_url}/>
                 </div>
                 <div id="author-source" className="clearfix">
                     <input className="Answerfield" type="text" autoFocus='True' value={message} onChange={handleChange}
                            required/>
                 </div>
             </div>

             <div className="wrap-mid">

                 <button id="submit" onClick={Anssubmit}>SUBMIT</button>
             </div>
             <p>{wrong}</p>


         </div>

     );
 }

export default Main;

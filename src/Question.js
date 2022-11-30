import './Main.css';
import {useEffect, useState} from "react";
import { useNavigate,useParams } from 'react-router-dom';


function  Question () {

    let { id } = useParams();

const [show,setShow]=useState(true)
const [img,setImg]=useState("")
    const [isLoading, setLoading] = useState(true);
    const [tem,setTem]=useState({})

    const [message, setMessage] = useState('');
    const [wrong, setWrong] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const navigate= useNavigate();
    if(id=="fhqclqvcxh"){
console.log("QSBzcGlkZXIgaXMgdHJ5aW5nIHRvIGJ1aWxkIGEgd2ViIGZvciBpdHNlbGYuIEl0IGRvdWJsZXMgdGhlIHdvcmsgZG9uZSBldmVyeSBkYXkuIElmIHRoZSBzcGlkZXIgY29tcGxldGVseSBidWlsdCB0aGUgd2ViIGluIDUwIGRheXMsIGhvdyBtYW55IGRheXMgZGlkIGl0IHRha2UgZm9yIHRoZSBzcGlkZXIgdG8gYnVpbGQgMjUlIG9mIHRoZSB3ZWI/");
    }

    const handleChange = event => {
        setMessage(event.target.value);
    };




    useEffect( ()=> {



        const fetchData = async() => {
            const options = {method: 'GET', headers: {Authorization: 'Basic '+btoa(localStorage.getItem('username')+':'+localStorage.getItem('password'))}};


            const t=await fetch('https://oyster-app-cmvre.ondigitalocean.app/questions/fetch?level=1&qid='+id, options)
                .then(async response => {
                    if (response.ok) {
                        return await response.json()
                    }
                    throw response;
                })
                .then(tem => {
                    setTem(tem);
                    setImg(tem.image_url)
                    window.data=tem;




                    setLoading(false);
                })
                .catch(error => {
                    console.log("Error fetching questions")
                })
        }
        fetchData().then(r=>{
            
        })

        

    },[]);
    

    const Anssubmit = async () => {
        if (message === '') {
            setWrong("please type something")
        } else {
            anscheck();
            const options = {method: 'GET',headers: {Authorization: 'Basic '+btoa(localStorage.getItem('username')+':'+localStorage.getItem('password'))}};

            const res = await fetch('https://oyster-app-cmvre.ondigitalocean.app/questions/validate?level=1&qid='+tem.q_id+'&answer='+message, options)


            if (res.status === 200) {



                setWrong("Correct answer");


                setTimeout(() => {
                    setShow(false)
                    setImg(tem.return_img);
                    setWrong("Challenge completed");




                }, 1000);


            } else if(res.status===202) {
                setMessage('')
                setWrong("Wrong answer");
            }

        }

    }

    const anscheck = async () => {

        const options = {method: 'GET',headers: {Authorization: 'Basic '+btoa(localStorage.getItem('username')+':'+localStorage.getItem('password'))}};
        const r = await fetch('https://oyster-app-cmvre.ondigitalocean.app/questions/check?level=1&qid='+id, options)

        if(r.status===200){
    

            navigate('/home', {replace: true});



        }
        else {
            
            console.log("not resolved");
        }




    }


    if(isLoading){
        return (
            <div className="con">
                <div className="container">

                    <div className="wrap-top">

                        <div id="quote">

                            <p>Loading Questions</p>
                        </div>

                        <div id="author-source" className="clearfix">
                            <input className="Answerfield" type="text" autoFocus='True' value={message} onChange={handleChange}
                                   required/>
                            <button className="anssubmit" onClick={Anssubmit}>submit</button>
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
            {show? <p>{tem.question}</p>:<p></p>}
            <div className="wrap-top">

                <div id="quote">

                    <img alt="img" src={img}/>
                </div>

                <div id="author-source" className="clearfix">
                    {show&&
                    <input className="Answerfield" type="text" placeholder="Type your answer" autoFocus='True' value={message} onChange={handleChange}
                           required/>}
                </div>
            </div>

            <div className="wrap-mid">
                {show&&
                <button id="submit" onClick={Anssubmit}>SUBMIT</button>}
            </div>
            <p>{wrong}</p>


        </div>

    );
}

export default Question;

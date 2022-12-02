import './Homepage.css'
import { useEffect, useState} from "react";
function Homepage() {

    const [tem, setTem] = useState()
    const [loading,setLoading]=useState(false)





        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {Authorization: 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))}
            };


            await fetch('https://oyster-app-cmvre.ondigitalocean.app/questions?level=1', options)
                .then(async response =>response.json()
                )
                .then((data) => {
                    setTem(data);




                })






            setTimeout(() => {
                setLoading(true);


            }, 2000);
             }
        useEffect(()=>{
            fetchData();
        }, [fetchData])




if(!loading){
    return (
        <div className="front-wrap">
            <h1 className="front-heading">BLACKOUT</h1>
            <div className="grid-container">
                <div id="aidiv" className="loading loading--center loading--typing loading--animation">An AI has gone Rogue</div>
                <div id="loaddiv" className="loading loading--center loading--glitch loading--animation" data-title="Loading...">
                    Loading...
                </div>

            </div>
        </div>

    );


}


    return (
        <div className="front-wrap">
        <h1 className="front-heading">BLACKOUT</h1>
        <div className="grid-container">
            { tem && tem.questions.length > 0 ?
tem.questions.map((item)=>

            <a href={"/home/"+item.q_id } className="tile-link">
                <h2 className="tile-content">
                    {item.question}
                </h2>
            </a>
            ) : <p id="quesload">DANGER: High Voltage!!!</p>}

        </div>
            </div>

    );
}

export default Homepage;




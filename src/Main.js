import './Main.css';

function Main() {
    return (
        <div className="container">

            <div className="wrap-top">
                <div id="quote">
                    <p>Question 1</p>
                </div>
                <div id="author-source" className="clearfix">
                   <input className="Answerfield" type="text"/>
                </div>
            </div>

            <div className="wrap-mid">

                <button>Submit</button>
            </div>



        </div>

    );
}

export default Main;

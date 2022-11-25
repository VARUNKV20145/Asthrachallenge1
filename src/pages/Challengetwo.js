import './Challengetwo.css';

function Challengetwo() {
    return (
        <body className="">
        <div className="container on">
            <div className="screen">
                <h3 className="title">
                    CONNECTION ESTABLISHED
                </h3>
                <div className="box--outer">
                    <div className="box">
                        <div className="box--inner">
                            <div className="content">
                                <div className="holder">
                                    <b>A spider is trying to build a web for itself. It doubles the work done everyday.If the spider completely built the web in 50 days,how many days did it take for the spider to build 25% of the web ?</b>
                                    <br>
                                        </br>
                                            <div className="row">

                                                <div className="col col__center">

                                                </div>
                                            </div>
                                            <form method="post" action="/password">
                                                <div className="row">

                                                    <div className="col col__center">
                                                        <input type="text" id="password" name="password"
                                                               required="required" placeholder="" data-error=""
                                                               maxLength="32" autoComplete="new-password"
                                                               autoFocus="true"/>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <button type="submit" id="submit" name="submit">[Submit]</button>
                                                </div>
                                            </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>

        );
}

export default Challengetwo;

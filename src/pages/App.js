import './Main.css';

function Login() {
  return (
      <div className="container">

        <div className="wrap-top">
          <div id="quote">
            <p></p>
          </div>
          <div id="author-source" className="clearfix">
            <input className="username" type="text" autoFocus='True' placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Username"
                   required/>
          </div>
            <div id="author-source" className="clearfix">
                <input className="password" type="password" autoFocus='True'
                       placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password"
                       required/>
            </div>
        </div>

        <div className="wrap-mid">

          <button>SUBMIT</button>
        </div>
        <p></p>


      </div>

  );
}

export default Login;

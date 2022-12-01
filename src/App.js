import './Login.css';
import {useForm} from "react-hook-form";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useState} from "react";
function Login() {
    const [message,setMessage]=useState("")
    const navigate= useNavigate();
    const {register, handleSubmit} = useForm();
    const onSubmit = async data => {
        const res = await axios.get('https://oyster-app-cmvre.ondigitalocean.app/users/login', {
            auth: {
                username: data.username,
                password: data.password
            }
        });
        if(res.status===200)
        { localStorage.setItem('username', data.username);
            localStorage.setItem('password', data.password);

             navigate('/home', {replace: true});
            setMessage("Logged in sucessfully");
        }
        else if(res.status===401){
            setMessage("User not found");

        }
        else{
            console.log("Error occured")
        }


    }
  return (
      <div className="container">
          <div className="Head">
              <div className="gli" data-text="BLACKOUT">BLACKOUT</div>


          </div>
          <h1 id="logintext">Login to continue</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrap-top">

          <div id="quote">
            <p></p>
          </div>

          <div id="author-source" className="clearfix">
            <input className="username" type="text" autoFocus='True' placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Username"
                   {...register("username")} required />
          </div>
            <div id="author-source" className="clearfix">
                <input className="password" type="password" autoFocus='True'
                       placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password" {...register("password")}
                       required/>
            </div>


        </div>

        <div className="wrap-mid">

          <button className="submit"  type="submit">SUBMIT</button>
        </div>

        <p>{message}</p>
      </form>

      </div>

  );
}

export default Login;

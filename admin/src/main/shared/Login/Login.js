import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import User from '../../config/user';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import axios from '../../../libraries/axios/axios';

const Login = (props) => {
  let history = useHistory();
  let [loginObj, updateLoginObj] = React.useState({
    username: "",
    password: ""
  });
  const { register, handleSubmit, errors } = useForm()


  const onSubmit = async (data) => {
    try{
        let res = await axios.post("http://localhost:5000/api/admin/auth/login", {
        email : loginObj.username,
        password : loginObj.password
      },{
        headers:{
          "Access-Control-Allow-Origin": "*"
        }
      });
      if(res.data.success === true){
        sessionStorage.setItem("authtoken", res.data.token);
        User.CONNECTED_USER = true
      }else{
        User.CONNECTED_USER = false
      }
    }catch(e){
      console.log(e);
    }
    props.rerender();
    history.push("/dashboard")
  }

  return (
    <div className="Login" style={{ display: (!User.CONNECTED_USER ? 'block' : 'none') }} >
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">
              <img src="assets/img/logo.png" /></h4>
          </div><div class="card-body">
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <div class="form-group"><label >Username</label>
                <input type="text" onChange={(e)=>{updateLoginObj({...loginObj, username:e.target.value})}} placeholder="Company" class="form-control" />
              </div><div class="form-group">
                <label >Password</label>
                <input onChange={(e)=>{updateLoginObj({...loginObj, password:e.target.value})}} type="password" placeholder="Username" class="form-control" /></div>
              <div class="update ml-auto mr-auto">
                <button class="btn btn-primary btn-round" type="submit" >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;

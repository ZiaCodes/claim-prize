import axios from "./axios";
import SessionService from "./SessionService";

const login = (email, password) => {
    return axios
      .post("/signin", {
        email,
        password,})
      .then((response) => {
        if (response.data.accessToken) {
          console.log(response.data.accessToken)
          //Session Saving
          SessionService.setSession(response.data);
          
        }
        return response.data;
      });
};

const forgetPassword = (email) => {
  return axios.post("/forgetPassword",{email})
  .then((response) => {
    console.log(response.data);

    sessionStorage.setItem("userid",response.data.userId)
    sessionStorage.setItem("resetToken",response.data.resetToken)
    return response.data;
  })

  
};

const resetPassword = (password,cpassword) => {
  const userId = sessionStorage.getItem("userid");
  const resetToken = sessionStorage.getItem("resetToken");
  console.log(typeof userId)
  return axios.post(`/resetPassword/${userId}/${resetToken}`,{password,cpassword})
  .then((response)=> {
    sessionStorage.clear();
    console.log(response.data)
    return response.data;
  })
}

const register = (data)=>{
  return axios.post('/register', data).then((data)=>{
    console.log(data);
  }).catch((e)=>{
    console.log(e.message)
  })
}

const AuthService = {
  login,
  forgetPassword,
  resetPassword,
  register
}
export default AuthService;


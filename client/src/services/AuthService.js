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

const AuthService = {
  login,
}
export default AuthService;


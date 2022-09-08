import axios from "axios";

export function call_login(data) {
  return (dispatch) => {
    console.log("call_login");
    return axios
      .post("http://13.125.55.110/api/member/login", data)
      .then((res) => {
        console.log(res);
        const token = res.headers.authorization;
        console.log(token);
        localStorage.setItem("Access_Token", token);
      });
  };
}

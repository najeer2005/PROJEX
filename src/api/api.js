//frpm front end -->req --> 5000 backend
//front end -->local host:5000/students
//backend -->5000/students -->db    

import axios from "axios"; 
const api = axios.create({baseURL: "http://localhost:5000"});

export default api;

//local host :5000/students
//api.get("/students/:id")


            // React
            //   |
            // api.js
            //    |
            // backend
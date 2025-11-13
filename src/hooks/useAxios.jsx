import axios from "axios";




const axiosInstance = axios.create({
  baseURL: 'https://freelance-market-server-1210.vercel.app',
 
 
});


let useAxios =()=>{
    return axiosInstance;
}

export default useAxios






// https://freelance-market-server-1210.vercel.app   
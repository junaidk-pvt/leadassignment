import axios from "axios";
import toast from "react-hot-toast";

axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        
      } else if (error?.response?.status === 403) {
        console.log(error?.response?.data);
      } else if (error?.response?.status === 404) {
        toast("❌ Data Not Found");
      } else if (error?.response?.status === 400) {
        
      } else {
        alert(error?.message || "Network Error");
      }
      return Promise.reject(error);
    }
  );
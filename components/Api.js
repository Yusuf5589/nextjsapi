import axios from "axios";
import React from "react";

function Api() {
  return <div></div>;
}

export const apiPost = async (data) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/register",
      data
    );
    return response;
  } catch (e) {
    if (e.response) {
      throw e.response; 
    } else {
      console.log(e);
    }
  }
};

export default Api;

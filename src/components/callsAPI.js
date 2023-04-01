import React, { useEffect, useState } from 'react';
import axios from "axios";

function CallsAPI() {
    const [post, setPost] = useState(null);
    // const [temp,setTemp] = useState("");
    const baseURL = "http://127.0.0.1:5001/all_temples";

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
        });
    }, []);

    if (post) { 
        return (
            post
        )
    }
}

export default CallsAPI;




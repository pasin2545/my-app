
import axios from "axios";
import React, { useEffect, useState } from 'react';

function CallsAPI() {
    const [post, setPost] = useState(null);
    // const [temp,setTemp] = useState("");
    const baseURL = "http://127.0.0.1:5001/all_temples";

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data)
            //console.log(response.data.trat)
            //console.log(response.data["trat"]);
            //console.log({post})

        });
    }, []);

    console.log("in call api")
    if (post) {

       
        return (
            post
        )

    }

}

export default CallsAPI;




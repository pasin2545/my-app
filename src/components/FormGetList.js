import "./FormGetList.css";
import React, { useEffect , useState } from "react";
import axios from "axios";
import ProvinceList from "./ProvinceList";
import { CSVLink } from "react-csv";

function FormGetList(props) {
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
    var csvData = [];
    if(post){
        var li = [];
        li = li.concat(post.chumporn);
        li = li.concat(post.chaengrai);
        li = li.concat(post.trang);
        li = li.concat(post.trat);
        li = li.concat(post.uttaradit);

        csvData = li.map((item) => [item]);
    }

    //console.log("---",li)

    return (
        <div className="left_page">
            <div className="fixposition">
                <form >
                    <fieldset >
                        <ProvinceList province={props.province} setProvince={props.setProvince}/>
                    </fieldset>
                </form>
                <nav >
                    <a>
                        <div>
                            <ul id="UwuLink" >
                                <li><CSVLink data={csvData} filename={"data.csv"}>ดาวน์โหลด</CSVLink></li>
                                <li><a href="https://github.com/underpoom/my-app" target="_blank" rel="noreferrer">Source Code</a></li>
                                <li><a href="https://docs.google.com/document/d/1nJuqMgBHYucTWV1b914ynHI5E2y4Yjd032kM5vcvrLw/edit?usp=sharing" target="_blank" rel="noreferrer">Regular Expression</a></li>
                            </ul>
                        </div>
                    </a>
                </nav>
            </div>
        </div>


    );
}

export default FormGetList;
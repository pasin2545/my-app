import "./CSVcontent.css";
import React, { useEffect , useState} from "react";
import axios from "axios";
import CallsAPI from "./callsAPI";
import ProvinceList from "./ProvinceList";



function CSVcontent(props) {

    var x = CallsAPI()
    // console.log(x)
    // console.log("past callAPI")
    // console.log(message + ' test')
    // console.log(typeof(message))
    //console.log(props.rows)
    

    
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

    if (!post) {
        return (<div className="box_color">
            <div className="box-text">
                <h1>CSV file</h1>
                <h1>{}</h1>

                <h2>กำลังโหลด...</h2>
            </div>
        </div>);
    }
    var li = [];
    for(let i = 0; i < props.province.length; i +=1){
        if(props.province[i] == "chumporn"){
            li = li.concat(post.chumporn);
        }
        if(props.province[i] == "chaengrai"){
            li = li.concat(post.chaengrai);
        }
        if(props.province[i] == "trang"){
            li = li.concat(post.trang);
        }
        if(props.province[i] == "trat"){
            li = li.concat(post.trat);
        }
        if(props.province[i] == "uttaradit"){
            li = li.concat(post.uttaradit);
        }

    }
    console.log(li);
    var base_url = "https://th.wikipedia.org/wiki/"
    const rows = [];
    for (let i = 0; i < li.length; i += 3) {
        const row = (
            <tr key={i}>
                <td className="wat_link"><a href={base_url.concat(li[i])} target="_blank" rel="noreferrer">{li[i]}</a></td>
                <td className="wat_link"><a href={base_url.concat(li[i+1])} target="_blank" rel="noreferrer">{li[i + 1]}</a></td>
                <td className="wat_link"><a href={base_url.concat(li[i+2])}  target="_blank" rel="noreferrer">{li[i + 2]}</a></td> 
            </tr>
        );
        rows.push(row);
    }
    return (
        <div>
            <div className="box-text">
                <h1 className="head-text">รายชื่อวัด</h1>
                <table className="table-wad">
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>

    );


}

export default CSVcontent;
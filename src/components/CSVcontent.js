import "./CSVcontent.css";
import React, { useEffect , useState} from "react";
import axios from "axios";
import CallsAPI from "./callsAPI";
import ProvinceList from "./ProvinceList";

function CSVcontent(props) {

    var x = CallsAPI()
    console.log(x)
    console.log("past callAPI")
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
    // for(let i = 0; i < message.length; i +=1){
    //     if(message[i] == "chumporn"){
    //         li += post.chumporn;
    //         console.log('chumporn');
    //     }
    //     if(message[i] == "chaengrai"){
    //         li += post.chaengrai
    //     }
    //     if(message[i] == "trang"){
    //         li += post.trang
    //     }
    //     if(message[i] == "trat"){
    //         li += post.trat
    //     }
    //     if(message[i] == "uttaradit"){
    //         li += post.uttaradit
    //     }

    // }

    const rows = [];
    // for (let i = 0; i < post.trat.length; i += 3) {
    //     const row = (
    //         <tr key={i}>
    //             <td>{post.trat[i]}</td>
    //             <td>{post.trat[i + 1]}</td>
    //             <td>{post.trat[i + 2]}</td>
    //         </tr>
    //     );
    //     rows.push(row);
    // }
    return (
        <div>
            <div className="box-text">
                <h1 className="head-text">รายชื่อวัด</h1>
                <table className="table-wad">
                    <tbody>
                        {}
                    </tbody>
                </table>
            </div>
        </div>

    );


}

export default CSVcontent;
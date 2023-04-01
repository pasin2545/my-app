import "./FormGetList.css";
import React, { useEffect , useState } from "react";
import axios from "axios";
import ProvinceList from "./ProvinceList";
import { CSVLink } from "react-csv";
import { click } from "@testing-library/user-event/dist/click";


function FormGetList(props) {
    var li = [];
    li = li.concat(props.all_temples.chumporn);
    li = li.concat(props.all_temples.chaengrai);
    li = li.concat(props.all_temples.trang);
    li = li.concat(props.all_temples.trat);
    li = li.concat(props.all_temples.uttaradit);

    const csvData = li.map((item) => [item]);
    
    // const overlay = document.querySelector("#overlay");
    // document.querySelector("#show-modal-btn").addEventListener("click",()=>{
    //     overlay.style.display = "block";
    // })
    // document.querySelector("#close-modal-btn").addEventListener("click",()=>{
    //     overlay.style.display = "none";
    // })

    return (
        <div className="left_page">
            <div className="fixposition">
                <form >
                    <fieldset >
                        <ProvinceList province={props.province} setProvince={props.setProvince} all_temples={props.all_temples}/>
                    </fieldset>
                </form>
                <nav >
                    <a>
                        <div>
                            <ul id="UwuLink" >
                                <li><CSVLink data={csvData} filename={"data.csv"}>ดาวน์โหลด</CSVLink></li>
                                <li><a href="https://github.com/underpoom/my-app" target="_blank" rel="noreferrer">Source Code</a></li>
                            </ul>
                        </div>
                    </a>
                </nav>
            </div>
            
            <div class="box">
                <button id="show-modal-btn"> REGEX </button>
            </div>

            <div id="overlay">
                <div id="modal">
                    <button id="close-modal-btn">&times;</button>
                </div>
            </div>

            <div class="website-contect">
                <h1>
                    HeLLOWPRLLLDFLFLDLFL
                </h1>
            </div> 



            
        </div>
    );
}

export default FormGetList;
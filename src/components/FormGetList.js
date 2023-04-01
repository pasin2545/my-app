import "./FormGetList.css";
import React, { useEffect , useState } from "react";
import axios from "axios";
import ProvinceList from "./ProvinceList";
import { CSVLink } from "react-csv";

function FormGetList(props) {
    var li = [];
    li = li.concat(props.all_temples.chumporn);
    li = li.concat(props.all_temples.chaengrai);
    li = li.concat(props.all_temples.trang);
    li = li.concat(props.all_temples.trat);
    li = li.concat(props.all_temples.uttaradit);

    const csvData = li.map((item) => [item]);

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
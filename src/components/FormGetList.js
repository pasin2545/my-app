import "./FormGetList.css";
import * as React from 'react';
import ProvinceList from "./ProvinceList";
function FormGetList(props) {


    return (
        <div className="left_page">
            <div className="fixposition">
                <form >
                    <fieldset >
                        <ProvinceList />
                    </fieldset>
                </form>
                <nav >
                    <a>
                        <div>
                            <ul id="UwuLink" >
                                <li><a href="#">ดาวน์โหลด</a></li>
                                <li><a href="#">Source Code</a></li>
                                <li><a href="https://docs.google.com/document/d/1nJuqMgBHYucTWV1b914ynHI5E2y4Yjd032kM5vcvrLw/edit?usp=sharing">Regular Expression</a></li>
                            </ul>
                        </div>
                    </a>
                </nav>
            </div>
        </div>


    );
}

export default FormGetList;
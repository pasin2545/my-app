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
                <nav className="UwuLink" >
                    <ul>
                
                        <a href="#">ดาวน์โหลด</a>
                        <br></br>
                        <a href="#">Source Code</a>
                        <br></br>
                        <a href="#">Regular Expression</a>
                        
                    </ul>
                </nav>
            </div>
        </div>


    );
}

export default FormGetList;
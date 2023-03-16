import "./ProvinceList.css";
import React, { useState } from "react";



function ProvinceList(props) {

  const [checked, setChecked] = useState([]);
  var message = '';

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);

  };


  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";

     //  (send to backend but I don't know how it work with backend)
  const handleSubmit = (event) => {
      event.preventDefault();
  
      message =   checkedItems;
      console.log({message});

      return message ;
     

    };



  return (
    <div >
      <div className="form1" >
        <input type="checkbox" id="coding" onChange={handleCheck} name="interest" value="CP" />
        <label htmlFor="CP">ชุมพร</label>
      </div>
      <div className="form1" >
        <input type="checkbox" id="music" onChange={handleCheck} name="interest" value="CR" />
        <label htmlFor="CR">เชียงราย</label>
      </div>
      <div className="form1" >
        <input type="checkbox" id="art" onChange={handleCheck} name="interest" value="Trang" />
        <label htmlFor="Trang">ตรัง</label>
      </div>
      <div className="form1" >
        <input type="checkbox" id="sports" onChange={handleCheck} name="interest" value="Trat" />
        <label htmlFor="Trat">ตราด</label>
      </div>
      <div className="form1" >
        <input type="checkbox" id="cooking" onChange={handleCheck} name="interest" value="UD" />
        <label htmlFor="UD" >อุตรดิตถ์</label>
      </div>
      <div>
       <button type="submit" onClick={handleSubmit} className="btn btn-success btn-lg" >Search</button>
      </div>
    </div>
  );
}


export default ProvinceList;
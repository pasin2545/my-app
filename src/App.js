import logo from './logo.svg';
import './App.css';
//import { callapi } from './redux/callsAPI';
import React, { Component, useState, useEffect } from "react";
import ContactList from "./components/ProvinceList";
import FormGetList from './components/FormGetList';
import CSVcontent from './components/CSVcontent';
import axios from "axios";

const baseURL = "http://127.0.0.1:5001/all_temples";

const App = () => {
  const [province, setProvince] = useState([]);
  console.log(province);
  return (
    <div>
      <h1 className="App-header">รายชื่อวัดในจังหวัดชุมพร, เชียงราย, ตรัง, ตราด, อุตรดิตถ์</h1>
      <div className='page-background'>
        <div className='page-grid'>
          <FormGetList province={province} setProvince={setProvince}/>
          <CSVcontent province={province} setProvince={setProvince}/>
        </div>
      </div>
    </div>
  );
}

export default App;

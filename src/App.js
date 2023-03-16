import logo from './logo.svg';
import './App.css';
import { callapi } from './redux/callsAPI';
import PersonList from './redux/callsAPI';
import React, { Component } from "react";
import ContactList from "./components/ProvinceList";
import FormGetList from './components/FormGetList';
import CSVcontent from './components/CSVcontent';;

const App = () => {

  return (
    <body className='page_size'>
      <h1 className="App-header">รายชื่อวัดในจังหวัดชุมพร, เชียงราย, ตรัง, ตราด, อุตรดิตถ์</h1>
      <div className='page-grid'>
        < FormGetList />
        < CSVcontent/>
      </div>
    </body>

  );
}

export default App;

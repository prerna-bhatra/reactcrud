import React,{useState,useEffect} from 'react';
import './App.css';

function App() {



  return (
    <div className="container">
     <center> MERN CRUD</center>
      <div className="row">
          <div className="col-md-4">
          <form>
          FORM
            <input type="text" className="form-control" placeholder="First name"/>
            <br/>
            <input type="text"  className="form-control" placeholder="last name"/>
             <br/>
            <button className="btn btn-primary" style={{"float":"right"}} >Submit</button>
          </form>
          </div>
          <div className="col-md-8">

          </div>
      </div>
    </div>
  );
}

export default App;

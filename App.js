import logo from './logo.svg';
import './App.css';
import LoadingBar from 'react-top-loading-bar';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './component/footer';

export default class  extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      
      <div>
        {/* document.body.style.backgroundImage="https://api.unsplash.com/search/photos?page=1&query={this.category}&client_id=KPLSID7q6QskxQc_7AI0M4wuUGfMyEFeM3P55j7wY3w" */}
         <NavBar  />
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        loaderSpeed={1000}
        height={3}
        background='yellow'
        shadow='true'
      />
        <BrowserRouter>
      <Routes>
         <Route path="/" element={<News setProgress ={this.setProgress} pageSize={9} country={'in'} category={'general'}/>} />
        <Route path="/Business" element={<News setProgress ={this.setProgress} pageSize={9} country={'in'} category={'Business'}/>}/>
        <Route path="/Entertainment" element={<News setProgress ={this.setProgress} pageSize={9} country={'in'} category={'Entertainment'}/>}/>
        <Route path="/Health" element={<News setProgress ={this.setProgress} pageSize={9} country={'in'} category={'Health'}/>}/>
        <Route path="/Science" element={<News setProgress ={this.setProgress} pageSize={9} country={'in'} category={'Science'}/>}/>
        <Route path="/Sport" element={<News setProgress ={this.setProgress} pageSize={9} country={'in'} category={'Sports'}/>}/> 
        <Route path="/Technology" element={<News setProgress ={this.setProgress} pageSize={9} country={'in'} category={'Technology'}/>}/> 
        <Route path="/General" element={<News setProgress ={this.setProgress} pageSize={9} country={'in'} category={'General'}/>}/> 
         <Route path='/contact'/>
         <Route path='/about'/>
      </Routes>
    </BrowserRouter>
   
      </div>
   

    )
  }
}
// unsplash api url for future use
// https://api.unsplash.com/search/photos?page=1&query=office&client_id=KPLSID7q6QskxQc_7AI0M4wuUGfMyEFeM3P55j7wY3w
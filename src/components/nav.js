import '../App.css';
import React, {useState} from 'react'
import {getAllPosts} from '../utils/getAllPosts'


const navBar = () => {
    let x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }



export default navBar.js;
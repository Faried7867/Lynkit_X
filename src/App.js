import React from 'react';
import { animate, motion ,onAnimationComplete } from 'framer-motion';
import ReactDOM from 'react-dom/client';
import { useState ,useEffect ,useRef } from 'react';
import './App.css';

function App() {
let myref =useRef()

const [clock,update]=useState(new Date())

useEffect(() => {
  // Update the clock every second
  const intervalId = setInterval(() => {
    update(new Date());
  }, 1000);

  // Cleanup function to clear the interval on unmount
  return () => clearInterval(intervalId);
}, []);

let time =clock.getHours()
let min =clock.getMinutes()
let day =clock.getDay()
let mon =clock.getMonth()
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan","Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov",
  "Dec"
];

let aniEnd = ()=>{
  myref.current.className="aniend";
  myref.current.innerText="I'm Farie";
  console.log(myref.current.style)
  // let enter =()=>{
  //   myref.current.className="start";
  // }
};


  return (
    <div  id='parentpage'>
     <motion.div
    
    ref={myref}
      initial={{opacity:0,Y:15}}
      animate={{opacity:1,y:8}}
  
      transition={{duration:0.5,delay:1,ease: "easeInOut"}}
      onAnimationComplete={ aniEnd } 
   

      className='island'></motion.div> 
        <div className="profile"></div>
      <h1 className="heading">LynKit_X</h1>
     <motion.p  initial={{opacity:0,x:20}}
     animate={{opacity:[0,0.5,1],x:0}}
     transition={{duration:0.5,delay:1}}className='clock'>{`${time > 12 ?  time - 12 : time} : ${min < 10 ? "0" + min : min }  `}</motion.p>
     <motion.p
      initial={{opacity:0,x:-40}}
      animate={{opacity:[0,0.5,1],x:0}}
      transition={{duration:1,delay:0.5}} className='day'>{`${  dayNames[day]} ${months[mon] }`}</motion.p>
     <motion.p className='about'
     initial={{opacity:0,x:10}}
     animate={{opacity:[0,0.5,1],x:0}}
     transition={{duration:0.5,delay:0.5}}
     >I created the LynKit software you're currently using!

This page conveniently connects all my contact links in one place. If you find this kind of setup helpful, feel free to reach out to me for any inquiries or collaborations.</motion.p>
      <motion.div 
      initial={{opacity:0,x:-40}}
      animate={{opacity:[0,0.5,1],x:0}}
      transition={{duration:3,delay:0}}
      className="linkpage">

        < motion.h1  initial={{opacity:0}}
      animate={{opacity:[0,0.5,1]}}
      transition={{duration:1,delay:1}}>Profile <br /> </motion.h1>

        <motion.h3 initial={{opacity:0,y:20}}
      animate={{opacity:[0,0.5,1],y:0}}
      transition={{duration:1,delay:0.5}}>  <a href="https://www.instagram.com/fairy_i__/"> Instagram</a> </motion.h3>
        <motion.h3 initial={{opacity:0,y:20}}
      animate={{opacity:[0,0.5,1],y:0}}
      transition={{duration:1,delay:0.6}}>  <a 
    href="https://www.linkedin.com/in/farie-dullah-73577222a/">
     LinkedIn </a> </motion.h3>
   <motion.h3 initial={{opacity:0,y:20}}
      animate={{opacity:[0,0.5,1],y:0}}
      transition={{duration:1,delay:0.7}}>  <a href="https://faried7867.github.io/Faries/">Portfolio</a>  </motion.h3>
        <motion.h3 initial={{opacity:0,y:20}}
      animate={{opacity:[0,0.5,1],y:0}}
      transition={{duration:1,delay:0.8}}><a href="mailto:ffariedullah@gmail.com?subject=Inquiry&body=Your message here" >G-mail  </a> </motion.h3>
  
     
     
      </motion.div>
   
     
    </div>
  );
}

export default App;

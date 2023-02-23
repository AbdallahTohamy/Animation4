import Image from 'next/image'
import React, { useEffect, useRef,  } from 'react';


function preventDefault(e) {
    e = e || window.event
    if (e.preventDefault) {
      e.preventDefault()
    }
    e.returnValue = false
  }
  function disableScroll () {
    document.addEventListener('wheel', preventDefault, {
      passive: false,
    })
}
function enableScroll ()  {
    document.removeEventListener('wheel', preventDefault, false)
}
export default function First() {
//     const [likes, setLikes] = React.useState(0);

//   function handleClick() {
//     setLikes(likes + 1);
//   }
// const [likes, setLikes] = React.useState(1);
const [likes, setLikes] = React.useState(0);
const [flag, setflag] = React.useState(true);

useEffect(() => {
        document.addEventListener("mousewheel",  (e)=> { 
           
             if (e.deltaY < 0 ) {
                 setTimeout(function(){
                    enableScroll ()
                 },1000)
                 disableScroll()
               setLikes(likes-1)
               if(likes<=0){
                setLikes(0)
            }
             }else if(e.deltaY > 0){
                setTimeout(function(){
                    enableScroll ()
                 },1000)
                 disableScroll()
                 setLikes(likes+1)
                 if(likes>=1){
                    setLikes(1)
                }
             }
         
         });  
    

   
},[likes])

    return (
        <div>
            <div 
        className={likes==0 ? "w-50 topLeft h-100 OutLeft " : "w-50 topLeft h-100 MoveIn"}
        
        >
        <img
        className="d-block h-100 w-100"
        src="/images/Wood.png"
        style={{"object-fit":"cover"}}
      />
      </div>
      <div 
        className={likes==0 ? "w-50 topRight h-50 OutRight " : "w-50 topRight h-50 MoveIn"}
        
        >
        <img
        className="d-block h-100 w-100"
        src="/images/Race.png"
        style={{"object-fit":"cover"}}
      />
      </div>
      <div 
        className={likes==0 ? "w-50 bottomRight h-50 OutRight " : "w-50 bottomRight h-50 MoveIn"}
        
        >
        <img
        className="d-block h-100 w-100"
        src="/images/Pool.png"
        style={{"object-fit":"cover"}}
      />
      </div>
        </div>
        
      
    )
  }

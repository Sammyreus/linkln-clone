import React,{useState,useEffect} from 'react'

function ReactnewFile() {
    const [username, setUsername] = useState([])
    const array =()=>{
     fetch("https://dummyjson.com/users")
     .then((response) => response.json())
    .then((data)=>{
        console.log(data)
     setUsername(data.users.username)})
    }
    useEffect(()=>{
        array();
    },[]);
  return (
    <div>
    <p onClick={}>{username}</p>
    <a>
  </div>
  )
}

export default ReactnewFile;



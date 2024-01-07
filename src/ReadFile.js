import React,{useState} from 'react'

export default function ReadFile() {
    const [username, setUsername] = useState([])
   const array =()=>{
    fetch("https://dummyjson.com/users")
    .then((response) => response.json)
    .then((data)=> setUsername(data.users.username))
}
  return (
  <div>
    <text value = {array}></text>
  </div>
  )
}

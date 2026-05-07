import Counter from './counter'
import Batman from './Batman'
import Users from './users'
import Friends from './friends'
import Posts from './Posts'
import './App.css'
import { Suspense } from 'react'


// const fetchUsers= fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))


// const fetchFriends= async () =>  {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }
const fetchPosts= async () =>  {
  const res =await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


function App() {
 
  const postsPromise = fetchPosts();



  // const friendsPromise = fetchFriends();
  function handleClick() {
    alert('clicked');
  }
const handleClick2 =() =>{
  alert('clicked2');
}
const handleAdd5 =(num)=>{
  const newNumber= num + 5;
  alert(newNumber);
}

  return (
    <>
    <Suspense fallback={<div>Loading posts...</div>}>
    <Posts  postsPromise={postsPromise}></Posts>
   </Suspense>
   {/* <Suspense fallback={<div>Loading...</div>}>
    <Users fetchUsers={fetchUsers}></Users>
   </Suspense> */}
   {/* <Suspense fallback={<div>Loading...</div>}>
    <Friends friendsPromise={friendsPromise}></Friends>
   </Suspense> */}
    <Batman></Batman>
    <Counter> </Counter>
     <h3>Vite + react</h3>
     <button onClick={handleClick}>click me</button>
     <button onClick={handleClick2}>click me too</button>
     <button onClick={() => handleAdd5(10)}>Add 5</button>

    </>
  )
}

export default App

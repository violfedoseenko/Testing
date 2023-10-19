// import { useState, useEffect } from "react";
// // import Users from "./users/users";

// const App = () => {

//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')

//   const onClick = () => setToggle(prev => !prev)

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 1000)
//   }, [])

//   return (
//     <>
//       <h1 data-testid="value-elem">{value}</h1>
//       {toggle === true && <div data-testid="toggle-elem">toggle</div> }
//       {data && <div style={{color: "red"}}>data</div>}
//       <div>hello</div>
//       <button data-testid="toggle-btn" onClick={onClick}>click me</button>
//       <input onChange = {e => setValue(e.target.value)} type="text" placeholder="input value..."/>
//       {/* <Users /> */}
//     </>
//   )

// }

// export default App;


import NavBar from './components/NavBar/NavBar';
import AppRouter from './router/AppRouter';

const App = () => {
	return ( 
		<>
      <NavBar/>
      <AppRouter />
		</>
	 );
}
 
export default App;
"use client"
import styles from './page.module.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home(){
  const router = useRouter();
  const navigate=(name)=>{
    router.push(name)
  }
  return(
    <main className={styles.main}>
      <h1>Basic Routing | Make New Page</h1>
      <Link href='/login'>Go to login page</Link>
      <br/><br/>
      <Link href='/about'>Go to About page</Link>

      <br/><br/><br/>
      <h1>Button tags </h1>
      <button onClick={()=>navigate("/login")}>Go to LOGIN PAGE</button>
      <br/><br/>
      <button onClick={()=>router.push("/about")}>Go to ABOUT PAGE</button>
    </main>
  );
}



















// 'use client'
// import { useState } from "react";
// import styles from "./page.module.css";

// export default function Home() {
//   const [name,setName] =useState("Balaprasad")
//   const apple=()=>{
//     setName("BALAPRASAD HASANPALLE")
//   }

//   const InnerComponent=() => {
//     return(
//       <h1>Inner component {name}</h1>
//     )
//   }
//   return (
//     <main className={styles.main}>
      
//      <h1>Events,functions and state</h1>
//      <p>My name is {name}</p>
//      <button onClick={() => apple()}>click me</button>
//      {/* <button onClick={() => alert("Hello next js")}>click me</button> */}

//      <InnerComponent/>
//      {InnerComponent()}
//     </main>
//   );
// }

// const User =(props)=>{
//   return(
//     <div>
//       <h2>
//         My name is {props.name}
//       </h2>
//     </div>
//   )
// }

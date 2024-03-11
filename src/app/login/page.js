"use client"
import {useRouter} from "next/navigation";
import Link from "next/link";
const Login =()=>{
    const router=useRouter();
    const navigate =(page) => {
        router.push("/login/" + page)
    }
    return(
        <div>
            <h1 className="heading">
                Login Page
            </h1>
            <Link href='/'>Go to Home page</Link>
            <br/>
            <br/>
            <br/>
            <h1>Nested Routing</h1>
            {/* <Link href="/login/loginstudent">LOGIN STUDENT PAGE</Link>
            <br/>
            <br/>
            <Link href="/login/loginteacher">LOGIN TEACHER PAGE</Link> */}
            <button onClick={()=>navigate("/loginstudent")}>GO to Student login page</button>
            <br/>
            <br/>
            <button onClick={()=>navigate("/loginteacher")}>GO to Teacher login page</button>
        </div>
        
    )
}
export default Login;
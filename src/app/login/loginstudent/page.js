import Link from "next/link";

const Loginstudent=()=>{
    return(
        <div>
            <h1 className="heading">Login Student Page</h1>
            <br/>
            <br/>
            <Link href={"/login"}>LOGIN PAGE</Link>
            <br/>
            <br/>
            <Link href={"/"}>Home Page</Link>
        </div>
    )
}
export default Loginstudent;
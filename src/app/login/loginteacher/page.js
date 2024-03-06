import Link from "next/link";

const Loginteacher=()=>{
    return(
        <div>
            <h1 className="heading">Login Teacher Page</h1>
            <br/>
            <br/>
            <Link href={"/login"}>LOGIN PAGE</Link>
            <br/>
            <br/>
            <Link href={"/"}>Home Page</Link>
        </div>
    )
}
export default Loginteacher;
import Link from "next/link";

const Aboutcollege=()=>{
    return(
        <div>
            <h1 className="heading">About College Page</h1>
            <br/>
            <br/>
            <Link href={"/about"}>ABOUT PAGE</Link>
            <br/>
            <br/>
            <Link href={"/"}>Home Page</Link>
        </div>
    )
}
export default Aboutcollege;
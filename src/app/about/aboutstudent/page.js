import Link from "next/link";

const Aboutstudent=()=>{
    return(
        <div>
            <h1 className="heading">About student Page</h1>
            <br/>
            <br/>
            <Link href={"/about"}>ABOUT PAGE</Link>
            <br/>
            <br/>
            <Link href={"/"}>Home Page</Link>
        </div>
    )
}
export default Aboutstudent;
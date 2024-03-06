import Link from "next/link";

export default function StudentList(){
    return(
        <div>
            <h1>
                Student List
            </h1>
            <ul>
                <li><Link href="/studentlist/Anil" >Anil</Link></li>
                <li><Link href="/studentlist/Peter" >Peter</Link></li>
                <li><Link href="/studentlist/Sam" >Sam</Link></li>
                <li><Link href="/studentlist/Vishwas" >Vishwas</Link></li>                
            </ul>
        </div>
    )
}
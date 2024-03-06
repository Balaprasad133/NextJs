"use client"
import Link from "next/link";
import './login.css';
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
    const Pathname = usePathname();
    return (
        <div>
            {Pathname !== "/login/loginteacher" ? 
            <ul className="login-menu">
            <li>
                <h4>Login Navbar</h4>
            </li>
            <li>
                <Link href="/login">LOGIN MAIN</Link>
            </li>
            <li>
                <Link href="/login/loginstudent">STUDENT LOGIN</Link>
            </li>
            <li>
                <Link href="/login/loginteacher">TEACHER LOGIN</Link>
            </li>
        </ul> 
        : <Link href="/">Go to Home Page</Link>}
            {children}
        </div>
    )
}


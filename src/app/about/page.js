"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
    const router = useRouter();
    return (
        <div>
            <h1 className="heading">
                About Page
            </h1>
            <Link href='/'>Go to Home page</Link>
            <br /><br /><br />
            <h1>Button tags </h1>
            <button onClick={() => router.push("/")}>Go to Home PAGE</button>
            <br/>
            <br/>
            <br/>
            <h1>Nested Routing</h1>
            <Link href="/about/aboutstudent">ABOUT STUDENT PAGE</Link>
            <br/>
            <Link href="/about/aboutcollege">ABOUT College PAGE</Link>

        </div>
    )
}
export default About;
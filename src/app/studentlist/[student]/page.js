"use client"
export default function Student({params}){
    return(
        <div>
            <h1>
                Student Details
            </h1>
            <h4>Name: {params.student}</h4>
            
        </div>
    )
}
export default function Lecture({params}){
    return(
        <div>
            <h1>Day of the college: {params.lecture[0]} </h1>
            <h2>Lecture Number :{params.lecture[1]}</h2>
        </div>
    )
}
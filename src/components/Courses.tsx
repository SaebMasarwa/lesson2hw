import { FunctionComponent } from "react";

interface CoursesProps {
    
}

  interface Course {
    num: number;
    name:string;
    semester: string;
}
const course1 = {
    num: 292100,
    name: "Java 1",
    semester: "A"
}
const course2 = {
    num: 292101,
    name: "Java 2",
    semester: "B"
}
const course3 = {
    num: 292102,
    name: "Python",
    semester: "A"
}
const course4 = {
    num: 292103,
    name: "Angular 1",
    semester: "B"
}
const course5 = {
    num: 292104,
    name: "Angular 2",
    semester: "A"
}
const course6 = {
    num: 292105,
    name: "React",
    semester: "B"
}
const course7 = {
    num: 292106,
    name: "MongoDB",
    semester: "B"
}
const course8 = {
    num: 292107,
    name: "Sql",
    semester: "A"
}


const myArr: Course[] = [course1, course2, course3,course4,course5,course6,course7,course8];

// myArr.forEach((cktr) => {
//     console.log(`Hi, My name is ${cktr.cktr_name},
//     I play for ${cktr.cktr_team} and 
//     I've already made ${cktr.cktr_runs} 
//     runs while representing my country.`)
// })

const Courses: FunctionComponent<CoursesProps> = () => {
    
    return ( <>
        <h1>{myArr[6].name}</h1>
    </> );
}
 
export default Courses;
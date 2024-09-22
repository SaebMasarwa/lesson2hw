import { FunctionComponent } from "react";

interface CoursesProps {}

interface Course {
  num: number;
  name: string;
  semester: string;
}
let courses: Course[] = [
  {
    num: 292100,
    name: "Java 1",
    semester: "A",
  },
  {
    num: 292101,
    name: "Java 2",
    semester: "B",
  },
  {
    num: 292102,
    name: "Python",
    semester: "A",
  },
  {
    num: 292103,
    name: "Angular 1",
    semester: "B",
  },
  {
    num: 292104,
    name: "Angular 2",
    semester: "A",
  },
  {
    num: 292105,
    name: "React",
    semester: "B",
  },
  {
    num: 292106,
    name: "MongoDB",
    semester: "B",
  },
  {
    num: 292107,
    name: "Sql",
    semester: "A",
  },
];

const myArr: Course[] = courses;

// myArr.forEach((cktr) => {
//     console.log(`Hi, My name is ${cktr.cktr_name},
//     I play for ${cktr.cktr_team} and
//     I've already made ${cktr.cktr_runs}
//     runs while representing my country.`)
// })

const Courses: FunctionComponent<CoursesProps> = () => {
  const youClicked = (courseName: string) => {
    alert(courseName);
  };

  return (
    <div className="d-flex ">
      {/* Question 1 */}
      {/* <div className="card" style={{ width: 400 }}>
        <div className="card-body">
          <h5 className="card-title">Course Name: {myArr[6].name}</h5>
          <p className="card-text">Semester: {myArr[6].semester}</p>
          <button
            className="btn btn-primary"
            onClick={() => youClicked(myArr[6].name)}
          >
            Click Me
          </button>
        </div>
      </div> */}
      {courses.length > 0
        ? myArr.map((course) => (
            <div className="card m-3" style={{ width: 400 }}>
              <div className="card-body">
                <h5 className="card-title">Course Name: {course.name}</h5>
                <p className="card-text">Semester: {course.semester}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => youClicked(course.name)}
                >
                  Click Me
                </button>
              </div>
            </div>
          ))
        : " <div>No courses available</div>"}
    </div>
  );
};

export default Courses;

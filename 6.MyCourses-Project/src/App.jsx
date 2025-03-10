import "./App.css";
import Header from "./header";
import Courses from "./components/Courses";
import { courses } from "./assets/data";

function App() {
  // console.log(courses)
  return (
    <>
      <Header />
      <div className="flex gap-5 px-4 py-2 mt-5">
        {courses?.map((course) => (
          <Courses key={course.id} course={course} />
        ))}
      </div>
    </>
  );
}

export default App;

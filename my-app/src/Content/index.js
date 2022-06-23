import Introduce from "./Introduce";
import Lesson from "./Lesson";
import "../Content/index.css";

function Content() {
  return (
    <div className="content-container">
      <Introduce />
      <Lesson />
    </div>
  );
}

export default Content;

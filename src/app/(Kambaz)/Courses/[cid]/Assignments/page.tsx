import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <br />
          <span>
            Multiple Modules | <strong> Not available until </strong> May 6 at 12:00am | 
            <strong> Due </strong> May 13 at 11:59pm | 100 pts
          </span>
        </li>
        <li className="wd-assignment-list-item">
           <Link
            href="/Courses/1234/Assignments/2"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <br />
          <span>
            Multiple Modules |  <strong> Not available until </strong> May 13 at 12:00am | 
            <strong> Due </strong> May 20 at 11:59pm | 100 pts
          </span>
        </li>
        <li className="wd-assignment-list-item">
           <Link
            href="/Courses/1234/Assignments/3"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <br />
          <span>
            Multiple Modules | <strong> Not available until </strong> May 20 at 12:00am | 
            <strong> Due </strong> May 27 at 11:59pm | 100 pts
          </span>
        </li>
      </ul>
    </div>
  );
}

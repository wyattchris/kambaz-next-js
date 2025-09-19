import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} alt={"react"} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/2" className="wd-dashboard-course-link">
            <Image src="/images/music.jpg" width={200} alt={"music"} height={150} />
            <div>
              <h5> Music, Noise, Silence </h5>
              <p className="wd-dashboard-course-title">
                Acoustemology 
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/3" className="wd-dashboard-course-link">
            <Image src="/images/religion.jpg" width={200} alt={"religion"} height={150} />
            <div>
              <h5> Sound and the Sacred </h5>
              <p className="wd-dashboard-course-title">
                Ethnographic studies of sound
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/4" className="wd-dashboard-course-link">
            <Image src="/images/writing.jpg" width={200} alt={"writing"} height={150} />
            <div>
              <h5> Advanced Writing </h5>
              <p className="wd-dashboard-course-title">
                Advanced writing in the disciplines
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/5" className="wd-dashboard-course-link">
            <Image src="/images/music_color.jpg" width={200} alt={"music_color"} height={150} />
            <div>
              <h5> Music Theory 1 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Western music theory
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/6" className="wd-dashboard-course-link">
            <Image src="/images/software.jpg" width={200} alt={"software"} height={150} />
            <div>
              <h5> Fundamentals of Software Engineering </h5>
              <p className="wd-dashboard-course-title">
                Full stack web development course
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/7" className="wd-dashboard-course-link">
            <Image src="/images/nlp.jpg" width={200} alt={"nlp"} height={150} />
            <div>
              <h5> Natural Langauge Processing </h5>
              <p className="wd-dashboard-course-title">
                Building natural language models
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}

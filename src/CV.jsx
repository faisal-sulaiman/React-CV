import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ProfileImg from "./profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFilePdf,
} from "react-icons/fa";
import "./App.css";

const CV = () => {
  const cvRef = useRef(); // <-- Declare this FIRST

  const handlePrint = useReactToPrint({
    content: () => cvRef.current,
    pageStyle: `
      @page { size: A4; margin: 10mm; }
      @media print {
        body { 
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          background: white !important;
        }
        .cv-print-btn { display: none !important; }
        a { text-decoration: none !important; }
        .project-link svg { display: none !important; }
        .cv-main-container {
          display: flex !important;
          flex-direction: row !important;
        }
        .cv-sidebar {
          width: 35% !important;
          display: block !important;
          page-break-inside: avoid;
          background: #126282 !important;
          color: white !important;
          padding: 20px !important;
          height: 100%;
        }
        .cv-content {
          width: 65% !important;
          display: block !important;
          padding: 20px !important;
          margin: 0 !important;
          box-shadow: none !important;
        }
      }
    `,
    removeAfterPrint: true,
    onAfterPrint: () => alert("PDF generated successfully!"),
  });
  return (
    <>
      <div className="cv-main-container" ref={cvRef}>
        <div className="cv-sidebar">
          <div className="cv-photo">
            <img src={ProfileImg} alt="Profile" />
          </div>
          <div className="cv-contact">
            <h3>CONTACT</h3>
            <p>
              <FaPhone /> +92 336 9659272
            </p>
            <p>
              <FaEnvelope /> faisalsulaiman4321@gmail.com
            </p>
            <p>
              <FaMapMarkerAlt /> Quaid-i-Azam University Islamabad
            </p>
            <p>
              <FaGithub /> https://github.com/faisal-sulaiman
            </p>
          </div>
          <div className="cv-skills">
            <h3>SKILLS</h3>
            <div className="skill-bar">
              <span>Microsoft Office</span>
              <div className="bar">
                <div className="fill" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Frontend (HTML/CSS/JS:JQUERY/REACT.JS/BOOTSTRAP)</span>
              <div className="bar">
                <div className="fill" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Backend (PHP/Node.js)</span>
              <div className="bar">
                <div className="fill" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>
                Programming (C/C++/Java/VB/Python: NumPy
                ,BeautifulSoup,PANDAS...)
              </span>
              <div className="bar">
                <div className="fill" style={{ width: "88%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Databases (MySQL)</span>
              <div className="bar">
                <div className="fill" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skill-bar">
              <span>Git/GitHub</span>
              <div className="bar">
                <div className="fill" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
          <div className="cv-languages">
            <h3>PERSONAL DETAILS</h3>
            <p>
              <strong>Father's Name:</strong> M Siddiq Khan
            </p>
            <p>
              <strong>CNIC:</strong> 11101-4002218-5
            </p>
            <p>
              <strong>D.O.B:</strong> 09-03-1997
            </p>
          </div>
        </div>
        <div className="cv-content">
          <header>
            <h1>FAISAL SULAIMAN</h1>
            <h2>Computer Science Lecturer & Developer</h2>
          </header>
          <section>
            <h3>PERSONAL STATEMENT</h3>
            <p>
              Seeking challenging and responsible position where my education,
              ability, and potential can be fully and effectively utilized with
              opportunities of growth, enhancement of knowledge and to serve in
              building the nation contribution to participatory development.
            </p>
          </section>
          <section>
            <h3>WORK EXPERIENCE</h3>
            <div>
              <b>Computer Science Lecturer</b>
              <span className="cv-date"></span>
              <div>GDC Ghoriwal Bannu</div>
            </div>
            <div>
              <b>IT Teacher</b>
              <span className="cv-date"></span>
              <div>Oxford School Of Excellent Ghoriwala Bannu</div>
            </div>
            <div>
              <b>Computer Science Tutor</b>
              <span className="cv-date"></span>
              <div>O-Level Tuition Islamabad</div>
            </div>
            <div>
              <b>Policy Maker</b>
              <span className="cv-date"></span>
              <div>Barq In Sight Company</div>
            </div>
          </section>
          <section>
            <h3>PROJECTS</h3>
            <div className="project-item">
              <b>React E-Commerce Website</b>
              <span className="cv-date"></span>
              <p>Interactive personal portfolio built with React.js and CSS</p>
              <a
                href="https://github.com/faisal-sulaiman/business-website-in-react.js"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>

            <div className="project-item">
              <b>E-commerce API</b>
              <span className="cv-date">2022</span>
              <p>Node.js backend with Express and MongoDB</p>
              <a
                href="https://github.com/faisal-sulaiman/ecommerce-api"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>

            <div className="project-item">
              <b>Task Management App</b>
              <span className="cv-date">2021</span>
              <p>Full-stack application with React and Firebase</p>
              <a
                href="https://github.com/faisal-sulaiman/task-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </section>
          <section>
            <h3>EDUCATION</h3>
            <div>
              <b>M.Sc Computer Science</b>
              <span className="cv-date"></span>
              <div>University of Peshawar</div>
            </div>
            <div>
              <b>B.Sc Computer Science</b>
              <span className="cv-date"></span>
              <div>UST Bannu</div>
            </div>
            <div>
              <b>F.Sc (Computer Science)</b>
              <span className="cv-date"></span>
              <div>BISE Bannu</div>
            </div>
            <div>
              <b>Sec (Science)</b>
              <span className="cv-date"></span>
              <div>BISE Bannu</div>
            </div>
          </section>
          <section>
            <h3>HOBBIES & INTERESTS</h3>
            <ul className="hobbies-list">
              <li>Walking</li>
              <li>Reading Books</li>
              <li>Learning</li>
              <li>Health and fitness</li>
            </ul>
          </section>
        </div>
      </div>
      <button onClick={handlePrint} className="cv-print-btn">
        <FaFilePdf /> Download PDF
      </button>
    </>
  );
};

export default CV;

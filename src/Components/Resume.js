import React from "react";
import "./Resume.css";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school} className="card">
          <div className="card-header">{education.school}</div>
          <div className="card-body">
            <h5 className="card-title">{education.degree}</h5>
            <p className="card-text">{education.graduated}</p>
            <p className="card-text">{education.description}</p>
          </div>
        </div>
      );
    });

    var work = data.work.map(function (work) {
      return (
        <div key={work.company} className="card">
          <div className="card-header">{work.company}</div>
          <div className="card-body">
            <h5 className="card-title">{work.title}</h5>
            <p className="card-text">{work.years}</p>
            <p className="card-text">{work.description}</p>
          </div>
        </div>
      );
    });

    var skills = data.skills.map(function (skills) {
      return (
        <div key={skills.name} className="skill-bar">
          <div className="skill-name">{skills.name}</div>
          <div className="skill-level" style={{ width: skills.level }}>
            <span>{skills.level}</span>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="main-col">{education}</div>
      </div>

      <div className="row work">
        <div className="header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="main-col">
          <p>{skillmessage}</p>
          <div className="skills">{skills}</div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

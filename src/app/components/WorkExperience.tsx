import React from 'react';
import ExperienceDetails from './ExperienceDetails';

const WorkExperience = () => (
  <section className="bg-[var(--color-black-1)] p-8 rounded-3xl">
    <h1 className="text-[var(--color-white-1)] text-2xl font-bold">Work Experience</h1>
    <div className='mt-10'>
      <ExperienceDetails
        company="PayPal"
        title="Senior Software Engineer"
        description="Partnered with engineers, business stakeholders, project managers, and UX designers to build new experiences and enhance existing products for PayPal Operations customers. Led the development and design of a case management tool for legal and regulatory complaints, creating mocks and shaping the user experience. Drove the successful migration off a licensed platform, saving millions in licensing costs. Built the tool with React, TypeScript, and Node, delivering a robust and scalable solution while ensuring strategic application efficiency and solid framework maintenance."
        duration="Jul 2019 - Present"
      />
      <ExperienceDetails
        company="Midnight Mechanism"
        title="Web Development Intern"
        description="Developed a video web hosting platform using PHP, Laravel, Node, and Angular. Optimized website performance with Gulp.js, and implemented CRUD functionality to enhance client websites."
        duration="Aug 2018 - Jun 2019"
      />
      <ExperienceDetails
        company="UNL Capstone (Spreetail)"
        title="Web Developer"
        description="Engineered a 360-degree photography camera rig for warehouse product imaging. Automated rig and turntable controls with Python scripts and developed a user-friendly interface using React, JavaScript, and ASP.NET."
        duration="Aug 2018 - May 2019"
      />
      <ExperienceDetails
        company="Molex"
        title="Web Development Intern"
        description="Designed a kiosk application for Human Resources to streamline employee information access. Improved the company’s application portal interface for better user experience and developed solutions with HTML, CSS, C#, JavaScript, and SQL Server Management Studio following Agile methodologies."
        duration="Oct 2017 - Aug 2018"
      />
    </div>
  </section>
);

export default WorkExperience;
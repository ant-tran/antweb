import React from 'react';

interface ExperienceDetailsProps {
  company: string;
  title: string;
  description: string;
  duration: string;
}

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({ company, title, description, duration }) => (
  <div className='mt-10'>
    <h3 className="font-mono text-[var(--color-black-2)] font-medium">{company}</h3>
    <h3 className="font-mono text-[var(--color-white-1)] font-medium">{title}</h3>
    <p className="mt-2 font-mono text-[var(--color-black-2)]">{description}</p>
    <p className="mt-2 font-mono text-[var(--color-black-2)] font-light">{duration}</p>
  </div>
);

export default ExperienceDetails;
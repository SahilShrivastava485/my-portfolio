// src/app/page.js

import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';
import { personalInfo, experience, education } from '../data';

export default function Home() {
  return (
    <>
      <HomeSection personalInfo={personalInfo} />
      <AboutSection personalInfo={personalInfo} />
      <ExperienceSection experience={experience} />
      <EducationSection education={education} />
      <ContactSection contact={personalInfo.contact} />
    </>
  );
}


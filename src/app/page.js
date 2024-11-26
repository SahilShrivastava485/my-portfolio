// src/app/page.js

import HeroSection from '../components/HeroSection';
import { personalInfo } from '../data';

export default function Home() {
  return <HeroSection personalInfo={personalInfo} />;
}

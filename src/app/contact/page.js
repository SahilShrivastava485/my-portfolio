// src/app/contact/page.js

import { personalInfo } from '../../data';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg text-gray-700">Feel free to reach out for collaborations or inquiries:</p>
      <ul className="list-none mt-4 text-lg text-gray-700">
        <li>Email: <a href={`mailto:${personalInfo.contact.email}`} className="text-blue-500 hover:underline">{personalInfo.contact.email}</a></li>
        <li>Phone: <span className="text-gray-800">{personalInfo.contact.phone}</span></li>
        <li>
          LinkedIn: <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {personalInfo.contact.linkedin}
          </a>
        </li>
        <li>
          GitHub: <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {personalInfo.contact.github}
          </a>
        </li>
      </ul>
    </div>
  );
}

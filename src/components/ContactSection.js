// src/components/ContactSection.js

const ContactSection = ({ contact }) => (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-gray-700">Feel free to reach out for collaborations or inquiries:</p>
      <ul className="list-none mt-4 text-lg text-gray-700">
        <li>Email: <a href={`mailto:${contact.email}`} className="text-blue-500 hover:underline">{contact.email}</a></li>
        <li>Phone: <span className="text-gray-800">{contact.phone}</span></li>
        <li>
          LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {contact.linkedin}
          </a>
        </li>
        <li>
          GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {contact.github}
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default ContactSection;

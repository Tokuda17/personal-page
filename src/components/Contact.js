import "./Contact.css";
import { LinkedinBoxFill, GithubFill, Phone, Envelope } from "akar-icons";

function Contact() {
  const icons = [
    {
      icon: <LinkedinBoxFill strokeWidth={1} size={36} />,
      link: "https://www.linkedin.com/in/michael-tokuda-b398a6284/",
      name: "LinkedIn",
    },
    {
      icon: <GithubFill strokeWidth={1} size={36} />,
      link: "https://github.com/Tokuda17",
      name: "GitHub",
    },
    {
      icon: <Phone strokeWidth={1} size={36} />,
      link: `tel:+19738039377`,
      name: `9738039377`,
    },
    {
      icon: <Envelope strokeWidth={1} size={36} />,
      link: `mailto:michael.tokuda17@gmail.com`,
      name: `michael.tokuda17@gmail.com`,
    },
  ];
  return (
    <>
      <div className="contact-container">
        <h1>Contact</h1>
        <section>
          <div className="contact-icons">
            {icons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                title={item.name}
                target="_blank"
                className="contact-icon"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </section>
        <p>Michael Tokuda</p>
      </div>
    </>
  );
}

export default Contact;

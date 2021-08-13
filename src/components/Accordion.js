import AccordionItem from "./AccordionItem";
import "./styles/Accordion.css";

const Accordion = () => {
  const details = [
    {
      id: 1,
      title: "How many team members can I invite?",
      description:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      id: 2,
      title: "What is the maximum file upload size?",
      description:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
      id: 3,
      title: "How do I reset my password?",
      description:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
    },
    {
      id: 4,
      title: "Can I cancel my subscription?",
      description:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
  ];

  return (
    <section className="accordion">
      <div className="accordion__img">
        <picture>
          <source
            srcSet={
              process.env.PUBLIC_URL +
              "/assets/images/illustration-woman-online-desktop.svg"
            }
            media="(min-width: 768px)"
          />
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/illustration-woman-online-mobile.svg"
            }
            alt="illustration woman"
          />
        </picture>
        <img
          className="img-arroba"
          src={
            process.env.PUBLIC_URL +
            "/assets/images/illustration-box-desktop.svg"
          }
          alt="pattern"
        />
      </div>

      <div className="accordion__content">
        <h2>FAQ</h2>

        {details.map((detail) => (
          <AccordionItem key={detail.id} {...detail} />
        ))}
      </div>
    </section>
  );
};

export default Accordion;

import React, { useEffect, useRef, useState } from "react";

const AccordionItem = ({ details }) => {
  const [show, setShow] = useState(false);
  const h3 = useRef();

  const { title, description } = details;

  useEffect(() => {
    show
      ? (h3.current.style.fontWeight = "700")
      : (h3.current.style.fontWeight = "500");
  }, [show]);

  return (
    <div className="accordion__content__wrapper">
      <div className="accordion__item">
        <div className="content-show" onClick={() => setShow(!show)}>
          <h3 ref={h3}>{title}</h3>
          <button type="button" className="arrow-show">
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/icon-arrow-down.svg"
              }
              alt="icon arrow down"
            />
          </button>
        </div>

        <p className={show ? "show" : "parrafo hidden"}>{description}</p>
        <hr />
      </div>
    </div>
  );
};

export default AccordionItem;

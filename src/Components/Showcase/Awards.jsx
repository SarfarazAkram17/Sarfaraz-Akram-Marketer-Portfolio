/*
AWARDS TAB IS PAUSED. Uncomment this file and re-enable the Awards tab in
Showcase.jsx (and the Award metric in About.jsx) to show it again.

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaExpand } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import blackBelt from "../../assets/black-belt.png";

const Awards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    closeRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="credential-grid">
      <article className="credential-card" data-aos="fade-up">
        <button
          ref={triggerRef}
          type="button"
          className="credential-image-button"
          onClick={() => setIsOpen(true)}
          aria-label="View black belt award full size"
        >
          <img src={blackBelt} alt="Black belt award" loading="lazy" />
        </button>
        <div className="credential-meta">
          <div>
            <h3>Black belt</h3>
            <span>A personal milestone</span>
          </div>
          <button
            type="button"
            className="credential-open"
            onClick={() => setIsOpen(true)}
            aria-label="Expand black belt award"
          >
            <FaExpand aria-hidden="true" />
          </button>
        </div>
      </article>

      {isOpen && createPortal(
        <div className="credential-modal" onClick={closeModal}>
          <section
            role="dialog"
            aria-modal="true"
            aria-label="Black belt award preview"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={blackBelt} alt="Black belt award, enlarged view" />
            <button
              ref={closeRef}
              className="credential-modal-close"
              type="button"
              onClick={closeModal}
              aria-label="Close award preview"
            >
              <IoCloseOutline size={24} aria-hidden="true" />
            </button>
          </section>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Awards;
*/

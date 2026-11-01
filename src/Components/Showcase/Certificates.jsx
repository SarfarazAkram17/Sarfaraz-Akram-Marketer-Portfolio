/*
CERTIFICATES TAB IS PAUSED. The only certificate was a web development course,
which no longer fits this portfolio. Add a marketing certificate image to
src/assets, point the import below at it, uncomment this file, and re-enable the
Certificates tab in Showcase.jsx.

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaExpand } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import certificate from "../../assets/Certificate.png";

const Certificates = () => {
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
          aria-label="View certificate full size"
        >
          <img src={certificate} alt="Certificate" loading="lazy" />
        </button>
        <div className="credential-meta">
          <div>
            <h3>Certificate</h3>
            <span>Professional learning</span>
          </div>
          <button
            type="button"
            className="credential-open"
            onClick={() => setIsOpen(true)}
            aria-label="Expand certificate"
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
            aria-label="Certificate preview"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={certificate} alt="Certificate, enlarged view" />
            <button
              ref={closeRef}
              className="credential-modal-close"
              type="button"
              onClick={closeModal}
              aria-label="Close certificate preview"
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

export default Certificates;
*/

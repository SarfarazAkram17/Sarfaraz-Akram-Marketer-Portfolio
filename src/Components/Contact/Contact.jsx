import { useEffect, useRef, useState } from "react";
import { FiShare2, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [messaging, setMessaging] = useState(false);
  const [subject, setSubject] = useState("");
  const messageRef = useRef(null);

  // "Ask about this" buttons in the Services section pre-fill the subject.
  useEffect(() => {
    const prefill = (event) => {
      setSubject(String(event.detail || ""));
      window.setTimeout(() => messageRef.current?.focus({ preventScroll: true }), 600);
    };
    window.addEventListener("contact-subject", prefill);
    return () => window.removeEventListener("contact-subject", prefill);
  }, []);

  const handleMessage = (event) => {
    event.preventDefault();
    setMessaging(true);
    const form = event.currentTarget;

    emailjs
      .sendForm(
        import.meta.env.VITE_emailjs_serviceId,
        import.meta.env.VITE_emailjs_templateId,
        form,
        import.meta.env.VITE_emailjs_publicKey,
      )
      .then(() => {
        toast.success(
          <div>
            <strong className="block text-lg mb-1 mr-1">Message sent</strong>
            <span>Thank you for reaching out. I’ll get back to you soon.</span>
          </div>,
        );
        form.reset();
        setSubject("");
      })
      .catch(() => {
        toast.error(
          <div>
            <strong className="block text-lg mb-1 mr-1">Message not sent</strong>
            <span>Something went wrong. Please try again in a moment.</span>
          </div>,
        );
      })
      .finally(() => setMessaging(false));
  };

  return (
    <section
      className="section-block contact-section section-wrap"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section-heading" data-aos="fade-up">
        <div>
          <div className="section-kicker">Ready to grow?</div>
          <h2 className="section-title" id="contact-title">
            Let’s talk.
          </h2>
        </div>
        <p className="section-description">
          Want more customers, a better online presence, or just advice on
          where to start? Tell me about your business and I’ll reply with ideas.
        </p>
      </div>

      <div className="contact-grid">
        <aside className="contact-note" data-aos="fade-up">
          <div>
            <div className="eyebrow">Open conversation</div>
            <h3>Growth starts with a conversation.</h3>
            <p>
              Reach out directly or send a note through the form. I’m based in
              Bangladesh and happy to help businesses with social media, ads,
              SEO, and landing pages on a contract basis.
            </p>
          </div>
          <div className="contact-methods">
            <a
              className="contact-method"
              href="mailto:sarfarazakram715@gmail.com"
            >
              <span className="contact-method-icon">
                <FiMail aria-hidden="true" />
              </span>
              <span>
                <small>Email</small>
                sarfarazakram715@gmail.com
              </span>
              <HiArrowUpRight aria-hidden="true" />
            </a>
            <a className="contact-method" href="tel:+8801973254091">
              <span className="contact-method-icon">
                <FiPhone aria-hidden="true" />
              </span>
              <span>
                <small>Phone</small>
                +88 01973254091
              </span>
              <HiArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="contact-method"
              href="https://wa.me/8801973254091"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-method-icon">
                <FaWhatsapp aria-hidden="true" />
              </span>
              <span>
                <small>WhatsApp</small>
                +88 01973254091
              </span>
              <HiArrowUpRight aria-hidden="true" />
            </a>
            <div className="contact-method">
              <span className="contact-method-icon">
                <FiMapPin aria-hidden="true" />
              </span>
              <span>
                <small>Location</small>
                Saidpur, Nilphamari, Rangpur, Bangladesh
              </span>
            </div>
          </div>
        </aside>

        <div className="contact-form-card" data-aos="fade-up">
          <div className="form-topline">
            <div>
              <h3>Send a message</h3>
              <p>Tell me about your business. I’ll reply as soon as I can.</p>
            </div>
            <FiShare2 className="form-symbol" aria-hidden="true" />
          </div>

          <form onSubmit={handleMessage} className="contact-form">
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                type="text"
                name="user_name"
                autoComplete="name"
                placeholder="How should I address you?"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email address</label>
              <input
                id="contact-email"
                type="email"
                name="user_email"
                autoComplete="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                autoComplete="off"
                placeholder="e.g. Meta Ads for my business"
                maxLength={120}
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Tell me about your business</label>
              <textarea
                id="contact-message"
                ref={messageRef}
                name="message"
                rows={5}
                placeholder="What does your business do, and what would you like to achieve?"
                required
              />
            </div>
            <button
              disabled={messaging}
              type="submit"
              className="button-primary form-submit"
              data-cursor-label="SEND"
              aria-live="polite"
            >
              {messaging ? (
                "Sending message…"
              ) : (
                <>
                  <IoPaperPlaneOutline aria-hidden="true" />
                  Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

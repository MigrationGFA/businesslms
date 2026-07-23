import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import webinarImage from "../assets/Remsana ai ai.png";
import { trackEvent } from "../analytics";

const STORAGE_KEY = "webinar_modal_shown";
const WEBINAR_LINK = "https://forms.gle/dNT5vT7TorKwYsDKA"; // Replace with actual registration link

const WebinarModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  // Auto-open after 5 seconds, only once per session
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    if (alreadyShown) {
      setHasBeenDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "true");
      trackEvent("webinar_modal_auto_opened");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setHasBeenDismissed(true);
    trackEvent("webinar_modal_closed");
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    trackEvent("webinar_modal_reopened");
  }, []);

  const handleRegister = useCallback(() => {
    trackEvent("webinar_register_clicked");
    window.open(WEBINAR_LINK, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <>
      {/* ── Floating Side Button (visible after modal has been dismissed) ── */}
      <AnimatePresence>
        {hasBeenDismissed && !isOpen && (
          <motion.button
            id="webinar-floating-btn"
            key="webinar-floating-btn"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={handleOpen}
            aria-label="Open webinar information"
            className="webinar-floating-btn"
          >
            {/* Video / Live icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <span className="webinar-floating-btn__dot" />
            <span className="webinar-floating-btn__label">Live Webinar</span>

            {/* Pulse ring */}
            <span className="webinar-floating-btn__pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Modal ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="webinar-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="webinar-backdrop"
            onClick={handleClose}
          >
            {/* Dark blurred overlay */}
            <div className="webinar-backdrop__overlay" />

            {/* Modal panel */}
            <motion.div
              key="webinar-modal-panel"
              initial={{ opacity: 0, scale: 0.92, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 32 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="webinar-modal"
            >
              {/* Subtle inner border */}
              <div className="webinar-modal__border" />

              {/* Close button */}
              <button
                id="webinar-modal-close"
                onClick={handleClose}
                aria-label="Close webinar modal"
                className="webinar-modal__close"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="webinar-modal__content">
                {/* Headline */}
                <h2 className="webinar-modal__headline">
                  <span className="webinar-modal__headline-accent">Join</span>{" "}
                  Free Executive Information Session
                </h2>

                {/* Webinar Image */}
                <div className="webinar-modal__image-wrapper">
                  <img
                    src={webinarImage}
                    alt="Remsana Academy – Free Executive Information Session: AI for Business Owners & Founders, Thursday July 23rd, 3:00 PM on Google Meet"
                    className="webinar-modal__image"
                    loading="eager"
                  />
                </div>

                {/* CTA Button */}
                <motion.button
                  id="webinar-register-btn"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleRegister}
                  className="webinar-modal__cta"
                >
                  Click to register&nbsp;&nbsp;→
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WebinarModal;

"use client";
import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  // Add client-side only state to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);

  // Static contact information
  const phoneNumber = "+49 2036332827";
  const email = "info@jphs.co.uk";
  const address = "East London";
  const termsUrl = "/terms-conditions";
  const privacyUrl = "/privacy-policy";

  // All other state remains the same
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    message: "",
    agreeToTerms: false,
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Use useEffect to mark when component is mounted on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      agreeToTerms: e.target.checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      setFormStatus("error");
      setErrorMessage("Please agree to the terms and conditions");
      return;
    }

    setFormStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mpwpvqqj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          postalCode: "",
          message: "",
          agreeToTerms: false,
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Form submission failed");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  };

  const closePopup = () => {
    setFormStatus("idle");
    setErrorMessage("");
  };

  // Only render complete UI after client-side hydration is complete
  if (!isClient) {
    return (
      <div className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>Contact Us</h2>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Us</h2>

        {/* Status Popup */}
        {formStatus === "success" && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <div className={styles.popupSuccess}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. We&apos;ll get back
                  to you soon!
                </p>
                <button onClick={closePopup} className={styles.popupButton}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {formStatus === "error" && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <div className={styles.popupError}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                <h3>Submission Failed</h3>
                <p>
                  {errorMessage ||
                    "There was an error submitting your form. Please try again."}
                </p>
                <button onClick={closePopup} className={styles.popupButton}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={styles.contactContent}>
          {/* Contact Details */}
          <div className={styles.contactDetails}>
            <h3 className={styles.contactSubtitle}>Contact Details</h3>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <p>Phone Number:</p>
                  <a
                    href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                    className={styles.contactLink}
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <p>Email:</p>
                  <a href={`mailto:${email}`} className={styles.contactLink}>
                    {email}
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <p>Address</p>
                  <span className={styles.contactLink}>{address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <h3 className={styles.contactSubtitle}>Get in Touch</h3>

            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    placeholder="Postal Code (optional)"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.formTextarea}
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleCheckboxChange}
                    required
                    className={styles.formCheckbox}
                  />
                  <span>I agree to the below conditions</span>
                </label>
              </div>

              <div className={styles.termsText}>
                By continuing you agree to the website{" "}
                <a href={termsUrl} className={styles.termsLink}>
                  terms & conditions
                </a>{" "}
                and{" "}
                <a href={privacyUrl} className={styles.termsLink}>
                  privacy policy
                </a>
              </div>

              <div className={styles.formGroup}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

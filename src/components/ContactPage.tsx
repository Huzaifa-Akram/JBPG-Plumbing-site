import React from "react";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div id="contact-section">
      <Contact
        phoneNumber="+49 011223344"
        email="jbphs@gmail.com"
        address="East London"
        termsUrl="/terms-and-conditions"
        privacyUrl="/privacy-policy"
      />
    </div>
  );
};

export default ContactPage;

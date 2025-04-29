"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { BlogLink, SmoothScrollLink } from "./NavbarClientWrapper";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <Image
                src="/images/site-logo.svg"
                alt="JB Plumbing & Heating Specialists Logo"
                width={180}
                height={60}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.companyDescription}>
              Professional plumbing and heating services for residential and
              commercial properties. We provide high-quality workmanship and
              excellent customer service.
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <SmoothScrollLink
                  href="/#services"
                  className={styles.footerLink}
                >
                  Services
                </SmoothScrollLink>
              </li>
              <li>
                <SmoothScrollLink
                  href="/#about-us"
                  className={styles.footerLink}
                >
                  About Us
                </SmoothScrollLink>
              </li>
              <li>
                <BlogLink className={styles.footerLink} />
              </li>
              <li>
                <Link href="/contact-us" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Our Services</h3>
            <ul className={styles.footerLinks}>
              <li>
                <span className={`${styles.footerLink} ${styles.serviceItem}`}>
                  Plumbing
                </span>
              </li>
              <li>
                <span className={`${styles.footerLink} ${styles.serviceItem}`}>
                  Gas & Boiler Installations
                </span>
              </li>
              <li>
                <span className={`${styles.footerLink} ${styles.serviceItem}`}>
                  Boiler Servicing
                </span>
              </li>
              <li>
                <span className={`${styles.footerLink} ${styles.serviceItem}`}>
                  Leaks Repair
                </span>
              </li>
              <li>
                <span className={`${styles.footerLink} ${styles.serviceItem}`}>
                  Power Flushing
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerHeading}>Contact Us</h3>
            <ul className={styles.contactInfo}>
              <li className={styles.contactItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.contactIcon}
                >
                  <path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
                </svg>
                <span>London, United Kingdom</span>
              </li>
              <li className={styles.contactItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.contactIcon}
                >
                  <path d="M20 4h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z" />
                </svg>
                <a href="mailto:info@jphs.co.uk" className={styles.contactLink}>
                  info@jphs.co.uk
                </a>
              </li>
              <li className={styles.contactItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.contactIcon}
                >
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                </svg>
                <a href="tel:+442036332827" className={styles.contactLink}>
                  +44 2036332827
                </a>
              </li>
              <li className={styles.contactItem}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={styles.contactIcon}
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z" />
                </svg>
                <span>
                  Mon-Fri: 8am - 7pm
                  <br />
                  Sat: 9am - 5pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.certifications}>
            <span className={styles.certBadge}>Gas Safe Registered</span>
            <span className={styles.certBadge}>Fully Insured</span>
            <span className={styles.certBadge}>24/7 Emergency Service</span>
          </div>
          <div className={styles.copyright}>
            <p>
              &copy; {currentYear} JB Plumbing & Heating Specialists. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

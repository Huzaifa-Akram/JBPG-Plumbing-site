import React from "react";
import styles from "./EmergencyCallSection.module.css";
import AnimatedEmergencyContent from "./animations/AnimatedEmergencyContent";

const EmergencyCallSection = () => {
  return (
    <section className={styles.emergencyCallSection}>
      <div className={styles.emergencyCallContainer}>
        <AnimatedEmergencyContent
          title="24/7 Emergency Call"
          description="Have a burst pipe or broken boiler. There is no need to panic, we are here to fix the problem."
          buttonText="Call Us Now"
          phoneNumber="+1234567890"
        />
      </div>
    </section>
  );
};

export default EmergencyCallSection;

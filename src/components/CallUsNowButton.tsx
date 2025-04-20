import styles from "./CallUsNowButton.module.css";

interface CallUsNowButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const CallUsNowButton = ({
  className = "",
  children = "Call Us Now",
}: CallUsNowButtonProps) => {
  return (
    <div className="relative">
      {/* Rotating glow effect */}
      <div className={styles.rotatingGlow}></div>

      {/* Pulsing glow effect */}
      <div className={styles.glowEffect}></div>

      {/* Button itself */}
      <button className={`${styles.callUsButton} ${className}`}>
        {children}
      </button>
    </div>
  );
};

export default CallUsNowButton;

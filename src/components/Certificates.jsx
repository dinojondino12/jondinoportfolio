import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../style/certificates.css";
import cert1 from "../assets/cert1.png"
import cert2 from "../assets/cert2.png"
import cert3 from "../assets/cert3.png"
import cert4 from "../assets/cert4.png"

// Sample certificate data - replace these with your actual certificate images
const certificatesData = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    image: cert1,
  },
  {
    id: 2,
    title: "React Developer Certification",
    image: cert2,
  },
  {
    id: 3,
    title: "Python Professional Certificate",
    image: cert3,
  },
  {
    id: 4,
    title: "Node.js Certification",
    image: cert4,
  },
];

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Detect when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const certificatesSection = document.querySelector(
      ".certificates-container"
    );
    if (certificatesSection) observer.observe(certificatesSection);

    return () => {
      if (certificatesSection) observer.unobserve(certificatesSection);
    };
  }, []);

  // Handle certificate click to show enlarged view
  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  // Close the enlarged certificate view
  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className="certificates-container">
        <motion.div
          className="certificates-content"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Certificates</h2>
          <div className="certificates-grid">
            {certificatesData.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                className="certificate-item"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => openCertificate(certificate)}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for enlarged certificate view */}
      {selectedCertificate && (
        <motion.div
          className="certificate-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCertificate}
        >
          <motion.div
            className="certificate-modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="certificate-modal-image"
            />
            <button
              className="certificate-modal-close"
              onClick={closeCertificate}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Certificates;

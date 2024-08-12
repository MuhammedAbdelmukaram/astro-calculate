import React from 'react';
import styles from "@/app/heading.module.css";
import Image from "next/image";

const Heading = ({ selectedCalculator, onSelectCalculator }) => {
    return (
        <div className={styles.container}>
            <div className={styles.headerRow}>

                <div>
                    <p style={{color:"#6d5fc4", fontWeight:"lighter"}}>
                        {selectedCalculator === 1 ? 'Am I making money right now?' : 'Should I sell this product?'}
                    </p>
                    <p className={styles.title}>
                        {selectedCalculator === 1 ? 'Profitability Calculator' : 'Feasibility Calculator'}
                    </p>
                </div>

                <div className={styles.buttons}>
                    <Image
                        src={selectedCalculator === 1 ? "/planning.png" : "/2.png"}
                        alt="Planning"
                        width={50}   // Adjust width
                        height={50}  // Adjust height to match aspect ratio
                        className={styles.logo}
                        onClick={() => onSelectCalculator(1)}
                        style={{ cursor: 'pointer', opacity: selectedCalculator === 1 ? 1 : 0.4 }}
                    />
                    <Image
                        src={selectedCalculator === 2 ? "/selling.png" : "/1.png"}
                        alt="Selling"
                        width={50}   // Adjust width
                        height={50}  // Adjust height to match aspect ratio
                        className={styles.logo}
                        onClick={() => onSelectCalculator(2)}
                        style={{ cursor: 'pointer', opacity: selectedCalculator === 2 ? 1 : 0.5 }}
                    />
                </div>
            </div>

            <div className={styles.divider}></div>
        </div>
    );
};

export default Heading;

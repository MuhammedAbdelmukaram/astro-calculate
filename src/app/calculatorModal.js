import React from 'react';
import styles from './calculatorModal.module.css';
import Image from 'next/image';

const Modal = ({ onSelect }) => {
    return (
        <div className={styles.modalBackground}>
            <div>
                <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"center", alignItems:"flex-end", marginBottom:50}}>
                    <Image
                        src="/logo.png" // Replace with your logo's path
                        alt="Logo"
                        width={500} // Set the correct width according to your logo's aspect ratio
                        height={100} // Set the correct height according to your logo's aspect ratio
                        className={styles.logo}
                        layout="intrinsic" // Ensures the image maintains its aspect ratio
                    />
                    <p>calculate</p>
                </div>


                <div className={styles.modalContent}>
                    <div className={styles.option} onClick={() => onSelect(1)}>
                        <Image
                            src="/selling.png" // Replace with your icon path
                            alt="Selling"
                            width={100}
                            height={100}
                        />
                        <p className={styles.optionText}>Im selling already</p>
                    </div>
                    <div className={styles.option} onClick={() => onSelect(2)}>
                        <Image
                            src="/planning.png" // Replace with your icon path
                            alt="Want to Sell"
                            width={100}
                            height={100}
                        />
                        <p className={styles.optionText}>I want to sell</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;

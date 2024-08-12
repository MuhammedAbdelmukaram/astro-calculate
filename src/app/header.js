import React from 'react';
import Image from 'next/image';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <Image
                src="/logo.png" // Replace with your logo's path
                alt="Logo"
                width={200} // Set the correct width according to your logo's aspect ratio
                height={100} // Set the correct height according to your logo's aspect ratio
                className={styles.logo}
                layout="intrinsic" // Ensures the image maintains its aspect ratio
            />
            <p>calculate</p>
        </div>
    );
};

export default Header;

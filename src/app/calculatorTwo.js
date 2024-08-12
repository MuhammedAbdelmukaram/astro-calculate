"use client"
import { useState } from 'react';
import styles from './calculator.module.css';

const CalculatorTwo = ({ onCalculate }) => {
    const [price, setPrice] = useState('');
    const [supplierPrice, setSupplierPrice] = useState('');
    const [ticketType, setTicketType] = useState('');

    const handlePriceChange = (e) => {
        const value = e.target.value;
        setPrice(value);

        if (value < 30) {
            setTicketType('Low Ticket');
        } else if (value >= 30 && value <= 80) {
            setTicketType('Mid Ticket');
        } else {
            setTicketType('High Ticket');
        }
    };

    const handleCalculate = () => {
        if (price && supplierPrice) {
            onCalculate({ price, supplierPrice });
        }
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.inputGroup}>
                <p className={styles.label}>
                    Price of Product
                    <span className={styles.infoCircle}>
                        i
                        <span className={styles.tooltip}>The price you plan to sell your product for.</span>
                    </span>
                </p>
                <input
                    className={styles.input}
                    type="number"
                    value={price}
                    onChange={handlePriceChange}
                    placeholder="$0.00"
                />
                <p className={`${styles.ticketType} ${styles[ticketType.toLowerCase().replace(' ', '')]}`}>
                    {ticketType}
                </p>
            </div>
            <div className={styles.inputGroup}>
                <p className={styles.label}>
                    Price from Supplier
                    <span className={styles.infoCircle}>
                        i
                        <span className={styles.tooltip}>The cost to acquire the product from your supplier.</span>
                    </span>
                </p>
                <input
                    className={styles.input}
                    type="number"
                    value={supplierPrice}
                    onChange={(e) => setSupplierPrice(e.target.value)}
                    placeholder="$0.00"
                />
            </div>
            <button onClick={handleCalculate} className={styles.button}>
                Calculate
            </button>
        </div>
    );
};

export default CalculatorTwo;

import { useState } from 'react';
import styles from './calculator.module.css';

const Calculator = ({ onCalculate }) => {
    const [sales, setSales] = useState('');
    const [adCost, setAdCost] = useState('');
    const [cogs, setCogs] = useState('');
    const [price, setPrice] = useState('');

    const handleCalculate = () => {
        if (sales && adCost && cogs && price) {
            onCalculate({ sales, adCost, cogs, price });
        }
    };

    return (
        <div className={styles.calculator}>
            <div className={styles.inputGroup}>
                <p className={styles.label}>
                    Number of Sales
                    <span className={styles.infoCircle}>
                        i
                        <span className={styles.tooltip}>The total number of units you sold</span>
                    </span>
                </p>
                <input
                    className={styles.input}
                    type="number"
                    value={sales}
                    onChange={(e) => setSales(e.target.value)}
                    placeholder="0"
                />
            </div>
            <div className={styles.inputGroup}>
                <p className={styles.label}>
                    Advertising Costs
                    <span className={styles.infoCircle}>
                        i
                        <span className={styles.tooltip}>The total cost of your advertising campaigns (FB, TT, Google etc.)</span>
                    </span>
                </p>
                <input
                    className={styles.input}
                    type="number"
                    value={adCost}
                    onChange={(e) => setAdCost(e.target.value)}
                    placeholder="$0.00"

                />
            </div>
            <div className={styles.inputGroup}>
                <p className={styles.label}>
                    COGS (Cost of Goods)
                    <span className={styles.infoCircle}>
                        i
                        <span className={styles.tooltip}>Cost of products you bought from supplier</span>
                    </span>
                </p>
                <input
                    className={styles.input}
                    type="number"
                    value={cogs}
                    onChange={(e) => setCogs(e.target.value)}
                    placeholder="$0.00"
                />
            </div>
            <div className={styles.inputGroup}>
                <p className={styles.label}>
                    Selling Price
                    <span className={styles.infoCircle}>
                        i
                        <span className={styles.tooltip}>The price at which you sell your product</span>
                    </span>
                </p>
                <input
                    className={styles.input}
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="$0.00"
                />
            </div>

            <button onClick={handleCalculate} className={styles.button}>
                Calculate
            </button>
        </div>
    );
};

export default Calculator;

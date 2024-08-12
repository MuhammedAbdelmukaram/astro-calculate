import styles from "./result.module.css";

const ResultTwo = ({ profitMargin, feasibility }) => {
    return (
        <div className={styles.result}>
            <div className={styles.divider}></div>
            <h3 className={styles.heading}>Your results</h3>
            <div className={styles.resultGrid}>
                <div className={styles.resultItem}>
                    <p className={styles.value}>{profitMargin}</p>
                    <p className={styles.label}>Profit Margin</p>
                </div>
                <div className={styles.resultItem}>
                    <p className={styles.value}>{feasibility}</p>
                    <p className={styles.label}>Feasibility</p>
                </div>
            </div>
        </div>
    );
};

export default ResultTwo;

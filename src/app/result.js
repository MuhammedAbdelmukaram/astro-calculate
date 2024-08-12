import styles from "./result.module.css";

const Result = ({ profit, roi, breakEvenROAS, roas, productHealth, breakEvenROI }) => {
    const displayProductHealth = productHealth ? productHealth : '/';

    return (
        <div className={styles.result}>
            <div className={styles.divider}></div>
            <h3 className={styles.heading}>Your results</h3>
            <div className={styles.resultGrid}>
                <div className={styles.resultItem}>
                    <p className={styles.value}>${profit}</p>
                    <p className={styles.label}>Profit</p>
                </div>
                <div className={styles.resultItem}>
                    <p className={styles.value}>{roi}</p>
                    <p className={styles.label}>ROI</p>
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.breakEvenGrid}>
                <div className={styles.breakEvenItem}>
                    <p className={styles.breakEvenValue}>${breakEvenROAS}</p>
                    <p className={styles.breakEvenLabel}>Break Even ROAS</p>
                </div>
                <div className={styles.breakEvenItem}>
                    <p className={styles.breakEvenValue}>{roas}</p>
                    <p className={styles.breakEvenLabel}>Current ROAS</p>
                </div>
                <div style={{width:"100%", height:"100%", display:"flex",justifyContent:"center", alignItems:"center"}}>
                    <div style={{width:1, height:"50%", backgroundColor:"#fff"}}></div>
                </div>

                <div className={styles.breakEvenItem}>
                    <p className={`${styles.breakEvenValue} ${styles[productHealth?.toLowerCase()]}`}>
                        {displayProductHealth}
                    </p>
                    <p className={styles.breakEvenLabel}>Product Health</p>
                </div>
                <div className={styles.breakEvenItem}>
                    <p className={styles.breakEvenValue}>{breakEvenROI}</p>
                    <p className={styles.breakEvenLabel}>Break Even ROI</p>
                </div>
            </div>
        </div>
    );
};

export default Result;

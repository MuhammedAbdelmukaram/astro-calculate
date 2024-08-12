"use client"
import React, { useState } from 'react';
import Calculator from './calculator';
import CalculatorTwo from './calculatorTwo';
import Result from './result';
import Modal from './calculatorModal';
import styles from './page.module.css';
import Header from "@/app/header";
import Heading from "@/app/Heading";
import { motion } from "framer-motion";
import ResultTwo from "@/app/resultTwo";

const Home = () => {
    const [results, setResults] = useState({
        profit: 0,
        roi: 0,
        breakEvenROAS: 0,
        roas: 0,
        breakEvenProfit: 0,
        breakEvenROI: 0,
    });

    const [resultsTwo, setResultsTwo] = useState({
        profitMargin: '0%', // Default placeholder for Profit Margin
        feasibility: '/', // Default placeholder for Feasibility
    });


    const [selectedCalculator, setSelectedCalculator] = useState(1); // Default to Calculator 1
    const [isModalOpen, setIsModalOpen] = useState(true);

    const calculateResults = ({ sales, adCost, cogs, price }) => {
        const salesNum = Number(sales);
        const adCostNum = Number(adCost);
        const cogsNum = Number(cogs);
        const priceNum = Number(price);

        const revenue = salesNum * priceNum;
        const profit = revenue - (adCostNum + cogsNum);
        const roi = (adCostNum !== 0) ? (profit / adCostNum) * 100 : 0;
        const breakEvenROAS = (adCostNum !== 0) ? (cogsNum + adCostNum) / adCostNum : 0;
        const roas = (adCostNum !== 0) ? revenue / adCostNum : 0;
        const breakEvenROI = (adCostNum !== 0) ? breakEvenROAS / roas : 0;

        let productHealth = 'Bad';
        if (roi >= 200 || roas >= 2.5) {
            productHealth = 'Good';
        } else if ((roi >= 100 && roi < 200) || (roas >= 1.5 && roas < 2.5)) {
            productHealth = 'Average';
        }

        setResults({
            profit: profit.toFixed(2),
            roi: `${(roi / 100).toFixed(2)} (${roi.toFixed(0)}%)`,
            breakEvenROAS: breakEvenROAS.toFixed(2),
            roas: `${roas.toFixed(2)} (${(roas * 100).toFixed(0)}%)`,
            productHealth: productHealth,  // Ensure productHealth is passed here
            breakEvenROI: `${breakEvenROI.toFixed(2)} (${(breakEvenROI * 100).toFixed(0)}%)`,
        });
    };




    const calculateResultsTwo = ({ price, supplierPrice }) => {
        const priceNum = Number(price);
        const supplierPriceNum = Number(supplierPrice);

        const profitMargin = ((priceNum - supplierPriceNum) / priceNum) * 100;

        let feasibility = 'Bad';
        if (priceNum >= supplierPriceNum * 3) {
            feasibility = 'Good';
        } else if (priceNum >= supplierPriceNum * 2) {
            feasibility = 'Average';
        }

        setResultsTwo({
            profitMargin: profitMargin.toFixed(2) + '%',
            feasibility,
        });
    };


    const handleSelectCalculator = (calculator) => {
        console.log(`Selected Calculator: ${calculator}`);
        setSelectedCalculator(calculator);
        setIsModalOpen(false);
    };


    const renderCalculator = () => {
        if (selectedCalculator === 1) {
            return (
                <>
                    <Header />
                    <Heading selectedCalculator={selectedCalculator} onSelectCalculator={handleSelectCalculator} />
                    <Calculator onCalculate={calculateResults} />
                    <Result
                        profit={results.profit}
                        roi={results.roi}
                        breakEvenROAS={results.breakEvenROAS}
                        roas={results.roas}
                        productHealth={results.productHealth}  // Pass productHealth to the Result component
                        breakEvenROI={results.breakEvenROI}
                    />
                </>
            );
        } else if (selectedCalculator === 2) {
            return (
                <>
                    <Header />
                    <Heading selectedCalculator={selectedCalculator} onSelectCalculator={handleSelectCalculator} />
                    <CalculatorTwo onCalculate={calculateResultsTwo} />
                    <ResultTwo
                        profitMargin={resultsTwo.profitMargin}
                        feasibility={resultsTwo.feasibility}
                    />
                </>
            );
        } else {
            return null;
        }
    };



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
        >
            <main className={styles.main}>

                {isModalOpen && (
                    <Modal
                        onClose={() => setIsModalOpen(false)}
                        onSelect={handleSelectCalculator}
                    />
                )}
                {!isModalOpen && renderCalculator()}
            </main>
        </motion.div>
    );
};

export default Home;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Summary = () => {

    const [baseCurrency, setBaseCurrency] = useState('USD'); 
    const [summaryData, setSummaryData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log(summaryData)

    const handleCurrencyChange = async (e) => {
        setBaseCurrency(e.target.value)
    };

    useEffect(() => {
        const fetchSummary = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://moneyexchange-olive.vercel.app/api/money/summary?baseCurrency=${baseCurrency}`);
                setSummaryData(response.data);
                toast.success("Success")
                setLoading(false);
            } catch (err) {
                setLoading(false);
                toast.error('Error fetching summary data');
            }
        };

        fetchSummary();
    }, [baseCurrency]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <div className=" flex justify-center items-center  p-4">
                <div className="w-full max-w-2x p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Currency Exchange Summary</h1>

                    <div className="mb-4">
                        <label htmlFor="baseCurrency" className="block text-sm font-medium text-gray-600">Select Base Currency</label>
                        <select
                            id="baseCurrency"
                            value={baseCurrency}
                            onChange={handleCurrencyChange}
                            className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="USD">USD</option>
                            <option value="BDT">BDT</option>
                            <option value="JPY">JPY</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Summary;
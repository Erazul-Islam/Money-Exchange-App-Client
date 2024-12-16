import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

const Expense = () => {

    const [expense, setExpense] = useState ([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://moneyexchange-olive.vercel.app/api/money/expenses')
                setExpense(response.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData()
        const interval = setInterval(fetchData, 2000);

        return () => clearInterval(interval);
    }, [])


    return (
        <div>
            <div className="mt-8 mr-8">
                {expense?.data?.length > 0 ? (
                    expense.data.map((one) => (
                        <div key={one._id}>
                            <div className="shadow-lg md:w-[300px] sm:ml-8  rounded-md mt-5 pt-4 pl-4 pb-4">
                                <div>Expense Name: {one?.name}</div>
                                <div>Expense Amount: {one?.amount}</div>
                                <div>Expense Description: {one?.description}</div>
                                <div>Currency: {one?.currency}</div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='mt-8 '> <Loading/> </div>
                )}
            </div>
        </div>
    );
};

export default Expense;
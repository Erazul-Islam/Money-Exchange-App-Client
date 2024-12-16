import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Expense = () => {

    const [expense,setExpense] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await  axios.get('https://moneyexchange-olive.vercel.app/api/money/expenses')
                setExpense(response.data)
            }
            catch (err) {
                console.log(err)
            }   
        }
        fetchData()
    },[])
        

    return (
        <div>
            <div>
                {
                    expense?.data?.map((one) => <div key={one._id}>
                        <div>{one?.name}</div>
                        <div>{one?.amount}</div>
                        <div>{one?.description}</div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Expense;
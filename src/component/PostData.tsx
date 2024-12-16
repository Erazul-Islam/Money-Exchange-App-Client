import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const PostData = () => {


    const [formData, setFormData] = useState({
        name: '',
        description: '',
        amount: '',
        currency: 'USD'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://moneyexchange-olive.vercel.app/api/money/expenses', formData);
            console.log('Data submitted successfully:', response.data);
            Swal.fire({
                title: "Good job!",
                text: "You successfully added expense!",
                icon: "success"
            })
            setFormData({ name: '', description: '', amount: '', currency: 'USD' });
        } catch (error) {
            console.error('Error submitting data:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: 'Failed to add expense. Please try again.'
              });
        }
    };

    return (
        <div>

            <div className=" flex justify-center items-center ">
                <div className="w-full max-w-md p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add New Expense</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                id="name"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter expense name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                id="description"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter description"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-600">Amount</label>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                id="amount"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter amount"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="currency" className="block text-sm font-medium text-gray-600">Currency</label>
                            <select
                                name="currency"
                                value={formData.currency}
                                onChange={handleChange}
                                id="currency"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="USD">USD</option>
                                <option value="BDT">BDT</option>
                                <option value="JPY">JPY</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Add Expense
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostData;
import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import './Transaction.css'

const Transaction = ({setGotToTransaction, currentCategory,transactionList, setTransactionList}) => {

    const [transactionAmount, setTransactionAmount] = React.useState({
        currentCategory,
        amount: "",
        date: "",
        note:""
    })

    const handleTransactionSubmit = (e) => {
        e.preventDefault()
        const temp = {...transactionAmount, id: new Date().getTime()}
        setTransactionList(prev => [
            ...prev,
            temp
        ]);
        setGotToTransaction(false)
    }

    return (
        <div className="transaction">
            <div className="transaction_inner">
                <div className="top">
                    <p>{currentCategory}</p>
                    <MdOutlineClose
                        onClick={() => setGotToTransaction(false)}
                    />
                </div>
                <div className="bottom">
                    <form onSubmit={handleTransactionSubmit}>
                        <label htmlFor="amount">amount</label>
                        <input
                            type="text"
                            placeholder="Enter the amount"
                            id="amount"
                            value={transactionAmount.amount}
                            autoComplete="off"
                            onChange={(e) => setTransactionAmount(prev => {
                                return {
                                    ...prev,
                                    amount:e.target.value
                                }
                            })}
                        />
                        <label htmlFor="date">pick date</label>
                        <input
                            id="date"
                            type="date"
                            placeholder="Select date"
                            value={transactionAmount.date}
                            autoComplete="off"
                            onChange={(e) => setTransactionAmount(prev => {
                                return {
                                    ...prev,
                                    date:e.target.value
                                }
                            })}
                        />
                        <label htmlFor="note">note</label>
                        <input
                            id="note"
                            type="text"
                            placeholder="Note"
                            value={transactionAmount.note}
                            autoComplete="off"
                            onChange={(e) => setTransactionAmount(prev => {
                                return {
                                    ...prev,
                                    note:e.target.value
                                }
                            })}
                        />
                        <button type="submit">
                            add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Transaction

import React from 'react'
import { MdOutlineClose } from 'react-icons/md'
import './Transaction.css'

const Transaction = ({setGotToTransaction, currentCategory, transactionList, setTransactionList}) => {

    const [transactionAmount, setTransactionAmount] = React.useState({
        currentCategory,
        amount: 0,
        date: "",
        note:""
    })

    const handleTransactionSubmit = (e) => {
        e.preventDefault()
        const temp = {...transactionAmount, id: new Date().getTime()}
        setTransactionList(prev => [
            temp,
            ...prev    
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
                            required
                            type="number"
                            placeholder="Enter the amount"
                            id="amount"
                            value={parseInt(transactionAmount.amount)}
                            autoComplete="off"
                            onChange={(e) => setTransactionAmount(prev => {
                                return {
                                    ...prev,
                                    amount:parseInt(e.target.value)
                                }
                            })}
                        />
                        <label htmlFor="date">pick date</label>
                        <input
                            required
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

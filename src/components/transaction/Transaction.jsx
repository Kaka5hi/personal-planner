import React from 'react'

const Transaction = () => {
    return (
        <div className="transaction">
            <div className="transaction_inner">
                <p>show</p>
                <button onClick={() => setGotToTransaction(false)} >close</button>
            </div>
        </div>
    )
}

export default Transaction

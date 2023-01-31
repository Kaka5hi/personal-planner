import React from 'react'
import './TransactionList.css'

const TransactionList = ({ item }) => {

    const caluculateDate = (item) => {
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const temp = [...item]
        let newDate = temp[8] + temp[9]
        let newMonth = month[temp[5] + temp[6] - 1]
        let newYear = temp[0] + temp[1] + temp[2] + temp[3]
        const result = `${newDate} ${newMonth} ${newYear}`
        return result
    }

    const currentDate = caluculateDate(item?.date)

    return (
        <div className="transaction_list-container" >
            <span style={{textTransform:"capitalize"}} >{item?.currentCategory}</span>
            <span>{currentDate}</span>
            <span title={item.note} >{item?.note.length === 0 ? "-" : `${item?.note}`}</span>
            <span>Rs. {item?.amount}</span>
        </div>
    )
}

export default TransactionList

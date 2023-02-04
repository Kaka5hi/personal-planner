import React from 'react'
import { Chart as ChartJS, ArcElement, DoughnutController, Legend, Tooltip} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, DoughnutController,  Legend, Tooltip);

const DonutChart = (props) => {
    // function to conver labels to uppercase
    const firstLetterCapital = (arr) => {
        const data = arr?.map(item => {
            let temp = [...item]
            const capitalLetter = temp[0].toUpperCase()
            temp?.splice(0,1,capitalLetter)
            return temp?.join('')
        })
        return data
    }

    // calculating total sum
    const totalSum = (arr) => {
        if (arr.length === 0) {
            return 0
        } else {
            return arr.reduce((a, b) => a + b)
        }
    }

    // labels for pie chardt
    const labelValues = firstLetterCapital(props.categoryList.map(item => item?.categoryName))
    // data for each label
    const dataValue = props?.sumOfEachCategory()
    // total sum variable
    const total = totalSum(dataValue)
    // dummy data object
    const data = {
        labels: labelValues,
        datasets: [
            {
                label: 'total expense',
                data: dataValue,
                backgroundColor: [
                    '#395F7F',
                    '#DF422A',
                    '#852525',
                    '#6328B1',
                    '#30C0D0',
                    '#29CE52',
                    '#47A41C',
                    '#7D3C0A',
                    '#09181F',
                ],
                borderColor: [
                    'white',
                ],
                borderWidth: 2,
                hoverOffset: 10,
            },
        ],
        
    }
    // combining each label name and total in one object
    const infoArray = (labelValues, dataValue) => {
        let combinedArr = []
        for (let i = 0; i < labelValues.length; i++) {
            combinedArr.push({label: labelValues[i], amount: dataValue[i]})
        }
        return combinedArr;
    }

    const info = infoArray(labelValues, dataValue)

    return (
        <div className="donut_chart">
            <div className="main">
                <Doughnut data={data} options={{ layout: { padding: 10 } }} />
            </div>
            <div className="donut_chart-info_container">
                <p>overall : {total}</p>
                <div className="inner">
                    {
                        info.map((item, index) => {
                            return (
                                <span key={index}>{item.label} : {item.amount}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DonutChart

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
                    '#4cd964',
                    '#007aff',
                    '#337ab7',
                    '#292b2c',
                    '#d35400',
                    '#B4674D',
                ],
                borderColor: [
                    'white',
                ],
                borderWidth: 2,
                hoverOffset: 10,
            },
        ],
        
    }

    return (
        <div className="donut_chart">
            <Doughnut data={data} options={{layout:{padding:40}}} />
            <span>overall spending : {total}</span>
        </div>
    )
}

export default DonutChart

import React from 'react'
import { Chart as ChartJS, ArcElement, PieController, Legend, Tooltip} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, PieController,  Legend, Tooltip);


const DonutChart = ({ data }) => {

    React.useEffect(()=> {}, [data])

    return (
        <div className="donut_chart" style={{display:"flex", alignItems:'center', justifyContent:'center', padding:0}}>
            <Pie data={data} options={{layout:{padding:20}}} />
        </div>
    )
}

export default DonutChart

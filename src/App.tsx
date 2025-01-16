import './App.css'
import DentalPlaqueChart from "../lib/Components/DentalPlaqueChart.tsx";
import {useDentalPlaqueChart} from "../lib/API/DentalPlaqueChartModel.ts";

function App() {

    const dentalPlaqueChart = useDentalPlaqueChart()

    return (
        <div className='flex justify-center w-[800px]'>
            <DentalPlaqueChart chart={dentalPlaqueChart}/>
        </div>
    )
}

export default App

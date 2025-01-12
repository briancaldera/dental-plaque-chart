import './App.css'
import DentalPlaqueChart from "./Components/DentalPlaqueChart.tsx";
import {useDentalPlaqueChart} from "./API/DentalPlaqueChartModel.ts";

function App() {

    const dentalPlaqueChart = useDentalPlaqueChart()

    return (
        <div className='flex justify-center'>
            <DentalPlaqueChart chart={dentalPlaqueChart}/>
        </div>
    )
}

export default App

import './App.css'
import DentalPlaqueChart from "../lib/components/DentalPlaqueChart.tsx";
import {useDentalPlaqueChart} from "../lib/hooks/DentalPlaqueChartModel.ts";

function App() {

    const dentalPlaqueChart = useDentalPlaqueChart()
    dentalPlaqueChart.getPresentDentalPieces()

    return (
        <div className='flex justify-center items-center w-full p-10  h-[900px]'>
            <DentalPlaqueChart chart={dentalPlaqueChart}/>
        </div>
    )
}

export default App

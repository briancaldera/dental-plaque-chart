import './App.css'
import DentalPlaqueChart from "./Components/DentalPlaqueChart.tsx";
import {useDentalPlaqueChart} from "./API/DentalPlaqueChartModel.ts";

function App() {

    const dentalPlaqueChart = useDentalPlaqueChart()

  return (
    <>
        <div className={'bg-white'}>
            <DentalPlaqueChart chart={dentalPlaqueChart}/>
        </div>
    </>
  )
}

export default App

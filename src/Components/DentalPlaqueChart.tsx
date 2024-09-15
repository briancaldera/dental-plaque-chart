"use client"

import TeethGroup from "./TeethGroup.tsx";
import type {DentalPiece, Surface} from "../models/DentalPiece.ts";
import {UseDentalPlaqueChartReturn} from "../API/DentalPlaqueChartModel.ts";

type DentalPlaqueChartProps = {
    chart: UseDentalPlaqueChartReturn
}

const DentalPlaqueChart = ({ chart }: DentalPlaqueChartProps) => {



    const handleClickSurface: (group: DentalPiece[], id: string, surface: Surface, mark: boolean) => DentalPiece[] = (group, id, surface, mark) => {
        return group.map((piece) => {
            if (piece.id === id) {
                const newTooth: DentalPiece = {...piece}
                newTooth.surfaces[surface] = mark
                return newTooth
            } else {
                return piece
            }
        })
    }

    return (
        <div className={'inline-grid grid-cols-1 sm:grid-cols-2'}>
            <TeethGroup teeth={chart.getModel().quadrant_1} onClickSurface={(id, surface, mark) => chart._listeners.setGroup1((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
            <TeethGroup teeth={chart.getModel().quadrant_2} onClickSurface={(id, surface, mark) => chart._listeners.setGroup2((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
            <TeethGroup teeth={chart.getModel().quadrant_4} onClickSurface={(id, surface, mark) => chart._listeners.setGroup4((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
            <TeethGroup teeth={chart.getModel().quadrant_3} onClickSurface={(id, surface, mark) => chart._listeners.setGroup3((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
        </div>
    )
}

export default DentalPlaqueChart

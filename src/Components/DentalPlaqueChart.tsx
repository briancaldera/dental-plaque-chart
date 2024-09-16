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

    const handleDiscardPiece: (group: DentalPiece[], id: string) => DentalPiece[] = (group: DentalPiece[], id: string) => {
        return group.map(piece => {
            if (piece.id === id) {
                const newPiece: DentalPiece = {...piece}
                newPiece.present = !newPiece.present
                return newPiece
            } else {
                return piece
            }
        })
    }

    return (
        <div className={'inline-grid grid-cols-1 sm:grid-cols-2'}>
            <TeethGroup teeth={chart.getModel().quadrant_1} onDiscardPiece={(id) => {chart._listeners.setGroup1(prevState => handleDiscardPiece(prevState, id))}} onClickSurface={(id, surface, mark) => chart._listeners.setGroup1((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
            <TeethGroup teeth={chart.getModel().quadrant_2} onDiscardPiece={(id) => {chart._listeners.setGroup2(prevState => handleDiscardPiece(prevState, id))}} onClickSurface={(id, surface, mark) => chart._listeners.setGroup2((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
            <TeethGroup teeth={chart.getModel().quadrant_4} onDiscardPiece={(id) => {chart._listeners.setGroup4(prevState => handleDiscardPiece(prevState, id))}} onClickSurface={(id, surface, mark) => chart._listeners.setGroup4((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
            <TeethGroup teeth={chart.getModel().quadrant_3} onDiscardPiece={(id) => {chart._listeners.setGroup3(prevState => handleDiscardPiece(prevState, id))}} onClickSurface={(id, surface, mark) => chart._listeners.setGroup3((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
        </div>
    )
}

export default DentalPlaqueChart

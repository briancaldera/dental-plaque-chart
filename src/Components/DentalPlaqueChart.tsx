"use client"

import TeethGroup from "./TeethGroup.tsx";
import type {DentalPiece, Surface} from "../models/DentalPiece.ts";
import {useState} from "react";

type DentalPlaqueChartProps = {
    // model: DentalPlaqueChartModel
}

const DentalPlaqueChart = () => {

    const quadrant1: DentalPiece[] = [
        {
            id: "18", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "17", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "16", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "15", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "14", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "13", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "12", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "11", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
    ] satisfies DentalPiece[]

    const quadrant2: DentalPiece[] = [
        {
            id: "21", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "22", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "23", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "24", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "25", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "26", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "27", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "28", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
    ] satisfies DentalPiece[]

    const quadrant3: DentalPiece[] = [
        {
            id: "31", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "32", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "33", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "34", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "35", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "36", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "37", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "38", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
    ] satisfies DentalPiece[]

    const quadrant4: DentalPiece[] = [
        {
            id: "48", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "47", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "46", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "45", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "44", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "43", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "42", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
        {
            id: "41", present: true, surfaces: {
                back: false, front: false, left: false, right: false
            }
        },
    ] satisfies DentalPiece[]

    const [group1, setGroup1] = useState<DentalPiece[]>(quadrant1);
    const [group2, setGroup2] = useState<DentalPiece[]>(quadrant2);
    const [group3, setGroup3] = useState<DentalPiece[]>(quadrant4);
    const [group4, setGroup4] = useState<DentalPiece[]>(quadrant3);

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
            <TeethGroup teeth={group1} onClickSurface={(id, surface, mark) => setGroup1((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
            <TeethGroup teeth={group2} onClickSurface={(id, surface, mark) => setGroup2((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
            <TeethGroup teeth={group4} onClickSurface={(id, surface, mark) => setGroup4((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
            <TeethGroup teeth={group3} onClickSurface={(id, surface, mark) => setGroup3((prevState) => handleClickSurface(prevState, id, surface, mark))}/>
        </div>
    )
}

export default DentalPlaqueChart

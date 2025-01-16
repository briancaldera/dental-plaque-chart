import {DentalPiece} from "../models/DentalPiece";
import React, {useState} from "react";

type UseDentalPlaqueChart = {
    model?: DentalPlaqueChartModel
}

type UseDentalPlaqueChartReturn = {
    getModel: () => DentalPlaqueChartModel
    _listeners: {
        setGroup1: React.Dispatch<React.SetStateAction<DentalPiece[]>>
        setGroup2: React.Dispatch<React.SetStateAction<DentalPiece[]>>
        setGroup3: React.Dispatch<React.SetStateAction<DentalPiece[]>>
        setGroup4: React.Dispatch<React.SetStateAction<DentalPiece[]>>
    },
    presentDentalPieces: () => number
    markedSurfaces: () => number
    plaquePercentage: () => number
}

type DentalPlaqueChartModel = {
    quadrant_1: DentalPiece[]
    quadrant_2: DentalPiece[]
    quadrant_3: DentalPiece[]
    quadrant_4: DentalPiece[]
}

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

const useDentalPlaqueChart: (props?: UseDentalPlaqueChart) => UseDentalPlaqueChartReturn = (props?) => {

    const [group1, setGroup1] = useState<DentalPiece[]>(() => JSON.parse(JSON.stringify(props?.model?.quadrant_1 ?? quadrant1)))
    const [group2, setGroup2] = useState<DentalPiece[]>(() => JSON.parse(JSON.stringify(props?.model?.quadrant_2 ?? quadrant2)))
    const [group3, setGroup3] = useState<DentalPiece[]>(() => JSON.parse(JSON.stringify(props?.model?.quadrant_3 ?? quadrant3)))
    const [group4, setGroup4] = useState<DentalPiece[]>(() => JSON.parse(JSON.stringify(props?.model?.quadrant_4 ?? quadrant4)))

    const model = {
        quadrant_1: group1, quadrant_2: group2, quadrant_3: group3, quadrant_4: group4
    }

    const getModel: () => DentalPlaqueChartModel = () => {
        return model satisfies DentalPlaqueChartModel
    }

    const presentDentalPieces = () => countPresentDentalPieces(model)
    const markedSurfaces = () => countMarkedSurfaces(model)
    const plaquePercentage = () => calculatePlaquePercentage(countMarkedSurfaces(model), countPresentDentalPieces(model))

    return {
        getModel, presentDentalPieces,
        markedSurfaces, plaquePercentage, _listeners: {setGroup1, setGroup2, setGroup3, setGroup4}
    } satisfies UseDentalPlaqueChartReturn
}

const countPresentDentalPieces = (model: DentalPlaqueChartModel) => {
    return model.quadrant_1.filter(piece => piece.present).length +
        model.quadrant_2.filter(piece => piece.present).length +
        model.quadrant_3.filter(piece => piece.present).length +
        model.quadrant_4.filter(piece => piece.present).length
}

const countMarkedSurfaces = (model: DentalPlaqueChartModel) => {
    return model.quadrant_1.filter(piece => piece.present).reduce((previousValue, currentValue) => {
            if (currentValue.surfaces.front) ++previousValue
            if (currentValue.surfaces.back) ++previousValue
            if (currentValue.surfaces.right) ++previousValue
            if (currentValue.surfaces.left) ++previousValue
            return previousValue
        }, 0) +
        model.quadrant_2.filter(piece => piece.present).reduce((previousValue, currentValue) => {
            if (currentValue.surfaces.front) ++previousValue
            if (currentValue.surfaces.back) ++previousValue
            if (currentValue.surfaces.right) ++previousValue
            if (currentValue.surfaces.left) ++previousValue
            return previousValue
        }, 0) +
        model.quadrant_3.filter(piece => piece.present).reduce((previousValue, currentValue) => {
            if (currentValue.surfaces.front) ++previousValue
            if (currentValue.surfaces.back) ++previousValue
            if (currentValue.surfaces.right) ++previousValue
            if (currentValue.surfaces.left) ++previousValue
            return previousValue
        }, 0) +
        model.quadrant_4.filter(piece => piece.present).reduce((previousValue, currentValue) => {
            if (currentValue.surfaces.front) ++previousValue
            if (currentValue.surfaces.back) ++previousValue
            if (currentValue.surfaces.right) ++previousValue
            if (currentValue.surfaces.left) ++previousValue
            return previousValue
        }, 0)
}

const calculatePlaquePercentage = (markedSurfaces: number, presentSurfaces: number): number => markedSurfaces / presentSurfaces

export {useDentalPlaqueChart, type UseDentalPlaqueChart, type UseDentalPlaqueChartReturn}

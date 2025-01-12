"use client"

import {DentalPiece, Surface} from "../models/DentalPiece.ts";
import Tooth from "./Tooth.tsx";

type TeethGroupProps = {
    teeth: DentalPiece[]
    onClickSurface?: (id: string, surface: Surface, mark: boolean) => void
    onDiscardPiece?: (id: string) => void
}

const TeethGroup = ({teeth, onClickSurface = () => {}, onDiscardPiece = () => {}}: TeethGroupProps) => {

    return (
        <div className='flex border'>
            {
                teeth.map(tooth => <Tooth key={tooth.id} pieceModel={tooth} onClickSurface={(surface, mark) => {
                    onClickSurface(tooth.id, surface, mark)
                }} onDiscardPiece={onDiscardPiece}/>)
            }
        </div>
    )
}

export default TeethGroup

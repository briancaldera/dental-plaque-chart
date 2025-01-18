"use client"

import {DentalPiece, Surface} from "../models/DentalPiece";
import Tooth from "./Tooth";

type TeethGroupProps = {
    teeth: DentalPiece[]
    onClickSurface?: (id: string, surface: Surface, mark: boolean) => void
    onDiscardPiece?: (id: string) => void
    disabled?: boolean
}

const TeethGroup = ({teeth, onClickSurface = () => {}, onDiscardPiece = () => {}, disabled = false}: TeethGroupProps) => {

    return (
        <div className='flex border'>
            {
                teeth.map(tooth => <Tooth key={tooth.id} pieceModel={tooth} onClickSurface={(surface, mark) => {
                    onClickSurface(tooth.id, surface, mark)
                }} onDiscardPiece={onDiscardPiece} disabled={disabled}/>)
            }
        </div>
    )
}

export default TeethGroup

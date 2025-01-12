"use client"

import {type DentalPiece} from "../models/DentalPiece.ts";
import CircleX from "./CircleX.tsx";
import {CSSProperties} from "react";

type ToothProps = {
    pieceModel: DentalPiece
    onClickSurface?: (surface: Surface, mark: boolean) => void
    onDiscardPiece?: (id: string) => void
    size?: CSSProperties['width']
}

type Surface = 'front' | 'back' | 'left' | 'right'

const markColor = 'bg-rose-500 hover:bg-rose-400'
const unmarkedColor = 'bg-blue-200 hover:bg-blue-300'

const Tooth = (
    {
                   pieceModel, size = '40px', onClickSurface = () => {
    }, onDiscardPiece = () => {
    }
               }: ToothProps) => {

    return (
        <div className='relative aspect-square' style={{width: size}}>
            <div onClick={() => onDiscardPiece(pieceModel.id)}
                 className='absolute right-0 top-0 z-50 w-1/4 aspect-square cursor-pointer'>
                <CircleX/>
            </div>
            <div className='w-full aspect-square'>
                {
                    (pieceModel.present) ?
                        (<div className='w-full aspect-square grid grid-cols-2 rotate-45'>
                            <Surface surface={'front'} isMarked={pieceModel.surfaces.front}
                                     onClickSurface={onClickSurface}/>
                            <Surface surface={'right'} isMarked={pieceModel.surfaces.right}
                                     onClickSurface={onClickSurface}/>
                            <Surface surface={'left'} isMarked={pieceModel.surfaces.left}
                                     onClickSurface={onClickSurface}/>
                            <Surface surface={'back'} isMarked={pieceModel.surfaces.back}
                                     onClickSurface={onClickSurface}/>
                        </div>) :
                        (<div className='w-full aspect-square h-full'>
                            <CircleX/>
                        </div>)
                }
            </div>
        </div>
    )
}

type SurfaceProps = {
    isMarked: boolean
    surface: Surface
    onClickSurface?: (surface: Surface, mark: boolean) => void
}

const Surface = ({
                     isMarked, surface, onClickSurface = () => {
    }
                 }: SurfaceProps) => {

    const surfaceStyle: string = ((isMarked) ? markColor : unmarkedColor) + ' hover:scale-110 transition active:scale-95'

    let cornerStyle: string = 'border border-black '

    switch (surface) {
        case 'front':
            cornerStyle += 'rounded-tl-full'
            break
        case "back":
            cornerStyle += 'rounded-br-full'
            break
        case "left":
            cornerStyle += 'rounded-bl-full'
            break
        case "right":
            cornerStyle += 'rounded-tr-full'
            break
    }

    return (
        <div onClick={() => onClickSurface(surface, !isMarked)} className={`${cornerStyle} ${surfaceStyle}`}
             tabIndex={0}></div>
    )
}

export default Tooth

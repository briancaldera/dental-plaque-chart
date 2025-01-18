"use client"

import {type DentalPiece} from "../models/DentalPiece";
import CircleX from "./CircleX";
import {CSSProperties} from "react";

type ToothProps = {
    pieceModel: DentalPiece
    onClickSurface?: (surface: Surface, mark: boolean) => void
    onDiscardPiece?: (id: string) => void
    disabled?: boolean
    size?: CSSProperties['width']
}

type Surface = 'front' | 'back' | 'left' | 'right'

const markColor = 'bg-rose-500 hover:bg-rose-400 disabled:bg-rose-500'
const unmarkedColor = 'bg-blue-200 hover:bg-blue-300 disabled:bg-gray-300'

const Tooth = (
    {
        pieceModel, size = '100%', onClickSurface = () => {
    }, onDiscardPiece = () => {
    }, disabled = false
    }: ToothProps) => {

    return (
        <div className='relative aspect-square' style={{width: size, flex: '1 1 0%'}}>
            {
                !disabled &&
                (<div onClick={() => onDiscardPiece(pieceModel.id)}
                     className='absolute right-0 top-0 z-50 w-1/4 aspect-square cursor-pointer'>
                    <CircleX/>
                </div>)
            }
            <div className='w-full aspect-square p-1.5'>
                {
                    (pieceModel.present) ?
                        (<div className='w-full aspect-square grid grid-cols-2 rotate-45'>
                            <Surface surface={'front'} isMarked={pieceModel.surfaces.front}
                                     onClickSurface={onClickSurface} disabled={disabled}/>
                            <Surface surface={'right'} isMarked={pieceModel.surfaces.right}
                                     onClickSurface={onClickSurface} disabled={disabled}/>
                            <Surface surface={'left'} isMarked={pieceModel.surfaces.left}
                                     onClickSurface={onClickSurface} disabled={disabled}/>
                            <Surface surface={'back'} isMarked={pieceModel.surfaces.back}
                                     onClickSurface={onClickSurface} disabled={disabled}/>
                        </div>) :
                        (<div className={`w-full aspect-square ${disabled ? 'text-gray-700' : 'text-blue-800'}`}>
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
    disabled?: boolean
}

const Surface = ({
                     isMarked, surface, onClickSurface = () => {
    }, disabled = false
                 }: SurfaceProps) => {

    const surfaceStyle: string = `${(isMarked) ? markColor : unmarkedColor} ${disabled ? '' : 'hover:scale-110 transition active:scale-95'}`

    let cornerStyle: string = 'border border-black '

    const handleClick = () => {
        if (disabled) return
        onClickSurface(surface, !isMarked)
    }

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
        <button disabled={disabled} onClick={handleClick}
                className={`${cornerStyle} ${surfaceStyle}`} aria-disabled={disabled} role='button' type='button'
                tabIndex={0}/>
    )
}

export default Tooth

import {type DentalPiece} from "../models/DentalPiece.ts";
import CircleX from "./CircleX.tsx";

type ToothProps = {
    piece: DentalPiece
    onClickSurface?: (surface: Surface, mark: boolean) => void
    onDiscardPiece?: (id: string) => void
    size?: number
}

type Surface = 'front' | 'back' | 'left' | 'right'

const markColor = 'bg-rose-500 hover:bg-rose-400'
const unmarkedColor = 'bg-blue-200 hover:bg-blue-300'

const Tooth = ({piece, size = 40, onClickSurface = () => {}, onDiscardPiece = () => {}}: ToothProps) => {

    return (
        <div className={'relative p-2'}>
            <div onClick={() => onDiscardPiece(piece.id)}>
                <CircleX className={'absolute right-0 top-0 z-50 w-1/4 h-auto cursor-pointer'}/>
            </div>
            <div className={`w-[${size}px] aspect-square grid grid-cols-2 rotate-45`}>
                {
                    (piece.present) ?
                        (<>
                            <Surface surface={'front'} isMarked={piece.surfaces.front} onClickSurface={onClickSurface}/>
                            <Surface surface={'right'} isMarked={piece.surfaces.right} onClickSurface={onClickSurface}/>
                            <Surface surface={'left'} isMarked={piece.surfaces.left} onClickSurface={onClickSurface}/>
                            <Surface surface={'back'} isMarked={piece.surfaces.back} onClickSurface={onClickSurface}/>
                        </>) :
                        (
                            <div className={'col-span-full row-span-full -rotate-45'}>
                                <CircleX className={'h-full w-full text-blue-900'}/>
                            </div>
                        )
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

const Surface = ({isMarked, surface, onClickSurface = () => {}}: SurfaceProps) => {

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
        <div onClick={() => onClickSurface(surface, !isMarked)} className={`${cornerStyle} ${surfaceStyle}`} tabIndex={0}></div>
    )
}

export default Tooth

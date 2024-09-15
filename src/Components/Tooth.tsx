import {type DentalPiece} from "../models/DentalPiece.ts";

type ToothProps = {
    piece: DentalPiece
    onClickSurface?: (surface: Surface, mark: boolean) => void
}

type Surface = 'front' | 'back' | 'left' | 'right'

const surfaceStyle = " hover:bg-rose-100 hover:scale-110 transition active:scale-95"

const markColor = 'bg-rose-500'

const Tooth = ({piece, onClickSurface = () => {}}: ToothProps) => {

    return (
        <div className={'w-12 h-12 grid grid-cols-2 rotate-45'}>
            <div onClick={() => onClickSurface('front', !piece.surfaces.front)} className={`${(piece.surfaces.front) ? markColor : 'bg-blue-200'} border border-black rounded-tl-full ${surfaceStyle}`}></div>
            <div onClick={() => onClickSurface('right', !piece.surfaces.right)} className={`${(piece.surfaces.right) ? markColor : 'bg-blue-200'} border border-black rounded-tr-full ${surfaceStyle}`}></div>
            <div onClick={() => onClickSurface('left', !piece.surfaces.left)} className={`${(piece.surfaces.left) ? markColor : 'bg-blue-200'} border border-black rounded-bl-full ${surfaceStyle}`}></div>
            <div onClick={() => onClickSurface('back', !piece.surfaces.back)} className={`${(piece.surfaces.back) ? markColor : 'bg-blue-200'} border border-black rounded-br-full ${surfaceStyle}`}></div>
        </div>
    )
}

export default Tooth

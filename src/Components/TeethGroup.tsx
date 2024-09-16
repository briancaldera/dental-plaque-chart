import {DentalPiece, Surface} from "../models/DentalPiece.ts";
import Tooth from "./Tooth.tsx";

type TeethGroupProps = {
    teeth: DentalPiece[]
    onClickSurface?: (id: string, surface: Surface, mark: boolean) => void
    onDiscardPiece?: (id: string) => void
}

const TeethGroup = ({teeth, onClickSurface = () => {}, onDiscardPiece = () => {}}: TeethGroupProps) => {

    return (
        <div className={'p-4 inline-flex gap-1 border flex-wrap'}>
            {
                teeth.map(tooth => <Tooth key={tooth.id} piece={tooth} onClickSurface={(surface, mark) => {
                    onClickSurface(tooth.id, surface, mark)
                }} onDiscardPiece={onDiscardPiece}/>)
            }
        </div>
    )
}

export default TeethGroup

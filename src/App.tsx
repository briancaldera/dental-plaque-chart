import './App.css'
import Tooth from './Components/Tooth.tsx'
import {type DentalPiece, type Surface} from "./models/DentalPiece.ts";
import {useState} from "react";

function App() {

    const tooth= {
        id: '1',
        present: true,
        surfaces: {
            front: false, back: true, left: false, right: false
        }
    } satisfies DentalPiece

    const [piece, setPiece] = useState<DentalPiece>(tooth);

    const handleClickSurface: (surface: Surface, mark: boolean) => void = (surface, mark) => {

        const oldPiece: DentalPiece = {...piece}

        oldPiece.surfaces[surface] = mark

        setPiece(oldPiece)
    }

  return (
    <>
        <div className={'bg-white'}>
            <Tooth piece={piece} onClickSurface={handleClickSurface}/>
        </div>
    </>
  )
}

export default App

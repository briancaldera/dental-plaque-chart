type DentalPiece = {
    id: string
    present: boolean
    surfaces: Surfaces
}

type Surfaces = Record<Surface, boolean>

type Surface = 'front' | 'back' | 'left' | 'right'

export {type DentalPiece, type Surface}

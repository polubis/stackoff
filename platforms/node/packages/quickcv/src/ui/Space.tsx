import styled from "styled-components"

import { CssUnit } from "../models"

namespace Space {
  export type Type = "medium"

  export type Atom = number | undefined

  export type Atoms = [Atom, Atom, Atom, Atom]

  export interface Props {
    t?: Atom
    r?: Atom
    b?: Atom
    l?: Atom
    unit?: CssUnit
    type?: Space.Type
  }
}

const TYPES: Record<Space.Type, Space.Atoms> = {
  medium: [28, 0, 28, 0],
}

const toStringMargin = <T extends unknown>(items: T[], unit: CssUnit): string =>
  items.map(item => item + unit).join(" ")

const mergeAtoms = (atoms: Space.Atom[], type: Space.Type): Space.Atoms => {
  const atomsFromType = TYPES[type]
  const mergedAtoms = atomsFromType.map(
    (typedAtom, i): Space.Atom =>
      atoms[i] !== undefined ? atoms[i] : typedAtom
  )

  return mergedAtoms as Space.Atoms
}

const getMargin = ({
  t,
  r,
  b,
  l,
  unit = "px",
  type = "medium",
}: Space.Props): string => {
  const margin = toStringMargin(mergeAtoms([t, r, b, l], type), unit)
  return margin
}

const Space = styled.div<Space.Props>`
  margin: ${getMargin};
`

export default Space

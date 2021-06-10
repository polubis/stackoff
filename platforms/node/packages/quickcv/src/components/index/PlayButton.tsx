import React, { FC } from "react"
import styled from "styled-components"

import { THEME } from "../../styles"

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 82px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  background: ${THEME.black};
  color: ${THEME.white};
  border: 3px solid ${THEME.white};
  flex-shrink: 0;

  svg {
    transform: translateX(1px);
  }
`

const PlayButton: FC = () => {
  return (
    <Button>
      <svg
        width="20"
        height="27"
        viewBox="0 0 20 27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={THEME.white}
          d="M1.20429 0.246521C1.56773 0.0593734 1.97575 -0.0238837 2.38346 0.00591009C2.79116 0.0357039 3.18274 0.177394 3.51511 0.41539L19.0687 11.5251C19.3567 11.7306 19.5915 12.002 19.7535 12.3166C19.9155 12.6312 20 12.9799 20 13.3338C20 13.6876 19.9155 14.0363 19.7535 14.3509C19.5915 14.6655 19.3567 14.9369 19.0687 15.1424L3.51511 26.2521C3.18286 26.4899 2.79147 26.6315 2.38397 26.6613C1.97648 26.6911 1.56866 26.608 1.20535 26.421C0.842036 26.2341 0.537305 25.9506 0.324655 25.6017C0.112004 25.2528 -0.000330325 24.8521 1.2195e-06 24.4435V2.22405C-0.000426664 1.81558 0.111752 1.41489 0.32421 1.06602C0.536667 0.717155 0.841182 0.433601 1.20429 0.246521Z"
        />
      </svg>
    </Button>
  )
}

export default PlayButton

import React from "react";
import styled, { keyframes } from "styled-components";
import StarshipNortIcon from "./StarshipNortIcon";
import { SpinnerProps } from "./types";

const float = keyframes`
	0% {
		transform: translatey(0px);    
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const FloatingStarshipNortIcon = styled(StarshipNortIcon)`
  animation: ${float} 2s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <FloatingStarshipNortIcon width={`${size * 0.5}px`} />
    </Container>
  );
};

export default Spinner;

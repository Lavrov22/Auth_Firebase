import styled, { keyframes } from 'styled-components'


export const LdsGrid = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%, -50%);
  width: 80px;
  height: 80px;
`

const ldsgrid = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`

export const LdsGridChild = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background:  #7f8291;
  animation: 1.2s ${ldsgrid} linear infinite;
  &:nth-child(1){
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  &:nth-child(2){
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }

  &:nth-child(3){
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  &:nth-child(4){
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }

  &:nth-child(5){
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  &:nth-child(6){
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }

  &:nth-child(7){
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  &:nth-child(8){
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  &:nth-child(9){
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }

`

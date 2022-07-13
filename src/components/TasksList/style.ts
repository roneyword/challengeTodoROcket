import { pxToRem } from './../../styles/helpers/pxtorem';
import { colors } from './../../styles/configs/colors';
import styled, { keyframes } from "styled-components";

interface TaskListProps {
  isCompleted: boolean
}

const animation = (width: string) => keyframes`
  0%{
    width: 0%;
  }

  100%{
    width: ${width}%;
  }


`

export const TaskList = styled.li<TaskListProps>`

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  padding: ${pxToRem(16)};
  width: 100%;
  min-height: ${pxToRem(72)};
  background: ${colors.grey500};
  border: 1px solid ${colors.grey400};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin-bottom: ${pxToRem(12)};

    input{
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;
      display: inline-block;
      position: relative;
      height: 17px;
      width: 17px;
      border: 2px solid ${colors.blue};
      border-radius: 50%;
      cursor: pointer;
      transition: border 0.1s;

      &:hover{
        border: 2px solid ${colors.blueDark};
        background: ${colors.grey600};
      }

      &:checked{
        border: 2px solid ${colors.purpleDark};
        background: ${colors.purpleDark};

        &::after{
          content: "";
          position: absolute;
          top: 4px;
          left: 1px;
          width: 0%;
          height: 2px;
          background: white;
          border-radius: 9999px;
          transform-origin: -0%;
          transform: rotate(45deg);
          animation: ${animation("50")} 0.2s ease-in both;
        }

        &::before{
          content: "";
          position: absolute;
          top: 68%;
          left: 37%;
          width: 0%;
          height: 2px;
          background: white;
          border-radius: 9999px;
          transform-origin: 0%;
          transform: rotate(-50deg);
          animation: ${animation("80")} 0.2s ease-in both;
          animation-delay: 0.2s;
        }
      }
    }

  

  label{
    flex: 1;
    font-weight: 400;
    font-size: 14px;
    color: ${colors.grey100};
    ${props => props.isCompleted ?
    "text-decoration-line: line-through;" : ""}
  }

  button{
    background: none;
    border: 1px solid transparent;
    line-height: 0;
    border-radius: 4px;
    margin-top: -5px;

    &:focus{
     border: 1px solid ${colors.purpleDark};
    }

    svg{
      &:hover{
        background-color: ${colors.grey400};
        border-radius: 4px;
        cursor: pointer;

        path{
          fill: ${colors.danger};
        }
      }
    }
  }
`
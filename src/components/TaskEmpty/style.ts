import { colors } from './../../styles/configs/colors';
import { pxToRem } from './../../styles/helpers/pxtorem';
import styled from "styled-components";

export const TaskEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${pxToRem(64)} ${pxToRem(24)};
  gap: ${pxToRem(16)};
  width: 100%;
  min-height: 244px;
  border-radius: 8px;

  strong{
    font-size: ${pxToRem(16)};
    text-align: center;
    color: ${colors.grey300};
    font-weight: 700;
  }

  p{
    font-size: ${pxToRem(16)};
    text-align: center;
    color: ${colors.grey300};
    font-weight: 400;
  }

  
`
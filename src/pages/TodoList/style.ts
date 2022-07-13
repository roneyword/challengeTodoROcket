import { pxToRem } from './../../styles/helpers/pxtorem';
import { colors } from './../../styles/configs/colors';
import styled from "styled-components";

export const TaskContainer = styled.div`
  width: 100%;
  max-width: calc(736px + 40px);
  margin: 0 auto;
  padding: 0 20px;

  .new_task{
    width: 100%;
    display: flex;
    gap: 8px;
    margin-top: -${pxToRem(30)};
    margin-bottom: ${pxToRem(64)};

    input{
      flex: 1;
      padding: ${pxToRem(16)};
      height: ${pxToRem(54)};
      border: 1px solid ${colors.grey700};
      border-radius: 8px;
      background: ${colors.grey500};

      color: ${colors.grey100};
      font-size: ${pxToRem(16)};

      &:hover, &:focus{
        border: 1px solid ${colors.purpleDark};
      }
    }

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: ${pxToRem(16)};
      height: 52px;
      background: ${colors.blueDark};
      border-radius: 8px;
      outline: none;
      border: none;
      cursor: pointer;

      font-weight: 700;
      font-size: ${pxToRem(16)};
      color: ${colors.grey100};
      transition: background 0.1s;

      &:hover, &:focus{
        background: ${colors.blue};
      }
    }

  }

  .todo{

    .tasks_info{
      display: flex;
      justify-content: space-between;
      margin-bottom: ${pxToRem(24)};

      .tasks_created, .tasks_completed{
        font-weight: 700;
        font-size: ${pxToRem(14)};

        span{
          padding: ${pxToRem(2)} ${pxToRem(8)};
          width: ${pxToRem(24)};
          height: ${pxToRem(19)};
          background: ${colors.grey400};
          border-radius: 999px;

          font-weight: 700;
          font-size: ${pxToRem(12)};
          color: ${colors.grey200};
        }
      }

      .tasks_created{
        color: ${colors.blue};
      }

      .tasks_completed{
        color: ${colors.purple};
      }
    }
  }  


`
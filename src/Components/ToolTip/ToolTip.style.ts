import styled, { css } from 'styled-components';
import { DescWrapperProps } from './ToolTip.type';

export const DescWrapper = styled.span<DescWrapperProps>`
  box-sizing: border-box;
  z-index: 1000;
  display: ${props => (props.boxDisplay && props.boxDisplay ? 'flex' : 'none')};
  align-items: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: ${({ theme }) => theme.colors.descGray};
  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 30px;
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
  ${props =>
    props.BottomBox
      ? css`
          top: unset;
          bottom: 52px;
          left: -20px;
          &:before {
            top: unset;
            bottom: -8px;
            transform: rotate(180deg);
          }
        `
      : css`
          top: 28px;
          left: -20px;
        `}
  ${props =>
    props.leftBox &&
    css`
      left: -160px;
      &:before {
        left: unset;
        right: 36px;
      }
    `}
`;

export const DescImage = styled.div<{ productImage: string }>`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-image: ${props => props.productImage && `url(${props.productImage})`};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;
export const Desc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: left;
`;
export const DescFurName = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.descBlack};
  text-overflow: ellipsis;
  line-height: 1.3em;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: initial;
`;
export const DescFurPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;
export const ExpectPrice = styled.div`
  color: ${({ theme }) => theme.colors.expectGray};
  font-size: 11px;
  line-height: 11px;
  font-weight: bold;
  margin-right: 4px;
`;

export const PriceDisCount = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.discountBlack};
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
`;
export const DiscountRate = styled.span`
  color: ${({ theme }) => theme.colors.tomato};
  margin-right: 4px;
`;

export const MoveIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;
export const MoveIcon = styled.img`
  width: 20px;
  aspect-ratio: auto 20 / 20;
  height: 20px;
`;

import styled from "styled-components";

export const Wrapper = styled.button<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.purple};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: ${({ size }) => size * 0.45}px;
  cursor: pointer;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1100px; /* keeps cards centered and not full screen */
  margin: 0 auto;
  justify-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 60px 0 100px 0;
  gap: 24px;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 8px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, #ff4ecd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1.5px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  overflow: hidden;
  margin: 22px 0;
`;

export const ToggleButton = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s ease;

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.primary};
    color: #fff;
  `}

  &:hover {
    background: ${({ theme }) => theme.primary + "33"};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  width: 100%;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 10px;
  color: #5c0c57;
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #405468;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.div`
  flex: 1;
  min-width: 300px;
  margin: 20px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 10px;
  text-align: justify;
`;

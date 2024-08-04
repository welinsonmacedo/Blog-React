import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContainerResponsivo = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  margin: 10px 0;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const SearchIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 10px;
  font-size: 20px;
  color: #999;
`;

export const Search = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

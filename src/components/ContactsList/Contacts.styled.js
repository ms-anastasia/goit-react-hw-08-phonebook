import styled from "styled-components";

export const ContentBox = styled.div`
  position: relative;
  max-width: 396px;
  margin: 20px auto;
`;

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  width: 400px;
  align-items: center;
  padding: 0 30px;
  color: #0e6b61;
`;

export const Name = styled.span`
  width: 200px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2;
  text-align: start;
  display: inline-block;
`;

export const Number = styled.span`
  width: 150px;
  color: rgba(79, 109, 69, 0.9);
  font-weight: 700;
  font-size: 1rem;
  line-height: 2;
  text-align: start;
  display: inline-block;
`;

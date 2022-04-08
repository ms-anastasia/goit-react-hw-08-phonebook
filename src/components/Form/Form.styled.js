import styled from "styled-components";

export const ContentBox = styled.div`
  position: relative;
  width: 394px;
  margin: 20px auto;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const FormBox = styled.form`
  margin: 0 auto;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const FormHeader = styled.label`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const FormInput = styled.input`
  height: 20px;
  width: 400px;
  margin-top: 15px;
  border: 1px solid;
`;

export const FormButton = styled.button`
  display: block;
  margin-top: 20px;
  margin-left: 20px;
`;

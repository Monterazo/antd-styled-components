import styled from 'styled-components';
import { Form, Button } from 'antd';

export const Container = styled.div`
  width: 1314px;
  margin: auto;
  display: flex;
  flex-direction: row;
`

export const Logo = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`


export const TeamImage = styled.img`

`

export const FormContainer = styled(Form)`
  box-sizing: border-box;
  width: 505px;
  height: 757px;
  background: #FFFFFF;
  border: 0.5px solid #878787;
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  font-family: 'Poppins';
  margin-left: 69px;

  .ant-form-item-label{
    display: flex;
    margin: auto;
    width: 423px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
  }

  input {
    background: #FFFFFF;
    border: 0.6px solid #282828;
    border-radius: 6px;
    width: 385px;
    height: 59px;
    padding: 0 10px 0 27px;
    margin-top: 9px;  
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
  }

  svg{
    margin-left: -60px;
  }
`;

export const Intro = styled.div`
  width: 423px;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: flex-start;
  padding:0;
  margin-top: 14px;
`;

export const Greeting = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  line-height: 38px;
  margin:0;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 31px;
  line-height: 46px;
  margin:0;
`

export const Description = styled.p `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin:0
`

export const Register = styled(Button)`
  width: 423px;
  height: 57px;
  background: #000000;
  border-radius: 6px;
  color: white;
  border: none;
  margin-top: 31px;

  &:hover{
    cursor: pointer;
    opacity: 0.85;
  }
`

export const SignupText = styled.p`
  font-weight: 300;
  margin-top: 20px;
  span {
    font-weight: 600;
  }
`;

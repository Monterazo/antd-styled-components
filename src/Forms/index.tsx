import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'; 
import {
  FormContainer,
  Intro,
  SignupText,
  Register,
  Greeting,
  Title,
  Description
} from '../styles/style'


export default function Forms(){
  
  
	return (
    <FormContainer>
        <Intro> 
          <Greeting>
            Welcome !
          </Greeting>
          <Title>
            Sign up to
          </Title>
          <Description>
            Lorem ipsum is simply
          </Description>
        </Intro>
        <Form.Item label="Email" required >
              <Input 
                placeholder='Enter your email'
                style={{backgroundColor: "transparent"}}
              />
            </Form.Item>

            <Form.Item label="User name" required >
              <Input 
                placeholder='Enter your user name'
                style={{backgroundColor: "transparent"}}
              />
            </Form.Item>

            <Form.Item label="Password" required >
              <Input.Password 
                placeholder='Enter your password'
                style={{backgroundColor: "transparent"}}
              />
            </Form.Item>  

            <Form.Item label="Confirm Password" required >
              <Input.Password 
                placeholder='Confirm your password'
                style={{backgroundColor: "transparent"}}
                  
              />
            </Form.Item>

            <Form.Item>
              <Register type="primary" htmlType="submit">
                Register
              </Register>
            </Form.Item>
        <SignupText>Already have an account? <span>Register</span></SignupText>
    </FormContainer> 

  )
}
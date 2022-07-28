import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';




const Wrapper =styled.div`
    width: 350px;
    margin: 5rem auto;
    background-color: #FFFFFF;
    border: 1px solid $border-color;
  `
const Title = styled.h1`
    font-family: $font-stack;
    font-size: 2.5rem;
    text-align: center;
    padding: 2rem;
`
const InputForm = styled.div`
    display:flex;
    flex-direction:column;
    height:50%;`
const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 78%;
    margin: 0 auto;

    input {
        height: 36px;
        border: 1px solid $border-color;
        border-radius: 5px;
        padding: 0 10px;
        margin-bottom: 1rem;
        }
    `
const BtnLogin =styled.div`
      height: 40px;
      margin-top: 0.5rem;
      border-radius: 5px;
    `





const Login = () => {
    return (
        <Wrapper>
          <Title>Hyukstagram</Title>
            <FormLogin>
              <InputForm>
                <input
                    name="id"
                    type="text"
                    placeholder="이메일"
                 />
              <p className="inputAlert" />
                <input
                    name="password"
                    type="password"
           
                    placeholder="비밀번호"
                    className="inpPass"        
              />
              </InputForm>
              <BtnLogin>
                로그인
              </BtnLogin>
              <button
                type="button"
              >
                회원가입
              </button>
    
              <Link to="/" className="goToLink">
                비밀번호를 잊으셨나요?
              </Link>
            </FormLogin>
        </Wrapper>
      );
    };

export default Login;
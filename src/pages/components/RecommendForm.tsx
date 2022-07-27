import React from 'react';
import styled from '@emotion/styled';

interface Props {
    key : string,
    id : string,
    username:string,
    time:string,
    profileImg ?: string
}


const RecoWrapper = styled.div`
display:flex;
width:70%;

 `

const RecoProfileImg = styled.div`
img{
    width:50px;
    height:50px;
    border-radius:50%;
    cursor: pointer;
}`
const RecoTime=styled.div`
    display:flex;
    flex-direction:column;
    margin:5px 0 0 10px;
}
`
const RecoInform =styled.div`
display:flex;
width:100%;
justify-content:space-between;`

const Username= styled.div`
font-family: Verdana, Arial, Helvetica, sans-serif;
font-weight:400;`
const Follow=styled.button`
    border:none;
    top: 1rem;
    right: 1rem;
    color: #0095f6;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    `
const RecommendForm = ({username,time,profileImg} : Props) => {
    return (
     <RecoWrapper>
        <RecoProfileImg>
        <img src = {profileImg} alt =""/>
        </RecoProfileImg>
        <RecoInform>
        <RecoTime>
            <Username>{username}</Username>
            <span>{time}</span>
        </RecoTime>
        <Follow>팔로우</Follow>
        </RecoInform>
     </RecoWrapper>
    );
  };



export default RecommendForm;
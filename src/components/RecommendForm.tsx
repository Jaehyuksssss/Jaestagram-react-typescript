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
`

const RecoProfileImg = styled.div`
img{
    width:50px;
    height:50px;
    border-radius:50%;
    cursor: pointer;
}`
const RecomInform=styled.div`
display:flex;
flex-direction:column;`

const Follow=styled.button`
    border:none;
    top: 1rem;
    right: 1rem;
    color: #0095f6;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    `
const RecommendForm = ({username,time,profileImg} : Props) => {
    return (
      <RecoWrapper>
        <RecoProfileImg>
          <img src={profileImg} alt="" />
        </RecoProfileImg>
        <RecomInform>
          <span>{username}</span>
          <span>{time}</span>
        </RecomInform>
        <Follow>팔로우</Follow>
      </RecoWrapper>
    );
  };

export default RecommendForm;
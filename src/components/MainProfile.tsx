import React from 'react';
import styled from '@emotion/styled';

interface Props {
    key : string,
    id : string,
    profileImg ?: string,
    username:string,
    usernickname:string,
}

const ProfileWrapper = styled.div`
display:flex;
width:70%;


img{
    width:70px;
    height:70px;
    border-radius:50%;
    cursor: pointer;
}

span{
    font-weight:400;
    font-size:15px;
}`

const ProfileInfo = styled.div`
margin:15px 0 0 5px;
display:flex;
flex-direction:column;
`


const Switch = styled.button`
border:none;
    top: 1rem;
    right: 1rem;
    color: #0095f6;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
`

const ProfileBox = styled.div`
display:flex;
width:100%;
justify-content:space-between;
`


const MainProfile = ({profileImg,username,usernickname}:Props) => {
    return (
        <ProfileWrapper>
            <img src ={profileImg} alt = ""/>
            <ProfileBox>
            <ProfileInfo>
            <span>{username}</span>
            <span>{usernickname}</span>
            </ProfileInfo>
            <Switch>전환</Switch>
            </ProfileBox>
        </ProfileWrapper>
    );
};

export default MainProfile;
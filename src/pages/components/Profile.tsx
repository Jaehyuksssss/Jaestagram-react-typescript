import React from 'react';
import styled from '@emotion/styled';

interface Props {
    key : string,
    id : string,
    username : string,
    profileImg ?: string
}

const StoryWrapper =styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:90px;
margin-top:16px;
margin-left:2px;

img{
    width:70px;
    height:70px;
    border-radius:50%;
    cursor: pointer;
}

`


const Profile = ({profileImg,username}:Props) => {
    return (
        <StoryWrapper>
            <img src ={profileImg} alt=''/>
            <p>{username}</p>
        </StoryWrapper>
    );
};

export default Profile;
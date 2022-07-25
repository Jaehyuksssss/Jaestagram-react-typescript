import React, { useState } from 'react';
import styled from '@emotion/styled'

interface Props {
    id : string,
    usernickname : string,
    profileImg ?: string,
    feedImg ?:string,
    feedText:string,
    likeNumber:string,
    IconImg ?:string,

}

const PostWrapper=styled.div`

`


const PostHeader = styled.div`
display: flex;
button{
    border:none;
    background:white;
    cursor:pointer;
}

img{
    width:60px;
    height:60px;
    border-radius:50%
}
`
const PostContent=styled.div`
img{
    height:80%;
    width:100%;
}
`
const ProfileBox=styled.div`
display:flex;
width:87%;
justify-content:space-between;
align-items:center;
span{
    margin-left:5px;
}
`
const LikesInfo = styled.div`
span{
    margin:5px;
    font-weight:700;
}`

const Icons=styled.div`
img{
    width:25px;
    height:25px;
}`


const Article = ({profileImg,usernickname,feedImg,feedText,likeNumber}:Props) => {

    
    return (
        <PostWrapper>
            <PostHeader>
                <img src ={profileImg} alt=""/>
                <ProfileBox>
                <span>{usernickname}</span>
                <button>•••</button>
                </ProfileBox>
            </PostHeader>
            <PostContent>
                 <img src ={feedImg} alt=""/>
            </PostContent>
            <Icons>
                {ICONS.map(({iconImg}) => {
                return (
                   <img src= {iconImg} alt=""/>
                );
            })}
            </Icons>
            <div>
                <LikesInfo>
                 <span>Likes</span>
                 <span>{likeNumber}</span>
                </LikesInfo>
            <div>
                <span>{usernickname}</span>
                <span>{feedText}</span>
            </div>
            </div>
        </PostWrapper>
    );
};

export default Article;

const ICONS =[
    {
        "iconId":"1",
        "iconIame":"heart",
        "iconImg":"/images/love.png"
    },
    {
        "iconId":"2",
        "iconIame":"speech",
        "iconImg":"/images/speech.png"
    },
    {
        "iconId":"3",
        "iconIame":"direct",
        "iconImg":"/images/direct.png"
    }
 ]
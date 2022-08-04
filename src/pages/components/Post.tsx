import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Article from './Article';



const PostWrapper = styled.div`
background :rgb(255, 255, 255);
height:100%;
margin-top:16px;
border-radius:15px;
`

interface Props {
    key : string,
    id : string,
    usernickname : string,
    profileImg ?: string,
    feedImg ?:string,
    feedText:string,
    likeNumber:string,
}

const Post = () => {
    const[postData,setPostData]=useState<any>()

    useEffect(()=>{
        const getPostData = async()=>{
            try{
                const res = await fetch('/data/articleData.json')
                const data = await res.json()
            
                console.log(data)
                setPostData(data)
            }catch(e){
                console.error(e)
            }
            
        }
        getPostData()
    },[]);
    return (
        <PostWrapper>
         {postData 
            && Object.values(postData).map((profile) => {
                const {id,usernickname,profileImg,feedImg,feedText,likeNumber} = profile as Props
                return (    
                    <Article 
                        key={id}
                        id={id}
                        usernickname={usernickname}
                        profileImg={profileImg}
                        feedText={feedText} 
                        likeNumber={likeNumber}
                        feedImg={feedImg}
                   />
                )
            })}
        </PostWrapper>
    );
};

export default Post;
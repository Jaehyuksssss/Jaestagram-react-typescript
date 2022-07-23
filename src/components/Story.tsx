import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import styled from '@emotion/styled';



const StoryBox = styled.div`
display:flex;
width:40%;
margin-top:16px;
border-radius:8px;
background : rgb(255, 255, 255);
border:1px solid #EBEDF0;`


interface Props{
    profileImg: any;
    id:string;
    username:string;
}
const Story = () => {
    const[profile,setProfile]=useState<any>()

    useEffect(()=>{
        const getProfileData = async()=>{
            try{
                const res = await fetch('/data/storyData.json')
                const data = await res.json()
                console.log(data)
                setProfile(data)
            }catch(e){
                console.error(e)
            }
            
        }

        getProfileData()
    },[]);
    return (
       
        <StoryBox>
            {profile 
            && Object.values(profile).map((profile) => {
                const {id, profileImg,username} = profile as Props
                return (
                    <Profile 
                    key={id}
                    id ={id}
                    profileImg={profileImg}
                    username={username}
                    />
                )
            })}
            </StoryBox>
           
    );
};

export default Story;
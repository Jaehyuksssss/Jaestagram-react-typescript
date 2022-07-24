import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import MainProfile from './MainProfile';
import RecommendForm from './RecommendForm';



interface Props{
    profileImg: any;
    id:string;
    time:string;
    username:string;
    usernickname:string;
}

const RecoBox = styled.div`
margin-top:20px;`


const RecoForU = styled.div`
display:flex;
width:75%;
justify-content: space-between;

button{
    border:none;
    cursor:pointer;
}
`

const Recommend = () => {
    const [Recommend,setRecommend] =useState<any>()
    const [profileInfo,setProfileInfo] = useState<any>()



    useEffect(()=>{
        const getProfileData = async()=>{
            try{
                const res = await fetch('/data/profileData.json')
                const data = await res.json()
            
                console.log(data)
                setProfileInfo(data)
            }catch(e){
                console.error(e)
            }
            
        }
        
        getProfileData()
    },[]);

    useEffect(()=>{
        const getRecommendData = async()=>{
            try{
                const res = await fetch('/data/asideData.json')
                const data = await res.json()
            
                console.log(data)
                setRecommend(data)
            }catch(e){
                console.error(e)
            }
            
        }
        
        getRecommendData()
    },[]);


    return (
        <RecoBox>
             {profileInfo 
            && Object.values(profileInfo ).map((profile) => {
                const {id,usernickname,username,time,profileImg} = profile as Props
                return (    
                    <MainProfile 
                    key={id}
                    id ={Recommend.filter.id}
                    profileImg={profileImg}
                    username={username}
                    usernickname={usernickname}
                    />
                )
            })}
            <RecoForU>
            <p>회원님을 위한 추천</p>
            <button>모두 보기</button>
            </RecoForU>
            {Recommend 
            && Object.values(Recommend).map((profile) => {
                const {id, username,time,profileImg} = profile as Props
                return (    
                    <RecommendForm 
                    key={id}
                    id ={Recommend.filter.id}
                    username={username}
                    time={time}
                    profileImg={profileImg}
                    />
                )
            })}
            <Footer />
        </RecoBox>

    );
};

export default Recommend;


import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import MainProfile from './components/MainProfile';
import Nav from './components/Nav';
import Recommend from './components/Recommend';

interface Props{
    IconImg: any;
    id:string;
    profileImg: any;
    time:string;
    username:string;
    usernickname:string;
}

const NavIcons = styled.div`
    display: flex;

    img {
        height: 25px;
        cursor: pointer;
      }
`
const Feed = () => {
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

    return (
        <div>
        <Nav />
        
            <div>
            {profileInfo 
            && Object.values(profileInfo ).map((profile) => {
                const {id,usernickname,username,profileImg} = profile as Props
                return (    
                    <MainProfile 
                    key={id}
                    id ={id}
                    profileImg={profileImg}
                    username={username}
                    usernickname={usernickname}
                    />
                )
            })}
            </div>

            {/* <button>
                <img src={ICONS_LIST[0].IconImg}/>
            </button> */}
            <NavIcons>
            {ICONS_LIST.map(({IconImg})=>{
                return(
                    <img src ={IconImg} alt=""/>
                )
            })}
            </NavIcons>
        </div>
    );
};

export default Feed;

const ICONS_LIST = [
    { id:1, IconImg:"/images/home.png"},
    { id:2, IconImg:"/images/explore.png"},
    { id:3, IconImg:"/images/plus.png"},
    { id:4, IconImg:"/images/heart.png"},
    { id:5, IconImg:"/images/profile.png"}
];
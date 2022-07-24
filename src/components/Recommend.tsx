import { profile } from 'console';
import React, { useEffect, useState } from 'react';
import RecommendForm from './RecommendForm';



interface Props{
    profileImg: any;
    id:string;
    time:string;
    username:string;
}
const Recommend = () => {
    const [Recommend,setRecommend] =useState<any>()


    useEffect(()=>{
        const getIconData = async()=>{
            try{
                const res = await fetch('/data/asideData.json')
                const data = await res.json()
            
                console.log(data)
                setRecommend(data)
            }catch(e){
                console.error(e)
            }
            
        }
        
        getIconData()
    },[]);
    return (
        <div>
            {Recommend 
            && Object.values(Recommend).map((profile) => {
                const {id, username,time,profileImg} = profile as Props
                return (
                    <RecommendForm 
                    key={id}
                    id ={id}
                    username={username}
                    time={time}
                    profileImg={profileImg}
                    />
                )
            })}
        </div>
    );
};

export default Recommend;
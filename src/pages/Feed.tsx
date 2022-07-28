import React, { useEffect, useState } from 'react';
import IconBox from './components/IconBox';
import styled from '@emotion/styled';
import Nav from './components/Nav';

interface Props{
    IconImg: any;
    id:string;
}

const NavIcons = styled.div`
    display: flex;

    img {
        height: 25px;
        cursor: pointer;
      }
`
const Feed = () => {
    const [icons,setIcons] =useState<any>()


    useEffect(()=>{
        const getIconData = async()=>{
            try{
                const res = await fetch('/data/nav.json')
                const data = await res.json()
                console.log(data)
                setIcons(data)
            }catch(e){
                console.error(e)
            }
            
        }

        getIconData()
    },[]);
    
    return (
        <div>
        <Nav />
            <div></div>
            <div></div>
            <NavIcons>
            {icons 
            && Object.values(icons).map((icon) => {
                const {id, IconImg} = icon as Props
                return (
                    <IconBox 
                    key={id}
                    id ={id}
                    iconImg={IconImg}
                    />
                )
            })}
            </NavIcons>
        </div>
    );
};

export default Feed;
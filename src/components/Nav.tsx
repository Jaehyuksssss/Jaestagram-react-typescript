import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import IconBox from './IconBox';


const NavWrapper=styled.div`
    display:flex;
    width: 100%;
    gap: 2rem;
    justify-content: center;
    border-bottom: 1px solid rgb(219, 219, 219);
    align-items: center;
    margin: 0 auto;;
    height: 60px;
    background-color: #FFFFFF;`

const Logo = styled.div`
    font-family: 'Lobster Two', cursive;
    font-size: 2rem;
    padding-left: 1rem;`

const InputSearch = styled.input`
    width: 250px;
    height: 36px;
    border-radius: 8px;
    padding: 0 15px;
    background: #EFEFEF;
    border: none;`

 
    interface Props{
        IconImg: any;
        id:string;
    }
    
const Nav = () => {
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
        <NavWrapper>
            <Logo>Instagram</Logo>
            <InputSearch
            type="text"
            placeholder="검색"
            >
            </InputSearch>
          
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
       
        </NavWrapper>
    );
};

export default Nav;
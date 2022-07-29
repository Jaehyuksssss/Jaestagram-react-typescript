import React from 'react';
import Story from './components/Story';
import Recommend from './components/Recommend';
import Post from './components/Post';
import styled from '@emotion/styled';
import Nav from './components/Nav';



const Wrapper = styled.div`
    height:100%;

`

const Conatainer = styled.div`
    display:flex;
    height: 100%;
    background: #efefef; 
    flex-flow: row nowrap;
    justify-content:center;
    `
const Sidebar = styled.div`
    width: 20%;
    height: 200px; 
    position: sticky;
    top: 0;
    margin-left:5%
        
`
const MainContents= styled.div`
display:flex;
flex-direction:column;
height:100%;
width:35%`

const Main = () => {


    return (
        <Wrapper>
         <Nav />
            <Conatainer>
            <MainContents>
                <Story />
                <Post />
            </MainContents>
          <Sidebar>
            <Recommend />
          </Sidebar>
            </Conatainer>
        </Wrapper>

    );
};

export default Main;
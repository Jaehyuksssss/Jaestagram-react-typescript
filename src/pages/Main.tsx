import React from 'react';
import Nav from 'components/Nav';
import Story from 'components/Story';
import styled from '@emotion/styled';
import Recommend from 'components/Recommend';
import Post from 'components/Post';



const Wrapper = styled.div`
    height:100vh;
    background:#efefef;


// const PostWrapper =styled.div`


const Conatainer = styled.div`
    display:flex;
    flex-flow: row nowrap;
    justify-content:center;
    `
const Sidebar = styled.div`
    width: 20%;
    height: 400px; //--> sticky가 적용될 요소는 꼭 height값이 있어야 함
    position: sticky;
    top: 0; //--> sticky 상단의 offset 0으로 부터 적용됨
    margin-left:5%
        
`

const Main = () => {
    return (
        <Wrapper>
            <Nav />
        
            <Conatainer>
            
            <Story />
            <Post />
         
          <Sidebar>

            <Recommend />
          </Sidebar>
            </Conatainer>
           
        </Wrapper>

    );
};

export default Main;
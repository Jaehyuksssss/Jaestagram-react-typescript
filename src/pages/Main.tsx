import React from 'react';
import Nav from 'components/Nav';
import Story from 'components/Story';
import styled from '@emotion/styled';



const Wrapper = styled.div`
height:100%;`

const PostWrapper =styled.div`
background:#efefef;
height:100%;
padding:20px 20px 20px 20%`


const Main = () => {
    return (
        <Wrapper>
            <Nav />
            <PostWrapper>
            <Story />
            </PostWrapper>
        </Wrapper>

    );
};

export default Main;
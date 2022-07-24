import React from 'react';
import Nav from 'components/Nav';
import Story from 'components/Story';
import styled from '@emotion/styled';
import Recommend from 'components/Recommend';



const Wrapper = styled.div`
height:100vh;`

const PostWrapper =styled.div`

background:#efefef;
height:100vh;
padding:20px 20px 20px 20%`

const RecoWrapper = styled.div`
display:flex;
`

const Main = () => {
    return (
        <Wrapper>
            <Nav />
            <PostWrapper>
            <Story />
            <RecoWrapper>
            <Recommend />
            </RecoWrapper>
            </PostWrapper>
        </Wrapper>

    );
};

export default Main;
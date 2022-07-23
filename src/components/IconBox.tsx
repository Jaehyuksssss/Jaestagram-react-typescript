import React from 'react';
import styled from '@emotion/styled';

const NavIcons = styled.div`
    display: flex;
    

    img {
        
        height: 25px;
        cursor: pointer;
      }
`


interface Props {
    key : string,
    id : string,
    iconImg ?: string
}

const IconBox = ({iconImg} : Props) => {
    return (
        <NavIcons>
            <img src={iconImg} alt=""/>
        </NavIcons>
    );
};

export default IconBox;
import React from 'react';
import styled from '@emotion/styled';


const FooterStyle=styled.div`
width: 90%;
  font-size: 13px;
  color: #dbdbdb;
  margin: 1rem;

  p {
    width: 90%;
    padding-bottom: 1rem;
  }
`
function Footer() {
  return (
    <FooterStyle>
      <p>
        소개 도움말 홍보 센터 API 채용 정보 개인 정보 처리 방침
        약관 위치 인기 계정 해시태그 언어
      </p>
      <p>© 2022 INSTAGRAM FROM META</p>
    </FooterStyle>
  );
}

export default Footer;

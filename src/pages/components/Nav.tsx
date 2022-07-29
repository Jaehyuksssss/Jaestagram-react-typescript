import styled from '@emotion/styled';


interface Props{
    IconImg: any;
    id:string;
}

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

const IconBox = styled.div`
    display: flex;
    justify-content:space-around;
    width:15%;


    img {
        height: 25px;
        cursor: pointer;
      }`

 
    
const Nav = () => {
    

    return (
        <NavWrapper>
            <Logo>Instagram</Logo>
            <InputSearch
            type="text"
            placeholder="검색"
            >
            </InputSearch>
            <IconBox>
            {ICONS_LIST.map(({IconImg})=>{
                return(
                    <img src ={IconImg} alt=""/>
                )
            })}
            </IconBox>
       
        </NavWrapper>
    );
};

export default Nav;
const ICONS_LIST = [
    { id:1, IconImg:"/images/home.png"},
    { id:2, IconImg:"/images/explore.png"},
    { id:3, IconImg:"/images/plus.png"},
    { id:4, IconImg:"/images/heart.png"},
    { id:5, IconImg:"/images/profile.png"}
];
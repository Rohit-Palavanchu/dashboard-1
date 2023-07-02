import styled from 'styled-components'

export const HomeContainer = styled.div`
    height:100vh;
    background-color:#f5f5f5;
    @media screen and (max-width:767px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
    }
    @media screen and (min-width:768px){
        display:flex;
        justify-content:space-between
        padding:15px;
    }
`
export const NavBarSmall = styled.nav`
    width:100vw;
    background-color:#000000;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media screen and (min-width:768px){
        display:none;
    }
`
export const NavBarTitle = styled.h1`
    color:#ffffff;
    font-family:"Montserrat";
    font-weight:700;
    font-size:20px;
    margin:10px;
    @media screen and (min-width:768px){
        font-size:36px;
        margin-bottom:30px;
    }
`
export const NavBarLinksContainer = styled.ul`
    list-style-type:none;
    display:flex;
    align-items:center;
`
export const NavBarLinkItem = styled.li`
    color:#ffffff;
    font-family:"Montserrat";
    font-weight:700;
    font-size:12px;
    margin-right:8px;
    @media screen and (min-width:768px){
        margin-bottom:13px;
        font-size:18px;
        font-weight:${(props) => (props.fontWeight=== 'true' ? "bolder" : 200)};
    }
`
export const NavBarLarge = styled.nav`
    width:35%;
    max-width:300px;
    height:95%;
    border-radius:40px;
    background-color:#000000;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media screen and (max-width:767px){
        display:none;
    }
`
export const NavBarLargeInnerContainer = styled.div`
    width:90%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    margin:20px;
    margin-top:30px;
    margin-left:40px;
`
export const NavBarLargeMenuContainer = styled.div`
    height:70vh;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
export const NavBarLinkItemLarge = styled.div`
    display:flex;
    margin-left:6px;
    margin-bottom:20px;
    cursor:pointer;
`
export const NavBarLinkIcon = styled.img`
    height:24px;
    width:24px;
`
export const HelpAndContactContainer = styled.div`
    margin-left:6px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    width:100%
`
export const HelpTitle = styled.p`
    margin:0px;
    margin-bottom:10px;
    color:#ffffff;
    font-family:"Montserrat";
    font-weight:400;
    cursor:pointer;
    font-size:14px;
`
export const ApiContainer = styled.div`
    margin-left:35px;
    @media screen and (max-width:767px){
        display:none;
    }
`
export const ApiNavBar = styled.nav`
    display:flex;
    justify-content:space-between;
    width:70vw;
    align-items:center;
`
export const ApiNavBarTitle = styled.h1`
    color:#000000;
    font-family:"Montserrat";
    font-weight:700;
    font-size:24px;
`
export const ApiNavBarEnd = styled.div`
    display:flex;
    align-items:center;
    width:350px;
    justify-content:space-between;
`
export const SearchBarContainer = styled.div`
    background-color:#ffffff;
    border-radius:20px;
    padding:5px;
`
export const SearchBarContainerSmall = styled.div`
    background-color:#ffffff;
    border-radius:20px;
    padding:5px;
    margin-top:30px;
    @media screen and (min-width:768px){
        display:none;
    }
`
export const SearchBar = styled.input`
    background-color:#ffffff;
    height:30px;
    width:180px;
    outline:none;
    font-family:"Lato";
    cursor:pointer;
    border:0px;
`
export const SearchIcon = styled.img`height:14px;width:14px;margin-right:10px;`
export const VectorIcon = styled.img`height:20px;width:20px;margin-left:10px;`
export const LogoutIcon = styled.img`height:30px;width:30px;margin-left:10px;cursor:pointer;`
export const LineChartContainerSmall = styled.div`
    @media screen and (min-width:767px){
        display:none;
    }
    width:100vw;
    min-height:250px;
    background-color:#ffffff;
    padding:20px;
    border-radius:20px;
    margin-top:10px;
`
export const LineChartContainer = styled.div`@media screen and (max-width:767px){
        display:none;
    }
    width:70vw;
    min-height:500px;
    background-color:#ffffff;
    padding:20px;
    border-radius:20px;`
export const LineChartHeader = styled.div`
margin-left:35px;
margin-bottom:20px;`
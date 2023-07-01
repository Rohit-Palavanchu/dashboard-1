import styled from 'styled-components'

export const LoginContainer = styled.div`
   display:flex;
   flex-direction:column;
   min-height:100vh;
   @media screen and (min-width:768px){
       flex-direction:row;
   }
`
export const WelcomeMessageSmall = styled.div`
@media screen and (min-width:768px){
    display:none;
}
    width:100vw;
    padding:10px;
    background-color:#000000;
    display:flex;
    justify-content:center;

`
export const WelcomeMessageLarge = styled.div`
@media screen and (max-width:767px){
    display:none;
}
    flex-grow:1;
    background-color:#000000;
    height:100vh;
    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const WelcomeMessage = styled.h1`
    font-family:"Montserrat";
    font-weight:"bold";
    color:#ffffff;
    @media screen and (min-width:768px){
    font-size:72px;
    }
    @media screen and (max-width:767px){
        font-size:24px;
    }
`
export const SignInContainer = styled.div` 
    background-color:#f5f5f5;
    @media screen and (min-width:768px){
    flex-grow:3;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
    @media screen and (max-width:767px){
        width:100vw;
        height:80vh;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`
export const SignInTypesContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    min-height:350px;
    min-width:400px;
    @media screen and (max-width:767px){
        align-items:center;
    }
`
export const SignInContainerHeading = styled.h1`
    margin:0px;
    margin-bottom:5px;
    color:#000000;
    font-family:"Montserrat";
    font-weight:700;
    font-size:32px;
    @media screen and (max-width:767px){
        font-size:22px;
    }

`
export const SignInContainerDesc = styled.p`
margin:0px;
    color:#000000;
    font-family:"Lato";
    line-height:19.2px;
    font-size:18px;
    @media screen and (max-width:767px){
        font-size:14px;
    }
    margin-bottom:20px;
`
export const AppLoginsIconsContainer = styled.div`
    display:flex;
    align-items:center;
    @media screen and (max-width:767px){
        justify-content:space-around;
    }
    @media screen and (min-width:768px){
        justify-content:space-between;
    }
`
export const LoginFormContainer = styled.div`
    margin-top:15px;
    width:350px;
    height:315px;
    min-width:350px;
    min-height:315px;
    border-radius:12px;
    background-color:#ffffff;
`
export const LoginFormInsideContainer = styled.form`
    width:90%;
    height:80%;
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    padding:20px;
`
export const UsernameInputContainer = styled.div`
`
export const UsernameTitle = styled.h1`
    font-family:"Lato";
    font-size:16px;
    color:#000000;
    font-weight:400;
`
export const UsernameInput = styled.input`
    margin-bottom:10px;
    width:100%;
    min-width:300px;
    max-width:350px;
    outline:none;
    background-color:#F5F5F5;
    width:100%;
    padding:10px;
    border:none;
    border-radius:10px;
`
export const ForgotPassword = styled.a`
    color:#346BD4;
    font-family:Lato;
    font-size:400;
    font-weight:16px;
    text-decoration:underline;
    cursor:pointer;
`
export const SubmitButton = styled.button`
    min-width:300px;
    padding:10px;
    background-color:#000000;
    border-radius:10px;
    color:#ffffff;
    font-family:"Montserrat"
    font-weight:700;
    font-size:16px;
    margin-top:15px;
    cursor:pointer;
`
export const AccountCreate = styled.p`
    color:#858585;
    font-family:"Lato";
    font-size:16px;
    font-weight:400;
    width:100%;
    max-width:350px;
    text-align:center;
`
export const AccountCreateSpan = styled.span`
    color:#346BD4;
    text-decoration:underline;
    cursor:pointer;
`
export const ErrorMessage = styled.p`
font-family:"Lato"
color:red;
font-size:14px;
`
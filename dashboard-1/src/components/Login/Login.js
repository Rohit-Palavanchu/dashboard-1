import { Component } from 'react'
import { AppleButton, LoginContainer, WelcomeMessageSmall, WelcomeMessageLarge, WelcomeMessage, SignInContainer, SignInTypesContainer, SignInContainerHeading, SignInContainerDesc, AppLoginsIconsContainer, LoginFormContainer, LoginFormInsideContainer, UsernameInputContainer, UsernameTitle, UsernameInput, ForgotPassword, SubmitButton, AccountCreate, AccountCreateSpan, ErrorMessage } from './styledComponents'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import { FaApple } from 'react-icons/fa'
export default class Login extends Component {
    state = { username: '', password: '', showErrorMsg: false, errorMsg: '' }
    handleCallbackResponse = (e) => {
        const { history } = this.props
        console.log(e.credential)
        Cookies.set('jwt_token', e.credential, { expires: 7 })
        history.replace('/')
    }
    onChangeUsername = event => {
        this.setState({ username: event.target.value })
    }

    onChangePassword = event => {
        this.setState({ password: event.target.value })
    }
    onClickLoginButton = async event => {
        event.preventDefault()
        const { username, password } = this.state
        const options = {
            method: 'POST',
            body: JSON.stringify({
                username,
                password,
            }),
        }
        const response = await fetch('https://apis.ccbp.in/login', options)
        const data = await response.json()
        if (response.ok) {
            this.setState({
                username: '',
                password: '',
                showErrorMsg: false,
            })
            const { history } = this.props
            Cookies.set('jwt_token', data.jwt_token, { expires: 3, path: '/' })
            history.replace('/')
        } else {
            this.setState({ showErrorMsg: true, errorMsg: data.error_msg })
        }
    }
    render() {
        if (Cookies.get('jwt_token') !== undefined) {
            return <Redirect to="/" />
        }
        const {showErrorMsg, errorMsg } = this.state
        return( 
        <LoginContainer>
            <WelcomeMessageSmall>
                <WelcomeMessage>Board.</WelcomeMessage>
            </WelcomeMessageSmall>
            <WelcomeMessageLarge>
                <WelcomeMessage>Board.</WelcomeMessage>
                </WelcomeMessageLarge>
                <SignInContainer>
                    <SignInTypesContainer>
                        <SignInContainerHeading>Sign In</SignInContainerHeading>
                        <SignInContainerDesc>Sign in to your account</SignInContainerDesc>
                        <AppLoginsIconsContainer>
                            <div id="signInDiv"></div>
                            <AppleButton><FaApple /> Sign In with Apple</AppleButton>
                        </AppLoginsIconsContainer>
                        <LoginFormContainer>
                            <LoginFormInsideContainer onSubmit={this.onClickLoginButton}>
                                <UsernameInputContainer>
                                    <UsernameTitle>Email address</UsernameTitle>
                                    <UsernameInput type="input" onChange={this.onChangeUsername} />
                                </UsernameInputContainer>
                                <UsernameInputContainer>
                                    <UsernameTitle>Password</UsernameTitle>
                                    <UsernameInput type="password" onChange={this.onChangePassword} />
                                </UsernameInputContainer>
                                <UsernameInputContainer>
                                    <ForgotPassword>Forgot Password?</ForgotPassword>
                                </UsernameInputContainer>
                                <SubmitButton type="submit">Sign In</SubmitButton>
                                {showErrorMsg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
                            </LoginFormInsideContainer>
                        </LoginFormContainer>
                        <AccountCreate>
                            Don't have an account? <AccountCreateSpan>Register Here</AccountCreateSpan>
                        </AccountCreate>
                    </SignInTypesContainer>
                    
                </SignInContainer>
       </LoginContainer>)
    }
    componentDidMount() {
        /* global google */
        google.accounts.id.initialize({
            client_id: '182776617284-vnensq233tt6jarj49ihlcigu32clrak.apps.googleusercontent.com',
            callback:this.handleCallbackResponse
        })
        google.accounts.id.renderButton(document.getElementById("signInDiv"), {theme:'outline',size:"large"})
    }
}

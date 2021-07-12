import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <Nav>
        <a href="#">
          <img src="/images/linkedin.png" alt="" style={{height: "2.5rem"}} />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
    </Container>
  )
}

const Container = styled.div``

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: no-wrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768) {
      padding: 0 5px
    }
  }
`
const NavButton = styled.a`
  cursor: pointer;
`
const Join = styled(NavButton)`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 4px; 
  font-weight: 600;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`

const SignIn = styled(NavButton)`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  transition-duration: 200ms;
  border-radius: 24px; 
  font-weight: 600;
  font-size: 16px; 
  line-height: 40px;
  padding: 10px 20px; 
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`

export default Login;
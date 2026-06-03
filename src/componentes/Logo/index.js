import logo from '../../imagens/logo.svg';
import styled from 'styled-components';


const Logo2 = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <Logo2>
            <LogoImg src={logo} alt='logo'></LogoImg>
            <p><strong>SENAI Booketes</strong></p>
        </Logo2>
    )
}

export default Logo
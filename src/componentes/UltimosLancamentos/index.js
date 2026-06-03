import {livros} from './dadosUltimosLancamentos';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBEECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Titulo = styled.h2`
    width 100%;
    padding 30px 0;
    background-color: #fff
    color: #EB9b00;
    text-align: center;
    margin: 0;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
        <Titulo>ULTIMOS LANÇAMENTOS</Titulo>
        <NovosLivrosContainer>
                    {livros.map( livros => (
            <img src={livros.src}/>
        ))}
            </NovosLivrosContainer>
            </UltimosLancamentosContainer>
    )

}

export default UltimosLancamentos
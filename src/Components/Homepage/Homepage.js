import styled from 'styled-components';
import { useState } from "react";
import { getRepos } from '../../service/api';
import kontLogo from '../../assets/kontulari-logo.jpeg';
import { TextField } from '@mui/material';
import Repo from './Repo';

export default function Homepage() {
    const [userRepos, setUserRepos] = useState([]);
    const [username, setUsername] = useState('');
    const [isListDisplay, setIsListDisplay] = useState(false);

    async function getUserRepos(username) {
        try {
            let repos = await getRepos(username);
            setUserRepos(repos.data);
        } catch (error) {
          console.log('Não foi possível carregar os repositórios!');
        }
    }
    console.log(userRepos);

    return (
        <Content>
           <Header><img src={kontLogo}/> KontHub</Header>
           { isListDisplay ? (
            <ListContainer>
                <TextField required fullWidth id="outlined-required" label="username (GitHub)" variant="outlined" onChange={e => setUsername(e.target.value)}/>
                <ListButton onClick={() => {
                    if(username !== ''){
                        getUserRepos(username);
                    }
                }}>Pesquisar</ListButton>
                {userRepos.map((repo,index) => <Repo key={index} name={repo.name} url={repo.url} createdAt={repo.created_at} updatedAt={repo.updated_at} language={repo.language}/>)}
            </ListContainer>
           ):(
            <InitialContainer>
                <InitialText>Com o KontHub você consegue pesquisar de forma fácil usuários e seus repositórios no GitHub</InitialText>
                <InitialButton onClick={() => setIsListDisplay(true)}><p>Clique aqui para começar</p></InitialButton>
            </InitialContainer>
           ) }
        </Content>
    );
}

const ListButton = styled.div`
    width: 100%;
    height: 50px;
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(228,91,99,255);
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 20px;
    :hover{
        cursor: pointer;
        background-color: rgba(12,48,60,255);
    }
`;

const ListContainer = styled.div`
    width: 80%;
    height: 80%;
	display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
    padding: 20px;
    overflow: scroll;
`;

const InitialButton = styled.div`
    width: 500px;
    height: 50px;
	display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: rgba(228,91,99,255);
    margin-top: 15px;
    :hover{
        cursor: pointer;
        background-color: white;
    }
    @media (max-width: 600px) {
        width: 300px;
    }
    p {
    animation: color-change 1.5s infinite;
    }
    @keyframes color-change {
        0% { color: white; }
        50% { color: rgba(228,91,99,255); }
        100% { color: white; }
    }
`;

const InitialText = styled.div`
    width: 500px;
    text-align: center;
    @media (max-width: 600px) {
        width: 300px;
    }
`;

const InitialContainer = styled.div`
    width: 100%;
    height: 100%;
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
	display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: rgba(228,91,99,255);
    font-family: 'Orbitron';
    border-bottom: 1px solid gray;
    img{
        height: 60px;
        margin-right: 20px;
        border: 1px solid gray;
        border-radius: 20%;
    }
`;

const Content = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    background-color: rgba(12,48,60,255);
    color: white;
    font-family: 'Poppins';
    *{
        box-sizing: border-box;
    }
`;

import styled from 'styled-components';
import { useState, useEffect } from "react";
import { getRepos } from '../../service/api';
import kontLogo from '../../assets/kontulari-logo.jpeg';

export default function Homepage() {
    const [userRepos, setUserRepos] = useState([]);
    const [isListDisplay, setIsListDisplay] = useState(false);
    useEffect(() => {

    }, []);
    return (
        <Content>
           <Header><img src={kontLogo}/> KontHub</Header>
        </Content>
    );
}

const Header = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

const Content = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

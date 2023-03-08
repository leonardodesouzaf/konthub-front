import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRepos } from '../../service/api';



export default function Homepage() {
    const navigate = useNavigate();
    const [refreshDisplay, setRefreshDisplay] = useState(false);
    useEffect(() => {

    }, [refreshDisplay]);
    return (
        <Content>
           Oie 
        </Content>
    );
}



const Content = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

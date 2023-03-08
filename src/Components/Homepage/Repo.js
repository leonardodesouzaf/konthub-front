import styled from "styled-components";
import { format, parseISO } from 'date-fns';

export default function Repo({ name, url, createdAt, updatedAt, language }) {

    return (
      <RepoContainer>
        <InfoContainer>
            <RepoName>
                <div>{name}</div>
                <p>Linguagem principal: {language}</p>
            </RepoName>
            <RepoUrl>
                <p>{url}</p>
            </RepoUrl>
        </InfoContainer>
        <TimeContainer>
            <p>Criado em: {format(parseISO(createdAt), 'dd/MM/yyyy ')}</p>
            <p>Atualizado em: {format(parseISO(updatedAt), 'dd/MM/yyyy ')}</p>
        </TimeContainer>
      </RepoContainer>
    );
}

const TimeContainer = styled.div`
    width: 100%;
    height: 100%;
	display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
    font-size: 15px;
    @media (max-width: 600px) {
        margin-top: 10px;
        align-items: flex-start;
        font-size: 11px;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
	display: flex;
    flex-direction: column;
`;

const RepoUrl = styled.div`
    font-size: 15px;
    @media (max-width: 600px) {
        font-size: 6px;
    }
`;

const RepoName = styled.div`
    font-size: 25px;
    color: black;
    margin-bottom: 5px;
    p{
        margin-top: 5px;
        color: gray;
        font-size: 15px;
    }
    @media (max-width: 600px) {
        p{
            font-size: 12px;
        }
    }
`;

const RepoContainer = styled.div`
    width: 100%;
	display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid lightgrey;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 15px;
    color: gray;
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;
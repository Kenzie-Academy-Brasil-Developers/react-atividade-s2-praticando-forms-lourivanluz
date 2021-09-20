import styled from "styled-components";

const Page = styled.div`
  background-color: #1b1d1e;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageUser = ({ user: { userName, fullName, email } }) => {
  return (
    <Page>
      <h1>Bem vindo {userName}</h1>
      <span>informações</span>
      <span>nome de usuario :{userName}</span>
      <span>nome completo :{fullName}</span>
      <span>email cadastrado :{email}</span>
    </Page>
  );
};

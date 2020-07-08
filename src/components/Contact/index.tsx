import * as React from 'react';
import {
  StyledContainer,
  ContainerContact,
  StyledForm,
  StyledButton,
  ContainerTitleContact,
} from './styles';

function Contact() {
  return (
    <StyledContainer>
      <ContainerTitleContact>
        <img
          src="https://s3.amazonaws.com/static.eventials.com/whitelabel-snd/title_formulario.png"
          alt="contact"
        />
        <h2>
          Ficou com alguma dúvida sobre o conteúdo ou quer sugerir algum
          assunto?
        </h2>
        <h2>Nos envie uma mensagem!</h2>
      </ContainerTitleContact>
      <ContainerContact>
        <StyledForm>
          <StyledForm.Group controlId="exampleForm.ControlInput1">
            <StyledForm.Control type="text" placeholder="Name" />
          </StyledForm.Group>

          <StyledForm.Group controlId="exampleForm.ControlInput1">
            <StyledForm.Control type="email" placeholder="E-mail" />
          </StyledForm.Group>

          <StyledForm.Group controlId="exampleForm.ControlTextarea1">
            <StyledForm.Control as="textarea" rows={3} placeholder="Message" />
          </StyledForm.Group>
          <StyledButton>SEND</StyledButton>
        </StyledForm>
      </ContainerContact>
    </StyledContainer>
  );
}

export default Contact;
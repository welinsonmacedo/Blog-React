import React from'react';
import styled from'styled-components';

const PrivacyContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  margin: 10px 0;
`;

const   Page_Privacy_Policy = () => {
  return (
    <PrivacyContainer><Title>Política de Privacidade</Title><Paragraph>
        Esta Política de Privacidade descreve como as suas informações pessoais são coletadas, usadas e compartilhadas
        quando você visita o nosso blog.
      </Paragraph><SectionTitle>Informações que Coletamos</SectionTitle><Paragraph>
        Quando você visita o blog, automaticamente coletamos certas informações sobre o seu dispositivo, incluindo
        informações sobre o seu navegador, endereço IP, fuso horário e alguns dos cookies que estão instalados em seu
        dispositivo. Além disso, conforme você navega pelo blog, coletamos informações sobre as páginas ou produtos que
        você visualiza, quais sites ou termos de busca o encaminharam ao blog, e informações sobre como você interage
        com o blog.
      </Paragraph><SectionTitle>Como Usamos Suas Informações</SectionTitle><Paragraph>
        Usamos as informações coletadas para ajudar a melhorar a experiência do usuário no blog, personalizar o
        conteúdo e realizar análises sobre o uso do blog. Não compartilhamos suas informações pessoais com terceiros,
        exceto quando necessário para cumprir a lei ou proteger nossos direitos.
      </Paragraph><SectionTitle>Cookies</SectionTitle><Paragraph>
        Usamos cookies para melhorar sua experiência de navegação no blog. Os cookies são pequenos arquivos de texto
        que são armazenados no seu dispositivo para rastrear preferências e atividades de navegação. Você pode
        desativar os cookies ajustando as configurações do seu navegador, mas isso pode afetar a funcionalidade do blog.
      </Paragraph><SectionTitle>Alterações na Política de Privacidade</SectionTitle><Paragraph>
        Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas ou por
        outros motivos operacionais, legais ou regulamentares.
      </Paragraph><SectionTitle>Entre em Contato</SectionTitle><Paragraph>
        Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco pelo email:
        email
      </Paragraph></PrivacyContainer>
  );
};

export default Page_Privacy_Policy;

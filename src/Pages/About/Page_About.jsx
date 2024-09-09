import React, { useEffect, useRef } from 'react';
import {
  Container,
  Title,
  Subtitle,
  Content,
  Image,
  Section,
  Text,
  SectionTitle
} from './Page_About_Style';
import CertificationsList from '../CertificationsList/Certifications_List';

const PageAbout = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);
  return (
    <Container >
      <Title >Sobre Min</Title>

      <Content>
        <SectionTitle>
          <Image src="/About.png" alt="photo profile Joziane" ref={containerRef} tabIndex="0" />
          <Subtitle>Olá! Me chamo Joziane !  <br /> Mas pode me chamar de Jozi.</Subtitle>
        </SectionTitle>
        <Section>
          <Text>
            Sempre busquei um estilo de vida saudável. Surgiu em mim a vontade de me tornar vegetariana, e decidi ficar um ano sem comer carne de "vaca". Durante esse período, mergulhei em estudos, relatos e documentários sobre o tema. Percebi que meu objetivo de ser vegetariana não era suficiente. Após uma dieta de desintoxicação de 14 dias, notei melhorias significativas na minha disposição para treinar, queda de cabelo reduzida e fortalecimento das unhas. Assim, optei por permanecer no veganismo, e já se passaram quase 6 anos.
          </Text>
          <Text>
            Minha conexão com as práticas integrativas começou oficialmente em 2020, durante a pandemia. Enfrentei um processo de luto intenso que afetou a qualidade do meu sono, levando a insônias frequentes. Foi então que assisti a uma live de uma querida vegana com Bruno Murtinho, hoje meu amado mestre em Reiki. Ele nos convidou para participar de um grupo que realizava meditações online via Zoom desde o início da pandemia. Mesmo hesitante por achar que não sabia meditar, decidi tentar. Após a primeira prática, consegui dormir tranquilamente pela primeira vez em meses. Encantada com os resultados, retornei nos dias seguintes e continuo até hoje sob a orientação da minha amada mestra Elizabeth Ribeiro e do Bruno.
            Betinha, como é carinhosamente chamada, possui formação em Pranic Healing, método desenvolvido pelo mestre Choa Kok Sui.

            Durante uma dessas sessões, o Bruno mencionou ser mestre em Reiki e seu trabalho voluntário no Instituto ZemCancer. Sua dedicação despertou em mim o desejo de acolher outras pessoas também. Assim que foi possível nos reunirmos pessoalmente, fui iniciada em Reiki e atualmente realizo atendimentos voluntários tanto com Reiki quanto com Pranic Healing após completar minha formação nessa terapia.
          </Text>
          <Text>
            Sempre desejei divulgar mais sobre essas terapias e como podem auxiliar em diversas situações físicas e emocionais que as pessoas possam enfrentar. Esse anseio se intensificou quando participei de congressos dedicados às práticas integrativas no tratamento do câncer.

            Na vida, nada é por acaso e nem precisa ter razão, Deus colocou as pessoas certas no meu caminho para tornar esse sonho realidade. Assim sigo nessa jornada, então mãos a obra🙌🏾
          </Text>
        </Section>
      </Content>
      <CertificationsList/>
    </Container>
  );
};

export default PageAbout;

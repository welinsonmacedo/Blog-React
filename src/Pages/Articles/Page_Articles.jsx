import Big_Card_Component from "../../Components/Big_Card/Big_Card_Component"
import NavBar_Component from "../../Components/NavBar/NavBar_Component"
import Small_Card_Component from "../../Components/Small_Card/Small_Card_Component"
import { Container, ContainerSmallCard, ContainerBigCard, ContainerCards } from "./Page_Articles_Style"


const Page_Articles = () => {
  return (


    <Container id="Articles">
      <NavBar_Component />
      <ContainerCards>
        <ContainerBigCard>
          <Big_Card_Component />
          <Big_Card_Component />
        </ContainerBigCard>
        <ContainerSmallCard>
          <  Small_Card_Component />
          <  Small_Card_Component />
          <  Small_Card_Component />
        </ContainerSmallCard>
      </ContainerCards>

    </Container>




  )
}
export default Page_Articles
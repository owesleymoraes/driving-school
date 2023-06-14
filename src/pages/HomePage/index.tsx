import React, { useState } from "react";
import bus from "../../assets/bus.jpg";
import truck from "../../assets/truck.jpg";
import { Grid } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import trafficCar from "../../assets/traffic.mp4";
import walletCar from "../../assets/wallet-car.jpg";
import { Feature } from "../../components/Features";
import { Sections } from "../../components/Sections";
import walletMotor from "../../assets/wallet-moto.jpg";
import walletCarMotor from "../../assets/wallet-car-moto.jpg";
import {
  AccordionGroup,
  accordionItems,
} from "../../components/AccourdionGroup";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkerAlt } from "react-icons/fa";

import * as Styled from "./styles";

export const HomePage: React.FC = () => {
  const itemList = ["item 1", "item 2", "item 3", "item 4", "item 5"];
  const itemsAccordion: accordionItems[] = [
    {
      titleAccordion: "Como eu renovo minha CNH ?",
      descriptionAccordion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,doloribus. Quasi quisquam harum ullam.",
    },
    {
      titleAccordion: "Como faço mudança de categoria",
      descriptionAccordion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,doloribus. Quasi quisquam harum ullam.",
    },
    {
      titleAccordion: "Fui multado e agora ?",
      descriptionAccordion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,doloribus. Quasi quisquam harum ullam.",
    },
  ];

  const [hiddenAccordion, setHiddenAccordion] = useState(false);

  const handleClickMoreServices = () => {
    setHiddenAccordion(!hiddenAccordion);
  };

  // função que chama o elemento por âncora
  const handleClickAccordion = () => {
    const targetElement = document.getElementById("#initial-accordion");

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <>
      <Header
        titlePrincipal="Ganhe sua"
        titlePrimary="Liberdade"
        titleSecondary="para ir e vim"
      >
        {itemList}
      </Header>
      <Sections>
        <Grid>
          <Feature icon={<FaCar />} title="Maior e melhor frota">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quod similique aperiam amet quaerat error repudiandae dolorum.
            </p>
          </Feature>
          <Feature icon={<FaKey />} title="Habilitação mais rápido">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quod similique aperiam amet quaerat error repudiandae dolorum.
            </p>
          </Feature>
          <Feature icon={<FaMapMarkerAlt />} title="Excelente localização">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quod similique aperiam amet quaerat error repudiandae dolorum.
            </p>
          </Feature>
          <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quod similique aperiam amet quaerat error repudiandae dolorum.
            </p>
          </Feature>
        </Grid>
      </Sections>
      <Sections inverse>
        <Title tagOfTitle="h2" description={"Conheça nossos serviços"} />
        <Styled.ContainerCard>
          <Styled.WrapperCard openAccordion={hiddenAccordion}>
            <Card
              nameImg={walletCarMotor as any}
              title="1ª Habilitação Carro e Moto"
              description="Melhor preço para habitação carro e moto."
              onClick={() => {}}
            />
            <Card
              nameImg={walletCar as any}
              title="1ª Habilitação Carro"
              description="Melhor preço para habilitação de carro."
              onClick={() => {}}
            />
            <Card
              nameImg={walletMotor as any}
              title="1ª Habilitação Moto"
              description="Melhor preço para habilitação de moto."
              onClick={() => {}}
            />
            <Card
              nameImg={bus as any}
              title="Categoria D ( Ônibus )"
              description="Melhor preço para habilitação categoria D."
              onClick={() => {}}
            />
            <Card
              nameImg={truck as any}
              title="Categoria D ( Caminhão )"
              description="Melhor preço para habilitação categoria D."
              onClick={() => {}}
            />
          </Styled.WrapperCard>
          <Button
            borderRadius={8}
            width={200}
            height={32}
            fontSize={16}
            onClick={() => handleClickMoreServices()}
          >
            Mais serviços
          </Button>
        </Styled.ContainerCard>
      </Sections>

      <Styled.SectionAbout>
        <Sections>
          <Title tagOfTitle="h2" description={"Moraes Auto Escola"} />
          <Styled.InformationText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quod
            similique aperiam amet quaerat error repudiandae dolorum. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Sequi quod
            similique aperiam amet quaerat error repudiandae dolorum.
          </Styled.InformationText>
          <Button height={14} fontSize={12} onClick={() => {}}>
            Saiba mais
          </Button>
        </Sections>
        <Styled.ContainerVideo>
          <video src={trafficCar} width="100%" autoPlay loop muted />
        </Styled.ContainerVideo>
      </Styled.SectionAbout>

      <Sections inverse>
        <Styled.TitleDoubts>
          <div id="#initial-accordion">
            <Title tagOfTitle="h2" description={"Dúvidas recorrentes"} />
          </div>
        </Styled.TitleDoubts>
        <AccordionGroup informationAccordion={itemsAccordion} />
      </Sections>
      <Footer />
    </>
  );
};

import React, { useState } from "react";
import bus from "../../assets/bus.jpg";
import { useNavigate } from "react-router-dom";
import truck from "../../assets/truck.jpg";
import { Grid } from "../../components/Grid";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import trafficCar from "../../assets/traffic.mp4";
import imagePrincipal from "../../assets/car.jpg";
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
  const navigate = useNavigate();
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
  const services = [
    {
      id: 1,
      title: "1ª Habilitação Carro e Moto",
      slang: "categoria-moto-carro",
      sumary: "Melhor preço para habitação carro e moto.",
      image: walletCarMotor,
    },

    {
      id: 2,
      title: "1ª Habilitação Carro",
      slang: "categoria-carro",
      sumary: "Melhor preço para habilitação de carro.",
      image: walletCar,
    },

    {
      id: 3,
      title: "1ª Habilitação Moto",
      slang: "categoria-moto",
      sumary: "Melhor preço para habitação moto.",
      image: walletMotor,
    },
    {
      id: 4,
      title: "Categoria E ( Ônibus )",
      slang: "categoria-E",
      sumary: "Melhor preço para habilitação categoria D.",
      image: bus,
    },
    {
      id: 5,
      title: "Categoria D ( Caminhão )",
      slang: "categoria-D-E",
      sumary: "Melhor preço para habitação categoria D E",
      image: truck,
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

  const handleClickAbout = () => {
    navigate("/about");
  };

  const handleClickService = () => {
    navigate("/productDetail");
  };

  return (
    <>
      <Header
        imageBackground={imagePrincipal}
        titlePrincipal="Ganhe sua"
        titlePrimary="Liberdade"
        titleSecondary="para ir e vim"
        hasButton
        nameButton="MATRICULE-SE AGORA"
        onClickButton={() => {}}
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
            {services.map((item, index) => {
              return (
                <Card
                  key={index}
                  nameImg={item.image}
                  title={item.title}
                  description={item.sumary}
                  onClick={() => navigate(`/productDetail/${item.slang}`)}
                />
              );
            })}
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
          <Button height={14} fontSize={12} onClick={() => handleClickAbout()}>
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

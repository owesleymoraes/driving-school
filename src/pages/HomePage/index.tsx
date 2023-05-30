import React from "react";
import { Grid } from "../../components/Grid";
import { Title } from "../../components/Title";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import trafficCar from "../../assets/traffic.mp4";
import { Feature } from "../../components/Features";
import { Sections } from "../../components/Sections";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkerAlt } from "react-icons/fa";

import * as Styled from "./styles";

export const HomePage: React.FC = () => {
  const itemList = ["item 1", "item 2", "item 3", "item 4", "item 5"];
  return (
    <>
      <Header>{itemList}</Header>
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
        <Title tagOfTitle="h2" description={"Conheça nossos serviços"}></Title>
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
          <video src={trafficCar} width="100%" autoPlay loop />
        </Styled.ContainerVideo>
      </Styled.SectionAbout>

      <Sections inverse>
        <Title tagOfTitle="h2" description={"Dúvidas recorrentes"}></Title>
      </Sections>
    </>
  );
};

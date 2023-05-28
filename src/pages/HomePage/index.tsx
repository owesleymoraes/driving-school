import React from "react";
import { Grid } from "../../components/Grid";
import { Header } from "../../components/Header";
import { Feature } from "../../components/Features";
import { Sections } from "../../components/Sections";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkerAlt } from "react-icons/fa";
import { Title } from "../../components/Title";
import { BottomBar } from "../../components/BottomBar";

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
      <Sections>
        <Title tagOfTitle="h2" description={"Moraes Auto Escola"}></Title>
      </Sections>
      <Sections inverse>
        <Title tagOfTitle="h2" description={"Dúvidas recorrentes"}></Title>
      </Sections>
    </>
  );
};

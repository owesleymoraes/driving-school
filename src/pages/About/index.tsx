import React from "react";
import road from "../../assets/road.jpg";
import tobi from "../../assets/tobi.jpg";
import naruto from "../../assets/naruto.jpg";
import { Card } from "../../components/Card";
import { Grid } from "../../components/Grid";
import sasori from "../../assets/sasori.jpg";
import { Title } from "../../components/Title";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Sections } from "../../components/Sections";
import orochimaru from "../../assets/orochimaru.jpg";
import { AboutSvg } from "../../components/ImageSvg/About";

import * as Styled from "./styles";

export const About: React.FC = () => {
  const teachers = [
    { image: naruto, name: "Naruto" },
    { image: sasori, name: "Sasori" },
    { image: tobi, name: "Tobi" },
    { image: orochimaru, name: "Orochimaru" },
  ];

  return (
    <Styled.ContainerAbout>
      <Header imageBackground={road} titlePrincipal="Auto Escola Moraes" />
      <Sections>
        <Grid>
          <Styled.ContainerColumn>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              deserunt labore rem repudiandae. Provident distinctio minus esse
              fugit, delectus iusto necessitatibus consectetur maxime soluta
              similique asperiores numquam inventore sunt cum?
            </p>
            <p>
              Velit voluptatibus dolorum distinctio deleniti ullam expedita eum
              accusamus. Fuga perferendis natus voluptatum asperiores et,
              exercitationem facilis, ex maiores veniam quibusdam quae
              cupiditate officiis. Dignissimos assumenda ipsum qui. Ullam, quod!
            </p>
            <p>
              Atque possimus fugiat veniam? Beatae neque eveniet impedit eos,
              accusantium iusto optio officiis veniam reprehenderit, in
              repellendus perspiciatis? Harum natus cum iusto, eius repellendus
              suscipit ratione architecto dolorem quaerat aliquam.
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </Styled.ContainerColumn>
          <Styled.ContainerColumn>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              laudantium itaque fuga qui error. Quos impedit temporibus,
              eligendi animi ex modi accusamus consequatur ipsum eius, dolorum
              cum cumque, nostrum aspernatur.
            </p>

            <Styled.Image>
              <AboutSvg />
            </Styled.Image>
          </Styled.ContainerColumn>
        </Grid>
      </Sections>
      <Sections inverse>
        <Grid>
          <Styled.ContainerColumn>
            <h4>Missão</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              corrupti hic accusantium, est, a alias harum dicta, culpa
              repudiandae vitae autem voluptatibus! Pariatur ea dolore animi
              assumenda cumque tenetur optio?
            </p>
          </Styled.ContainerColumn>
          <Styled.ContainerColumn>
            <h4>Visão</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              corrupti hic accusantium, est, a alias harum dicta, culpa
              repudiandae vitae autem voluptatibus! Pariatur ea dolore animi
              assumenda cumque tenetur optio?
            </p>
          </Styled.ContainerColumn>
        </Grid>
      </Sections>
      <Sections>
        <Title tagOfTitle="h2" description={"Conheça nossos Professores"} />
        <Styled.WrapperCard>
          {teachers.map((item, index) => {
            return (
              <Card key={index} nameImg={item.image} descriptionImage={item.name} />
            );
          })}
        </Styled.WrapperCard>
      </Sections>
      <Footer />
    </Styled.ContainerAbout>
  );
};

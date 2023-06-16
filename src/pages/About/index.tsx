import React from "react";
import * as Styled from "./styles";
import { Header } from "../../components/Header";
import road from "../../assets/road.jpg";
import { Sections } from "../../components/Sections";
import { Grid } from "../../components/Grid";
import about from "../../../svg/about.svg";
import { AboutSvg } from "../../components/ImageSvg";

export const About: React.FC = () => {
  return (
    <Styled.ContainerAbout>
      <Header imageBackground={road} titlePrincipal="Auto Escola Moraes" />
      <Sections>
        <Grid>
          <div>
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
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              laudantium itaque fuga qui error. Quos impedit temporibus,
              eligendi animi ex modi accusamus consequatur ipsum eius, dolorum
              cum cumque, nostrum aspernatur.
            </p>

            <Styled.Image>
              <AboutSvg width={38} height={"auto"} />
            </Styled.Image>
          </div>
        </Grid>
      </Sections>
    </Styled.ContainerAbout>
  );
};

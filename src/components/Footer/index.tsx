import React from "react";
import { Grid } from "../Grid";
import { Title } from "../Title";
import { Container } from "../Container";
import {
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaBuilding,
} from "react-icons/fa";

import * as Styled from "./styles";

export const Footer: React.FC = () => {
  return (
    <Styled.Root>
      <Container>
        <Grid>
          <div>
            <Title tagOfTitle="h5" description={"Moraes Auto Escola"} />
            <Styled.InformationText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quod similique aperiam amet quaerat error repudiandae dolorum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quod similique aperiam amet quaerat error repudiandae dolorum.
            </Styled.InformationText>
          </div>

          <div>
            <Title tagOfTitle="h5" description={"Contatos"} />
            <Styled.WrapperContacts>
              <Styled.InfoContacts isColor={false}>
                <Styled.IconContacts>
                  <FaPhone />
                </Styled.IconContacts>
                <Styled.InformationText>(85) 9 92957907</Styled.InformationText>
              </Styled.InfoContacts>

              <Styled.InfoContacts isColor={false}>
                <Styled.IconContacts>
                  <FaBuilding />
                </Styled.IconContacts>
                <Styled.InformationText>
                  Lorem ipsum dolor sit amet.
                </Styled.InformationText>
              </Styled.InfoContacts>
            </Styled.WrapperContacts>
          </div>

          <div>
            <Title tagOfTitle="h5" description={"Redes Sociais"} />
            <Styled.InfoContacts isColor={true} onClick={() => {}}>
              <Styled.IconContacts>
                <FaFacebookF />
              </Styled.IconContacts>
            </Styled.InfoContacts>
            <Styled.InfoContacts isColor={true} onClick={() => {}}>
              <Styled.IconContacts>
                <FaLinkedinIn />
              </Styled.IconContacts>
            </Styled.InfoContacts>
            <Styled.InfoContacts isColor={true} onClick={() => {}}>
              <Styled.IconContacts>
                <FaTwitter />
              </Styled.IconContacts>
            </Styled.InfoContacts>
          </div>
        </Grid>
      </Container>
    </Styled.Root>
  );
};

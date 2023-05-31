import React from "react";
import { Grid } from "../Grid";
import { Title } from "../Title";
import { Container } from "../Container";
import { FaPhone, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import * as Styled from "./styles";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Styled.Root>
        <Grid>
          <Styled.AboutFooter>
            <Title tagOfTitle="h5" description={"Moraes Auto Escola"} />
            <Styled.InformationText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quod similique aperiam amet quaerat error repudiandae dolorum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              quod similique aperiam amet quaerat error repudiandae dolorum.
            </Styled.InformationText>
          </Styled.AboutFooter>
          <Styled.ContactsFooter>
            <Title tagOfTitle="h5" description={"Contatos"} />
            <Styled.WrapperContacts>
              <Styled.InfoContacts>
                <Styled.IconContacts>
                  <FaPhone />
                </Styled.IconContacts>
                <Styled.InformationText>(85) 9 92957907</Styled.InformationText>
              </Styled.InfoContacts>
            </Styled.WrapperContacts>
          </Styled.ContactsFooter>
          <Styled.SocialMediaFooter>
            <Title tagOfTitle="h5" description={"Redes Sociais"} />
            <Styled.WrapperContacts>
              <Styled.InfoContacts isColor={true} onClick={() => {}}>
                <Styled.IconContacts>
                  <FaFacebookF />
                </Styled.IconContacts>
                <Styled.InformationText>Facebook</Styled.InformationText>
              </Styled.InfoContacts>
              <Styled.InfoContacts isColor={true} onClick={() => {}}>
                <Styled.IconContacts>
                  <FaLinkedinIn />
                </Styled.IconContacts>
                <Styled.InformationText>Linkedin</Styled.InformationText>
              </Styled.InfoContacts>
              <Styled.InfoContacts isColor={true} onClick={() => {}}>
                <Styled.IconContacts>
                  <FaTwitter />
                </Styled.IconContacts>
                <Styled.InformationText>Twitter</Styled.InformationText>
              </Styled.InfoContacts>
            </Styled.WrapperContacts>
          </Styled.SocialMediaFooter>
        </Grid>
      </Styled.Root>
    </Container>
  );
};

import React, { useEffect } from "react";
import road from "../../assets/road.jpg";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { PinnedItem, PinnedList } from "./styles";
import { Sections } from "../../components/Sections";
import { CalloutBody } from "../../components/CalloutBody";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export const ProductDetail: React.FC = () => {
  const navigate = useNavigate();

  const handleClickGoBack = () => {
    navigate("/");
  };

 useScrollToTop()

  return (
    <div>
      <Header
        imageBackground={road}
        titlePrincipal="Auto Escola Moraes"
        hasButton
        nameButton="Voltar"
        onClickButton={handleClickGoBack}
      />
      <Sections>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsa
          assumenda laudantium molestiae cum porro ut, eveniet, reprehenderit
          neque eligendi praesentium cumque. Eum laborum voluptates expedita
          amet sit. Magnam, possimus.
        </p>
        <p>
          Quia sed eius aliquam cumque ducimus! Quas temporibus, voluptatum
          tempora maiores laudantium dolorem, dignissimos accusantium quia
          voluptates quaerat sunt enim recusandae nostrum blanditiis ipsa ut
          explicabo et. Assumenda, soluta aliquam!
        </p>
        <p>
          Nam labore distinctio nostrum rem! Ex molestias repellat eius sit
          numquam ad nulla repudiandae, quis rerum sunt porro sed deserunt
          voluptatibus doloribus asperiores? Saepe in voluptatum officia,
          facilis harum repellat.
        </p>
        <h5>Documentos necessários</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            Rg
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Certidão denascimento ou casamento
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Comprovante de residência
          </PinnedItem>
        </PinnedList>
      </Sections>
      <Sections inverse>
        <CalloutBody
          nameButton="Matricular"
          title="Faça Sua matrícula agora mesmo"
          paragraph="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
          doloremque molestias aspernatur architecto ducimus impedit nemo
          consequuntur minima delectus repudiandae, numquam repellat tempore
          commodi dicta. Praesentium voluptatibus esse commodi aperiam?"
        />
      </Sections>
      <Footer />
    </div>
  );
};

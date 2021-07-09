import { Title, Wrapper, Medias } from "../styles/home";
import { FiFacebook, FiInstagram } from "react-icons/fi";

import Logo from "./src/images/logo.svg";

export default function Home() {
  return (
    <Wrapper>
      <Logo />
      <Title>
        Em breve uma loja cheiinha de lembranças e adesivos pra você
        personalizar a sua vida.
      </Title>

      <Medias>
        <span>Conheça nossas redes sociais</span>
        <a
          target="_blank"
          href="https://www.instagram.com/adesivamos/"
          rel="noreferrer"
        >
          <FiInstagram size={20} />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/LojaAdesiVamos/"
          rel="noreferrer"
        >
          <FiFacebook size={20} />
        </a>
      </Medias>
    </Wrapper>
  );
}

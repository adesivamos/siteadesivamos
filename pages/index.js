import { Title, Wrapper, Medias } from "./src/styles/home";
import {FiFacebook, FiInstagram} from 'react-icons/fi'

import Logo from './src/images/logo.svg';


export default function Home() {
  return (
    <Wrapper>
      <Logo />
      <Title>Em breve uma loja cheiinha de
lembranças e adesivos pra você personalizar a sua vida.</Title>

    <Medias> 
      <span>
        Conheça nossas redes sociais
      </span>
      <a target="_blank" href="https://www.instagram.com/adesivamos/"><FiInstagram size={20} /></a>
      <a target="_blank" href="https://www.facebook.com/LojaAdesiVamos/"><FiFacebook size={20} /></a>
     
        
    </Medias>


    </Wrapper>
  );
}

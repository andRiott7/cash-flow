import { Flex, HeaderContainer, HeaderContent, LogoImage, NewTransactionButton } from "./styles";

import logoImg from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Flex>
          <LogoImage src={logoImg} alt="" /> <h2> Cash Flow </h2>
        </Flex>

        <NewTransactionButton>New Transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
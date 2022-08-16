import { Flex, HeaderContainer, HeaderContent, LogoImage, NewTransactionButton } from "./styles";

import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";


import logoImg from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>

        <Flex>
          <LogoImage src={logoImg} alt="" /> <h2> Cash Flow </h2>
        </Flex>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  );
}
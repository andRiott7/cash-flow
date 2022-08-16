import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Value" required />
          <input type="text" placeholder="Register" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income" >
              <ArrowCircleUp size={24} />
              Inflow
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome" >
              <ArrowCircleDown size={24} />
              Outflow
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
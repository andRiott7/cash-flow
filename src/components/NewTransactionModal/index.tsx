import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const {
    register,
    handleSubmit
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log(data)
  }
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)} >
          <input type="text" placeholder="Description" required {...register('description')} />
          <input type="number" placeholder="Value" required {...register('price', { valueAsNumber: true })} />
          <input type="text" placeholder="Category" required {...register('category')} />

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
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';

import { api } from '../../lib/axios';
import { useContext } from 'react';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>


export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {

    await createTransaction({
      description: data.description,
      category: data.category,
      price: data.price,
      type: data.type
    })

    reset()
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

          <Controller
            control={control}
            name="type"
            render={({ field }) => {

              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income" >
                    <ArrowCircleUp size={24} />
                    Inflow
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome" >
                    <ArrowCircleDown size={24} />
                    Outflow
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting} >
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
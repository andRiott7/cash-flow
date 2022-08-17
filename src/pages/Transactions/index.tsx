import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { DateEnd, PriceHighlight, TransactionsContainer, TransactionsTable, ValueEnd } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3337/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>

        <SearchForm />
        <TransactionsTable>
          {transactions.map(transaction => {
            return (
              <tbody>
                <tr>
                  <td width="50%">{transaction.description}</td>
                  <ValueEnd>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighlight>
                  </ValueEnd>
                  <td>{transaction.category}</td>
                  <DateEnd>{transaction.createdAt}</DateEnd>
                </tr>

              </tbody>
            )
          })}

        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
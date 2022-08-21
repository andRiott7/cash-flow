import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { DateEnd, PriceHighlight, TransactionsContainer, TransactionsTable, ValueEnd } from "./styles";

export function Transactions() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.transactions
    }
  );

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
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}

                    </PriceHighlight>
                  </ValueEnd>
                  <td>{transaction.category}</td>
                  <DateEnd>{dateFormatter.format(new Date(transaction.createdAt))}</DateEnd>
                </tr>

              </tbody>
            )
          })}

        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
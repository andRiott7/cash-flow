import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { DateEnd, PriceHighlight, TransactionsContainer, TransactionsTable, ValueEnd } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>

        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website development</td>
              <ValueEnd>
                <PriceHighlight variant="income">
                  $ 12,000.00
                </PriceHighlight>
              </ValueEnd>
              <td>Services</td>
              <DateEnd>05/08/2022</DateEnd>
            </tr>
            <tr>
              <td width="50%">The Chefs</td>
              <ValueEnd>
                <PriceHighlight variant="outcome">
                  -$ 59.00
                </PriceHighlight>
              </ValueEnd>
              <td>Food</td>
              <DateEnd>09/08/2022</DateEnd>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
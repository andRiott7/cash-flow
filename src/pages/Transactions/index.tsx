import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { PriceHighlight, TransactionsContainer, TransactionsTable } from '../../components/Summary/styles'
export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website development</td>
              <td>
                <PriceHighlight variant="income">
                  $ 12,0000.00
                </PriceHighlight>
              </td>
              <td>Services</td>
              <td>05/08/2022</td>
            </tr>
            <tr>
              <td width="50%">The Chefs</td>
              <td>
                <PriceHighlight variant="outcome">
                  -R$ 59,00
                </PriceHighlight>
              </td>
              <td>Food</td>
              <td>10/08/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>

  )
}
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { useSummary } from "../../hooks/useSummary"
import { priceFormatter } from "../../utils/formatter"
import { SummaryCard, SummaryContainer } from "./styles"

export function Summary() {
  const summary = useSummary();

  return (

    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>InFlows</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>  <strong>{priceFormatter.format(summary.income)}</strong></strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>OutFlows</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Amount</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { SummaryCard, SummaryContainer } from "./styles"

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>inFlows</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>$ 18,200.00 </strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>outFlows</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>$ 14,050.00 </strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>ammount</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>$ 4,150.00 </strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
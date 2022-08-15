import { ArrowCircleUp } from "phosphor-react"
import { SummaryContainer } from "./styles"

export function Summary() {
  return (
    <SummaryContainer>
      <div>
        <header>
          <span>inFlows</span>
          <ArrowCircleUp />
        </header>
      </div>
    </SummaryContainer>
  )
}
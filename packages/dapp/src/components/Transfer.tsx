import { Button, H2, Input } from "@argent/ui"
import { Flex } from "@chakra-ui/react"
import { FC, useState } from "react"
import { transfer } from "../services/token.service"
import { Status } from "../types/Status"

interface TransferProps {
  setTransactionStatus: (status: Status) => void
  setLastTransactionHash: (status: string) => void
  transactionStatus: Status
}

const Transfer: FC<TransferProps> = ({
  setTransactionStatus,
  setLastTransactionHash,
  transactionStatus,
}) => {
  const [transferTo, setTransferTo] = useState("")
  const [transferAmount, setTransferAmount] = useState("1")

  const buttonsDisabled =
    ["approve", "pending"].includes(transactionStatus) ||
    transferTo === "" ||
    transferAmount === ""

  const handleTransferSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault()
      setTransactionStatus("approve")
      const { transaction_hash } = await transfer(transferTo, transferAmount)
      setLastTransactionHash(transaction_hash)
      setTransactionStatus("pending")
      setTransferAmount("")
    } catch (e) {
      console.error(e)
      setTransactionStatus("idle")
    }
  }

  return (
    <Flex flex={1} width="full" gap={10}>
      <Flex
        as="form"
        onSubmit={handleTransferSubmit}
        direction="column"
        background="neutrals.700"
        flex={1}
        p="4"
        gap="3"
        borderRadius="lg"
      >
        <H2>Transfer token</H2>

        <Input
          type="text"
          id="transfer-to"
          name="fname"
          placeholder="To"
          value={transferTo}
          onChange={(e) => setTransferTo(e.target.value)}
        />

        <Input
          type="text"
          id="transfer-amount"
          name="fname"
          placeholder="Amount"
          value={transferAmount}
          onChange={(e) => setTransferAmount(e.target.value)}
        />
        <br />
        <Button
          colorScheme="primary"
          type="submit"
          isDisabled={buttonsDisabled}
          maxW="200px"
        >
          Transfer
        </Button>
      </Flex>
    </Flex>
  )
}

export { Transfer }

import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

// Esse é o nosso contrato de governança.
const vote = sdk.getVote("0x2Ded5Bf78c1Ae5fb13206E954706F22194FED55D");

// Esse é o nosso contrato ERC-20.
const token = sdk.getToken("0x4AFbf1cb18e7dd8B391245a2Ebe1C41ACe15003E");

(async () => {

    try {
        const amount = 5_000;

        const description = "A DAO deveria transferir " + amount + " tokens do tesouro para " +
            process.env.WALLET_ADDRESS + " para implantar o sistema de votação em outras economias solidárias?";

        const executions = [
            {
                // Novamente, estamos mandando para nós mesmos 0 ETH. Apenas mandando nosso próprio token.
                nativeTokenValue: 0,
                transactionData: token.encoder.encode(
                    // Nós estamos fazendo uma transferência do tesouro para a nossa carteira.
                    "transfer",
                    [
                        process.env.WALLET_ADDRESS,
                        ethers.utils.parseUnits(amount.toString(), 18),
                    ]
                ),

                toAddress: token.getAddress(),
            },
        ];

        await vote.propose(description, executions);

        console.log(
            "✅ Proposta de dar prêmio do tesouro para si mesmo criada com sucesso, vamos torcer para votarem sim!"
        );
    } catch (error) {
        console.error("falha ao criar segunda proposta", error);
    }
})();
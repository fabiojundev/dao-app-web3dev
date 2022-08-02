import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        // Faça o Deploy de um contracto ERC-20 padrão.
        const tokenAddress = await sdk.deployer.deployToken({
            name: "Token de Governança da EcoSolDAO",
            symbol: "ECOSOL",
            // Isso é para o caso de querermos vender o token,
            // nesse caso não queremos, por isso AddressZero de novo.
            primary_sale_recipient: AddressZero,
        });
        console.log(
            "✅ Módulo de token implantado com sucesso. Endereço:",
            tokenAddress,
        );
    } catch (error) {
        console.error("falha ao implantar módulo do token", error);
    }
})();
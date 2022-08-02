import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x76975753cFbB28D275281216ab1B88E90D445cD5");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Selo Libersol",
        description: "Esse NFT vai te dar acesso ao EcoSolDAO!",
        image: readFileSync("scripts/assets/ecosol.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no EcoSolDAO");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()

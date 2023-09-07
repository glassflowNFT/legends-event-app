import { coins } from '@cosmjs/stargate'


export const mint = (
    client,
    sender,
  ) => {
    return client.execute(
      sender,
      "mint-contract-address",
      {
        mint: {
          owner: sender,
          token_id: "some-id",
          token_uri: "some-uri",
        },
      },
      {
        amount: coins(10000, "ujunox"),
        gas: "10000",
      }
      )
    }
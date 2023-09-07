export const checkMembership = async (client, contract, address) => {
  return client.queryContractSmart(contract, {
    member: { addr: address },
  })
}
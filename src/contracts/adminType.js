import { checkMembership } from "./checkMembership"

const ADMIN_GROUP = "juno13cs8u7t78kuyf2g8vzmqtur8q5jqgsn88jmzkzqk7f2cdzd6c6ps8mc4dm"

export const queryAdmin = async (client, address) => {
  return checkMembership(
    client,
    ADMIN_GROUP,
    address,
  )
}

export const getAdmin = (weight) => {
  switch (weight) {
    case 1:
      return "Admin"
    default:
      return "non-admin"
  }
}
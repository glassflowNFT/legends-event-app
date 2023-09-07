import { checkMembership } from "./checkMembership"

const ALL_GUEST = "juno13cs8u7t78kuyf2g8vzmqtur8q5jqgsn88jmzkzqk7f2cdzd6c6ps8mc4dm"

export const queryGuestType = async (client, address) => {
  return checkMembership(
    client,
    ALL_GUEST,
    address
  )
}

export const getGuestType = (weight) => {
  switch (weight) {
    case 1:
      return "Judge"
    case 2:
      return "Mock Trial Admin"
    case 3:
      return "Maker Guest"
    case 4:
      return "Maker"
    case 5:
      return "Special Guest"
    default:
      return "Unknown Guest"
  }
}
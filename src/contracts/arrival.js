import { checkMembership } from "./checkMembership"

const ATTENDANCE_CONTRACT = "juno1vcsng5ursj3r7zm8p90xd3xkghsxthj02ypqcuxnpw9zuf90z0ssgckq6w"

export const queryDayOneArrival = async (client, address) => {
  return checkMembership(
    client,
    ATTENDANCE_CONTRACT,
    address
  )
}


export const queryDayTwoArrival = async (client, address) => {
  return checkMembership(
    client,
    ATTENDANCE_CONTRACT,
    address
  )
}


// Add Member Day two arrival


import { checkMembership } from "./checkMembership"
import { coins } from "@cosmjs/stargate"
import {JUDGE_GROUP} from './Judges'

const VOTING_CONTRACT = "juno15z7ggmhaxwtj8wyzjqr9mf9d5euwny70l3eplyyq63an8e04pexsgt6ldu"

export const queryJudge = async (client, address) => {
  return checkMembership(
    client,
    JUDGE_GROUP,
    address
  )
}

export const getJudge = (weight) => {
  switch (weight) {
    case 1:
      return "1"
    default:
      return "0"
  }
}

export const queryEntries = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryDryWinners = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryDryEntries = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryMeltEntries = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryMeltWinners = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryRosinEntries = (
  client,
  category,
  startAfter = undefined, // Last entry id of previous category
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryRosinWinners = (
  client,
  category,
  startAfter = undefined,
  limit = undefined
) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entries: {
      category,
      start_after: startAfter,
      limit,
    },
  })
}

export const queryEntry = (client, category, entryId) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    entry: {
      category,
      entry_id: entryId,
    },
  })
}

export const queryVotes = (client, entryId, makerAddress) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    votes: {
      entry_id: entryId,
      maker_addr: makerAddress,
    },
  })
}

export const queryTallyVotes = (client, entryId, startAfter = undefined, limit = undefined) => {
  return client.queryContractSmart(VOTING_CONTRACT, {
    tally_votes: {
      entry_id: entryId,
      start_after: startAfter,
      limit,
    },
  })
}

export const vote = (
  client,
  sender,
  category,
  entryId,
  { look, smell, taste, postMelt }
) => {
  return client.execute(
    sender,
    VOTING_CONTRACT,
    {
      vote: {
        category,
        entry_id: entryId,
        votes: {
          look,
          smell,
          taste,
          post_melt: postMelt,
        },
      },
    },
    {
      amount: coins(4444, "ujuno"),
      gas: "444444",
    }
  )
}
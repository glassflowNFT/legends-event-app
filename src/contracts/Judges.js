import { checkMembership } from "./checkMembership"

export const JUDGE_GROUP = "juno13cs8u7t78kuyf2g8vzmqtur8q5jqgsn88jmzkzqk7f2cdzd6c6ps8mc4dm"

export const queryJudge = async (client, address ) => {
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
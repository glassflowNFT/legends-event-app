# Legends 2022: Event Ticketing & Entry Voting Application

This applications will serve as the base level functions for a permissionless, customizable event ticketing & judging smart contract system.

## Features

- Display the connect wallet address QR Code & Type of Guest
- Scan QR of guest wallet address
- Updating guest attendance information
- Custom functionality based on connected wallet address
- Proposal of new entries
- Allocating points to new entries
- NFT minting access for gz1 x mothership collaboration

## Process

### Setup

1. Instatiate event specific applications:
   - cw4-groups: Used for event guest specific logic
   - cw-proposal-multiple-tally: logic for creating proposals with multiple options
   - cw-vote: logic used to allocate points to options within the proposal
   - cw-721: Any type of NFT collection
2. Add all attendee wallets to cw4-groups, allocating specific weights for specific types of guest.
3. Create proposals for a specific cw4-group to vote on.

### At the event

1. Guest arrive with wallets that were included in cw4-groups connected to Keplr Mobile.
2. Event Ushers scan the qr code of guest wallet, querying guest attendance information.
3. Guest can browse & vote on proposals all within the application, but only if they are a part of cw4-groups that have been used to allow certain functionalities for certain guest.

### Tallying Votes

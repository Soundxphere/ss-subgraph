import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  CreatingMusicBloc,
  JoinedMusicBloc,
  Merged,
  NewMusicBloc,
  NewSeedStarted,
  SeedCompleted,
  StatusPosted
} from "../generated/SoundSphereCore/SoundSphereCore"

export function createCreatingMusicBlocEvent(
  bloc: Bytes,
  creator: Address
): CreatingMusicBloc {
  let creatingMusicBlocEvent = changetype<CreatingMusicBloc>(newMockEvent())

  creatingMusicBlocEvent.parameters = new Array()

  creatingMusicBlocEvent.parameters.push(
    new ethereum.EventParam("bloc", ethereum.Value.fromFixedBytes(bloc))
  )
  creatingMusicBlocEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return creatingMusicBlocEvent
}

export function createJoinedMusicBlocEvent(
  bloc: Address,
  seedBox: BigInt,
  creator: Address
): JoinedMusicBloc {
  let joinedMusicBlocEvent = changetype<JoinedMusicBloc>(newMockEvent())

  joinedMusicBlocEvent.parameters = new Array()

  joinedMusicBlocEvent.parameters.push(
    new ethereum.EventParam("bloc", ethereum.Value.fromAddress(bloc))
  )
  joinedMusicBlocEvent.parameters.push(
    new ethereum.EventParam(
      "seedBox",
      ethereum.Value.fromUnsignedBigInt(seedBox)
    )
  )
  joinedMusicBlocEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return joinedMusicBlocEvent
}

export function createMergedEvent(bloc: Address, seedId: Bytes): Merged {
  let mergedEvent = changetype<Merged>(newMockEvent())

  mergedEvent.parameters = new Array()

  mergedEvent.parameters.push(
    new ethereum.EventParam("bloc", ethereum.Value.fromAddress(bloc))
  )
  mergedEvent.parameters.push(
    new ethereum.EventParam("seedId", ethereum.Value.fromFixedBytes(seedId))
  )

  return mergedEvent
}

export function createNewMusicBlocEvent(
  bloc: Address,
  creator: Address
): NewMusicBloc {
  let newMusicBlocEvent = changetype<NewMusicBloc>(newMockEvent())

  newMusicBlocEvent.parameters = new Array()

  newMusicBlocEvent.parameters.push(
    new ethereum.EventParam("bloc", ethereum.Value.fromAddress(bloc))
  )
  newMusicBlocEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return newMusicBlocEvent
}

export function createNewSeedStartedEvent(
  bloc: Address,
  seed: Bytes,
  round: BigInt
): NewSeedStarted {
  let newSeedStartedEvent = changetype<NewSeedStarted>(newMockEvent())

  newSeedStartedEvent.parameters = new Array()

  newSeedStartedEvent.parameters.push(
    new ethereum.EventParam("bloc", ethereum.Value.fromAddress(bloc))
  )
  newSeedStartedEvent.parameters.push(
    new ethereum.EventParam("seed", ethereum.Value.fromFixedBytes(seed))
  )
  newSeedStartedEvent.parameters.push(
    new ethereum.EventParam("round", ethereum.Value.fromUnsignedBigInt(round))
  )

  return newSeedStartedEvent
}

export function createSeedCompletedEvent(
  musicBloc: Address,
  seedId: Bytes
): SeedCompleted {
  let seedCompletedEvent = changetype<SeedCompleted>(newMockEvent())

  seedCompletedEvent.parameters = new Array()

  seedCompletedEvent.parameters.push(
    new ethereum.EventParam("musicBloc", ethereum.Value.fromAddress(musicBloc))
  )
  seedCompletedEvent.parameters.push(
    new ethereum.EventParam("seedId", ethereum.Value.fromFixedBytes(seedId))
  )

  return seedCompletedEvent
}

export function createStatusPostedEvent(
  bloc: Address,
  message: string,
  author: Address
): StatusPosted {
  let statusPostedEvent = changetype<StatusPosted>(newMockEvent())

  statusPostedEvent.parameters = new Array()

  statusPostedEvent.parameters.push(
    new ethereum.EventParam("bloc", ethereum.Value.fromAddress(bloc))
  )
  statusPostedEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  statusPostedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )

  return statusPostedEvent
}

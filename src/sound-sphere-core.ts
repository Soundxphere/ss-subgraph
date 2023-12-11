import {
  CreatingMusicBloc as CreatingMusicBlocEvent,
  JoinedMusicBloc as JoinedMusicBlocEvent,
  Merged as MergedEvent,
  NewMusicBloc as NewMusicBlocEvent,
  NewSeedStarted as NewSeedStartedEvent,
  SeedCompleted as SeedCompletedEvent,
  StatusPosted as StatusPostedEvent
} from "../generated/SoundSphereCore/SoundSphereCore"
import {
  CreatingMusicBloc,
  JoinedMusicBloc,
  Merged,
  NewMusicBloc,
  NewSeedStarted,
  SeedCompleted,
  StatusPosted
} from "../generated/schema"

export function handleCreatingMusicBloc(event: CreatingMusicBlocEvent): void {
  let entity = new CreatingMusicBloc(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bloc = event.params.bloc
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleJoinedMusicBloc(event: JoinedMusicBlocEvent): void {
  let entity = new JoinedMusicBloc(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bloc = event.params.bloc
  entity.seedBox = event.params.seedBox
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMerged(event: MergedEvent): void {
  let entity = new Merged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bloc = event.params.bloc
  entity.seedId = event.params.seedId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewMusicBloc(event: NewMusicBlocEvent): void {
  let entity = new NewMusicBloc(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bloc = event.params.bloc
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewSeedStarted(event: NewSeedStartedEvent): void {
  let entity = new NewSeedStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bloc = event.params.bloc
  entity.seed = event.params.seed
  entity.round = event.params.round

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSeedCompleted(event: SeedCompletedEvent): void {
  let entity = new SeedCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.musicBloc = event.params.musicBloc
  entity.seedId = event.params.seedId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStatusPosted(event: StatusPostedEvent): void {
  let entity = new StatusPosted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bloc = event.params.bloc
  entity.message = event.params.message
  entity.author = event.params.author

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

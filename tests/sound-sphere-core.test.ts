import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { CreatingMusicBloc } from "../generated/schema"
import { CreatingMusicBloc as CreatingMusicBlocEvent } from "../generated/SoundSphereCore/SoundSphereCore"
import { handleCreatingMusicBloc } from "../src/sound-sphere-core"
import { createCreatingMusicBlocEvent } from "./sound-sphere-core-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let bloc = Bytes.fromI32(1234567890)
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newCreatingMusicBlocEvent = createCreatingMusicBlocEvent(bloc, creator)
    handleCreatingMusicBloc(newCreatingMusicBlocEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CreatingMusicBloc created and stored", () => {
    assert.entityCount("CreatingMusicBloc", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreatingMusicBloc",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "bloc",
      "1234567890"
    )
    assert.fieldEquals(
      "CreatingMusicBloc",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

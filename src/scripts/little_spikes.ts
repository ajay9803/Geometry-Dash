import LittleSpike from "../models/spikes/little_spike";
import { aboveGround } from "./platforms";

let littleSpikesConfiguration = [
  { x: 500, y: aboveGround, isReverse: false },
  { x: 530, y: aboveGround, isReverse: false },
];

export let littleSpikies = littleSpikesConfiguration.map((spiky) => {
  return new LittleSpike(spiky.x, spiky.y, spiky.isReverse);
});

import LittleSpike from "../models/spikes/little_spike";
import { aboveGround } from "./platforms";

let littleSpikesConfiguration = [
  { x: 500, y: aboveGround, isReverse: false },
  { x: 530, y: aboveGround, isReverse: false },
  { x: 2115, y: aboveGround, isReverse: false },
  { x: 2160, y: aboveGround, isReverse: false },
  { x: 2205, y: aboveGround, isReverse: false },
  { x: 2250, y: aboveGround, isReverse: false },
  { x: 2360, y: aboveGround, isReverse: false },
  { x: 2410, y: aboveGround, isReverse: false },
  { x: 2460, y: aboveGround, isReverse: false },
  { x: 2510, y: aboveGround, isReverse: false },
  { x: 4000, y: aboveGround, isReverse: false },
  { x: 4050, y: aboveGround, isReverse: false },
  { x: 4100, y: aboveGround, isReverse: false },
  { x: 4150, y: aboveGround, isReverse: false },
  { x: 4200, y: aboveGround, isReverse: false },
  { x: 4700, y: aboveGround, isReverse: false },
  { x: 4750, y: aboveGround, isReverse: false },
  { x: 4800, y: aboveGround, isReverse: false },
  { x: 4850, y: aboveGround, isReverse: false },
  { x: 5380, y: aboveGround, isReverse: false },
  { x: 5430, y: aboveGround, isReverse: false },
  { x: 5480, y: aboveGround, isReverse: false },
  { x: 5530, y: aboveGround, isReverse: false },
  { x: 5580, y: aboveGround, isReverse: false },
  { x: 5630, y: aboveGround, isReverse: false },
  { x: 5680, y: aboveGround, isReverse: false },
  { x: 5730, y: aboveGround, isReverse: false },
  { x: 5780, y: aboveGround, isReverse: false },
  { x: 5830, y: aboveGround, isReverse: false },
  { x: 5880, y: aboveGround, isReverse: false },
  { x: 5930, y: aboveGround, isReverse: false },
  { x: 5980, y: aboveGround, isReverse: false },
  { x: 6030, y: aboveGround, isReverse: false },
  { x: 6080, y: aboveGround, isReverse: false },
  { x: 6130, y: aboveGround, isReverse: false },
  { x: 6180, y: aboveGround, isReverse: false },
  { x: 6230, y: aboveGround, isReverse: false },
  { x: 6280, y: aboveGround, isReverse: false },
  { x: 6330, y: aboveGround, isReverse: false },
  { x: 6380, y: aboveGround, isReverse: false },
  { x: 6430, y: aboveGround, isReverse: false },
  { x: 6480, y: aboveGround, isReverse: false },
  { x: 6530, y: aboveGround, isReverse: false },
  { x: 6580, y: aboveGround, isReverse: false },
  { x: 6630, y: aboveGround, isReverse: false },
  { x: 6680, y: aboveGround, isReverse: false },
  { x: 6730, y: aboveGround, isReverse: false },
  { x: 6780, y: aboveGround, isReverse: false },
  { x: 6830, y: aboveGround, isReverse: false },
  { x: 6880, y: aboveGround, isReverse: false }, //lets see
  { x: 9550, y: aboveGround, isReverse: false },
  { x: 9600, y: aboveGround, isReverse: false },
  { x: 9650, y: aboveGround, isReverse: false },
  { x: 9700, y: aboveGround, isReverse: false },
  { x: 9750, y: aboveGround, isReverse: false },
  { x: 9800, y: aboveGround, isReverse: false },
  { x: 9850, y: aboveGround, isReverse: false },
  { x: 9900, y: aboveGround, isReverse: false },
  { x: 9950, y: aboveGround, isReverse: false },
  { x: 10000, y: aboveGround, isReverse: false },
  { x: 10050, y: aboveGround, isReverse: false },
  { x: 10100, y: aboveGround, isReverse: false },
  { x: 10150, y: aboveGround, isReverse: false },
  { x: 10200, y: aboveGround, isReverse: false },
  { x: 10250, y: aboveGround, isReverse: false },
  { x: 10300, y: aboveGround, isReverse: false },
  { x: 10350, y: aboveGround, isReverse: false },
  { x: 10400, y: aboveGround, isReverse: false },
  { x: 10450, y: aboveGround, isReverse: false },
  { x: 10500, y: aboveGround, isReverse: false },
  { x: 10550, y: aboveGround, isReverse: false },
  { x: 10600, y: aboveGround, isReverse: false },
  { x: 10650, y: aboveGround, isReverse: false },
  { x: 10700, y: aboveGround, isReverse: false },
  { x: 10750, y: aboveGround, isReverse: false },
  { x: 10800, y: aboveGround, isReverse: false },
  { x: 10850, y: aboveGround, isReverse: false },
  { x: 10900, y: aboveGround, isReverse: false },
  { x: 10950, y: aboveGround, isReverse: false },
  { x: 11000, y: aboveGround, isReverse: false },
  { x: 11050, y: aboveGround, isReverse: false },
  { x: 11100, y: aboveGround, isReverse: false },
  { x: 11150, y: aboveGround, isReverse: false },
  { x: 11200, y: aboveGround, isReverse: false },
  { x: 11250, y: aboveGround, isReverse: false },
  { x: 11300, y: aboveGround, isReverse: false },
  { x: 11350, y: aboveGround, isReverse: false },
  { x: 11400, y: aboveGround, isReverse: false },
  { x: 11450, y: aboveGround, isReverse: false },
  { x: 11500, y: aboveGround, isReverse: false },
  { x: 11550, y: aboveGround, isReverse: false },
  { x: 11600, y: aboveGround, isReverse: false },
  { x: 11650, y: aboveGround, isReverse: false },
  { x: 11700, y: aboveGround, isReverse: false },
  { x: 11750, y: aboveGround, isReverse: false },
  { x: 11800, y: aboveGround, isReverse: false },
  { x: 11850, y: aboveGround, isReverse: false },
  { x: 11900, y: aboveGround, isReverse: false },
  { x: 11950, y: aboveGround, isReverse: false },
  { x: 20220, y: aboveGround, isReverse: false },
  { x: 20170, y: aboveGround, isReverse: false },
  { x: 20220, y: aboveGround, isReverse: false },
  { x: 20270, y: aboveGround, isReverse: false },
  { x: 20320, y: aboveGround, isReverse: false },
  { x: 20420, y: aboveGround, isReverse: false },
  { x: 20470, y: aboveGround, isReverse: false },
  { x: 20520, y: aboveGround, isReverse: false },
  { x: 20570, y: aboveGround, isReverse: false },
  { x: 20670, y: aboveGround, isReverse: false },
  { x: 20720, y: aboveGround, isReverse: false },
  { x: 20920, y: aboveGround, isReverse: false },
  { x: 20970, y: aboveGround, isReverse: false },
  // { x: 21020, y: aboveGround, isReverse: false },
  { x: 21330, y: aboveGround, isReverse: false },
  { x: 21380, y: aboveGround, isReverse: false },
  { x: 21430, y: aboveGround, isReverse: false },
  { x: 21480, y: aboveGround, isReverse: false },
  { x: 21530, y: aboveGround, isReverse: false },
  { x: 21630, y: aboveGround, isReverse: false },
  { x: 21680, y: aboveGround, isReverse: false },
  { x: 21730, y: aboveGround, isReverse: false },
  { x: 21780, y: aboveGround, isReverse: false },
  { x: 21880, y: aboveGround, isReverse: false },
  { x: 21930, y: aboveGround, isReverse: false },
  { x: 21980, y: aboveGround, isReverse: false },
  { x: 22030, y: aboveGround, isReverse: false },
  { x: 22130, y: aboveGround, isReverse: false },
  { x: 22180, y: aboveGround, isReverse: false },
  { x: 22230, y: aboveGround, isReverse: false },
  { x: 22380, y: aboveGround, isReverse: false },
  { x: 22430, y: aboveGround, isReverse: false },
  { x: 22480, y: aboveGround, isReverse: false },
  { x: 22580, y: aboveGround, isReverse: false },
  { x: 22630, y: aboveGround, isReverse: false },
  { x: 22680, y: aboveGround, isReverse: false },
  { x: 22730, y: aboveGround, isReverse: false },
  { x: 22830, y: aboveGround, isReverse: false },
  { x: 22880, y: aboveGround, isReverse: false },
  { x: 22930, y: aboveGround, isReverse: false },
  { x: 22980, y: aboveGround, isReverse: false },
  { x: 23060, y: aboveGround, isReverse: false },
  { x: 23110, y: aboveGround, isReverse: false },
  { x: 23160, y: aboveGround, isReverse: false },
  { x: 23210, y: aboveGround, isReverse: false },
  { x: 23260, y: aboveGround, isReverse: false },
  { x: 23310, y: aboveGround, isReverse: false },
  { x: 23360, y: aboveGround, isReverse: false },
  { x: 23410, y: aboveGround, isReverse: false },
  { x: 23460, y: aboveGround, isReverse: false },
  { x: 23510, y: aboveGround, isReverse: false },
  { x: 23560, y: aboveGround, isReverse: false },
  { x: 23610, y: aboveGround, isReverse: false },
  { x: 23660, y: aboveGround, isReverse: false },
  { x: 23760, y: aboveGround, isReverse: false },

  { x: 23810, y: aboveGround, isReverse: false },
  { x: 23860, y: aboveGround, isReverse: false },
  { x: 25570, y: aboveGround, isReverse: false },
  { x: 25620, y: aboveGround, isReverse: false },
  { x: 25670, y: aboveGround, isReverse: false },
  { x: 25720, y: aboveGround, isReverse: false },
  { x: 25770, y: aboveGround, isReverse: false },
  { x: 25820, y: aboveGround, isReverse: false },
  { x: 25870, y: aboveGround, isReverse: false },
  { x: 25920, y: aboveGround, isReverse: false },
  { x: 25970, y: aboveGround, isReverse: false },
  { x: 26020, y: aboveGround, isReverse: false },
  { x: 26070, y: aboveGround, isReverse: false },
  { x: 26120, y: aboveGround, isReverse: false },
  { x: 26170, y: aboveGround, isReverse: false },
  { x: 26220, y: aboveGround, isReverse: false },
  { x: 27450, y: aboveGround, isReverse: false },
  { x: 27500, y: aboveGround, isReverse: false },
  { x: 27550, y: aboveGround, isReverse: false },
  { x: 27600, y: aboveGround, isReverse: false },
  { x: 27700, y: aboveGround, isReverse: false },
  { x: 27750, y: aboveGround, isReverse: false },
  { x: 27800, y: aboveGround, isReverse: false },
  { x: 27850, y: aboveGround, isReverse: false },
  { x: 27950, y: aboveGround, isReverse: false },
  { x: 28000, y: aboveGround, isReverse: false },
  { x: 28050, y: aboveGround, isReverse: false },
  { x: 28100, y: aboveGround, isReverse: false },
  { x: 28200, y: aboveGround, isReverse: false },
  { x: 28250, y: aboveGround, isReverse: false },
  { x: 28300, y: aboveGround, isReverse: false },
  { x: 28350, y: aboveGround, isReverse: false },
  { x: 28400, y: aboveGround, isReverse: false },
  { x: 28450, y: aboveGround, isReverse: false },
  { x: 28500, y: aboveGround, isReverse: false },
  { x: 28550, y: aboveGround, isReverse: false },
  { x: 28600, y: aboveGround, isReverse: false },
  { x: 28650, y: aboveGround, isReverse: false },
  { x: 29900, y: aboveGround, isReverse: false },
  { x: 29950, y: aboveGround, isReverse: false },
  { x: 30000, y: aboveGround, isReverse: false },
  { x: 30050, y: aboveGround, isReverse: false },
  { x: 30100, y: aboveGround, isReverse: false },
  { x: 30150, y: aboveGround, isReverse: false },
  { x: 30200, y: aboveGround, isReverse: false },
  { x: 30250, y: aboveGround, isReverse: false },
  { x: 30300, y: aboveGround, isReverse: false },
  { x: 30350, y: aboveGround, isReverse: false },
  { x: 30400, y: aboveGround, isReverse: false },
  { x: 30450, y: aboveGround, isReverse: false },
  { x: 30500, y: aboveGround, isReverse: false },
  { x: 30550, y: aboveGround, isReverse: false },
  { x: 30600, y: aboveGround, isReverse: false },
  { x: 30650, y: aboveGround, isReverse: false },
  { x: 30700, y: aboveGround, isReverse: false },
  { x: 30750, y: aboveGround, isReverse: false },
  { x: 30800, y: aboveGround, isReverse: false },
  { x: 30850, y: aboveGround, isReverse: false },
  { x: 30850, y: aboveGround, isReverse: false },
  { x: 30900, y: aboveGround, isReverse: false },
  { x: 30950, y: aboveGround, isReverse: false },
  { x: 31000, y: aboveGround, isReverse: false },
  { x: 31050, y: aboveGround, isReverse: false },
  { x: 31100, y: aboveGround, isReverse: false },
  { x: 31150, y: aboveGround, isReverse: false },
  { x: 31200, y: aboveGround, isReverse: false },
  { x: 31250, y: aboveGround, isReverse: false },
  { x: 31300, y: aboveGround, isReverse: false },
  { x: 31350, y: aboveGround, isReverse: false },
  { x: 31400, y: aboveGround, isReverse: false },
  { x: 31450, y: aboveGround, isReverse: false },
  { x: 31500, y: aboveGround, isReverse: false },
  { x: 31550, y: aboveGround, isReverse: false },
  { x: 31600, y: aboveGround, isReverse: false },
  { x: 31650, y: aboveGround, isReverse: false },
  { x: 32150, y: aboveGround, isReverse: false },
  { x: 32200, y: aboveGround, isReverse: false },
  { x: 32250, y: aboveGround, isReverse: false },
  { x: 32300, y: aboveGround, isReverse: false },
  { x: 32350, y: aboveGround, isReverse: false },
  { x: 32400, y: aboveGround, isReverse: false },
  { x: 32450, y: aboveGround, isReverse: false },
  { x: 32500, y: aboveGround, isReverse: false },
  { x: 32550, y: aboveGround, isReverse: false },
  { x: 32600, y: aboveGround, isReverse: false },
  { x: 32650, y: aboveGround, isReverse: false },
  { x: 32700, y: aboveGround, isReverse: false },
  // { x: 32750, y: aboveGround, isReverse: false },
  { x: 32800, y: aboveGround - 550, isReverse: true },
  { x: 32850, y: aboveGround - 550, isReverse: true },
  { x: 32900, y: aboveGround - 550, isReverse: true },
  { x: 32950, y: aboveGround - 550, isReverse: true },
  { x: 33000, y: aboveGround - 550, isReverse: true },
  { x: 33050, y: aboveGround - 550, isReverse: true },
  { x: 33100, y: aboveGround - 550, isReverse: true },
  { x: 33150, y: aboveGround - 550, isReverse: true },
  { x: 33200, y: aboveGround - 550, isReverse: true },
  { x: 33250, y: aboveGround - 550, isReverse: true },
  { x: 33300, y: aboveGround - 550, isReverse: true },
  { x: 33350, y: aboveGround - 550, isReverse: true },
  { x: 33400, y: aboveGround - 550, isReverse: true },
  { x: 33450, y: aboveGround - 550, isReverse: true },
  { x: 33500, y: aboveGround - 550, isReverse: true },
  { x: 33550, y: aboveGround - 550, isReverse: true },
  { x: 33600, y: aboveGround - 550, isReverse: true },
  { x: 33650, y: aboveGround - 550, isReverse: true },
  { x: 33700, y: aboveGround - 550, isReverse: true },
  { x: 33750, y: aboveGround - 550, isReverse: true },
  { x: 33800, y: aboveGround - 550, isReverse: true },
  { x: 33850, y: aboveGround - 550, isReverse: true },
  { x: 33900, y: aboveGround - 550, isReverse: true },
  { x: 33950, y: aboveGround - 550, isReverse: true },
  { x: 34500, y: aboveGround - 550, isReverse: true },
  { x: 34550, y: aboveGround - 550, isReverse: true },
  { x: 34600, y: aboveGround - 550, isReverse: true },
  { x: 34650, y: aboveGround - 550, isReverse: true },
  { x: 34700, y: aboveGround - 550, isReverse: true },
  { x: 34750, y: aboveGround - 550, isReverse: true },
  { x: 34800, y: aboveGround - 550, isReverse: true },
  { x: 34850, y: aboveGround - 550, isReverse: true },
  { x: 34900, y: aboveGround - 550, isReverse: true },
  { x: 34950, y: aboveGround - 550, isReverse: true },
  { x: 35000, y: aboveGround - 550, isReverse: true },
  { x: 35050, y: aboveGround - 550, isReverse: true },
  { x: 35100, y: aboveGround - 550, isReverse: true },
  { x: 35150, y: aboveGround - 550, isReverse: true },
  { x: 35200, y: aboveGround - 550, isReverse: true },
  { x: 35250, y: aboveGround - 550, isReverse: true },
  { x: 35300, y: aboveGround - 550, isReverse: true },
  { x: 35350, y: aboveGround - 550, isReverse: true },
  { x: 35400, y: aboveGround - 550, isReverse: true },
  { x: 35450, y: aboveGround - 550, isReverse: true },
  { x: 35500, y: aboveGround - 550, isReverse: true },
  { x: 35550, y: aboveGround - 550, isReverse: true },
  { x: 35600, y: aboveGround - 550, isReverse: true },
  { x: 35650, y: aboveGround - 550, isReverse: true },
  { x: 35700, y: aboveGround - 550, isReverse: true },
  { x: 35750, y: aboveGround - 550, isReverse: true },
  { x: 35800, y: aboveGround - 550, isReverse: true },
  { x: 35850, y: aboveGround - 550, isReverse: true },
  { x: 35900, y: aboveGround - 550, isReverse: true },
  { x: 35950, y: aboveGround - 550, isReverse: true },
  { x: 36000, y: aboveGround - 550, isReverse: true },
  { x: 36050, y: aboveGround - 550, isReverse: true },
  { x: 36100, y: aboveGround - 550, isReverse: true },
  { x: 36150, y: aboveGround - 550, isReverse: true },
  { x: 36200, y: aboveGround - 550, isReverse: true },
  { x: 36250, y: aboveGround - 550, isReverse: true },
  { x: 36300, y: aboveGround - 550, isReverse: true },
  { x: 36350, y: aboveGround - 550, isReverse: true },
  { x: 36400, y: aboveGround - 550, isReverse: true },
  { x: 36450, y: aboveGround - 550, isReverse: true },
  { x: 36500, y: aboveGround - 550, isReverse: true },
  { x: 36550, y: aboveGround - 550, isReverse: true },
  { x: 36600, y: aboveGround - 550, isReverse: true },
  { x: 36650, y: aboveGround - 550, isReverse: true },
  { x: 36700, y: aboveGround - 550, isReverse: true },
  // { x: 36750, y: aboveGround - 550, isReverse: true },

  // { x: 28700, y: aboveGround, isReverse: false },
  // { x: 26270, y: aboveGround, isReverse: false },
];

export let littleSpikies = littleSpikesConfiguration.map((spiky) => {
  return new LittleSpike(spiky.x, spiky.y, spiky.isReverse);
});

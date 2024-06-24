import Propeller from "../models/propeller";
import { aboveGround } from "./platforms";

export let propellers: Propeller[] = [];

const propeller1 = new Propeller(600, aboveGround, "gold");
const propeller2 = new Propeller(32100, aboveGround, "gold");

propellers = [propeller1, propeller2];

import * as yargs from "yargs";

import { respond, respondDM } from "../message-handler";
import { Message } from "../discord-mock";

export const command = "char <command>";
export const aliases: string[] = [];
export const describe = "Create and manage characters";
export const builder = (yargs: yargs.Argv) => {
	// extensions option 'ts' for when it's run under test
	return yargs.commandDir("char", { extensions: ['js', 'ts'] });
};
export async function handler(argv: yargs.Arguments) {};
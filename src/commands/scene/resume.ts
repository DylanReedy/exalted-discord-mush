import * as yargs from "yargs";

import { Message, respond, respondDM } from "../../message-handler";
import { Database } from "../../persistence";

export const command = "resume <scene_id>";
export const aliases: string[] = [];
export const describe = "resume a scene";
export const builder = (yargs: yargs.Argv) => {
	(<any>yargs).positional("scene_id", {
		describe: "the scene id",
		type: "number"
	});
};
export async function handler(argv: yargs.Arguments) {
	try {
		await resume(argv.db, argv.message, argv.scene_id);
		argv.resolve();
	} catch (error) {
		await respond(argv.message, error);
		argv.resolve();
	}
};

export async function resume(db: Database, message: Message, scene_id: number) {
	throw Error("unimplemented");
}

export default resume;
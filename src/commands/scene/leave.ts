import * as yargs from "yargs";

import { Context, respond, respondDM } from "../../message-handler";
import { Message } from "../../discord-mock";
import sceneManager from "../../scene-manager";

export const command = "leave <scene_id> <char_name>";
export const aliases: string[] = [];
export const describe = "Leave a scene";
export const builder = (yargs: yargs.Argv) => {
	(<any>yargs).positional("scene_id", {
		describe: "the scene id",
		type: "number"
	}).positional("char_name", {
		describe: "the character name or id",
		type: "string"
	});
};
export async function handler(argv: yargs.Arguments) {
	try {
		await leave(argv.context, argv.message, argv.scene_id, argv.char_name);
		argv.resolve();
	} catch (error) {
		await respond(argv.message, error);
		argv.resolve();
	}
};

export async function leave(context: Context, message: Message, scene_id: number, char_name: string) {
	if (message.channel.type !== "text") throw Error(`Scenes can only exist in one of the public channels.`);
	const char = await context.db.getCharacter(char_name);
	await sceneManager.leave(scene_id, char);
	await respond(message, `${char.name} left scene ${scene_id}.`);
}

export default leave;
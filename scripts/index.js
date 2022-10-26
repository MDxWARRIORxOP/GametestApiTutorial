import { world } from "@minecraft/server";

// whenever someone sends a msg, just repeat it.
world.events.beforeChat.subscribe((event) => {
  world.say(event.message);
});

// whenever someone breaks a block, just say the name of the block.
world.events.blockBreak.subscribe((event) => {
  world.say(event.block.type.id);
});

// whenever theres an explosion, just say the source of it.
world.events.beforeExplosion.subscribe((event) => {
  world.say(event.source.id);
  world.say("BOOM!");
});

// whenever someone places a block, just say the name of the block.
world.events.blockPlace.subscribe((event) => {
  world.say(event.block.type.id);
});

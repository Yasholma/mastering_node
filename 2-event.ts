import * as EventEmitter from "events";

// const eventEmitter = new EventEmitter();

// function listener(data: string): void {
//   console.log(`Playing => "${data}"`);
// }
// eventEmitter.on("play", listener);
// eventEmitter.emit("play", "Ice Prince Kolo");
// eventEmitter.removeListener("play", listener);
// eventEmitter.emit("play", "Kolo");
// eventEmitter.on("play", function (data: string) {
//   console.log(`Playing => "${data}"`);
// });
// eventEmitter.emit("play", "Ice Prince Kolo");
// eventEmitter.removeAllListeners("play");
// eventEmitter.emit("play", "Kolo");

// eventEmitter.on("event1", function () {
//   setTimeout(() => {
//     console.log("Event One");
//     eventEmitter.emit("event2");
//   });
// });

// eventEmitter.on("event2", function () {
//   setTimeout(() => {
//     console.log("Event Two");
//     eventEmitter.emit("event3");
//   });
// });

// eventEmitter.on("event3", function () {
//   setImmediate(() => {
//     console.log("Event Three");
//     eventEmitter.emit("event1");
//   });
// });

// eventEmitter.emit("event1");

class MyEventEmitter extends EventEmitter {
  counter = 0;
}

const myEventEmitter = new MyEventEmitter();

// call the event just once
myEventEmitter.once("count", function () {
  console.log(`Count: ${this.counter++}`);
});

myEventEmitter.emit("count");
myEventEmitter.emit("count"); // ignored
myEventEmitter.emit("count"); // ignored

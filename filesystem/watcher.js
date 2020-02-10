"use strict";

const fs = require("fs");

fs.watch("target.txt", () => console.log("Lia I Miss You!"));

console.log("Now watching target.txt for changes...");

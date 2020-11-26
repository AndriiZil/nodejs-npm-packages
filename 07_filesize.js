const filesize = require('filesize');

console.log(filesize(500));                        // "500 B"
console.log(filesize(500, {bits: true}));         // "4 Kb"
console.log(filesize(265318, {base: 10}));         // "265.32 kB"
console.log(filesize(265318));                     // "259.1 KB"
console.log(filesize(265318, {round: 0}));         // "259 KB"
console.log(filesize(265318, {output: "array"}))  // [259.1, "KB"]
console.log(filesize(265318, {output: "object"})); // {value: 259.1, symbol: "KB", exponent: 1}
console.log(filesize(1, {symbols: {B: "Б"}}));     // "1 Б"
console.log(filesize(1024))                      // "1 KB"
console.log(filesize(1024, {exponent: 0}));      // "1024 B"
console.log(filesize(1024, {output: "exponent"})); // 1
console.log(filesize(265318, {standard: "iec"}));  // "259.1 KiB"
console.log(filesize(265318, {standard: "iec", fullform: true})); // "259.1 kibibytes"
console.log(filesize(12, {fullform: true, fullforms: ["байтов"]}));  // "12 байтов"
console.log(filesize(265318, {separator: ","}));   // "259,1 KB"
console.log(filesize(265318, {locale: "de"}));   // "259,1 KB"

const dotenv = require('dotenv');

const result = dotenv.config(); // dotenv.config({ path: '../../' })

console.log(process.env.PORT);

if (result.error) {
    throw result.error;
}

console.log(result.parsed); // { PORT: '3000' }
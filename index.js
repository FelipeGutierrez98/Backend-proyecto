const express = require('express');
const app = express();
app.use(express.json());
port = 2000;
app.listen(port, () => {
	console.log(`la funcion se ejcuta en el puerto ${port}`);
});

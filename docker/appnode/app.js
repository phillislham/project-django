const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({ host: 'redis-server', port: 6379 });

redisClient.set('visitas', 0);

app.get('/', (req, res) => {
  redisClient.get('visitas', (error, visitas) => {
    const v = parseInt(visitas) + 1;
    redisClient.set('visitas', v);
    res.send(`Esta app ha sido visitada ${v}`);
  });
});

app.listen(8000, () => console.log('App corriendo en puerto 8000'));
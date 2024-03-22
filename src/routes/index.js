import express from 'express';

const router = express.Router();

router.get('/data', async (req, res) => {
  const city = req.query;

  const data = await fetch(`
    https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${process.env.APIKEY}`);
  const data1 = await data.json();
  return res.json(data1);
});

router.get('/data/bylatandlon', async (req, res) => {
  const { lat, lon } = req.query;
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.APIKEY}`
  );
  const data1 = await data.json();
  return res.json(data1);
});

export default router;

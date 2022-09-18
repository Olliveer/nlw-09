import cors from 'cors';
import express, { Request, Response } from 'express';
import { prisma } from './database/prisma';
import { convertHoursToMinutes } from './utils/convert-hours-to-minutes';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/games/:id/ads', async (request: Request, response: Response) => {
  const { id } = request.params;
  const {
    name,
    yearsPlaying,
    discord,
    weekDays,
    hourStart,
    hourEnd,
    userVoiceChannel,
  } = request.body;

  console.log(request.body);

  const ad = await prisma.ad.create({
    data: {
      name,
      yearsPlaying,
      discord,
      weekDays: weekDays.join(','),
      hourStart: convertHoursToMinutes(hourStart),
      hourEnd: convertHoursToMinutes(hourEnd),
      userVoiceChannel,
      gameId: id,
    },
  });

  response.status(201).json({ message: ` Ad created: ${ad.name}` });
});

app.get('/games', async (request: Request, response: Response) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return response.json(games);
});

app.get('/ads', async (request: Request, response: Response) => {
  const ads = await prisma.ad.findMany({});

  response.json(ads);
});

app.get('/games/:id/ads', async (request: Request, response: Response) => {
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      userVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedResult = ads.map((ad) => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
    };
  });

  response.json(formattedResult);
});

app.get('/ads/:id/discord', async (request: Request, response: Response) => {
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    where: {
      id: adId,
    },
    select: {
      discord: true,
    },
  });

  response.json({ discord: ad.discord });
});

app.listen(3333, () => {
  console.log('SERVER RUNNING');
});

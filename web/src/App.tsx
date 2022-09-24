import { MagnifyingGlassPlus } from 'phosphor-react';
import './styles/main.css';

import logoImg from './assets/logo-nlw.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
<div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
  <strong className="font-bold text-white block">League of Legends</strong>
  <span className="text-zinc-300 text-sm block ">4 anúncios</span>
</div>;

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20 ">
        Seu{' '}
        <span className="bg-nlw-gradient text-transparent bg-clip-text ">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner title="League of Legends" bannerUrl="/1.png" adsCount={1} />
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;

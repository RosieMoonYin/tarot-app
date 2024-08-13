import tarotIcon from "../assets/icon.png";
const Header = () => {
  return (
    <header className="text-center p-4 text-white">
      <img
        src={tarotIcon}
        alt="Tarot Icon"
        className="w-12 h-12 mr-2"
        onClick={() => window.location.reload()}
      />
      <h1 className="text-5xl font-semibold mb-4">Mystic Tarot</h1>
      <p className="text-lg text-slate-300 text-left">
        Welcome to Mystic Tarot, where the ancient wisdom of the cards meets the
        infinite potential of the digital age. Step into a world where intuition
        and insight guide your journey, and the whispers of the universe become
        clear. Whether you're seeking answers, inspiration, or a glimpse into
        the future, our cards are here to reveal the mysteries that lie within.
        Let the magic of the Tarot illuminate your path, and may every reading
        bring you closer to your true self. Embrace the enchantment and let the
        journey begin.
      </p>
    </header>
  );
};

export default Header;

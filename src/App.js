import Header from "./component/Layout/Header/Header";
import Favicon from "react-favicon";
import favicon from "./assets/favicon/favicon.png";

import Explanation from "./component/Layout/Explanation/Explanation";
import CryptoBox from "./component/Donate/DonateBox/CryptoBox";
import NFTBox from "./component/Donate/DonateBox/NFTBox";
import Footer from "./component/Layout/Footer/Footer";

const cryptos = [
  {
    id: "btc",
    img: require("./assets/Donate/btc.png"),
    adress: "bc1qr4jdyjvk5zq6x02vsfek9tfpa6tgykcwntp38r",
  },
  {
    id: "bnb",
    img: require("./assets/Donate/bnb.png"),
    adress: "bnb",
  },
  {
    id: "eth",
    img: require("./assets/Donate/eth.png"),
    adress: "eth",
  },
  {
    id: "ltc",
    img: require("./assets/Donate/ltc.png"),
    adress: "ltc",
  },
  {
    id: "tron",
    img: require("./assets/Donate/tron.png"),
    adress: "tron",
  },
];
const nfts = [
  {
    id: 1,
    img: "https://s3.amazonaws.com/ganbreederpublic/imgs/d62f109f695b001b4ee8b22bd77b.jpeg",
    title: "God On me",
  },
  {
    id: 2,
    img: "https://s3.amazonaws.com/ganbreederpublic/hires/5b52b39399eefdc3.jpeg",
    title: "Where is Your God",
  },
  {
    id: 3,
    img: "https://artbreeder.b-cdn.net/imgs/2c95c1b8a135d00378b1a475a358.jpeg",
    title: "I'm here",
  },
  {
    id: 4,
    img: "https://artbreeder.b-cdn.net/imgs/4af5574f7c60696f9e15e7beed2b.jpeg",
    title: "Space Moon",
  },
  {
    id: 5,
    img: "https://artbreeder.b-cdn.net/imgs/993e461c3389840c4f6bc2eefe09.jpeg",
    title: "Welcome to Hell",
  },
  {
    id: 6,
    img: "https://artbreeder.b-cdn.net/imgs/53bb5a15a271bc3e3877694dc425.jpeg",
    title: "Let some Mistake",
  },
  {
    id: 7,
    img: "https://artbreeder.b-cdn.net/imgs/9484b0112e7b3c33e003a0412eca.jpeg",
    title: "Welcome to Hell",
  },
  {
    id: 8,
    img: "https://artbreeder.b-cdn.net/imgs/4f0caff024936e39f2e529eeb08a.jpeg",
    title: "Welcome to Hell",
  },
];
function App() {

  return (
    <div>
      <Favicon url={favicon} />
      <Header />
      <Explanation
        explanation="Unique pictures produced with the help of artificial intelligence.
             It has been converted to nft, the technology of the future, and offered for sale to you."
        title="Buy NFT For THE future?"
      />
      <NFTBox item={nfts} link={"Buy This NFT"} />
      <Explanation
        title="Donate to the crypto exchange of the future"
        explanation="Support us in this project that we are working on so that the trust of you users is at the top. Look forward to this decentralized and self-powered exchange.

"
      />
      <CryptoBox item={cryptos} link={"Copy Adress"} />
      <Footer />
      


    </div>
  );
}

export default App;

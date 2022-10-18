import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Komfort Taksi | Taksi Kėdainiuose | 24/7</title>
        <meta
          name="description"
          content="Vienas iš
          komfortiškiausių taksi Kėdainių mieste ir rajone."
          key="desc"
        />
        <meta
          property="og:description"
          content="Vienas iš
          komfortiškiausių taksi Kėdainių mieste ir rajone."
        />
      </Head>
      <div className="container">
        <aside className="aside">
          <h1>Taksi Komfort</h1>
          <h2>
            Darbo laikas - <span className="highlight">24/7</span>
          </h2>
          <p className="description">
            Kodėl būtent Komfort Taksi? Todėl, kad tai vienas iš
            komfortiškiausių taksi Kėdainių mieste ir rajone, vairuojame naujus,
            techniškai tvarkingus automobilius. Vairuotojai nuolat pasitempę,
            mandagūs ir 24 valandas per parą pasiruošę jus pristatyti iš taško A
            į tašką B.
          </p>
          <p>
            Taksi stovėjimo aikštelė –{" "}
            <span className="highlight">
              J. Basanavičiaus g. 89C (šalia autobusų stoties)
            </span>
            .
          </p>
          <ul>
            <li>Pasitinkame svečius oro uostuose, stotyse ar kt.</li>
            <li>Parvairuojame Jūsų automobilį po vakarėlio</li>
            <li>
              Pervežame keleivius mieste, rajone, Lietuvoje ir už jos ribų
            </li>
            <li>Vežame vaikus į ir iš mokyklos ar būrelių</li>
            <li>Pervežame nedidelius krovinius</li>
            <li>Priimame išankstinius užsakymus</li>
            <li>Kokybės telefonas - 8 670 39299</li>
          </ul>
          <span>
            El. paštas: <span className="highlight">gintautask5@gmail.com</span>
          </span>
          <p>
            Įmonės kodas: <span className="highlight">312809</span>
          </p>
        </aside>
        <article className="article">(8 615) 52225</article>
      </div>
    </>
  );
};

export default Home;

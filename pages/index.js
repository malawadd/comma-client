import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import sudokuImage from "../assets/sudoku.png";
import Link from "next/link";
import GameList from "../components/gameList";

export default function Home() {
  return (
    <div>
      <span className="flex justify-center items-center mb-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-slate-300 via-cyan-100 to-cyan-500">
        challenge yourself and earn NFTs
      </span>
      <div>
        <GameList />
      </div>
    </div>
  );
}

import React from "react";
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard'
import WelcomePage from './components/WelcomePage'

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <WelcomePage />
      <CharacterCard />

    </main>
  );
}

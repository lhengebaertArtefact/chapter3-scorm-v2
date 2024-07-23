import React from "react";
import { MiniGameObjective } from "../types/Objective";

const MiniGame = ({ objective }: { objective: MiniGameObjective }) => {
  return (
    <div className="mini-game-container">
      <p>{objective.content}</p>
      {/* Ajouter ici la logique du mini-jeu */}
    </div>
  );
};

export default MiniGame;

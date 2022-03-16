import React from "react";
import { FiX } from "react-icons/fi";

//* ajouter possibilite de changer la croi de fermeture  + boolean pour afficher  la form ou non + pouvoir annuler ou non l'animation

export const PopUp = (props) => {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-purple-900/50">
      <div className="relative p-6 w-full max-w-xl bg-white rounded-xl border-4 border-purple-500 shadow-lg shadow-purple-500 animate-bounce">
        <button
          className="absolute right-4 top-4 text-3xl text-purple-500 font-extrabold "
          onClick={() => props.setTrigger(false)}
        >
          <FiX />
        </button>
        {props.children}
      </div>
    </div>
  ) : null;
};

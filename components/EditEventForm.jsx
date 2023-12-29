"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditEventForm({ id , title, game, location, date, registPrice, prize, contact }) {

  const [newTitle, setNewTitle] = useState(title);
  const [newGame, setNewGame] = useState(game);
  const [newLocation, setNewLocation] = useState(location);
  const [newDate, setNewDate] = useState(date);
  const [newRegistPrice, setNewRegistPrice] = useState(registPrice);
  const [newPrize, setNewPrize] = useState(prize);
  const [newContact, setNewContact] = useState(contact);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch(`https://aesthetic-souffle-c21755.netlify.app/api/events/${id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newGame, newLocation, newDate, newRegistPrice, newPrize, newContact }),
        });
        if(!res.ok){
          throw new Error("Failed to update event");
        }

        router.refresh();
        router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input
      onChange={(e) => setNewTitle(e.target.value)}
      value={newTitle}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Event Title"
    />
    
    <input
      onChange={(e) => setNewGame(e.target.value)}
      value={newGame}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Name Game"
    />

    <input
      onChange={(e) => setNewLocation(e.target.value)}
      value={newLocation}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Location"
    />

    <input
      onChange={(e) => setNewDate(e.target.value)}
      value={newDate}
      className="border border-slate-500 px-8 py-2"
      type="date"
      placeholder="Event Date"
    />

    <input
      onChange={(e) => setNewRegistPrice(e.target.value)}
      value={newRegistPrice}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Rp. "
    />

    <input
      onChange={(e) => setNewPrize(e.target.value)}
      value={newPrize}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Event Prize"
    />

    <input
      onChange={(e) => setNewContact(e.target.value)}
      value={newContact}
      className="border border-slate-500 px-8 py-2"
      type="text"
      placeholder="Name Game"
    />
    
    <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-sm w-fit">Update Event</button>
  </form>
  );
}
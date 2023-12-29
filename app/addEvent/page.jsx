"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AddEvent( ) {
    const [title, setTitle] = useState("");
    const [game, setGame] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [registPrice, setRegistPrice] = useState("");
    const [prize, setPrize] = useState("");
    const [contact, setContact] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !location || !game || !date || !prize || !registPrice || !contact){
            alert("Title and description are required.");
            return;
        }

        try{
            const res = await fetch("https://aesthetic-souffle-c21755.netlify.app/api/events",{
                method: "POST",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify({title, game, location, date, registPrice, prize, contact}),
            });

            if(res.ok){
                router.push('/');
            }else{
                throw new Error("Failed to create a event");
            }

        }catch (error){
            console.log(error);
        }
    }

    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Event Title"
        />

        <input
            onChange={(e) => setGame(e.target.value)}
            value={game}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Name Game"
        />
        
        <input
            onChange={(e) => setLocation (e.target.value)}
            value={location}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Location"
        />

        <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className="border border-slate-500 px-8 py-2"
            type="date"
            placeholder="Event Date"
        />

        <input
            onChange={(e) => setRegistPrice(e.target.value)}
            value={registPrice}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Rp. "
        />

        <input
            onChange={(e) => setPrize(e.target.value)}
            value={prize}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Event Prize"
        />

        <input
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Event Contact"
        />

        <button type="submit" className="bg-green-600 text-white py-3 px-6 rounded-sm w-fit">Add Event</button>
    </form>
    )
}
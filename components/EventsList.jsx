import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getEvent = async() => {
    try{
        const res = await fetch("http://localhost:3000/api/events", {
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error("Failed to fetch events");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading events: ", error);
    }
};

export default async function EventsList( ) {
    const { events } = await getEvent();

    return(
        <>
        {events.map((t) => (
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">{t.title} - {t.game} </h2>
                    <div>{t.location} - {t.date}</div>
                    <div>Regist  : Rp. {t.registPrice}</div>
                    <div>Prize   : Rp. {t.prize} </div>
                    <div>Contact : {t.contact}</div>
                </div>
                
                <div className="flex gap-2">
                <RemoveBtn id = {t._id} />
                <Link href={`/editEvent/${t._id}`}>
                    <HiPencilAlt size={24} />
                </Link>
                </div>
            </div>
        ))}
        </>
    );
}
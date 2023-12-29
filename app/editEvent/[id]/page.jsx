import EditEventForm from "@/components/EditEventForm";

const getEventById = async (id) => {
    try {
    const res = await fetch(`https://aesthetic-souffle-c21755.netlify.app/api/events/${id}`, {
        cache: "no-store",
    });

        if(!res.ok) {
            throw new Error("Failed to fetch event");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function EditEvent({ params }) {
    const { id } = params;
    const { event } = await getEventById(id);
    const { title, game, location, date, registPrice, prize, contact } = event;
    return <EditEventForm id={id} title={title} game={game} location={location} date={date} registPrice={registPrice} prize={prize} contact={contact}  />;
}
"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeEvent = async() => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            const res = await fetch(`https://aesthetic-souffle-c21755.netlify.app/api/events?id=${id}`, {
                method:"DELETE",
            });
            
            if(res.ok){
                router.refresh();
            }
        }

    }

    return <button onClick={removeEvent} className="text-red-400">
        <HiOutlineTrash size={24} />
    </button>
}
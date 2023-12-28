import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Event from "@/models/event";

export async function POST(request) {
    try {
        const { title, game, location, date, registPrice, prize, contact } = await request.json();
        await connectMongoDB();
        await Event.create({ title, game, location, date, registPrice, prize, contact });
        return NextResponse.json({ message: "Event Created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating event:", error);
        return NextResponse.json({ message: "Error creating event" }, { status: 500 });
    }
}

export async function GET() {
    await connectMongoDB();
    const events = await Event.find();
    return NextResponse.json({ events })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Event.findByIdAndDelete(id);
    return NextResponse.json({ message: "Event deleted" }, { status: 200});
}
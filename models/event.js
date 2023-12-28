import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
    {
        title: String,
        game: String,
        location: String,
        date: Date,
        registPrice: String,
        prize: String,
        contact: String
    },
    {
        timestamps: true,
    }
);

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
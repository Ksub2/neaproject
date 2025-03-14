import React, { useState } from "react";
import { handleDelete, handleEdit, meetings } from "./Add";

const Table = () => {
    const [time, setTime] = useState("");

    // Function to convert 24-hour time to 12-hour AM/PM format
    const formatTime = (timeStr) => {
        if (!timeStr) return ""; // Handle empty input
        const [hours, minutes] = timeStr.split(":");
        const hour = parseInt(hours, 10);
        const ampm = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12; // Convert 0 to 12 for AM
        return `${formattedHour}:${minutes} ${ampm}`;
    };

    return (
        <>
            {/* Added meeting table */}
            <div className="overflow-x-auto p-1 md:p-4 md:mt-[1vh]">
                <table className="md:mt-[60vh] w-full border-collapse border border-gray-400">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border w-[3vw] p-2">SN</th>
                            <th className="border w-[11vw] p-2">Date</th>
                            <th className="border w-[9vw] p-2">Time</th>
                            <th className="border w-[21vw] p-2">Meeting Type</th>
                            <th className="border w-[22vw] p-2">Location</th>
                            <th className="border w-[24vw] p-2">Description</th>
                            <th className="border w-[10vw] p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meetings.length > 0 ? (
                            meetings.map((meeting) => (
                                <tr key={meeting.id} className="text-center hover:bg-gray-100 odd:bg-white">
                                    <td className="border p-2">{meeting.id}</td>
                                    <td className="border p-2">{meeting.date}</td>
                                    <td className="border p-2">{formatTime(meeting.time)}</td>
                                    <td className="border p-2">{meeting.type}</td>
                                    <td className="border p-2">{meeting.location}</td>
                                    <td className="border p-2">{meeting.description}</td>
                                    <td className="border p-2">
                                        <button onClick={() => handleEdit(meeting.id)} className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDelete(meeting.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center p-2">No meetings available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;

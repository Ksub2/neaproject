import React, { useState } from "react";
import Calendar from "@sbmdkl/nepali-datepicker-reactjs";
import "@sbmdkl/nepali-datepicker-reactjs/dist/index.css";
import NepaliDate from "nepali-datetime";
import TimePicker from "react-time-picker"; // Import React Time Picker
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css"; // Required for styling

const Add = () => {
    // Function to convert 24-hour time to 12-hour AM/PM format
    const formatTime = (timeStr) => {
        if (!timeStr) return "";
        const [hours, minutes] = timeStr.split(":");
        const hour = parseInt(hours, 10);
        const ampm = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minutes} ${ampm}`;
    };

    // Function to format Nepali date for display
    const formatNepaliDate = (bsDate) => {
        if (!bsDate) return "";
        const [year, month, day] = bsDate.split("-");
        const nepaliMonths = [
            "Baishakh", "Jestha", "Ashad", "Shrawan", "Bhadra", "Ashwin",
            "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
        ];
        const monthName = nepaliMonths[parseInt(month, 10) - 1];
        return `${day} ${monthName} ${year} B.S.`;
    };

    // Add/Edit/Delete Meetings
    const [meetings, setMeetings] = useState([]);
    const [newMeeting, setNewMeeting] = useState({
        date: "",
        type: "",
        location: "",
        description: "",
        time: "",
    });
    const [editingIndex, setEditingIndex] = useState(null);
    const [showManageForm, setShowManageForm] = useState(true);

    const handleChange = (e) => {
        setNewMeeting({ ...newMeeting, [e.target.name]: e.target.value });
    };

    const handleDateChange = ({ bsDate }) => {
        setNewMeeting({ ...newMeeting, date: bsDate });
    };

    const handleTimeChange = (time) => {
        setNewMeeting({ ...newMeeting, time });
    };

    const handleAddOrEditMeeting = () => {
        if (editingIndex !== null) {
            const updatedMeetings = [...meetings];
            updatedMeetings[editingIndex] = { ...newMeeting, id: new Date().toISOString() };
            setMeetings(updatedMeetings);
            setEditingIndex(null);
        } else {
            setMeetings([...meetings, { ...newMeeting, id: new Date().toISOString() }]);
        }
        setNewMeeting({ date: "", type: "", location: "", description: "", time: "" });
        setShowManageForm(false);
    };

    const handleEdit = (index) => {
        setNewMeeting(meetings[index]);
        setEditingIndex(index);
        setShowManageForm(true);
    };

    const handleDelete = (index) => {
        setMeetings(meetings.filter((_, i) => i !== index));
    };

    const handleManageFormToggle = () => {
        setShowManageForm(!showManageForm);
    };

    return (
        <>
            {/* Add/Edit/Delete Form */}
            {showManageForm && (
                <div className="absolute left-[9vw] md:left-[24vw] lg:left-[29vw] xl:left-[34vw] 
                          right-[9vw] md:right-[24vw] lg:right-[29vw] xl:right-[34vw] 
                          p-[1vw] md:p-[1vw] mt-[2vh] md:mt-[6vh] 
                          w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 
                          bg-white shadow-2xl rounded-2xl">
                    <h2 className="text-xl p-4 flex justify-center text-blue-500 font-semibold mb-4">
                        Manage Meetings
                    </h2>
                    <div className="mb-2">
                        <Calendar
                            onChange={handleDateChange}
                            value={newMeeting.date}
                            className="border p-2 w-full"
                            theme="deepdark"
                            dateFormat="YYYY-MM-DD"
                            language="en"
                            minDate={new NepaliDate(new Date()).format("YYYY-MM-DD")}
                        />
                    </div>
                    <input
                        type="text"
                        name="type"
                        placeholder="Meeting Type"
                        value={newMeeting.type}
                        onChange={handleChange}
                        className="border p-2 w-full mb-2"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={newMeeting.location}
                        onChange={handleChange}
                        className="border p-2 w-full mb-2"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={newMeeting.description}
                        onChange={handleChange}
                        className="border p-2 w-full mb-2"
                    />
                    
                    {/* Updated Time Picker */}
                    <TimePicker
                        onChange={handleTimeChange}
                        value={newMeeting.time}
                        disableClock={true} // Removes analog clock UI
                        className="border p-2 w-full mb-2"
                    />

                    <button
                        onClick={handleAddOrEditMeeting}
                        disabled={!newMeeting.date || !newMeeting.type || !newMeeting.location || !newMeeting.description || !newMeeting.time}
                        className={`px-4 py-2 rounded-md w-full ${
                            !newMeeting.date || !newMeeting.type || !newMeeting.location || !newMeeting.description || !newMeeting.time
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 text-white"
                        }`}
                    >
                        {editingIndex !== null ? "Update Meeting" : "Add Meeting"}
                    </button>
                </div>
            )}

            {/* Table of Meetings */}
            <div className="overflow-x-auto p-1 md:p-4 mt-[2vh] md:mt-[2vh]">
                {meetings.length === 0 ? (
                    <p className="text-center p-4">No meetings scheduled.</p>
                ) : (
                    <table className="mt-[2vh] md:mt-[2vh] w-full border-collapse border border-gray-400">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border w-[3vw] p-2">SN</th>
                                <th className="border w-[11vw] p-2">Date (Nepali)</th>
                                <th className="border w-[9vw] p-2">Time</th>
                                <th className="border w-[21vw] p-2">Meeting Type</th>
                                <th className="border w-[22vw] p-2">Location</th>
                                <th className="border w-[24vw] p-2">Description</th>
                                <th className="border w-[10vw] p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {meetings.map((meeting, index) => (
                                <tr key={meeting.id} className="text-center hover:bg-gray-100 odd:bg-white">
                                    <td className="border p-2">{index + 1}</td>
                                    <td className="border p-2">{formatNepaliDate(meeting.date)}</td>
                                    <td className="border p-2">{formatTime(meeting.time)}</td>
                                    <td className="border p-2">{meeting.type}</td>
                                    <td className="border p-2">{meeting.location}</td>
                                    <td className="border p-2">{meeting.description}</td>
                                    <td className="border p-2">
                                        <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded">Edit</button>
                                        <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Add;

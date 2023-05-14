import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {
    Box,
    Button,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import Header from "Venue/src/components/Header";
import FlexBetween from "Venue/src/components/FlexBetween";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';

const VBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");

    const localizer = momentLocalizer(moment);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/bookings/manager/${Cookies.get("id")}/pending`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("accessToken")}`,
                },
            }).then((res) => {
                if (res.data) { setBookings(res.data) }
            }).catch((err) => {
                toast.error("Something went wrong with server!");
                console.log(err);
            });
    }, []);

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
    };

    const handleUpdateStatus = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update the status of this booking!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ff9800',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`http://localhost:5000/api/bookings/${selectedEvent._id}`, { booking_status: selectedStatus })
                .then((res) => {
                    if (res.data) {
                        if (selectedStatus === "approved") {
                            toast.success("Booking approved!");
                        } else {
                            toast.success("Booking rejected!");
                        }
                        setSelectedEvent(null);
                        setSelectedStatus("");
    
                        setTimeout(() => {
                            window.location.reload();
                        }  , 2000);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        })
    };
    
    return (
        <Box m="1.5rem 2.5rem">
            <Box>
                <FlexBetween>
                    <Header title="All Bookings" subtitle="Welcome to bookings page" />
                </FlexBetween>
                <Box mt={10}>
                    <Calendar
                        localizer={localizer}
                        events={bookings.map((booking) => ({
                            _id: booking._id,
                            start: new Date(booking.start_time),
                            end: new Date(booking.end_time),
                            title: `Booking ${booking.event.name}`,
                            status: booking.booking_status,
                            price: booking.price,
                            venue: booking.venue,
                            organizer: booking.organizer,
                            event: booking.event,
                        }))}
                        eventPropGetter={(event, start, end, isSelected) => {
                            return {
                                style: {
                                    backgroundColor: "#ff9800",
                                    borderRadius: "0px",
                                    opacity: 0.8,
                                    color: "white",
                                    border: "0px",
                                    display: "block",
                                },
                            };
                        }}
                        selectable
                        onSelectEvent={handleSelectEvent}
                        onSelectSlot={() => setSelectedEvent(null)}
                        startAccessor="start"
                        endAccessor="end"
                        defaultView="week"
                        views={["week"]}
                        step={60}
                        showMultiDayTimes
                        style={{ height: 500 }}
                    />
                </Box>
                {selectedEvent && (
                    <Box mt={10} style={{ marginBottom: "2rem" }}>
                        <h2>{selectedEvent.event.name}</h2>
                        <p>Start Time: {moment(selectedEvent.start).format("YYYY-MM-DD hh:mm A")}</p>
                        <p>End Time: {moment(selectedEvent.end).format("YYYY-MM-DD hh:mm A")}</p>
                        <p>Status: {selectedEvent.status}</p>
                        <p>Price: {selectedEvent.price}</p>
                        <p>Venue: {selectedEvent.venue.name}</p>
                        <p>Organizer: {selectedEvent.organizer.name}</p>
                        <Box mt={3}>
                            <InputLabel id="status-label">Booking Status</InputLabel>
                            <Select
                                labelId="status-label"
                                id="status-select"
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                style={{ marginRight: "10px" }}
                            >
                                <MenuItem value="approved">Approved</MenuItem>
                                <MenuItem value="rejected">Rejected</MenuItem>
                            </Select>
                            <Button variant="contained" onClick={handleUpdateStatus}>Update Status</Button>
                        </Box>
                    </Box>
                )}
            </Box>
            <Box><FlexBetween></FlexBetween></Box>
            <ToastContainer />
        </Box>
    );
};

export default VBookings;

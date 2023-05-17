import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "Venue/src/components/Header";
import FlexBetween from "Venue/src/components/FlexBetween";
import RevenueChart from "Venue/src/components/dashboard/RevenueChart";
import FourAnalytics from "Venue/src/components/dashboard/FourAnalytics";
import LatestBookings from "Venue/src/components/dashboard/LatestBookings";

const getGreeting = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
        return "Good morning!";
    } else if (hour >= 12 && hour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}


const VDashboard = () => {
    return (
        <Box m="1.5rem 2.5rem">
            <FlexBetween>
                <Header
                    title={getGreeting()}
                    subtitle="Welcome to the dashboard"
                />
            </FlexBetween>
            <FourAnalytics />

            <Box display="flex" mt={5}>
                <Box style={{ width: "60%", marginRight: "1rem" }}>
                    <RevenueChart />
                </Box>
                <Box style={{ width: "40%" }}>
                    <LatestBookings heading={"Latest Bookings"}/>
                </Box>
            </Box>

            <Box
                sx={{
                    padding: "2rem",
                    color: "#000000",
                    fontSize: "1.2rem",
                    position: "relative",
                    bottom: 0,
                    width: "100%",
                    height: "4rem",
                    textAlign: "center",
                    mt: "8rem",
                }}
            >
                <Typography variant="body1">
                    &copy; 2023 UniEventPro. All Rights Reserved.
                </Typography>
            </Box>


        </Box>
    );
};

export default VDashboard;

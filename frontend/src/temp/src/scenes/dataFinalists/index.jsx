import React from "react";
import { Box } from "@mui/material";
import Header from "venue-management/src/components/Header";
import FlexBetween from "venue-management/src/components/FlexBetween";

const VDataFinalists = () => {
    return (
        <Box m="1.5rem 2.5rem">
            <div>
                <FlexBetween>
                    <Header
                        title="ATTENDEES DATA FINALISTS"
                        subtitle="Welcome to your dashboard"
                    />
                </FlexBetween>
            </div>
        </Box>
    );
};

export default VDataFinalists;

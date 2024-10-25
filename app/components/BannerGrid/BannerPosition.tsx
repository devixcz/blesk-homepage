import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { BannerVariants } from "@components/Banners";
type BannerVariantsType = keyof typeof BannerVariants;

export interface BannerPositionProps {
    variant: BannerVariantsType;
}

export default function BannerPosition({ variant }: BannerPositionProps) {
    const theme = useTheme(); // získání theme
    const dimensions = BannerVariants[variant];
    
    if (!dimensions) {
        return null;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#f6f6f6', // použití theme pro barvu pozadí
                color: theme.palette.text.primary, // použití theme pro barvu textu
                width: dimensions.width,
                height: dimensions.height,
            }}
        >
            <Typography variant="h6">
                {variant}
            </Typography>
            <Typography variant="h5">
                {dimensions.width} x {dimensions.height}
            </Typography>
        </Box>
    );
}

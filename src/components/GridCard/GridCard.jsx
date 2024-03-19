import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import styles from "./GridCard.module.css";

export default function GridCard({ data, type }) {
	const { follows, title } = data;
	return (
		<Card sx={{ width: 159, height: 240 }} className={styles.wrapper}>
			<CardMedia sx={{ height: 170 }} image={data.image} title="album" />
			<CardContent style={{ bgcolor: "black", padding: "5px" }}>
				<Stack direction="column" style={{ justifyContent: "left" }}>
					<Chip
						label={follows + " follows"}
						sx={{
							bgcolor: "black",
							color: "white",
							font: "sans-serif",
							fontWeight: "normal",
						}}
					/>
				</Stack>
				<Stack style={{ bgcolor: "black", padding: "5px" }}>
					<div style={{ color: "black" }}>{title}</div>
				</Stack>
			</CardContent>
		</Card>
	);
}

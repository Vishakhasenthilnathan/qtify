import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import GridCard from "../GridCard/GridCard";
import Carousel from "react-grid-carousel";
import Grid from "@mui/material/Grid";

export default function Section({ title, data, filterSource, type, genres }) {
	const [filters, setFilters] = useState([{ key: "all", label: "all" }]);
	const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
	const [carouselToggle, setCarouselToggle] = useState(true);

	console.log(data);
	const handleToggle = () => {
		setCarouselToggle((prevState) => !prevState);
	};

	useEffect(() => {
		if (filterSource) {
			filterSource().then((response) => {
				const { data } = response;
				setFilters([...filters, ...data]);
			});
		}
	});

	const showFilters = filters.length > 1;
	const cardToRender = data.filter((card) =>
		showFilters && selectedFilterIndex !== 0
			? card.genre.key === filters[selectedFilterIndex].key
			: card
	);

	return (
		<>
			<div className={styles.header}>
				<h3>{title}</h3>
				<h4 className={styles.toggleText} onClick={handleToggle}>
					{!carouselToggle ? "Collapse All" : "Show All"}
				</h4>
			</div>
			{data.length === 0 ? (
				<CircularProgress />
			) : (
				<div className={styles.cardWrapper}>
					{!carouselToggle ? (
						<>
							<Grid container>
								{cardToRender.map((ele, i) => {
									return (
										<Grid item>
											<GridCard
												key={i}
												data={ele}
												type={type}
												genres={genres}
											/>
										</Grid>
									);
								})}
							</Grid>
						</>
					) : (
						<Carousel cols={8} rows={1} loop>
							{cardToRender.map((ele, i) => (
								<Carousel.Item>
									<GridCard key={i} data={ele} type={type} genres={genres} />
								</Carousel.Item>
							))}
						</Carousel>
					)}
				</div>
			)}
		</>
	);
}

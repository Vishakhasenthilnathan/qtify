import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";

function SearchBar({ placeholder }) {
	return (
		<div className="search">
			<input
				id="album"
				className={styles.search}
				required
				placeholder={placeholder}
				InputProps={{
					endAdornment: (
						<InputAdornment disableTypography position="end">
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
}

export default SearchBar;

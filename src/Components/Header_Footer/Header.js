// Header.js
import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

const Header =()=>{
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [headerShow, setHeaderShow] = useState(false);
	
	const toggleDrawer = value => {
		setDrawerOpen(value);
	}
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	},[headerShow]);
	
	const handleScroll = () =>{
		if(window.scrollY > 0){
			setHeaderShow(true)
		}else{
			setHeaderShow(false)
		}
	}
	return(
		<AppBar
			position="fixed"
			style={{
				background: headerShow ? "#DEB887" : "transparent",
				padding: "20px 0px"
			}}
		>
			<ToolBar>
				<div className="header_logo" style={{ color : "black" }} >
				
					<div className="font_left header_logo_title">Book</div>
					<div className="font_left header_logo_caption">Site</div>
				</div>
				
				<SideDrawer  open={drawerOpen} onClose={value => toggleDrawer(value)} />
				</ToolBar>
		</AppBar>
	);  
	
};

export default Header;
// SideDrawer.js
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


const SideDrawer = props =>{
	


	return(
		
			<List style={{
				color : "black" }}>
				<ListItem button onClick={()=> console.log("Home page")}> <ListItem button onClick={()=> console.log("Info")}> <ListItem button onClick={()=> console.log("Our team")}> <ListItem button onClick={()=> console.log("About Us")}>
					Shop
				</ListItem>
					Info
				</ListItem>
					Top3
				</ListItem>
					Home page
				</ListItem>	
			</List>

	);  
	
};

export default SideDrawer;
import "./styles.css";
import { createTable, tempButtonToggler } from "./dom.js";


const searchInput=document.querySelector("#searchInputId");
const searchButton=document.querySelector("#searchButtonId");
const tableFunction=createTable();
let TemperatureUnit="metric";
tableFunction.createTableHead();
	searchButton.after(tableFunction.table);
searchButton.addEventListener("click",async()=>{
	const location=clientSideInputTaker();	
	const locationData=await fecthDataFromServer(location,TemperatureUnit);
	const logingData={
		loactionNameKey:locationData?.address,
		currentTemperatureKey:locationData?.currentConditions.temp,
		weatherDescriptionKey:locationData?.description
	}
	
	tableFunction.createDataCells(logingData);
	console.log(logingData);
	searchButton.after(tableFunction.table);
	console.log(locationData);

});
const tempBtnToggler=document.querySelector("#temperature-unit-toggler")
tempBtnToggler.addEventListener("click",(event)=>{
	console.log(TemperatureUnit);
	TemperatureUnit=tempButtonToggler(event.target);
}
);


	function clientSideInputTaker(){
	return searchInput.value;
	}

async function fecthDataFromServer(location,tempUnit){
	const api_key="B2KBZGPNYPLBDP5UVWYPR5HA9";
		try{
			const request=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${tempUnit}&key=${api_key}&contentType=json`);
			const response=await request.json();
			return response;
		}
		catch(error){
			console.error("fetch failed",error.message);
			fecthDataFromServer(location,tempUnit);
		};
	}

	


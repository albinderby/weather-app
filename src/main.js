import { createTable } from "./dom.js";

const searchInput=document.querySelector("#searchInputId");
const searchButton=document.querySelector("#searchButtonId");

const tableFunction=createTable();
tableFunction.createTableHead()
	searchButton.after(tableFunction.table);

searchButton.addEventListener("click",async()=>{
	const location=clientSideInputTaker();
	const locationData=await fecthDataFromServer(location);
	
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


	function clientSideInputTaker(){
	return searchInput.value;
	}

async function fecthDataFromServer(location){
	const api_key="B2KBZGPNYPLBDP5UVWYPR5HA9";
		try{
			const request=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${api_key}&contentType=json`);
			const response=await request.json();
			return response;
		}
		catch(error){
			console.error("fetch failed",error.message);

		};
	}

	

	
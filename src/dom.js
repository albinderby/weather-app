export function createTable(){
    const table=document.createElement("table");
    const tableRow=document.createElement("tr");
    const thead=document.createElement("thead");
    const tbody=document.createElement("tbody");

    function createTableHead(){
        const headings=["location Name","current Temperature","weather Description"];
        const headingKey=["loactionNameKey","currentTemperatureKey","weatherDescriptionKey"];

        headings.forEach((currentValue,index)=>{
            const tableHead=document.createElement("th");
            tableHead.dataset.id=headingKey[index];
            tableHead.textContent=currentValue;
            tableRow.appendChild(tableHead);
        })
        thead.appendChild(tableRow);
        table.appendChild(thead)
    }

    function createDataCells(obj){
        const sample=document.querySelector("thead");
        const tr=document.createElement("tr");
        console.log(sample);
        const headings=document.querySelectorAll("thead tr> th");
        console.log(headings);
        headings.forEach((currentValue)=>{
            const td=document.createElement("td");
            td.textContent=obj[currentValue.dataset.id]??"undefined";
            tr.appendChild(td);
        })
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }
    return {createTableHead,
        createDataCells,
        table
    };
}
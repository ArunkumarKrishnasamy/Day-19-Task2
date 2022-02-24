let list=document.getElementById("list")
    let table=document.createElement("table")
    table.classList.add( "table")
    let thead= document.createElement("thead");
    table.appendChild(thead);
    let row1 = document.createElement("tr")
    row1.setAttribute("scope","row")
    let col_fname= document.createElement("th")
    col_fname.innerText="FirstName"
    let col_lname= document.createElement("th")
    col_lname.innerText="LastName"
    let col_gender= document.createElement("th")
    col_gender.innerText="Gender"
    let col_address= document.createElement("th")
    col_address.innerText="Address"
    let col_pincode= document.createElement("th")
    col_pincode.innerText="Pincode"
    let col_state= document.createElement("th")
    col_state.innerText="State"
    let col_country= document.createElement("th")
    col_country.innerText="Country"
    let col_food= document.createElement("th")
    col_food.innerText="Food"
    row1.appendChild(col_fname);
    row1.appendChild(col_lname);
    row1.appendChild(col_gender);
    row1.appendChild(col_address);
    row1.appendChild(col_pincode);
    row1.appendChild(col_state);
    row1.appendChild(col_country);
    row1.appendChild(col_food);
    thead.appendChild(row1);
    list.appendChild(table)
let btn = document.getElementById("submit")
btn.addEventListener("click",(event)=>{
    event.preventDefault();

    let tbody =document.createElement("tbody");
    table.appendChild(tbody);

    let row2 = document.createElement("tr")
    row2.setAttribute("scope","row")

    let col1_fname=document.createElement("td")
    col1_fname.innerText = document.getElementById("first-name").value 
    let col1_lname=document.createElement("td")
    col1_lname.innerText = document.getElementById("last-name").value
    let col1_gender=document.createElement("td")
    col1_gender.innerText= document.querySelector(("input[type='radio'][name='choose_gender']:checked")).value
    let col1_address = document.createElement("td")
    col1_address.innerText = document.getElementById("address").value
    let col1_pincode = document.createElement("td")
    col1_pincode.innerText = document.getElementById("pincode").value
    let col1_state = document.createElement("td");
    col1_state.innerText = document.getElementById("inputstate").value
    let col1_country= document.createElement("td");
    col1_country.innerText = document.getElementById("inputcountry").value;
    let col1_food = document.createElement("td");
    col1_food.innerText = `${document.getElementById("food1").value}, ${document.getElementById("food2").value}`;

    row2.appendChild(col1_fname);
    row2.appendChild(col1_lname);
    row2.appendChild(col1_gender);
    row2.appendChild(col1_address);
    row2.appendChild(col1_pincode);
    row2.appendChild(col1_state);
    row2.appendChild(col1_country);
    row2.appendChild(col1_food);
    tbody.appendChild(row2);
    document.getElementById("form").reset();
})

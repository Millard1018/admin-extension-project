
document.getElementById("hamburgerMenu").addEventListener("click", navMenu);
document.getElementById("navClose").addEventListener("click", hidenavMenu);
document.getElementById("navBlur").addEventListener("click", hidenavMenu);

function navMenu(){
    document.getElementById("navBlur").classList.remove("invisible");
    document.getElementById("navMenu").classList.remove("invisible");
}
function hidenavMenu(){
    document.getElementById("navBlur").classList.add("invisible");
    document.getElementById("navMenu").classList.add("invisible");
}

document.getElementById("hamburgerMenu").addEventListener("click", navMenu);
document.getElementById("navClose").addEventListener("click", hidenavMenu);
document.getElementById("navBlur").addEventListener("click", hidenavMenu);
document.getElementById("profile").addEventListener("click", settings);
document.getElementById("settingsExit").addEventListener("click", exitSettings);

function settings(){

    document.getElementById("settings").classList.remove("hidden");
    document.getElementById("settings").classList.add("flex");
}

function exitSettings(){

    document.getElementById("settings").classList.add("hidden");
    document.getElementById("settings").classList.remove("flex");
}


function navMenu(){
    document.getElementById("navBlur").classList.remove("invisible");
    document.getElementById("navMenu").classList.remove("invisible");
}
function hidenavMenu(){
    document.getElementById("navBlur").classList.add("invisible");
    document.getElementById("navMenu").classList.add("invisible");
}

function toggleFilterLatest() {
    document.getElementById("filterLatest").classList.toggle("invisible");
}

function filterBenefitLatest() {
    document.getElementById("chevronBenefitLatest").classList.toggle("rotate-180");
    document.getElementById("benefitTypeLatest").classList.toggle("hidden");
}

function filterStatusLatest() {
    document.getElementById("chevronStatusLatest").classList.toggle("rotate-180");
    document.getElementById("giftStatusLatest").classList.toggle("hidden");
}

function toggleFilterPrev() {
    document.getElementById("filterPrev").classList.toggle("invisible");
}

function filterBenefitPrev() {
    document.getElementById("chevronBenefitPrev").classList.toggle("rotate-180");
    document.getElementById("benefitTypePrev").classList.toggle("hidden");
}

function filterStatusPrev() {
    document.getElementById("chevronStatusPrev").classList.toggle("rotate-180");
    document.getElementById("giftStatusPrev").classList.toggle("hidden");
}

function toggleFilterIncoming() {
    document.getElementById("filterIncoming").classList.toggle("invisible");
}

function filterBenefitIncoming() {
    document.getElementById("chevronBenefitIncoming").classList.toggle("rotate-180");
    document.getElementById("benefitTypeIncoming").classList.toggle("hidden");
}

function filterStatusIncoming() {
    document.getElementById("chevronStatusIncoming").classList.toggle("rotate-180");
    document.getElementById("giftStatusIncoming").classList.toggle("hidden");
}

function closeModal() {
    document.getElementById('recipientModal').classList.add('invisible', 'opacity-0');
    document.getElementById("Blur").classList.add("invisible");
    document.getElementById('body').classList.remove('overflow-hidden')
}

const dateInput = document.getElementById('date');
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    dateInput.addEventListener('change', function () {
    const [year, month] = this.value.split('-');
    const monthIndex = parseInt(month, 10) - 1;
    document.getElementById('month').textContent = monthNames[monthIndex];
    document.getElementById('year').textContent = year;
    
    const monthYear = monthNames[monthIndex] + ' ' + year;
    const rows = document.querySelectorAll("#accountHistory tbody tr");

    rows.forEach(row=> {
        if (row.getAttribute("data-date") === monthYear){
            row.classList.add("bg-slate-500/50")
        } else {
            row.classList.remove("bg-slate-500/50");
      }
    });

});

function highlight(status) {
    const rows = document.querySelectorAll(status);
    rows.forEach(row => row.classList.add("bg-slate-200"));
    setTimeout(() => {
        rows.forEach(row => row.classList.remove("bg-slate-200"));
    },10000);   
}

function confirmationBox() {
    document.getElementById("confirmationBlur").classList.remove("invisible");
    document.getElementById("shadow").classList.remove("invisible");
    document.getElementById("box").classList.remove("invisible");
}

function closeConfirmation() {
    document.getElementById("confirmationBlur").classList.add("invisible");
    document.getElementById("shadow").classList.add("invisible");
    document.getElementById("box").classList.add("invisible");
}
//global variables
let selectedBenefitLatest = ""
let selectedStatusLatest = ""

let selectedBenefitPrev = ""
let selectedStatusPrev = ""

let selectedBenefitIncoming = ""

//filters
document.addEventListener("DOMContentLoaded", function () {
    const nameInputLatest = document.getElementById("searchNameLatest");
    const benefitSelectLatest = document.getElementById("benefitTypeLatest");
    const statusSelectLatest = document.getElementById("giftStatusLatest");
    const tableLatest = document.querySelector("#latestTable");

    const nameInputPrev = document.getElementById("searchNamePrev");
    const benefitSelectPrev = document.getElementById("benefitTypePrev");
    const dateSelect = document.getElementById("date");
    const statusSelectPrev = document.getElementById("giftStatusPrev");
    const tablePrev = document.querySelector("#prevTable");

    const nameInputIncoming = document.getElementById("searchNameIncoming");
    const benefitSelectIncoming = document.getElementById("benefitTypeIncoming");
    const tableIncoming = document.querySelector("#incomingTable");

    function normalizeText(text) {
        return text.toLowerCase().trim();
    }

    function filterTable(table, name, benefit, date, status) {
        const nameValue = normalizeText(name.value);
        const benefitValue = normalizeText(/*benefit.value*/benefit);

        let dateValue = date ? normalizeText(date.value): "";
        if (dateValue != "") {
            const [year, month] = dateValue.split("-");
            const monthIndex = parseInt(month, 10) - 1;
            dateValue = monthNames[monthIndex] + " " + year;
            dateValue = normalizeText(dateValue);
        }

        const statusValue = status ? (status): "";

        const rows = table.querySelectorAll("tbody tr");

        rows.forEach(row => {
            const cells = row.querySelectorAll("td");
            const nameCell = normalizeText(cells[1]?.textContent || "");
            const benefitCell = normalizeText(cells[3]?.textContent || "");
            const dateCell = normalizeText(cells[4]?.textContent || "");
            const statusCell = (cells[5]?.textContent || "");

            const matchName = !nameValue || nameCell.includes(nameValue);
            const matchBenefit = !benefitValue || benefitCell.includes(benefitValue);
            const matchDate = !dateValue || dateCell.includes(dateValue);
            const matchStatus = !statusValue || statusCell.includes(statusValue);

            row.style.display = (matchName && matchBenefit && matchDate && matchStatus) ? "" : "none";
        });
    }

    function selectedBenefitFilter(benefit, table, initial, name, date, mode) {
        const divs = benefit.querySelectorAll(".benefit");

        divs.forEach(div => {
            div.addEventListener("click", ()=> {
                const divContent = div.textContent;
                document.getElementById(initial).textContent = divContent;

                if(mode === "latest") {
                    selectedBenefitLatest = divContent === "All Benefits" ? "" : divContent;
                    filterTable(table, name, selectedBenefitLatest, date, selectedStatusLatest);  
                }
                if(mode === "prev") {
                    selectedBenefitPrev = divContent === "All Benefits" ? "" : divContent;
                    filterTable(table, name, selectedBenefitPrev, date, selectedStatusPrev);  
                }
                if(mode === "incoming") {
                    selectedBenefitIncoming = divContent === "All Benefits" ? "" : divContent;
                    filterTable(table, name, selectedBenefitIncoming, null, null);  
                }
                
            });
        }); 
    }

    function selectedStatusFilter(status, table, initial, name, date, mode) {
        const divs = status.querySelectorAll(".status");

        divs.forEach(div => {
            div.addEventListener("click", ()=> {
                const divContent = div.textContent;
                document.getElementById(initial).textContent = divContent;

                if(mode === "latest") {
                    selectedStatusLatest = divContent === "All Statuses" ? "" : divContent;
                    filterTable(table, name, selectedBenefitLatest, date, selectedStatusLatest);
                }
                if(mode === "prev") {
                    selectedStatusPrev = divContent === "All Statuses" ? "" : divContent;
                    filterTable(table, name, selectedBenefitPrev, date, selectedStatusPrev); 
                }
                
            });
        }); 
    }

    nameInputLatest.addEventListener("input", ()=>{filterTable(tableLatest, nameInputLatest, selectedBenefitLatest, null, selectedStatusLatest)});
    selectedStatusFilter(statusSelectLatest, tableLatest, "initialStatusLatest", nameInputLatest, null, "latest");
    selectedBenefitFilter(benefitSelectLatest, tableLatest, "initialBenefitLatest", nameInputLatest, null, "latest");

    selectedStatusFilter(statusSelectPrev, tablePrev, "initialStatusPrev", nameInputPrev, dateSelect, "prev");
    selectedBenefitFilter(benefitSelectPrev, tablePrev, "initialBenefitPrev", nameInputPrev, dateSelect, "prev");
    nameInputPrev.addEventListener("input", ()=>{filterTable(tablePrev, nameInputPrev, selectedBenefitPrev, dateSelect, selectedStatusPrev)});
    dateSelect.addEventListener("change", ()=>{filterTable(tablePrev, nameInputPrev, selectedBenefitPrev, dateSelect, selectedStatusPrev)});

    nameInputIncoming.addEventListener("input", ()=>{filterTable(tableIncoming, nameInputIncoming, selectedBenefitIncoming, null, null)});
    selectedBenefitFilter(benefitSelectIncoming, tableIncoming, "initialBenefitIncoming", nameInputIncoming, null, "incoming");
});
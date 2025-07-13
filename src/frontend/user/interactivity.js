document.getElementById("hamburgerMenu").addEventListener("click", navMenu);
document.getElementById("navClose").addEventListener("click", hidenavMenu);
document.getElementById("navBlur").addEventListener("click", hidenavMenu);
document.getElementById("claimBtn").addEventListener("click", claimClicked);
document.getElementById("claimBtnWindowBackdrop").addEventListener("click", claimClickedExit);
document.getElementById("cancelBtnClaimingMethod").addEventListener("click", claimClickedExit);
document.getElementById("profile").addEventListener("click", settings);
document.getElementById("settingsExit").addEventListener("click", exitSettings);


function navMenu(){
    document.getElementById("navBlur").classList.remove("invisible");
    document.getElementById("navMenu").classList.remove("invisible");
}
function hidenavMenu(){
    document.getElementById("navBlur").classList.add("invisible");
    document.getElementById("navMenu").classList.add("invisible");
}

function claimClicked(){
    document.getElementById("claimBtnWindow").classList.remove("hidden");
    document.getElementById("claimBtnWindow").classList.add("flex");
}

function claimClickedExit(){
    document.getElementById("claimBtnWindow").classList.remove("flex");
    document.getElementById("claimBtnWindow").classList.add("hidden");
}

function settings(){
    
    document.getElementById("settings").classList.remove("hidden");
    document.getElementById("settings").classList.add("flex");

 
}

function exitSettings(){

    document.getElementById("settings").classList.add("hidden");
    document.getElementById("settings").classList.remove("flex");
}

function scrollNext() {
  const container = document.getElementById('carouselContainer');
  const scrollAmount = container.querySelector('carouselItem').offsetWidth + 16; // width + gap
  container.scrollLeft += scrollAmount;
}

function offlineconnectionStatus(){
    const notificatioSound = document.getElementById("notificationSound");
    notificatioSound.currentTime = 1;
    notificatioSound.volume = 0.5;
    notificatioSound.play();
    
    const onlineContainer = document.querySelector("#onlineContainer");
    onlineContainer.classList.replace('flex','hidden');

    const offlineContainer = document.querySelector("#offlineContainer");
    offlineContainer.classList.replace('hidden', 'flex');
   
 
}


function onlineconnectionStatus(){

    const offlineContainer = document.querySelector("#offlineContainer");
    
    offlineContainer.classList.replace('flex','hidden');
    
    const notificatioSound = document.getElementById("notificationSound");
    notificatioSound.currentTime = 1;
    notificatioSound.volume = 0.5;
    notificatioSound.play();
    const onlineContainer = document.querySelector("#onlineContainer");
    onlineContainer.classList.replace('hidden','flex');
 
 

    setInterval(()=>{
        onlineContainer.classList.replace('flex','hidden');
    }, 5000);
}


window.addEventListener("DOMContentLoaded", ()=> {

    window.addEventListener("offline", offlineconnectionStatus);
    window.addEventListener("online", onlineconnectionStatus);

})
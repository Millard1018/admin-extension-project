import Chart from 'chart.js/auto';
  const benefitsTrack = document.getElementById('benefitsTrack');
  const accountsTrack = document.getElementById('accountsTrack');
  const imparementsTrack = document.getElementById('imparementsTrack');

  const myChartImparements = new Chart(imparementsTrack, {
    type: 'doughnut', // or 'line', 'pie', 'doughnut', etc.
    data: {
      labels: ['Visual Imparement', 'Speech and Language Imparement', 'Mobility Impared', 'Psychological Imparement', 'Cognitive Imparement', 'Hearing Imparement', 'Neurological Imparement'],
      datasets: [{
        label: 'Imparements Track',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: [
          'rgba(15, 23, 42, 1)',
          'rgba(71, 85, 105, 1)',
          'rgba(100, 116, 139, 1)',
          'rgba(148, 163, 184, 1)',
          'rgba(203, 213, 225, 1)',
          '	rgba(226, 232, 240, 1)',
          'rgba(203, 213, 225, 1)',
        ],
        pointRadius: 5,
        
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      },

    }
  });

  const myChartAccounts = new Chart(accountsTrack, {
    type: 'line', // or 'line', 'pie', 'doughnut', etc.
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'],
      datasets: [{
        label: 'Accounts Creation',
        data: [12, 19, 3, 5, 2, 3, 7,9, 14, 5, 34, 12],
        backgroundColor: [
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)'
        ],
        pointRadius: 5,
        
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const myChartBenefits = new Chart(benefitsTrack, {
    type: 'bar', // or 'line', 'pie', 'doughnut', etc.
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'],
      datasets: [{
        label: 'Benefits Distribution',
        data: [12, 19, 3, 5, 2, 3, 7,9, 14, 5, 34, 12],
        backgroundColor: [
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)',
          'rgba(15, 23, 42, 1)'
        ],
        
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const dobInput = document.getElementById('dob');
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dobInput.addEventListener('change', function() {
    const [year, month] = this.value.split('-');
    const monthIndex = parseInt(month, 10) - 1;
      document.getElementById('month').textContent = monthNames[monthIndex];
      document.getElementById('year').textContent = year;
  });


  class containerManipulation{
    constructor(popupContainer, exitContainer, popupContainerbtn){
      this.popupContainer = popupContainer;
      this.exitContainer = exitContainer;
      this.popupContainerbtn = popupContainerbtn;

      this.attachEvents();
    }

    attachEvents() {
      this.popupContainerbtn.addEventListener("click", this.containerShow.bind(this));
      this.exitContainer.forEach(exit => exit.addEventListener('click', this.containerHide.bind(this)))
    }

    containerShow(){
        this.popupContainer.classList.replace("hidden", "flex");
    }

    containerHide(){
      this.popupContainer.classList.replace("flex", "hidden");

    }

    firstsecondarycontainerShow(firstsecondaryContainer, firstsecondaryContainerbtn, secondsecondaryContainer, secondsecondaryContainerbtn){
        secondsecondaryContainerbtn.classList.replace("text-slate-100", "text-slate-900");
        secondsecondaryContainerbtn.classList.replace("bg-slate-900", "bg-slate-200");

        firstsecondaryContainerbtn.classList.replace("text-slate-900", "text-slate-100");
        firstsecondaryContainerbtn.classList.replace("bg-slate-200", "bg-slate-900");
      
        secondsecondaryContainer.classList.replace("flex", "hidden");
        firstsecondaryContainer.classList.replace("hidden", "flex");
    }

    secondsecondarycontainerShow(firstsecondaryContainer, firstsecondaryContainerbtn, secondsecondaryContainer, secondsecondaryContainerbtn){
        
        firstsecondaryContainerbtn.classList.replace("text-slate-100", "text-slate-900");
        firstsecondaryContainerbtn.classList.replace("bg-slate-900", "bg-slate-200");
      
        secondsecondaryContainerbtn.classList.replace("text-slate-900", "text-slate-100");
        secondsecondaryContainerbtn.classList.replace("bg-slate-200", "bg-slate-900");
        
        firstsecondaryContainer.classList.replace("flex", "hidden");
        secondsecondaryContainer.classList.replace("hidden", "flex");
    
    }
  }
  

  const schedulingContainer = document.querySelector(".schedulingContainer");
  const schedulingContainerexit = document.querySelectorAll(".schedulingContainerexit");
  const schedulingBtn = document.querySelector('.schedulingBtn');
  const personalizedSchedulingbtn = document.querySelector('.personalizedSchedulingbtn');
  const centralizedSchedulingbtn = document.querySelector(".centralizedSchedulingbtn");

  const schedulingContainerMnpl = new containerManipulation(schedulingContainer, schedulingContainerexit, schedulingBtn);

  const centralizedScheduling = document.querySelector(".centralizedScheduling");
  const schedulingCentralizedBtn = document.querySelector(".centralizedSchedulingbtn");
  const personalizedScheduling = document.querySelector(".personalizedScheduling");
  const schedulingPersonalizedBtn = document.querySelector(".personalizedSchedulingbtn");

  schedulingCentralizedBtn.addEventListener("click", ()=> schedulingContainerMnpl.firstsecondarycontainerShow(centralizedScheduling, centralizedSchedulingbtn, personalizedScheduling, personalizedSchedulingbtn));
  schedulingPersonalizedBtn.addEventListener("click", ()=>schedulingContainerMnpl.secondsecondarycontainerShow(centralizedScheduling, centralizedSchedulingbtn, personalizedScheduling, personalizedSchedulingbtn));
  
  const reschedulingContainer = document.querySelector(".reschedulingContainer");
  const reschedulingContainerexit = document.querySelectorAll(".reschedulingContainerexit");
  const reschedulingBtn = document.querySelector('.reschedulingBtn');
  const reschedulingContainerMnpl = new containerManipulation(reschedulingContainer, reschedulingContainerexit, reschedulingBtn);

  const editaccountContainer = document.querySelector(".editaccountContainer");
  const editaccountContainerexit = document.querySelectorAll(".editaccountContainerexit");
  const editaccountBtn = document.querySelector(".editaccountBtn");
  const editaccountContainerMnpl = new containerManipulation(editaccountContainer, editaccountContainerexit, editaccountBtn);

  const editbenefitContainerexit = document.querySelectorAll('.editbenefitContainerexit');
  const editbenefitContainer = document.querySelector('.editbenefitContainer');
  const editbenefitBtn = document.querySelector(".editbenefitBtn");
  const editbenefitContainerMnpl = new containerManipulation(editbenefitContainer, editbenefitContainerexit, editbenefitBtn);
  

  function setaccountinfoContent(name, id, typeDisability, position, memberSince, gender, dateofBirth, address, picture){
   
    const accountinfoName  = document.querySelector("#accountinfoName").textContent = name;
    const accountinfoID  = document.querySelector("#accountinfoID").textContent = id;
    const accountinfoDisability = document.querySelector("#accountinfoDisability").textContent = typeDisability;
    const accountinfoPosition = document.querySelector("#accountinfoPosition").textContent = position;
    const accountinfomemberSince = document.querySelector("#accountinfomemberSince" ).textContent = memberSince;
    const accountinfoGender =  document.querySelector("#accountinfoGender").textContent = gender;
    const accountinfodateofBirth =  document.querySelector("#accountinfodateofBirth").textContent = dateofBirth;
    const accountinfoAddress =  document.querySelector("#accountinfoAddress").textContent = address;
    const accountinfoPicture =  document.querySelector("#accountinfoPicture").src = picture;
  }


  const accountinfoCollection = document.querySelectorAll(".accountinfoCollection");
  accountinfoCollection.forEach((account,index) => {
    const accountinfoName  = document.querySelectorAll(".accountName")[index].textContent;
    const accountinfoID  = document.querySelectorAll(".accountID")[index].textContent;
    const accountinfoDisability = document.querySelectorAll(".accountDisability")[index].textContent;
    const accountinfoPosition = document.querySelectorAll(".accountPosition")[index].textContent;
    const accountinfomemberSince = document.querySelectorAll(".accountSince" )[index].textContent;
    const accountinfoGender =  document.querySelectorAll(".accountGender")[index].textContent;
    const accountinfodateofBirth =  document.querySelectorAll(".accountBirthday")[index].textContent;
    const accountinfoAddress =  document.querySelectorAll(".accountAddress")[index].textContent;
    const accountinfoPicture =  document.querySelectorAll(".accountPicture")[index].textContent;
  
    account.addEventListener("click", () => {
    setaccountinfoContent(
      accountinfoName,
      accountinfoID,
      accountinfoDisability,
      accountinfoPosition,
      accountinfomemberSince,
      accountinfoGender,
      accountinfodateofBirth,
      accountinfoAddress,
      accountinfoPicture
    );
    const accountinfoContainer = document.querySelector("#accountinfoContainer").classList.replace("hidden", "flex");
    console.log("divCILIECK");
  });
});

class connectionStatus{
  constructor(){
    window.addEventListener("DOMContentLoaded", ()=> {
      window.addEventListener("offline", this.offlineconnectionStatus.bind(this));
      window.addEventListener("online", this.onlineconnectionStatus.bind(this));
    })
  }

  offlineconnectionStatus(){
    const notificatioSound = document.getElementById("notificationSound");
    notificatioSound.currentTime = 1;
    notificatioSound.volume = 0.5;
    notificatioSound.play();
    
    const onlineContainer = document.querySelector("#onlineContainer");
    onlineContainer.classList.replace('flex','hidden');

    const offlineContainer = document.querySelector("#offlineContainer");
    offlineContainer.classList.replace('hidden', 'flex');
  }

  onlineconnectionStatus(){
    const offlineContainer = document.querySelector("#offlineContainer");
    
    offlineContainer.classList.replace('flex','hidden');
    
    const notificatioSound = document.getElementById("notificationSound");
    notificatioSound.currentTime = 1;
    notificatioSound.volume = 0.5;
    notificatioSound.play();
    const onlineContainer = document.querySelector("#onlineContainer");
    onlineContainer.classList.replace('hidden','flex');
    setTimeout(()=>{
        onlineContainer.classList.replace('flex','hidden');
    }, 5000);
  }

}


const connectionStatusCheck = new connectionStatus();



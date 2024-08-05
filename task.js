
function about_us(){
    window.open("http://127.0.0.1:5500/index2.html");
   }
   
   function gotoAB(){
       window.open("http://127.0.0.1:5500/about.html");
   }
   
   function gotohome(){
       window.open("http://127.0.0.1:5500/index2.html");
   }
   
   function orderpage(){
       window.open("http://127.0.0.1:5500/order.html")
   }
   
   
   function showsidebar(){
       const sidebar=document.querySelector('.sidebar');
       sidebar.style.display='flex';
   }
   
   function hidesidebar(){
       const sidebar=document.querySelector('.sidebar');
       sidebar.style.display='none';
   }
   
   function done2() {
       
       let confirmBox = document.getElementById("serve");
       let message = confirmBox.querySelector(".message");
       confirmBox.style.display = "block"; 
       let yesButton = confirmBox.querySelector(".yes");
       confirmBox.style.display = "block"; 
       yesButton.addEventListener('click', handleYesButtonClick); 
   
       function handleYesButtonClick() {
           confirmBox.style.display = "none"; 
           gfg();
       }
   }
   
   function done() {
       
       let confirmBox = document.getElementById("sub");
       let message = confirmBox.querySelector(".message");
       confirmBox.style.display = "block"; 
       let yesButton = confirmBox.querySelector(".yes");
       confirmBox.style.display = "block"; 
       yesButton.addEventListener('click', handleYesButtonClick); 
   
       function handleYesButtonClick() {
           confirmBox.style.display = "none"; 
           gfg();
       }
   }
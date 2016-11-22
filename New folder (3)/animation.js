$(window).load(function(){

   $("#noteHolder").show(1000,function(){

   	$("#note1").show(300,function(){

   		$("#note2").show(300,function(){
   			$("#note3").show(300,function(){
   				$("#note4").show(300,function(){
   					$("#note5").show(300,function(){
   						$("#note6").show(300,function(){
   							$("#note7").show(300,function(){
   								$("#note8").show(300,function(){
   									$("#note9").show(300);

                                                       $("#myAudioElement")[0].play();

   								   setInterval(function(){
								   		changeColor();
								    }, 500);
   								});
   							});
   						});
   					});
   				});
   			});
   		});
   	});
 	
   });

   function randomColor()
   {
         var Rnum= Math.floor((Math.random() * 9) + 1);
   		var cars = ["green", "#C1E1A6", "#000000", "#994d00", "#a56235", "#7E8F7C", "#005A31", "#558C89", "#FF9009"];
         var c=cars[Rnum];
         return c;
   }

   function changeColor()
   {
   	var Rnum= Math.floor((Math.random() * 9) + 1);

         var colorBack=randomColor();
         if (Rnum==1) {
            $("#note1").css("background-color",colorBack);
            $("#note2").css("background-color","white");
            $("#note3").css("background-color","white");
            $("#note4").css("background-color","white");
            $("#note5").css("background-color","white");
            $("#note6").css("background-color","white");
            $("#note7").css("background-color","white");
            $("#note8").css("background-color","white");
            $("#note9").css("background-color","white");
            $("#ball1").show();
            $("#ball1").css("background-color",colorBack);

            $("#ball2").hide();$("#ball3").hide();$("#ball4").hide();$("#ball5").hide();$("#ball6").hide();
            $("#ball7").hide();$("#ball8").hide();$("#ball9").hide();
         }
         else if (Rnum==2) {
            $("#note1").css("background-color","white");
            $("#note2").css("background-color",colorBack);
            $("#note3").css("background-color","white");
            $("#note4").css("background-color","white");
            $("#note5").css("background-color","white");
            $("#note6").css("background-color","white");
            $("#note7").css("background-color","white");
            $("#note8").css("background-color","white");
            $("#note9").css("background-color","white");
            $("#ball2").show();
            $("#ball2").css("background-color",colorBack);

            $("#ball1").hide();$("#ball3").hide();$("#ball4").hide();$("#ball5").hide();$("#ball6").hide();
            $("#ball7").hide();$("#ball8").hide();$("#ball9").hide();
         }
         else if (Rnum==3) {
            $("#note1").css("background-color","white");
            $("#note2").css("background-color","white");
            $("#note3").css("background-color",colorBack);
            $("#note4").css("background-color","white");
            $("#note5").css("background-color","white");
            $("#note6").css("background-color","white");
            $("#note7").css("background-color","white");
            $("#note8").css("background-color","white");
            $("#note9").css("background-color","white");
            $("#ball3").show();
            $("#ball3").css("background-color",colorBack);

            $("#ball1").hide();$("#ball2").hide();$("#ball4").hide();$("#ball5").hide();$("#ball6").hide();
            $("#ball7").hide();$("#ball8").hide();$("#ball9").hide();
         }
         else if (Rnum==4) {
            $("#note1").css("background-color","white");
            $("#note2").css("background-color","white");
            $("#note3").css("background-color","white");
            $("#note4").css("background-color",colorBack);
            $("#note5").css("background-color","white");
            $("#note6").css("background-color","white");
            $("#note7").css("background-color","white");
            $("#note8").css("background-color","white");
            $("#note9").css("background-color","white");
            $("#ball4").show();
            $("#ball4").css("background-color",colorBack);

            $("#ball1").hide();$("#ball2").hide();$("#ball3").hide();$("#ball5").hide();$("#ball6").hide();
            $("#ball7").hide();$("#ball8").hide();$("#ball9").hide();
         }
         else if (Rnum==5) {
            $("#note1").css("background-color","white");
            $("#note2").css("background-color","white");
            $("#note3").css("background-color","white");
            $("#note4").css("background-color","white");
            $("#note5").css("background-color",colorBack);
            $("#note6").css("background-color","white");
            $("#note7").css("background-color","white");
            $("#note8").css("background-color","white");
            $("#note9").css("background-color","white");
            $("#ball5").show();
            $("#ball5").css("background-color",colorBack);

            $("#ball1").hide();$("#ball2").hide();$("#ball3").hide();$("#ball4").hide();$("#ball6").hide();
            $("#ball7").hide();$("#ball8").hide();$("#ball9").hide();
         }
         else if (Rnum==6) {
            $("#note1").css("background-color","white");
            $("#note2").css("background-color","white");
            $("#note3").css("background-color","white");
            $("#note4").css("background-color","white");
            $("#note5").css("background-color","white");
            $("#note6").css("background-color",colorBack);
            $("#note7").css("background-color","white");
            $("#note8").css("background-color","white");
            $("#note9").css("background-color","white");
            $("#ball6").show();
            $("#ball6").css("background-color",colorBack);

            $("#ball1").hide();$("#ball2").hide();$("#ball3").hide();$("#ball4").hide();$("#ball5").hide();
            $("#ball7").hide();$("#ball8").hide();$("#ball9").hide();
         }
         else if (Rnum==7) {
            $("#note1").css("background-color","white");
            $("#note2").css("background-color","white");
            $("#note3").css("background-color","white");
            $("#note4").css("background-color","white");
            $("#note5").css("background-color","white");
            $("#note6").css("background-color","white");
            $("#note7").css("background-color",colorBack);
            $("#note8").css("background-color","white");
            $("#note9").css("background-color","white");
            $("#ball7").show();
            $("#ball7").css("background-color",colorBack);

            $("#ball1").hide();$("#ball2").hide();$("#ball3").hide();$("#ball4").hide();$("#ball5").hide();
            $("#ball6").hide();$("#ball8").hide();$("#ball9").hide();
         }
         else if (Rnum==8) {
            $("#note1").css("background-color","white");
            $("#note2").css("background-color","white");
            $("#note3").css("background-color","white");
            $("#note4").css("background-color","white");
            $("#note5").css("background-color","white");
            $("#note6").css("background-color","white");
            $("#note7").css("background-color","white");
            $("#note8").css("background-color",colorBack);
            $("#note9").css("background-color","white");
            $("#ball8").show();
            $("#ball8").css("background-color",colorBack);


            $("#ball1").hide();$("#ball2").hide();$("#ball3").hide();$("#ball4").hide();$("#ball5").hide();
            $("#ball6").hide();$("#ball7").hide();$("#ball9").hide();
         }
         else if (Rnum==9) {
            $("#note1").css("background-color","white");
            $("#note2").css("background-color","white");
            $("#note3").css("background-color","white");
            $("#note4").css("background-color","white");
            $("#note5").css("background-color","white");
            $("#note6").css("background-color","white");
            $("#note7").css("background-color","white");
            $("#note8").css("background-color","white");
            $("#note9").css("background-color",colorBack);
            $("#ball9").show();
            $("#ball9").css("background-color",colorBack);


            $("#ball1").hide();$("#ball2").hide();$("#ball3").hide();$("#ball4").hide();$("#ball5").hide();
            $("#ball6").hide();$("#ball7").hide();$("#ball8").hide();
         };
   }

   


var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year   
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
   // Create a newDate() object and extract the seconds of the current time on the visitor's
   var seconds = new Date().getSeconds();
   // Add a leading zero to seconds value
   $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
   },1000);
   
setInterval( function() {
   // Create a newDate() object and extract the minutes of the current time on the visitor's
   var minutes = new Date().getMinutes();
   // Add a leading zero to the minutes value
   $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
   
setInterval( function() {
   // Create a newDate() object and extract the hours of the current time on the visitor's
   var hours = new Date().getHours();
   // Add a leading zero to the hours value
   $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);  

 });
    

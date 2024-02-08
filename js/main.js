// function getTime()
// {
//    var d=new Date();
//    var clock=document.querySelector(".head");
//    clock.innerHTML= d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds();

//    setTimeout(getTime,1000)  
// }
// getTime()

// var d=new Date();
//    var clock=document.querySelector(".today");
//    var days=["sun", "mon","tue","wed","thur","fri","thutr"];
//    clock.innerHTML=`today is : `+days[d.getDay()];

getData("general");
 // 3- to use z lis as a related link
var links=document.getElementsByClassName("nav-link");
for(var i=0; i<links.length; i++){
   links[i].addEventListener("click", function(e)
   {
      var currentTxt=e.target.text;
     // console.log(currentTxt);
     getData(currentTxt);

   })
}

var myData;
// 1- to get z api and display
function getData(category){
   var httpReq= new XMLHttpRequest();
   httpReq.open("GET",'https://gnews.io/api/v4/top-headlines?category='+category+'&lang=en&country=uk&max=10&apikey=7b7ba3501359de3059882554f8b45508');
   httpReq.send();
   
    myData=[];
   httpReq.addEventListener("readystatechange",function()
   {
      if(httpReq.readyState==4 && httpReq.status==200){
         myData=JSON.parse(httpReq.response).articles;
        // console.log(myData);
        displayPosts()
   
      }
   
   })

}

//2-to display z data
function displayPosts(){
   var temp='';
   for(var i=0; i<myData.length ; i++)
   {
      temp+=  `<div class='col-md-3'>
                 <div class='data-post py-2'>
                        <img src=`+myData[i].image+` class='img-fluid'>
                        <h4>`+myData[i].title+`</h4>
                        <h6>`+myData[i].content+`</h6>
                   </div>
                 </div>`

   }
     document.getElementById("rowData").innerHTML=temp;
}

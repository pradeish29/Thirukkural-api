let bottomDiv=document.querySelector(".bottomDiv")
let btn=document.querySelector(".submitBtn")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
    bottomDiv.innerHTML="";
    let inputNumber=document.querySelector("input");
    // console.log(inputNumber.value);
    let value=inputNumber.value;
    if(value>=1 && value<=1330){
        const book =async () =>{
    
           try {
            let response=await fetch(`https://getthirukkural.appspot.com/api/3.0/kural/${value}?appid=18c2aukokxmoz`);
             
            let data =await response.json();
            console.log(data);
            // console.log(data.line1);
            // console.log(data.line2);
            // console.log(data.tam_exp);
            // let lin1=data.line1;
            // let lin2=data.line2;
            // let meaning=data.tam_exp;
            // let englishKural=data.eng;
            // let englishKuralMeaning=data.eng_exp;
            // // let tamilSect=data.sect_tam;
            // // let englishSect=data.sect_eng;
            let display=document.createElement("div")
            bottomDiv.append(display)
            
            display.innerHTML +=`
            <div class="kuralDisplay">
            <div class="tamilKural">
                <div  class="tamilTitle">திருக்குறள்: ${data.number}</div>
                <div  class="tamilTitle">${data.paal} - ${data.iyal} </div>
                <div class="tamilline">
                <div  class="tamilline1">${data.line1}</div>
                <div class="tamilline2">${data.line2}</div>
                </div>         
               <div class="tamilMeaningHeading">பொருள்:</div>
               <div class="tamilMeaning">${data.urai3}</div>
            </div>
            <div class="englishKural">
                <div  class="englishTitle">Thirukkural: ${data.number}</div>
                <div class="englishMeaningHeading">translation:</div>
                <div class="englishMeaning">${data.translation}</div>
            </div>
            </div>
            `
        
        
          
             
           } catch (error) {
            console.log(error)
           }
    }
    book();
}
    else{
        alert("Please Enter The value - 1 to 1330");
        inputNumber.value=""
    }
})

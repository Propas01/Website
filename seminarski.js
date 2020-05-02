let menuBtnOpen=document.getElementById("menu-btn-open")
let menuBtnClose=document.getElementById("menu-btn-close")
let toggleMenu=document.getElementById("toggle-menu")

let background=document.getElementById("background")
let status=0
function openMenu(){
    if(status=="0"){
        toggleMenu.style.left="0";
        menuBtnClose.style.display="block"
        menuBtnOpen.style.display="none"
        status=1
    }
    else if(status=="1"){
        toggleMenu.style.left="-42px";
        menuBtnClose.style.display="none"
        menuBtnOpen.style.display="block"
        status=0
    }
}
let index=1
//Zelimo da poremni pozadinu na svakih 5 sekundi

window.setInterval(function(){
    if(index=="1"){
        
        background.style.backgroundImage="url(4.jpg)"
        index=2
    }
    else if(index=="2"){
        
        background.style.backgroundImage="url(2.jpg)"
        index=3
    }
    else if(index=="3"){
        
        background.style.backgroundImage="url(1.jpg)"
        index=1
    }
},5000)


let nav=document.querySelector("nav")
var previousScrollPosition=0

//Navigacioni bar nestaje kad je scrollbar na pocetku

window.onscroll=function(){
    var currentScrollPosition=window.pageYOffset
    if(currentScrollPosition>previousScrollPosition){
        nav.style.display="flex"
    }
    else {
        nav.style.display="none"
    }
}

let text=document.querySelector(".text")

let input1=document.querySelector(".input1")
let input2=document.querySelector(".input2")
let input3=document.querySelector(".input3")

//Promena teksta klikom na radio input
function changeText(){
    if(input1.checked){
     text.innerHTML=`<ul>
     <li>
        Zemlja je peta planeta po veličini u Sunčevom sistemu. Za razliku od nekih drugih planeta, Zemlja nije gasoviti džin, kakva je na primer planeta Jupiter, već je terestrička planeta, odnosno planeta koja ima čvrstu površinu. Termin terestrički potiče od grčke reči terra što znači zemlja.
   </li>
   
   <li>
       U sunčevom sistemu ako Zemlju uporedimo sa ostale tri terestričke planete, Merkurom, Venerom i Marsom, ona je najveća, sa najvećom gustinom, najvećom silom gravitacije i najjačim magnetskim poljem. Generalno, Zemlja se sastoji od atmosfere, biosfere, hidrosfere i njene unutrašnje građe ispod površine
   </li>
   </ul>`
    }
    else if(input2.checked){
        text.innerHTML=`<ul>
        <li>
        Oblik Zemlje je veoma sličan obliku troosnog rotacionog elipsoida. Ipak ovo geometrijsko telo, koje se do skora koristilo pri interpretaciji ne odgovara u potpunosti obliku Zemlje, i njega je u naučnim krugovima zamenio novi približniji oblik - geoid. Masa Zemlje je približno 5,98 × 1024 kg.
      </li>
      
      <li>
      Zemlja, po hemijskom sastavu, je najvećim delom sačinjena od gvožđa (32,1%), kiseonika (30,1%), silicijuma (15,1%), magnezijuma (13,9%), sumpora (2,9%), nikla (1,8%), kalcijuma (1,5%) i aluminijuma (1,4%); sa preostalih 1,2% koji čine količine ostalih elemenata u tragovima.
      </li>
      </ul>`
        
    }
    else if(input3.checked){
        text.innerHTML=`<ul>
      <li>
         Oblici zemljine površine variraju, razlikuju se, od mesta do mesta. Oko 70,8% zemljine površine nalazi se pod vodom, uključujući i veći deo kontinentalnog šelfa. 
      </li>
      <li>
         Podvodna površina ima različite oblike, planinske, uključujući i globalni šireći srednjeokeanski grebenski sistem, kao i podmorske vulkane, okeanske rovove, podmorske kanjone, okeanske platoe i abisalne ravni. 
      </li>
      
      <li>
         Preostalih 29,2% zemljine površine koji nisu pokriveni vodom čine planine, pustinje, ravnice, platoi, i drugi geomorfološki oblici.
      </li>
      </ul>`
    }
}

//Funkcija za ucitavanje slika
let naslov=document.querySelector(".naslov")
let gallery=document.querySelector(".gallery")
let subPage=document.querySelector(".sub-page")
let inputs=document.querySelector(".inputs")
let popupWindow=document.querySelector(".popup-window")

//Slike veće rezolucije za galeriju
let image1=document.createElement("img");
image1.setAttribute("class","slika")
image1.setAttribute("src","slika1.jpg")

let image2=document.createElement("img");
image2.setAttribute("class","slika")
image2.setAttribute("src","slika2.jpg")

let image3=document.createElement("img");
image3.setAttribute("class","slika")
image3.setAttribute("src","slika3.jpg")

let image4=document.createElement("img");
image4.setAttribute("class","slika")
image4.setAttribute("src","slika4.jpg")

//Prev, next i close buttons
const prevBtn=document.querySelector(".prevBtn")
const nextBtn=document.querySelector(".nextBtn")
const closeBtn=document.querySelector(".closeButton")


var broj;

//Otvaranje slika
function openImages(pictureIndex){
    
    popupWindow.style.display="flex"
    text.style.display="none"
    inputs.style.display="none"
    gallery.style.display="none"
    naslov.style.display="none"
    
    if(pictureIndex=="1"){
        popupWindow.appendChild(image1)
        broj=1
        
    }
    else if(pictureIndex=="2"){
        popupWindow.appendChild(image2)
        broj=2
    }
    else if(pictureIndex=="3"){
        popupWindow.appendChild(image3)
        broj=3
        
    }
    else if(pictureIndex=="4"){
        popupWindow.appendChild(image4)
        broj=4
    }
}
//Promena slika klikom na next click
nextBtn.onclick=function(){
if(broj=="1"){
    popupWindow.removeChild(image1)
    popupWindow.appendChild(image2)
    broj=2
}
else if(broj=="2"){
    popupWindow.removeChild(image2)
    popupWindow.appendChild(image3)
    broj=3
}
else if(broj=="3"){
    popupWindow.removeChild(image3)
    popupWindow.appendChild(image4)
    broj=4
}
else if(broj=="4"){
    popupWindow.removeChild(image4)
    popupWindow.appendChild(image1)
    broj=1
}
}
//Promena slika klikom na previous click
prevBtn.onclick=function(){
    if(broj=="1"){
        popupWindow.removeChild(image1)
        popupWindow.appendChild(image4)
        broj=4
    }
    else if(broj=="2"){
        popupWindow.removeChild(image2)
        popupWindow.appendChild(image1)
        broj=1
    }
    else if(broj=="3"){
        popupWindow.removeChild(image3)
        popupWindow.appendChild(image2)
        broj=2
    }
    else if(broj=="4"){
        popupWindow.removeChild(image4)
        popupWindow.appendChild(image3)
        broj=3
    }
}

//Closing gallery

closeBtn.onclick=function(){
    subPage.style.background="linear-gradient(to top , #90dffecc 0%, #38a3d1 100%)"
    text.style.display="block"
    inputs.style.display="flex"
    gallery.style.display="flex"
    naslov.style.display="block"
    popupWindow.style.display="none"
    if(broj=="1"){
        popupWindow.removeChild(image1)
    }
    else if(broj=="2"){
        popupWindow.removeChild(image2)
    }
    else if(broj=="3"){
        popupWindow.removeChild(image3)
    }
    else if(broj=="4"){
        popupWindow.removeChild(image4)
    }
}

//Alertuju se imena kontinenata

function ime(redniBroj,event){
    //desni klik misa nam alertuje ime kontinenta ili okeana
    if(event.button=="2"){
    if(redniBroj=="1"){
        alert("Ovo je Južna Amerika")
    }
    if(redniBroj=="2"){
        alert("Ovo je Severna Amerika")
    }
    if(redniBroj=="3"){
        alert("Ovo je Afrika")
    }
    if(redniBroj=="4"){
        alert("Ovo je Evropa")
    }
    if(redniBroj=="5"){
        alert("Ovo je Azija")
    }
    if(redniBroj=="6"){
        alert("Ovo je Australija i Okeanija")
    }
    if(redniBroj=="7"){
        alert("Ovde bi trebao biti Antarktik")
    }
    if(redniBroj=="8"||redniBroj=="9"){
        alert("Ovde je Tihi okean")
    }
    if(redniBroj=="10"){
        alert("Ovde je Indijski okean")
    }
    if(redniBroj=="11"){
        alert("Ovde je Juzni Ledeni okean")
    }
    if(redniBroj=="12"){
        alert("Ovde je Severni Ledeni okean")
    }
    if(redniBroj=="13"){
        alert("Ovde je Atlantski okean")
    }
}
//Levi klik misa nas vodi na sajt
else if(event.button=="0"){
    if(redniBroj=="1"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%88%D1%83%D0%B6%D0%BD%D0%B0_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0","_blank")
    }
    if(redniBroj=="2"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0_%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0","_blank")
    }
    if(redniBroj=="3"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%90%D1%84%D1%80%D0%B8%D0%BA%D0%B0","_blank")
    }
    if(redniBroj=="4"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B0","_blank")
    }
    if(redniBroj=="5"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%90%D0%B7%D0%B8%D1%98%D0%B0","_blank")
    }
    if(redniBroj=="6"){
        window.open("https://sr.wikipedia.org/sr-el/%D0%9E%D0%BA%D0%B5%D0%B0%D0%BD%D0%B8%D1%98%D0%B0","_blank")
    }
    if(redniBroj=="7"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%90%D0%BD%D1%82%D0%B0%D1%80%D0%BA%D1%82%D0%B8%D0%BA","_blank")
    }
    if(redniBroj=="8" || redniBroj=="9"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%A2%D0%B8%D1%85%D0%B8_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD","_blank")
    }
    if(redniBroj=="10"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%98%D0%BD%D0%B4%D0%B8%D1%98%D1%81%D0%BA%D0%B8_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD","_blank")
    }
    if(redniBroj=="11"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%88%D1%83%D0%B6%D0%BD%D0%B8_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD","_blank")
    }
    if(redniBroj=="12"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B8_%D0%BB%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD","_blank")
    }
    if(redniBroj=="13"){
        window.open("https://sr.wikipedia.org/sr-ec/%D0%90%D1%82%D0%BB%D0%B0%D0%BD%D1%82%D1%81%D0%BA%D0%B8_%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD","_blank")
    }
}
}

let prequiz=document.querySelector(".pre-quiz")
//buttons for quiz
let btnTime=document.querySelector(".time")
let btnNoTime=document.querySelector(".no-time")

let btnStart=document.querySelector(".start")

//Kreiranje segmenata za kviz koji se pojavljuju klikom na start



let pitanje2=document.createElement("div")
pitanje2.setAttribute("class","pitanje")
pitanje2.innerHTML="4"

let pitanje3=document.createElement("div")
pitanje3.setAttribute("class","pitanje")
pitanje3.innerHTML="3"

let pitanje4=document.createElement("div")
pitanje4.setAttribute("class","pitanje")
pitanje4.innerHTML="2"

let pitanje5=document.createElement("div")
pitanje5.setAttribute("class","pitanje")
pitanje5.style.borderBottom="none"
pitanje5.innerHTML="1"

let timeBox=document.createElement("div")
timeBox.setAttribute("class","time-box")

let pitanja=document.createElement("div")
pitanja.setAttribute("class","pitanja")

let questionBox=document.createElement("div")
questionBox.setAttribute("class","questionBox")

let answerdiv=document.createElement("div")
answerdiv.setAttribute("class","answerDiv")

let answer1=document.createElement("button")
answer1.setAttribute("class","answer")

let answer2=document.createElement("button")
answer2.setAttribute("class","answer")

let answer3=document.createElement("button")
answer3.setAttribute("class","answer")

let answer4=document.createElement("button")
answer4.setAttribute("class","answer")

//div za cekiranje odgovara sa yes i no button
let checkingDiv=document.createElement("div")
checkingDiv.setAttribute("class","checkingDiv")
checkingDiv.innerHTML="Are you sure?"

let yesBtn=document.createElement("button")
yesBtn.setAttribute("class","yesBtn")
yesBtn.innerHTML="Yes"

let noBtn=document.createElement("button")
noBtn.setAttribute("class","noBtn")
noBtn.innerHTML="No"


let question1="Koja je Zemlja planeta po redu u Sunčevom sustavu?"
let answers1=[3,4,5,2]

let question2="Koliko kontinenata postoji?"
let answers2=[6,7,8,5]

let question3="Koliko okeana postoji?"
let answers3=[4,5,3,6]

let question4="Koliko sfera postoji?"
let answers4=[4,6,5,3]



questionBox.innerHTML=question1 

var timeout;
var time=20
let vrednost;
btnTime.onclick=function(){
    btnNoTime.style.background="white"
    btnTime.style.background="#FF1493";
    vrednost=1
}
btnNoTime.onclick=function(){
    btnTime.style.background="white"
    btnNoTime.style.background="#FF1493"
    vrednost=2
}

//Kviz pocinje klikom na start
btnStart.onclick=function(){
    
    if(!vrednost){
        alert("moras uneti vrednost za vreme");
        return
    }
    prequiz.style.width="600px"
    prequiz.style.height="480px"
    prequiz.style.marginLeft="250px";
    prequiz.style.marginTop="20px";
    if(vrednost=="1"){
        function countdown(){
            time--
            timeBox.innerHTML=time+" "+"s";
            
            if(time=="0"){
                alert("Vreme je isteklo")
                answer1.disabled=true
                answer2.disabled=true
                answer3.disabled=true
                answer4.disabled=true
                setTimeout(function(){
                 location.reload()
                },2500)
                return
            }
            timeout=setTimeout(countdown,1000)
        }
        countdown()
        
    }
    
    if(vrednost=="2"){
        timeBox.innerHTML="No time"
    }
    

    if(questionBox.innerHTML==question1){
        answer1.innerHTML=answers1[1]
        answer2.innerHTML=answers1[0]
        answer3.innerHTML=answers1[2]
        answer4.innerHTML=answers1[3]
        
        answer2.onclick=function(){

            answer1.disabled=true;
            answer3.disabled=true
            answer4.disabled=true 

            answer2.style.backgroundColor="yellow"
            checkingDiv.appendChild(yesBtn)
            checkingDiv.appendChild(noBtn)
            prequiz.appendChild(checkingDiv)
            clearTimeout(timeout)
            yesBtn.onclick=function(){
                alert("Tačno si odgovorio na prvo pitanje")
                pitanje5.style.background="blueviolet"
                prequiz.removeChild(checkingDiv)
                questionBox.innerHTML=question2
                answer2.style.backgroundColor="white"
                //Drugo pitanje
                if(questionBox.innerHTML==question2){
                    answer1.disabled=false
                    answer2.disabled=false
                    answer3.disabled=false
                    answer4.disabled=false

                    time=20
                    answer1.innerHTML=answers2[1]
                    answer2.innerHTML=answers2[0]
                    answer3.innerHTML=answers2[3]
                    answer4.innerHTML=answers2[2]
                    setTimeout(countdown,1000)
                    answer1.onclick=function(){
                        answer1.disabled=true
                        answer2.disabled=true;
                        answer3.disabled=true
                        answer4.disabled=true 

                        answer1.style.backgroundColor="yellow"
                        checkingDiv.appendChild(yesBtn)
                        checkingDiv.appendChild(noBtn)
                        prequiz.appendChild(checkingDiv)
                        clearTimeout(timeout)
                        yesBtn.onclick=function(){
                            alert("Tačno si odgovorio na drugo pitanje")
                            pitanje4.style.background="blueviolet"
                            prequiz.removeChild(checkingDiv)
                            questionBox.innerHTML=question3
                            time=20
                            answer1.style.backgroundColor="white"
                            //Trece pitanje
                            if(questionBox.innerHTML==question3){
                                answer1.disabled=false
                                answer2.disabled=false
                                answer3.disabled=false
                                answer4.disabled=false

                                time=20
                                answer1.innerHTML=answers3[3]
                                answer2.innerHTML=answers3[0]
                                answer3.innerHTML=answers3[2]
                                answer4.innerHTML=answers3[1]
                                setTimeout(countdown,1000)

                                //Klik na odgovor 1
                                answer1.onclick=function(){
                                    answer1.disabled=true
                                    answer2.disabled=true
                                    answer3.disabled=true
                                    answer4.disabled=true 
                    
                                    answer1.style.backgroundColor="yellow"
                                    checkingDiv.appendChild(yesBtn)
                                    checkingDiv.appendChild(noBtn)
                                    prequiz.appendChild(checkingDiv)
                                    clearTimeout(timeout)
                                    yesBtn.onclick=function(){
                                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                                        prequiz.removeChild(checkingDiv)
                                        
                                        answer1.style.backgroundColor="white"
                                        setTimeout(function(){
                                            location.reload()
                                        },3000)
                                        answer1.disabled=true
                                        answer2.disabled=true
                                        answer3.disabled=true
                                        answer4.disabled=true
                                    }
                                    noBtn.onclick=function(){
                                        answer1.disabled=false
                                        answer2.disabled=false;
                                        answer3.disabled=false
                                        answer4.disabled=false 
                                        setTimeout(countdown,1000)
                                        prequiz.removeChild(checkingDiv)
                                        answer1.style.backgroundColor="white"
                                    }
                                }
                                //Klik na odgovor 2
                                answer2.onclick=function(){
                                    answer3.disabled=true 
                                    answer2.disabled=true;
                                    answer1.disabled=true
                                    answer4.disabled=true 
                
                                    answer2.style.backgroundColor="yellow"
                                    checkingDiv.appendChild(yesBtn)
                                    checkingDiv.appendChild(noBtn)
                                    prequiz.appendChild(checkingDiv)
                                    clearTimeout(timeout)
                                    yesBtn.onclick=function(){
                                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                                        prequiz.removeChild(checkingDiv)
                                        
                                        answer2.style.backgroundColor="white"
                                        setTimeout(function(){
                                            location.reload()
                                        },3000)
                                        answer1.disabled=true
                                        answer2.disabled=true
                                        answer3.disabled=true
                                        answer4.disabled=true
                                        
                                    }
                                    noBtn.onclick=function(){
                                        setTimeout(countdown,1000)
                                        prequiz.removeChild(checkingDiv)
                                        answer2.style.backgroundColor="white"
                                        answer3.disabled=false
                                        answer2.disabled=false;
                                        answer1.disabled=false
                                        answer4.disabled=false 
                                    }
                                   
                                }
                                //Klik na odgovor 3
                                answer3.onclick=function(){
                                    answer3.disabled=true
                                    answer2.disabled=true;
                                    answer1.disabled=true
                                    answer4.disabled=true 
                
                                    answer3.style.backgroundColor="yellow"
                                    checkingDiv.appendChild(yesBtn)
                                    checkingDiv.appendChild(noBtn)
                                    prequiz.appendChild(checkingDiv)
                                    clearTimeout(timeout)
                                    yesBtn.onclick=function(){
                                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                                        prequiz.removeChild(checkingDiv)
                                        
                                        answer3.style.backgroundColor="white"
                                        setTimeout(function(){
                                            location.reload()
                                        },3000)
                                        answer1.disabled=true
                                        answer2.disabled=true
                                        answer3.disabled=true
                                        answer4.disabled=true
                                        
                                    }
                                    noBtn.onclick=function(){
                                        setTimeout(countdown,1000)
                                        prequiz.removeChild(checkingDiv)
                                        answer3.style.backgroundColor="white"
                                        answer3.disabled=false
                                        answer2.disabled=false;
                                        answer1.disabled=false
                                        answer4.disabled=false 
                                    }
                                   
                                }
                                //Klik na odgovor 4 koji je tacan
                                answer4.onclick=function(){
                                    answer3.disabled=true
                                    answer2.disabled=true;
                                    answer1.disabled=true
                                    answer4.disabled=true 
                
                                    answer4.style.backgroundColor="yellow"
                                    
                                    checkingDiv.appendChild(yesBtn)
                                    checkingDiv.appendChild(noBtn)
                                    prequiz.appendChild(checkingDiv)
                                    clearTimeout(timeout)
                                    yesBtn.onclick=function(){
                                        alert("Tačno si odgovorio na treće pitanje")
                                        pitanje3.style.background="blueviolet"
                                        prequiz.removeChild(checkingDiv)
                                        questionBox.innerHTML=question4
                                        time=20
                                        answer4.style.backgroundColor="white"
                                        //4.Pitanje
                                        if(questionBox.innerHTML==question4){
                                            answer1.disabled=false
                                            answer2.disabled=false
                                            answer3.disabled=false
                                            answer4.disabled=false

                                            time=20
                                            answer1.innerHTML=answers4[3]
                                            answer2.innerHTML=answers4[0]
                                            answer3.innerHTML=answers4[2]
                                            answer4.innerHTML=answers4[1]
                                            setTimeout(countdown,1000)

                                //Klik na odgovor 1
                                answer1.onclick=function(){
                                    answer1.disabled=true
                                    answer2.disabled=true
                                    answer3.disabled=true
                                    answer4.disabled=true 
                    
                                    answer1.style.backgroundColor="yellow"
                                    checkingDiv.appendChild(yesBtn)
                                    checkingDiv.appendChild(noBtn)
                                    prequiz.appendChild(checkingDiv)
                                    clearTimeout(timeout)
                                    yesBtn.onclick=function(){
                                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                                        prequiz.removeChild(checkingDiv)
                                        
                                        answer1.style.backgroundColor="white"
                                        setTimeout(function(){
                                            location.reload()
                                        },3000)
                                        answer1.disabled=true
                                        answer2.disabled=true
                                        answer3.disabled=true
                                        answer4.disabled=true
                                    }
                                    noBtn.onclick=function(){
                                        answer1.disabled=false
                                        answer2.disabled=false;
                                        answer3.disabled=false
                                        answer4.disabled=false 
                                        setTimeout(countdown,1000)
                                        prequiz.removeChild(checkingDiv)
                                        answer1.style.backgroundColor="white"
                                    }
                                }
                                                                     //Klik na odgovor 2
                                answer2.onclick=function(){
                                    answer3.disabled=true 
                                    answer2.disabled=true;
                                    answer1.disabled=true
                                    answer4.disabled=true 
                
                                    answer2.style.backgroundColor="yellow"
                                    checkingDiv.appendChild(yesBtn)
                                    checkingDiv.appendChild(noBtn)
                                    prequiz.appendChild(checkingDiv)
                                    clearTimeout(timeout)
                                    yesBtn.onclick=function(){
                                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                                        prequiz.removeChild(checkingDiv)
                                        
                                        answer2.style.backgroundColor="white"
                                        setTimeout(function(){
                                            location.reload()
                                        },3000)
                                        answer1.disabled=true
                                        answer2.disabled=true
                                        answer3.disabled=true
                                        answer4.disabled=true
                                        
                                    }
                                    noBtn.onclick=function(){
                                        setTimeout(countdown,1000)
                                        prequiz.removeChild(checkingDiv)
                                        answer2.style.backgroundColor="white"
                                        answer3.disabled=false
                                        answer2.disabled=false;
                                        answer1.disabled=false
                                        answer4.disabled=false 
                                    }
                                   
                                }
                                //Klik na odgovor 3
                                answer3.onclick=function(){
                                    answer3.disabled=true
                                    answer2.disabled=true;
                                    answer1.disabled=true
                                    answer4.disabled=true 
                
                                    answer3.style.backgroundColor="yellow"
                                    checkingDiv.appendChild(yesBtn)
                                    checkingDiv.appendChild(noBtn)
                                    prequiz.appendChild(checkingDiv)
                                    clearTimeout(timeout)
                                    yesBtn.onclick=function(){
                                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                                        prequiz.removeChild(checkingDiv)
                                        
                                        answer3.style.backgroundColor="white"
                                        setTimeout(function(){
                                            location.reload()
                                        },3000)
                                        answer1.disabled=true
                                        answer2.disabled=true
                                        answer3.disabled=true
                                        answer4.disabled=true
                                        
                                    }
                                    noBtn.onclick=function(){
                                        setTimeout(countdown,1000)
                                        prequiz.removeChild(checkingDiv)
                                        answer3.style.backgroundColor="white"
                                        answer3.disabled=false
                                        answer2.disabled=false;
                                        answer1.disabled=false
                                        answer4.disabled=false 
                                    }
                                   
                                }
                                //Klik na odgovor 4 koji je tacan 
                                answer4.onclick=function(){
                                    answer3.disabled=true
                                    answer2.disabled=true;
                                    answer1.disabled=true
                                    answer4.disabled=true 
                
                                    answer4.style.backgroundColor="yellow"
                                    checkingDiv.appendChild(yesBtn)
                                    checkingDiv.appendChild(noBtn)
                                    prequiz.appendChild(checkingDiv)
                                    clearTimeout(timeout)
                                    yesBtn.onclick=function(){
                                        alert("Tačno si odgovorio na 4.pitanje i rešio kviz")
                                        prequiz.removeChild(checkingDiv)
                                        pitanje2.style.background="blueviolet"
                                        answer3.style.backgroundColor="white"
                                        setTimeout(function(){
                                            location.reload()
                                        },3000)
                                        answer1.disabled=true
                                        answer2.disabled=true
                                        answer3.disabled=true
                                        answer4.disabled=true
                                        
                                    }
                                    noBtn.onclick=function(){
                                        setTimeout(countdown,1000)
                                        prequiz.removeChild(checkingDiv)
                                        answer4.style.backgroundColor="white"
                                        answer3.disabled=false
                                        answer2.disabled=false;
                                        answer1.disabled=false
                                        answer4.disabled=false 
                                    }
                                   
                                }
                                
                                
                            }
                                    }
                                    noBtn.onclick=function(){
                                        setTimeout(countdown,1000)
                                        prequiz.removeChild(checkingDiv)
                                        answer4.style.backgroundColor="white"
                                        answer3.disabled=false
                                        answer2.disabled=false;
                                        answer1.disabled=false
                                        answer4.disabled=false 
                                    }
                                   
                                }
                            }
                        }
                        noBtn.onclick=function(){
                            answer1.disabled=false;
                            answer2.disabled=false
                            answer3.disabled=false
                            answer4.disabled=false
                            setTimeout(countdown,1000)
                            prequiz.removeChild(checkingDiv)
                            answer1.style.backgroundColor="white"
                        }
                    }
                    answer2.onclick=function(){
                        answer1.disabled=true
                        answer2.disabled=true;
                        answer3.disabled=true
                        answer4.disabled=true 

                        answer2.style.backgroundColor="yellow"
                        checkingDiv.appendChild(yesBtn)
                        checkingDiv.appendChild(noBtn)
                        prequiz.appendChild(checkingDiv)
                        clearTimeout(timeout)
                        yesBtn.onclick=function(){
                            alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                            prequiz.removeChild(checkingDiv)
                    
                        answer1.style.backgroundColor="white"
                        setInterval(function(){
                        location.reload()
                         },3000)
                        answer1.disabled=true
                        answer2.disabled=true
                        answer3.disabled=true
                        answer4.disabled=true
                }
                noBtn.onclick=function(){
                    answer1.disabled=false;
                    answer2.disabled=false
                    answer3.disabled=false
                    answer4.disabled=false 
                    setTimeout(countdown,1000)
                    prequiz.removeChild(checkingDiv)
                    answer2.style.backgroundColor="white"
                }
                }
                answer3.onclick=function(){
                    answer1.disabled=true
                        answer2.disabled=true;
                        answer3.disabled=true
                        answer4.disabled=true 

                    answer3.style.backgroundColor="yellow"
                    checkingDiv.appendChild(yesBtn)
                    checkingDiv.appendChild(noBtn)
                    prequiz.appendChild(checkingDiv)
                    clearTimeout(timeout)
                    yesBtn.onclick=function(){
                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                        prequiz.removeChild(checkingDiv)
                        
                        answer3.style.backgroundColor="white"
                        setInterval(function(){
                            location.reload()
                        },3000)
                        answer1.disabled=true
                        answer2.disabled=true
                        answer3.disabled=true
                        answer4.disabled=true
                        
                    }
                    noBtn.onclick=function(){
                        answer1.disabled=false;
                        answer2.disabled=false
                        answer3.disabled=false
                        answer4.disabled=false 
                        setTimeout(countdown,1000)
                        prequiz.removeChild(checkingDiv)
                        answer3.style.backgroundColor="white"
                    }
                   
                }
                answer4.onclick=function(){
                        answer1.disabled=true
                        answer2.disabled=true;
                        answer3.disabled=true
                        answer4.disabled=true  

                    answer4.style.backgroundColor="yellow"
                    checkingDiv.appendChild(yesBtn)
                    checkingDiv.appendChild(noBtn)
                    prequiz.appendChild(checkingDiv)
                    clearTimeout(timeout)
                    yesBtn.onclick=function(){
                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3sekunde")
                        prequiz.removeChild(checkingDiv)
                        
                        answer4.style.backgroundColor="white"
                        setTimeout(function(){
                            location.reload()
                        },3000)
                        answer1.disabled=true
                        answer2.disabled=true
                        answer3.disabled=true
                        answer4.disabled=true
                        }
                        noBtn.onclick=function(){
                            setTimeout(countdown,1000)
                            prequiz.removeChild(checkingDiv)
                            answer4.style.backgroundColor="white"
                            answer1.disabled=false;
                        answer2.disabled=false
                        answer3.disabled=false
                        answer4.disabled=false
                        }
               
            }

            }
            }
            noBtn.onclick=function(){
                answer1.disabled=false;
                answer3.disabled=false
                answer4.disabled=false 
                setTimeout(countdown,1000)
                prequiz.removeChild(checkingDiv)
                answer2.style.backgroundColor="white"
            }
        }

        //Prvo pitanje ako je odgovor netacan
            answer1.onclick=function(){
                answer2.disabled=true;
                answer3.disabled=true
                answer4.disabled=true 

                answer1.style.backgroundColor="yellow"
                checkingDiv.appendChild(yesBtn)
                checkingDiv.appendChild(noBtn)
                prequiz.appendChild(checkingDiv)
                clearTimeout(timeout)
                yesBtn.onclick=function(){
                    alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                    prequiz.removeChild(checkingDiv)
                    
                    answer1.style.backgroundColor="white"
                    setTimeout(function(){
                        location.reload()
                    },3000)
                    answer1.disabled=true
                    answer2.disabled=true
                    answer3.disabled=true
                    answer4.disabled=true
                }
                noBtn.onclick=function(){
                    answer2.disabled=false;
                    answer3.disabled=false
                    answer4.disabled=false 
                    setTimeout(countdown,1000)
                    prequiz.removeChild(checkingDiv)
                    answer1.style.backgroundColor="white"
                }
            }

            answer3.onclick=function(){
                    answer2.disabled=true;
                    answer1.disabled=true
                    answer4.disabled=true 

                    answer3.style.backgroundColor="yellow"
                    checkingDiv.appendChild(yesBtn)
                    checkingDiv.appendChild(noBtn)
                    prequiz.appendChild(checkingDiv)
                    clearTimeout(timeout)
                    yesBtn.onclick=function(){
                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3 sekunde")
                        prequiz.removeChild(checkingDiv)
                        
                        answer3.style.backgroundColor="white"
                        setTimeout(function(){
                            location.reload()
                        },3000)
                        answer1.disabled=true
                        answer2.disabled=true
                        answer3.disabled=true
                        answer4.disabled=true
                        
                    }
                    noBtn.onclick=function(){
                        setTimeout(countdown,1000)
                        prequiz.removeChild(checkingDiv)
                        answer3.style.backgroundColor="white"
                        answer2.disabled=false;
                        answer1.disabled=false
                        answer4.disabled=false 
                    }
                   
                }

            answer4.onclick=function(){
                    answer2.disabled=true;
                    answer1.disabled=true
                    answer3.disabled=true 

                    answer4.style.backgroundColor="yellow"
                    checkingDiv.appendChild(yesBtn)
                    checkingDiv.appendChild(noBtn)
                    prequiz.appendChild(checkingDiv)
                    clearTimeout(timeout)
                    yesBtn.onclick=function(){
                        alert("Pogrešno si odgovorio! Kviz će se refrešovati za 3sekunde")
                        prequiz.removeChild(checkingDiv)
                        
                        answer4.style.backgroundColor="white"
                        setTimeout(function(){
                            location.reload()
                        },3000)
                        answer1.disabled=true
                        answer2.disabled=true
                        answer3.disabled=true
                        answer4.disabled=true
                        }
                        noBtn.onclick=function(){
                            answer2.disabled=false;
                            answer1.disabled=false
                            answer3.disabled=false 
                            setTimeout(countdown,1000)
                            prequiz.removeChild(checkingDiv)
                            answer4.style.backgroundColor="white"
                        }
               
        }

    }
    
    
   

    btnTime.style.display="none"
    btnNoTime.style.display="none"
   
    btnStart.style.display="none"

    answerdiv.appendChild(answer1)
    answerdiv.appendChild(answer2)
    answerdiv.appendChild(answer3)
    answerdiv.appendChild(answer4)
    

    
    pitanja.appendChild(pitanje2)
    pitanja.appendChild(pitanje3)
    pitanja.appendChild(pitanje4)
    pitanja.appendChild(pitanje5)
    prequiz.appendChild(pitanja)
    prequiz.appendChild(timeBox)
    prequiz.appendChild(questionBox)
    prequiz.appendChild(answerdiv)
    

}

let merkur=document.querySelector(".merkur")
let venera=document.querySelector(".venera")
let zemlja=document.querySelector(".zemlja")
let mars=document.querySelector(".mars")
let jupiter=document.querySelector(".jupiter")
let saturn=document.querySelector(".saturn")
let neptun=document.querySelector(".neptun")
let uran=document.querySelector(".uran")
//Ucitavanje slika
let pictureBox=document.getElementById("pictureBox")
function openPicture(slika){
    merkur.style.background="rgb(255, 244, 244)"
    venera.style.background="rgb(255, 244, 244)"
    zemlja.style.background="rgb(255, 244, 244)"
    mars.style.background="rgb(255, 244, 244)"
    jupiter.style.background="rgb(255, 244, 244)"
    saturn.style.background="rgb(255, 244, 244)"
    neptun.style.background="rgb(255, 244, 244)"
    uran.style.background="rgb(255, 244, 244)"
    if(slika=="1"){
        pictureBox.innerHTML='<img style="width:700px;height:auto" src="merkur.jpg">'
        merkur.style.background="rgb(8, 253, 0)"
    }
    if(slika=="2"){
        pictureBox.innerHTML='<img style="width:700px;height:auto" src="venera.jpg">'
        venera.style.background="rgb(8, 253, 0)"
    }
    if(slika=="3"){
        pictureBox.innerHTML='<img style="width:650px;height:450px" src="zemlja.jpg">'
        zemlja.style.background="rgb(8, 253, 0)"
    }
    if(slika=="4"){
        pictureBox.innerHTML='<img style="width:700px;height:auto" src="mars.jpg">'
        mars.style.background="rgb(8, 253, 0)"
    }
    if(slika=="5"){
        pictureBox.innerHTML='<img style="width:700px;height:auto" src="jupiter.jpg">'
        jupiter.style.background="rgb(8, 253, 0)"
    }
    if(slika=="6"){
        pictureBox.innerHTML='<img style="width:700px;height:auto" src="saturn.jpg">'
        saturn.style.background="rgb(8, 253, 0)"
    }
    if(slika=="7"){
        pictureBox.innerHTML='<img style="width:700px;height:auto" src="neptun.jpg">'
        neptun.style.background="rgb(8, 253, 0)"
    }
    if(slika=="8"){
        pictureBox.innerHTML='<img style="width:700px;height:auto" src="uran.jpg">'
        uran.style.background="rgb(8, 253, 0)"
    }
}
//Search funkcija
function search(){
let input=document.getElementById("search")
let filter=input.value.toUpperCase()
let ul=document.querySelector(".search-list")
let li=ul.getElementsByTagName("li")
let i;
let a;
let textValue;


for (i=0;i<li.length;i++){
    // kad se console.loguje dobija se <a>Merkur</a> itd... i gleda se prva reč jer je index 0
    a = li[i].getElementsByTagName("a")[0]
   
    textValue = a.innerText;
    // >-1 jer indexi zapocinju sa 0 ako je manje od -1 znaci da taj string ili slovo ne postoji, indexOf vrca broj indexa gde se nalazito slovo u stringu
     if (textValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block";
    } else {
        li[i].style.display = "none";
    }
}
}
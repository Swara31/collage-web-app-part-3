var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
} 

setTimeout(function(){
    img_id = "selfie1";
    takesnapshot();
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000);


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

Recognition.onresult = function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content == "take my selfie"){
        console.log("taking selfie");
        speak();
    } 
  
    
}

function takesnapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
        document.getElementById("resul1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
    }

    if(img_id=="selfie2"){
        document.getElementById("resul2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
    }

    if(img_id=="selfie3"){
        document.getElementById("resul3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
    }
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}



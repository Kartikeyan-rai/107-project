//https://teachablemachine.withgoogle.com/models/wmq7keQY9/
Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach( '#camera' );
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
};
console.log('ml5 version',ml5.version);
clasierfier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/wmq7keQY9/model.json',modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}
function speak(){
    synth=window.SpeechSynthesis;
    speak_data_1="The First Prediction is "+prediction_1;
    speak_data_2="And The second prediction is "+prediction_2;
    utterthis=new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}
function post(){
grab();
var finalip;
var msg=document.getElementById('msg').value;
var feed=document.getElementById('feed');
var fulldate=new Date();
var month=fulldate.getMonth()+1;
var day=fulldate.getDate();
var year=fulldate.getFullYear();
var date=month+"/"+day+"/"+year;
console.log(date);
var newmsg=document.createElement('DIV');
newmsg.setAttribute('data-idk',"post");
num++;
var inhtml="<div name=\"optns\">Delete</div><div name=\"info\"><pre>"+get()+"    "+date+"</pre></div><div name=\"message\">"+msg+"</div>";
var tsnd=inhtml;
newmsg.innerHTML=inhtml;
feed.appendChild(newmsg);
function get(){
if(finalip=="192.168.1.83")
return "Admin";
return finalip;
}


function grab(){
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

     //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        
        pc.setLocalDescription(sdp, noop, noop);
    }, noop); 

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}

// Usage

getUserIP(function(ip){
finalip=ip;
});
}
send();
function send(){
var frame=document.getElementById('iframe').contentWindow.document;






}

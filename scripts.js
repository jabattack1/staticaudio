var tv ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/offair%20fast_zpsa4xnexhu.gif' id='tv'>";
var offair ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/retro%20offair_zpsp65w34wa.gif' id='offair'>";
var flash = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/neon.jpg_zpsmei4z0zu.gif' id='flash'>"
var logo ="<a href=\"/\" class='animated fadeIn' onClick=\"home();return false;\"><img src='http://i1301.photobucket.com/albums/ag119/jabattack1/audioboy2_cut_zpsjlmmln45.png' id='logo' class='animated slideInDown'></a>";
var parental = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/parental-discretion-is-advised_zpsc1kipkd2.jpg' id='parental'>";

var AudioBoyInfo ="<div id='gel'><h2 id='audiopeter' class='animated fadeIn'>Audio Boy = Rebel Solo</h2><h2 id='audiodo' class='animated fadeIn'>Audio Boy = Peter Hahn</h2>";
var PeterHahnInfo ="<div id='gel2'><h2 id='peterdo' class='animated fadeIn'>Peter Hahn = Songwriter/Producer/<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSinger/Musician</h2></div>";

var contact ="<a href=\"mailto:peter.hahn@live.com\" class='animated fadeIn' id='contact_email'>peter.hahn@live.com</a>";
var ContactInfo ="<div id='gel4'><h2 id='contactpeter' class='animated fadeIn'>551 689 3517</h2></div>";

var MV ="<iframe width=\"660\" height=\"415\" class='animated slideInUp' src=\"https://www.youtube.com/embed/2MfEFwOjyHY\" frameborder=\"0\" allowfullscreen></iframe>";
var headshot = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/phat_zpsnq9fh8qf.jpg' class='animated fadeIn' id='photo'>";
var rebelphoto = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/rebel%20solo%20b_zpswglelpim.jpg' class='animated fadeIn' id='rebelphoto'>";

var RebelSolo ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/microphone_zps9ae9ume5.gif' class='animated fadeIn' id='RebelSolo'>";
var stuckgraph ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/wonders_zpsitueonqh.gif' class='animated fadeIn' id='stuckgraph'>";
var scene ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/alone_zpsuq76gojr.gif' class='animated fadeIn' id='scene'>";
var mechstuff="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/mechanical_zpss9l7zipz.gif' class='animated fadeIn' id='RebelSolo'>";

var circle1 ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/CIRCLE_zps84mtikcr.png' id='circle1'>";
var circle2 ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/CIRCLE_zps84mtikcr.png' id='circle2'>";
var circle3 ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/CIRCLE_zps84mtikcr.png' id='circle3'>";
var circle4 ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/CIRCLE_zps84mtikcr.png' id='circle4'>";

var audioback ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/blackout_zps9nsa8hhk.gif' id='audioback'>";
var contactrunner ="<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/runner_zpsrjhxs93t.gif' class='animated fadeIn' id='contactrunner'>";
var peterback ="<img src='http://www.animated-gifs.eu/leisure-music-equalizers/0045.gif' id='peterback'>";

var timer;

function home(){
    clearTimeout(timer);
    $('#content').empty();
    $('#video').empty();
    $("body").children("#contact_email").remove();
    $('#content').append(flash);
}

function AudioBoy(){
    clearTimeout(timer);
    $('#content').empty();
    $('#video').empty();
    $("body").children("#contact_email").remove();
    $('#content').append(audioback);
    $('#content').append(AudioBoyInfo);
    $('#content').append(rebelphoto);
}

function PeterHahn(){
    clearTimeout(timer);
    $('#content').empty();
    $('#video').empty();
    $("body").children("#contact_email").remove();
    $('#content').append(audioback);
    $('#content').append(PeterHahnInfo);
    $('#content').append(headshot);

}

function ContactInfor(){
    clearTimeout(timer);
    $('#content').empty();
    $('#video').empty();
    $("body").children("#contact_email").remove();
    $('body').append(contact);
    $('#content').append(contactrunner);
    $('#content').append(ContactInfo);
}

function MusicVideo(){
    clearTimeout(timer);
    stuck.stop();
    program.stop();
    micro.stop();
    mech.stop();
    // $('#content').empty();
    $('#video').empty();
    $("body").children("#contact_email").remove();
    $('#video').append(MV);
}

function ridmv(){
    clearTimeout(timer);
    $('#video').empty();
    // $('body').append(contact);
    // $("body").children("#contact_email").remove();
}

function play_microphone(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_microphone");
    var audio1 = document.getElementById("audio_stuck");
    var audio2 = document.getElementById("audio_program");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    program.stop();
    // micro.stop();
    stuck.stop();
    mech.stop();
    micro.play();
    $('#circle1').remove();
    $('#circle2').remove();
    $('#circle3').remove();
    $('#circle4').remove();
    $('#audioplayer').append(circle3);
    $('#content').empty();
    $('#video').empty();
    $('#content').append(RebelSolo);
    timer = setTimeout(function () {$('#content').append(offair);}, 176000);
}

function pause_microphone(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_microphone");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    micro.pause();
    $('#content').empty();
    $('#content').append(offair);
}

function stop_microphone(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_microphone");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    micro.stop();
    $('#circle1').remove();
    // $('#circle2').remove();
    // $('#circle3').remove();
    $('#content').empty();
    $('#content').append(tv);
}

function play_stuck(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_stuck");
    var audio1 = document.getElementById("audio_microphone");
    var audio2 = document.getElementById("audio_program");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    program.stop();
    // stuck.stop();
    micro.stop();
    mech.stop();
    stuck.stream();
    stuck.play();

    $('#circle1').remove();
    $('#circle2').remove();
    $('#circle3').remove();
    $('#circle4').remove();
    $('#audioplayer').append(circle2);
    $('#content').empty();
    $('#video').empty();
    $('#content').append(stuckgraph);
    timer = setTimeout(function () {$('#content').append(offair);}, 131000);
}

function pause_stuck(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_stuck");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    stuck.pause();
    $('#content').empty();
    $('#content').append(offair);
}

function stop_stuck(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_stuck");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    stuck.stop();
    // $('#circle1').remove();
    $('#circle2').remove();
    // $('#circle3').remove();
    $('#content').empty();
    $('#content').append(tv);
}

function play_program(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_program");
    var audio1 = document.getElementById("audio_stuck");
    var audio2 = document.getElementById("audio_microphone");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    // program.stop();
    micro.stop();
    stuck.stop();
    mech.stop();
    program.play();
    $('#circle1').remove();
    $('#circle2').remove();
    $('#circle3').remove();
    $('#circle4').remove();
    $('#audioplayer').append(circle1);
    $('#content').empty();
    $('#video').empty();
    $('#content').append(scene);
    timer = setTimeout(function () {$('#content').append(offair);}, 166000);
}

function pause_program(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_program");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    program.pause();
    $('#content').empty();
    $('#content').append(offair);
}

function stop_program(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_program");
    program.stop();
    $("body").children("#contact_email").remove();
    // $('#circle1').remove();
    // $('#circle2').remove();
    $('#circle3').remove();
    $('#content').empty();
    $('#content').append(tv);
}

function play_mech(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_microphone");
    var audio1 = document.getElementById("audio_stuck");
    var audio2 = document.getElementById("audio_program");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    program.stop();
    // micro.stop();
    stuck.stop();
    micro.stop();
    mech.play();
    $('#circle1').remove();
    $('#circle2').remove();
    $('#circle3').remove();
    $('#circle4').remove();
    $('#audioplayer').append(circle4);
    $('#content').empty();
    $('#video').empty();
    $('#content').append(mechstuff);
    timer = setTimeout(function () {$('#content').append(offair);}, 247000);
}

function pause_mech(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_microphone");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    mech.pause();
    $('#content').empty();
    $('#content').append(offair);
}

function stop_mech(){
    clearTimeout(timer);
    var audio = document.getElementById("audio_microphone");
    $('#video').empty();
    $("body").children("#contact_email").remove();
    mech.stop();
    $('#circle4').remove();
    // $('#circle2').remove();
    // $('#circle3').remove();
    $('#content').empty();
    $('#content').append(tv);
}

// function remove_mv(){
//     $('#gel3').remove();
// }

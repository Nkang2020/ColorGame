$(document).ready(function() {
  var color01;
  var color02;
  var color03;

  var color11;
  var color12;
  var color13;

  var color21;
  var color22;
  var color23;

  var color31;
  var color32;
  var color33;

  var color41;
  var color42;
  var color43;

  var color51;
  var color52;
  var color53;
  
  var colorNum;

  var num;
  $('#play').click(function() {

    color01 = Math.floor(Math.random() * 256);
    color02 = Math.floor(Math.random() * 256);
    color03 = Math.floor(Math.random() * 256);

    color11 = Math.floor(Math.random() * 256);
    color12 = Math.floor(Math.random() * 256);
    color13 = Math.floor(Math.random() * 256);

    color21 = Math.floor(Math.random() * 256);
    color22 = Math.floor(Math.random() * 256);
    color23 = Math.floor(Math.random() * 256);

    color31 = Math.floor(Math.random() * 256);
    color32 = Math.floor(Math.random() * 256);
    color33 = Math.floor(Math.random() * 256);

    color41 = Math.floor(Math.random() * 256);
    color42 = Math.floor(Math.random() * 256);
    color43 = Math.floor(Math.random() * 256);

    color51 = Math.floor(Math.random() * 256);
    color52 = Math.floor(Math.random() * 256);
    color53 = Math.floor(Math.random() * 256);

    colorNum = Math.floor(Math.random() * 6);
    
    if(colorNum === 0){
      $("#rgb").html("RGB: " + color01 + ", " + color02 + ", " + color03);
      $("#0").css("background-color", 'rgb(' + color01 + ',' + color02 + ',' + color03 + ')');
    }
    else if(colorNum === 1){
      $("#rgb").html("RGB: " + color11 + ", " + color12 + ", " + color13);
      $("#1").css("background-color", 'rgb(' + color11 + ',' + color12 + ',' + color13 + ')');
    }
    else if(colorNum === 2){
      $("#rgb").html("RGB: " + color21 + ", " + color22 + ", " + color23);
      $("#2").css("background-color", 'rgb(' + color21 + ',' + color22 + ',' + color23 + ')');
    }
    else if(colorNum === 3){
      $("#rgb").html("RGB: " + color31 + ", " + color32 + ", " + color33);
      $("#3").css("background-color", 'rgb(' + color31 + ',' + color32 + ',' + color33 + ')');
    }
    else if(colorNum === 4){
      $("#rgb").html("RGB: " + color41 + ", " + color42 + ", " + color43);
      $("#4").css("background-color", 'rgb(' + color41 + ',' + color42 + ',' + color43 + ')');
    }
    else if(colorNum === 5){
      $("#rgb").html("RGB: " + color51 + ", " + color52 + ", " + color53);
      $("#5").css("background-color", 'rgb(' + color51 + ',' + color52 + ',' + color53 + ')');
    }
    
    if(colorNum===0){
      $("#1").css("background-color", 'rgb(' + color11 + ',' + color12 + ',' + color13 + ')');
      $("#2").css("background-color", 'rgb(' + color21 + ',' + color22 + ',' + color23 + ')');
      $("#3").css("background-color", 'rgb(' + color31 + ',' + color32 + ',' + color33 + ')');
      $("#4").css("background-color", 'rgb(' + color41 + ',' + color42 + ',' + color43 + ')');
      $("#5").css("background-color", 'rgb(' + color51 + ',' + color52 + ',' + color53 + ')');
    }
    else if(colorNum===1){
      $("#0").css("background-color", 'rgb(' + color01 + ',' + color02 + ',' + color03 + ')');
      $("#2").css("background-color", 'rgb(' + color21 + ',' + color22 + ',' + color23 + ')');
      $("#3").css("background-color", 'rgb(' + color31 + ',' + color32 + ',' + color33 + ')');
      $("#4").css("background-color", 'rgb(' + color41 + ',' + color42 + ',' + color43 + ')');
      $("#5").css("background-color", 'rgb(' + color51 + ',' + color52 + ',' + color53 + ')');
    }
    else if(colorNum===2){
      $("#0").css("background-color", 'rgb(' + color01 + ',' + color02 + ',' + color03 + ')');
      $("#1").css("background-color", 'rgb(' + color11 + ',' + color12 + ',' + color13 + ')');
      $("#3").css("background-color", 'rgb(' + color31 + ',' + color32 + ',' + color33 + ')');
      $("#4").css("background-color", 'rgb(' + color41 + ',' + color42 + ',' + color43 + ')');
      $("#5").css("background-color", 'rgb(' + color51 + ',' + color52 + ',' + color53 + ')');
    }
    else if(colorNum===3){
      $("#0").css("background-color", 'rgb(' + color01 + ',' + color02 + ',' + color03 + ')');
      $("#1").css("background-color", 'rgb(' + color11 + ',' + color12 + ',' + color13 + ')');
      $("#2").css("background-color", 'rgb(' + color21 + ',' + color22 + ',' + color23 + ')');
      $("#4").css("background-color", 'rgb(' + color41 + ',' + color42 + ',' + color43 + ')');
      $("#5").css("background-color", 'rgb(' + color51 + ',' + color52 + ',' + color53 + ')');
    }
    else if(colorNum===4){
      $("#0").css("background-color", 'rgb(' + color01 + ',' + color02 + ',' + color03 + ')');
      $("#1").css("background-color", 'rgb(' + color11 + ',' + color12 + ',' + color13 + ')');
      $("#2").css("background-color", 'rgb(' + color21 + ',' + color22 + ',' + color23 + ')');
      $("#3").css("background-color", 'rgb(' + color31 + ',' + color32 + ',' + color33 + ')');
      $("#5").css("background-color", 'rgb(' + color51 + ',' + color52 + ',' + color53 + ')');
    }
    else if(colorNum===5){
      $("#0").css("background-color", 'rgb(' + color01 + ',' + color02 + ',' + color03 + ')');
      $("#1").css("background-color", 'rgb(' + color11 + ',' + color12 + ',' + color13 + ')');
      $("#2").css("background-color", 'rgb(' + color21 + ',' + color22 + ',' + color23 + ')');
      $("#3").css("background-color", 'rgb(' + color31 + ',' + color32 + ',' + color33 + ')');
      $("#4").css("background-color", 'rgb(' + color41 + ',' + color42 + ',' + color43 + ')');
    }
    
    
    
    
   
  });
    
  $("#0").click(function(){
      if(colorNum===0){
        alert("You Won!");
        $("#reset").trigger("click");
      }
      else{
        alert("Sorry, you lost!");
        $("#reset").trigger("click");
      }
    })
    $("#1").click(function(){
      if(colorNum===1){
        alert("You Won!");
        $("#reset").trigger("click");
      }
      else{
        alert("Sorry, you lost!");
        $("#reset").trigger("click");
      }
    })
    $("#2").click(function(){
      if(colorNum===2){
        alert("You Won!");
        $("#reset").trigger("click");
      }
      else{
        alert("Sorry, you lost!");
        $("#reset").trigger("click");
      }
    })
    $("#3").click(function(){
      if(colorNum===3){
        alert("You Won!");
        $("#reset").trigger("click");
      }
      else{
        alert("Sorry, you lost!");
        $("#reset").trigger("click");
      }
    })
    $("#4").click(function(){
      if(colorNum===4){
        alert("You Won!");
        $("#reset").trigger("click");
      }
      else{
        alert("Sorry, you lost!");
        $("#reset").trigger("click");
      }
    })
    $("#5").click(function(){
      if(colorNum===5){
        alert("You Won!");
        $("#reset").trigger("click");
      }
      else{
        alert("Sorry, you lost!");
        $("#reset").trigger("click");   
      }
    })
  
  $('#reset').click(function() {
    $("#rgb").html("RGB");
    $('#0').css("background-color", "#006dcc")
    $('#1').css("background-color", "#006dcc")
    $('#2').css("background-color", "#006dcc")
    $('#3').css("background-color", "#006dcc")
    $('#4').css("background-color", "#006dcc")
    $('#5').css("background-color", "#006dcc")
    colorNum = undefined;
  });
  

});
const cigarettes = document.getElementById('cigarettes');
const trash = document.getElementById('trash');
const lung = document.getElementById('lung');



var counter=184;
var barvalue=0;

cigarettes.addEventListener('dragstart', dragStart);
//cigarettes.addEventListener('touchstart', dragStart);
trash.addEventListener('dragover', dragOver);
//trash.addEventListener('touchmove', dragOver);
trash.addEventListener('dragenter', dragEnter);
//trash.addEventListener('touchend', dragEnter);
trash.addEventListener('dragleave', dragLeave);
//trash.addEventListener('dragleave', dragLeave);
trash.addEventListener('drop', dragDrop);
//trash.addEventListener('touchend', dragDrop);



function dragStart() {
    cigarettes.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter() {
    trash.classList.add('hovered');
}

function dragLeave() {
    trash.classList.remove('hovered');
}


function drop(event) {
  event.preventDefault();
  const draggedItemId = event.dataTransfer.getData("text");
  if (draggedItemId === "cigarettes") {
    const cigaretteBox = document.getElementById(draggedItemId);
    const trashBin = document.getElementById("trash");
    trashBin.appendChild(cigaretteBox);
    updateLungRecovery();
  }
}


function dragDrop() {

    cigarettes.classList.remove('dragging');
    trash.classList.remove('hovered'); 



    //myFunction();
   // const image_x = document.getElementById('cigarette_box.png');
   // image_x.remove();

    var count_value=forloop(); 
    // console.log(count_value); 
    // if(count_value==153){ move(10);}
    // if(count_value==122){ move(30);}
    // if(count_value==91){ move(50);}
    // if(count_value==60){ move(60);}
    // if(count_value==29){ move(80);}
    // if(count_value==0){ move(100);}

    if(count_value==154){ move(10);}
    if(count_value==124){ move(30);}
    if(count_value==94){ move(50);}
    if(count_value==64){ move(60);}
    if(count_value==34){ move(80);}
    if(count_value==4){ move(100);}


   
    

    //setTimeout(forloop, 500);
    
    //console.log("counter: "+counter)
   

    // if(counter>0){lung.style.backgroundImage = "url('good lungs "+counter+".jpeg')";}
    // document.getElementById("countervalue").innerHTML  = counter;
    // counter--;
    //lung.style.background = `linear-gradient(to bottom, #eaeaea ${width}%, transparent ${width}%)`;
    //if(counter==2){lung.style.backgroundImage = "url('"+filenamelist[counter]+"')";}
    // Additional code to celebrate the restoration of the lung
    //myMove();
    // }
}

function forloop(){
    // for(i=0;i<19;i++){
        
            // for(i=0;i<=30;i++){
            if(counter>0){
            lung.style.backgroundImage = "url('good lungs "+(counter)+".jpeg')";
           //document.getElementById("countervalue").innerHTML  = counter;
           counter=counter-30;
          // counter=counter-1;
            
             
        // }

       // }
    }
   barvalue=barvalue+20;
    // move(barvalue);
    // console.log(barvalue); 
     console.log(counter); 
    return counter;
}


var j = 0;
var width = 1;
function move(value) {
  console.log("Entered Move");  
  if (j == 0) {
    j = 1;
    var elem = document.getElementById("myBar");
    
    var id = setInterval(frame(), 10);
    function frame() {
        console.log("entered frame");
      if (width >= value) {
        console.log("entered if");
        clearInterval(id);
        
      } else {
        console.log("entered else");
        j = 0;
        width++;
        elem.style.width = value + "%";
        document.getElementById("myBar").innerHTML  = value+'%';
      }
    }
  }
}


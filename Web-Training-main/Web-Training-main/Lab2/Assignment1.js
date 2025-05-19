

function table(){
    let n= parseInt(document.getElementById("tab").value);
    for(var i=1;i<=10;i++){
        var c=n*i;
        // console.log(c)
        document.getElementById("out").innerText+=` ${c}`
    }
   

}
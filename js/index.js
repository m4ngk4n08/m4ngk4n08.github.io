
/**
 * Toggle the schema section
 */
function toggleSection(){
    var coll = document.getElementsByClassName("collapsible");  
    for(var i = 0; i < coll.length; i++){
        coll[i].classList.toggle("active");
        var content = coll[i].nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }
    }
}
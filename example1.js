/*var adj = ["clumsy","malicious","useful","abandoned","billowy","sneaky","violet","standing","deep"];
var verb = ["grins","glues","precedes","interferes","protects","lands","taps","arrives","drags","gathers","trusts","satisfies"];
var adverb = ["worriedly","rightfully","twice","loosely","kiddingly","steadily","personally","tenderly","patiently"];
var object = ["chimpanzee","bear","bat","bumblebee","pair of sunglasses","cork","puddle","zipper","pants","candy wrapper","cat","pikachu","crab","dog","prairie dog","deer","cougar"];
*/


setInterval(
    function(){
    d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
  
    });
    },500);



var p = d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .text(function(d) { return d; });

// Enter…
function enter(){
p.enter().append("p")
    .text(function(d) { return d; });
}
// Exit…
function update(){
var size = document.getElementById("myText").value;
document.getElementById("myText").value = "";
d3.selectAll("rect")
    .attr("width", function() {
        

        return size; 
    });
};

function genPoem(){
    d3.select("#poemText").text("");
    var adj = document.getElementById("adj").value.split(',');
    var object = document.getElementById("object").value.split(',');
    var verb = document.getElementById("verb").value.split(',');
    var adverb = document.getElementById("adverb").value.split(',');
    var length = document.getElementById("length").value;
    var verses = document.getElementById("verses").value;
    var i;
    var j;

        for (i = 0; i<length;i++){
        d3.select("#poemText").append("p").text("The "+ adj[getRandomInt(adj.length)] +' ' + object[getRandomInt(object.length)] + ' ' + verb[getRandomInt(verb.length)] + ' ' + adverb[getRandomInt(adverb.length)] + '.' );
        }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


d3.selectAll("circle").transition()
    .duration(750)
    .delay(function(d, i) { return i * 10; })
    .attr("r", function(d) { return Math.sqrt(d * scale); });

document.getElementById("buttonOne").onclick = enter;
document.getElementById("buttonTwo").onclick = update;
document.getElementById("poemOne").onclick = genPoem;

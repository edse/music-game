var e=0,t=0,c=0,o=0,l=document.getElementById("video");playVideo=function(){document.getElementById("video").play(),document.getElementById("play-button").classList.add("hidden")},col1StartBlock=function(){document.getElementById("col-1").classList.add("col-1-selected"),e=l.currentTime},col1EndBlock=function(){document.getElementById("col-1").classList.remove("col-1-selected"),console.log(e+" -> "+l.currentTime)},col2StartBlock=function(){document.getElementById("col-2").classList.add("col-2-selected"),t=l.currentTime},col2EndBlock=function(){document.getElementById("col-2").classList.remove("col-2-selected"),console.log(t+" -> "+l.currentTime)},col3StartBlock=function(){document.getElementById("col-3").classList.add("col-3-selected"),c=l.currentTime},col3EndBlock=function(){document.getElementById("col-3").classList.remove("col-3-selected"),console.log(c+" -> "+l.currentTime)},col4StartBlock=function(){document.getElementById("col-4").classList.add("col-4-selected"),o=l.currentTime},col4EndBlock=function(){document.getElementById("col-4").classList.remove("col-4-selected"),console.log(o+" -> "+l.currentTime)},startBlock=function(e){"a"===e.key&&col1StartBlock(),"s"===e.key&&col2StartBlock(),"d"===e.key&&col3StartBlock(),"f"===e.key&&col4StartBlock()},endBlock=function(e){"a"===e.key&&col1EndBlock(),"s"===e.key&&col2EndBlock(),"d"===e.key&&col3EndBlock(),"f"===e.key&&col4EndBlock()},document.addEventListener("DOMContentLoaded",function(){document.addEventListener("keydown",startBlock),document.addEventListener("keyup",endBlock),document.getElementById("col-1").addEventListener("touchstart",col1StartBlock),document.getElementById("col-1").addEventListener("touchend",col1EndBlock),document.getElementById("col-2").addEventListener("touchstart",col2StartBlock),document.getElementById("col-2").addEventListener("touchend",col2EndBlock),document.getElementById("col-3").addEventListener("touchstart",col3StartBlock),document.getElementById("col-3").addEventListener("touchend",col3EndBlock),document.getElementById("col-4").addEventListener("touchstart",col4StartBlock),document.getElementById("col-4").addEventListener("touchend",col4EndBlock),document.getElementById("play-button").addEventListener("click",playVideo)});
//# sourceMappingURL=index.cc64281b.js.map

(function(){
  var pieces=[].slice.call(document.querySelectorAll('.piece')),dlg=document.getElementById('viewer'),vimg=document.getElementById('vimg'),cur=0,last=null;
  function show(i){cur=(i+pieces.length)%pieces.length;var im=pieces[cur].querySelector('img');vimg.src=im.src;vimg.alt=im.alt}
  pieces.forEach(function(b,i){b.addEventListener('click',function(){last=b;show(i);dlg.showModal()})});
  dlg.querySelector('.vclose').onclick=function(){dlg.close()};
  dlg.querySelector('.prev').onclick=function(){show(cur-1)};
  dlg.querySelector('.next').onclick=function(){show(cur+1)};
  dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
  dlg.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1)});
  dlg.addEventListener('close',function(){if(last)last.focus()});
})();

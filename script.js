const laptopIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="2.5" width="10" height="8" rx="1.1"></rect><path d="M1.7 12.5h12.6l-.8 1H2.5z"></path></svg>';
const mobileIcon = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="4.4" y="1.5" width="7.2" height="13" rx="1.4"></rect><path d="M6.8 3.3h2.4M7.3 12.6h1.4"></path></svg>';
const games = [
  {number:1,title:'Endless Skater',featured:true,description:'Skate through endless streets, land tricks, and rack up points as you unlock new spots.',creator:'KC',laptop:true,mobile:true,art:'🛹',color:'#a9d94d',href:'games/endless-skater.html'},
  {number:2,title:'Potato Wars',featured:true,description:'Battle the alien potato, leap between platforms, collect coins, and unleash potato slams.',creator:'OP',laptop:true,mobile:true,art:'🥔',color:'#e79a51',href:'games/potato-wars.html'},
  {number:3,title:'MineWorld',description:'Mine resources, craft gear, and battle bosses across Woodman Park, the Deep Forest, and Space.',creator:'LC',laptop:true,mobile:true,art:'⛏️',color:'#4ea66e',href:'games/mine-world.html'},
  {number:4,title:"Crabby's Ocean Quest",description:'Help Crabby eat fish, dodge sharks, and explore an endless ocean full of alien surprises.',creator:'MH',laptop:true,mobile:true,art:'🦀',color:'#38afc1',href:'games/crabbys-ocean-quest.html'},
  {number:5,title:'Donut Mania',description:'Choose a bunny or dragon and race to catch the most falling donuts in one minute.',creator:'EF',laptop:true,mobile:true,art:'🍩',color:'#df78b6',href:'games/donut-mania.html'},
  {number:6,title:'Bunny Hops',featured:true,description:'Help a bouncy bunny knock apples from a tree and collect red and golden fruit.',creator:'AL',laptop:true,mobile:true,art:'🐰',color:'#91c958',href:'games/bunny-hops.html'},
  {number:7,title:'Stickgirl Candy Adventure',description:'Guide Stickgirl through candy-filled platforms, collect sweets, and take on King Candy.',creator:'MH',laptop:true,mobile:false,art:'🍭',color:'#ae75dc',href:'games/stickgirl-candy-adventure.html'},
  {number:8,title:'Astro Explorer',featured:true,description:'Explore destructible alien planets, mine resources, and uncover ancient technology.',creator:'CM',laptop:true,mobile:true,art:'🪐',color:'#587ad3',href:'games/astro-explorer.html'},
  {number:9,title:'FortMorning',description:'Gather wood, build defenses, and battle to be the last player standing.',creator:'AC',laptop:true,mobile:false,art:'🪓',color:'#72a936',href:'games/fortmorning.html'},
  {number:10,title:'Pineapple Head',description:'Collect fruit, grow your empire, and expand from New Hampshire to the cosmos.',creator:'ML',laptop:true,mobile:true,art:'🍍',color:'#e5b83e',href:'games/pineapple-head.html'},
  {number:11,title:'La Festa Simulator',featured:true,featuredOrder:1,description:'Run a busy pizzeria shift as chef, server, or another member of the team.',creator:'JP',laptop:true,mobile:true,art:'🍕',color:'#ca5946',href:'games/la-festa-simulator.html'},
  {number:12,title:'Bobby Game',description:'Mine blocks, gather power, and battle a giant pirate turtle across a blocky adventure.',creator:'CB',laptop:true,mobile:false,art:'⛏️',color:'#56a6b5',href:'games/bobby-game.html'},
  {number:13,title:'BasketBall Showdown',description:'Drive, pass, and shoot in a top-down basketball game for one or two local players.',creator:'MS',laptop:true,mobile:false,art:'🏀',color:'#5680c5',href:'games/basketball-showdown.html'},
  ...Array.from({length:32},(_,i)=>({number:i+14,title:`Game slot ${String(i+14).padStart(2,'0')}`,description:'A little adventure goes here',creator:'SOCC Creator',laptop:true,mobile:true}))
];
const newest = [
  {number:13,icon:'🏀',title:'BasketBall Showdown',art:'🏀',color:'#5680c5',href:'games/basketball-showdown.html'},
  {number:12,icon:'⛏️',title:'Bobby Game',art:'⛏️',color:'#56a6b5',href:'games/bobby-game.html'},
  {number:1,icon:'🛹',title:'Endless Skater',art:'🛹',color:'#a9d94d',href:'games/endless-skater.html'},
  {number:2,icon:'🥔',title:'Potato Wars',art:'🥔',color:'#e79a51',href:'games/potato-wars.html'},
  {number:3,icon:'⛏️',title:'MineWorld',art:'⛏️',color:'#4ea66e',href:'games/mine-world.html'},
  {number:4,icon:'🦀',title:"Crabby's Ocean Quest",art:'🦀',color:'#38afc1',href:'games/crabbys-ocean-quest.html'},
  {number:5,icon:'🍩',title:'Donut Mania',art:'🍩',color:'#df78b6',href:'games/donut-mania.html'},
  {number:6,icon:'🐰',title:'Bunny Hops',art:'🐰',color:'#91c958',href:'games/bunny-hops.html'},
  {number:7,icon:'🍭',title:'Stickgirl Candy Adventure',art:'🍭',color:'#ae75dc',href:'games/stickgirl-candy-adventure.html'},
  {number:8,icon:'🪐',title:'Astro Explorer',art:'🪐',color:'#587ad3',href:'games/astro-explorer.html'}
];
const gameGrid=document.querySelector('#games-grid');
const filter=document.querySelector('#support-filter');
function renderGames(){
  const value=filter.value;
  gameGrid.innerHTML=games.filter(g=>value==='all'||g[value]).map(g=>{
    const supportedDevices=[g.laptop?'laptop':'',g.mobile?'mobile':''].filter(Boolean).join(' and ');
    const deviceIcons=`${g.laptop?`<span class="support-icon" title="Laptop supported">${laptopIcon}</span>`:''}${g.mobile?`<span class="support-icon" title="Mobile supported">${mobileIcon}</span>`:''}`;
    const card=`<div class="game-thumb" style="--game-art-color:${g.color||'#302b59'}"><span class="slot-number">SLOT ${String(g.number).padStart(2,'0')}</span><span class="thumb-placeholder ${g.href?'game-art-playable':''}" aria-hidden="true">${g.href?g.art:'＋'}</span></div><div class="game-info"><div class="game-title-row"><span class="game-title">${g.title}</span><span class="support-icons" aria-label="Supported on ${supportedDevices}">${deviceIcons}</span></div><p class="game-description">${g.description}</p><div class="game-byline"><span class="creator"><span class="creator-dot">✦</span>${g.creator}</span><span>${g.href?'PLAY ▶':'♡ 0'}</span></div></div>`;
    return g.href?`<div class="game-card-shell"><a class="game-card game-card-link" href="${g.href}" aria-label="Play ${g.title} by ${g.creator}">${card}</a>${gameDownloadMenu(g)}</div>`:`<article class="game-card" aria-label="${g.title} placeholder">${card}</article>`;
  }).join('');
}
filter.addEventListener('change',renderGames);renderGames();
function gameDownloadMenu(game){
  if(!game?.href)return '';
  const filename=game.href.split('/').pop();
  return `<details class="game-actions"><summary aria-label="More options for ${game.title}" title="More options">•••</summary><div class="game-actions-menu"><a href="${game.href}" download="${filename}">↓ Download game</a></div></details>`;
}
const featuredGames=games.filter(game=>game.featured).sort((a,b)=>(a.featuredOrder||Infinity)-(b.featuredOrder||Infinity)).map(game=>({number:game.number,icon:game.art,title:game.title,art:game.art,color:game.color,href:game.href}));
function setupCarousel(items,trackId,previousId,nextId,counterId,tag,badge){
  const carouselTrack=document.querySelector(`#${trackId}`);
  const windowEl=carouselTrack.closest('.carousel-window');
  const counter=document.querySelector(`#${counterId}`);
  carouselTrack.innerHTML=items.map(game=>{
    const contents=`<div class="new-art" style="--game-art-color:${game.color||'#7564f5'}"><span class="new-tag">${tag}</span><span class="mini-icon" aria-hidden="true">${game.icon}</span></div><div class="new-meta"><h3>${game.title}</h3><span>${badge}</span></div>`;
    return game.href?`<article class="new-card">${`<a class="new-card-link" href="${game.href}" aria-label="Play ${game.title}">${contents}</a>`}${gameDownloadMenu(game)}</article>`:`<article class="new-card">${contents}</article>`;
  }).join('');
  let current=0;
  let dragPointer=null;
  let dragStartX=0;
  let dragStartTranslate=0;
  let dragStep=0;
  let maxIndex=0;
  let dragMoved=false;
  let suppressClick=false;
  function metrics(){
    const card=carouselTrack.querySelector('.new-card');
    if(!card)return null;
    const gap=parseFloat(getComputedStyle(carouselTrack).gap)||0;
    const step=card.getBoundingClientRect().width+gap;
    const max=Math.max(0,items.length-Math.floor(windowEl.clientWidth/step));
    return {step,max};
  }
  function showPosition(index){
    const size=metrics();
    if(!size)return;
    current=Math.max(0,Math.min(size.max,index));
    carouselTrack.style.transform=`translateX(${-current*size.step}px)`;
    counter.textContent=String(current+1).padStart(2,'0');
  }
  function move(direction){
    const size=metrics();
    if(!size)return;
    showPosition((current+direction+size.max+1)%(size.max+1));
  }
  document.querySelector(`#${nextId}`).addEventListener('click',()=>move(1));
  document.querySelector(`#${previousId}`).addEventListener('click',()=>move(-1));
  windowEl.style.touchAction='pan-y';
  windowEl.addEventListener('pointerdown',event=>{
    if((event.pointerType==='mouse'&&event.button!==0)||event.target.closest('.carousel-controls,.game-actions'))return;
    const size=metrics();
    if(!size||size.max===0)return;
    dragPointer=event.pointerId;
    dragStartX=event.clientX;
    dragStep=size.step;
    maxIndex=size.max;
    dragStartTranslate=-current*dragStep;
    dragMoved=false;
  });
  windowEl.addEventListener('pointermove',event=>{
    if(event.pointerId!==dragPointer)return;
    const delta=event.clientX-dragStartX;
    if(!dragMoved&&Math.abs(delta)>5){
      dragMoved=true;
      windowEl.classList.add('is-dragging');
      windowEl.setPointerCapture(event.pointerId);
    }
    if(dragMoved){
      const translate=Math.max(-maxIndex*dragStep,Math.min(0,dragStartTranslate+delta));
      carouselTrack.style.transform=`translateX(${translate}px)`;
    }
  });
  function finishDrag(event){
    if(event.pointerId!==dragPointer)return;
    if(dragMoved){
      const delta=event.clientX-dragStartX;
      const translate=Math.max(-maxIndex*dragStep,Math.min(0,dragStartTranslate+delta));
      showPosition(Math.round(-translate/dragStep));
      suppressClick=true;
      window.setTimeout(()=>{suppressClick=false},400);
    }
    dragPointer=null;
    windowEl.classList.remove('is-dragging');
  }
  windowEl.addEventListener('pointerup',finishDrag);
  windowEl.addEventListener('pointercancel',finishDrag);
  windowEl.addEventListener('click',event=>{
    if(!suppressClick)return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick=false;
  },true);
  return ()=>{current=0;carouselTrack.style.transform='translateX(0)';counter.textContent='01'};
}
const resetNewestCarousel=setupCarousel(newest,'carousel-track','previous','next','slide-current','JUST DROPPED','NEW ✦');
const resetFeaturedCarousel=setupCarousel(featuredGames,'featured-track','featured-previous','featured-next','featured-slide-current','FEATURED','PLAYER PICK ✦');
let resizeTimer;
window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{resetNewestCarousel();resetFeaturedCarousel()},100)});

let gameIsLaunching=false;
function resetLaunchState(){
  gameIsLaunching=false;
  document.body.classList.remove('is-leaving-for-game');
  document.querySelector('.site-header')?.classList.remove('is-loading-game');
  const screen=document.querySelector('#launch-screen');
  screen?.classList.remove('is-visible','has-screen-tile');
  screen?.setAttribute('aria-hidden','true');
  screen?.querySelectorAll('.game-launch-screen-tile').forEach(tile=>tile.remove());
  document.querySelectorAll('.game-launch-tile').forEach(el=>el.remove());
  document.querySelectorAll('.is-launching-source').forEach(el=>el.classList.remove('is-launching-source'));
}
// Safari and other browsers may restore this page from the back/forward cache
// after a game. Clear the outgoing transition so the home screen is visible.
window.addEventListener('pageshow',resetLaunchState);
document.addEventListener('click',event=>{
  if(event.target.closest('.game-actions'))return;
  document.querySelectorAll('.game-actions[open]').forEach(menu=>{menu.open=false});
});
function launchGame(game,sourceCard){
  if(gameIsLaunching||!game?.href)return;
  gameIsLaunching=true;
  const header=document.querySelector('.site-header');
  const thumb=sourceCard?.querySelector('.game-thumb, .new-art');
  const screen=document.querySelector('#launch-screen');
  const title=document.querySelector('#launch-preview-title');
  const icon=document.querySelector('#launch-preview-icon');
  let tileOnScreen;
  title.textContent=game.title.toUpperCase();
  icon.textContent=game.art||'🎮';

  let tileInSlot;
  if(thumb){
    thumb.classList.add('is-launching-source');
    tileInSlot=thumb.cloneNode(true);
    tileInSlot.classList.add('game-launch-tile');
    thumb.append(tileInSlot);
    requestAnimationFrame(()=>tileInSlot.classList.add('is-sliding-up'));
  }

  // First slide the tile upward inside its own clipped thumbnail slot.
  window.setTimeout(()=>{
    tileInSlot?.remove();
    thumb?.classList.remove('is-launching-source');
    window.scrollTo({top:0,behavior:'smooth'});
  },540);

  // Bring the same full-color tile into the center of the marquee, then
  // expand it to fill the cabinet's game screen before changing pages.
  window.setTimeout(()=>{
    tileOnScreen=thumb?.cloneNode(true);
    if(tileOnScreen){
      tileOnScreen.classList.add('game-launch-screen-tile');
      screen.append(tileOnScreen);
      screen.classList.add('has-screen-tile');
    }
    header.classList.add('is-loading-game');
    screen.classList.add('is-visible');
    screen.setAttribute('aria-hidden','false');
    requestAnimationFrame(()=>tileOnScreen?.classList.add('is-filling-screen'));
  },1050);

  window.setTimeout(()=>{
    tileOnScreen?.remove();
    screen.classList.remove('has-screen-tile');
    document.body.classList.add('is-leaving-for-game');
    window.setTimeout(()=>window.location.assign(game.href),360);
  },2190);
}

document.addEventListener('click',event=>{
  const link=event.target.closest('.game-card-link, .new-card-link');
  if(!link||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
  const game=games.find(item=>item.href===link.getAttribute('href'))||newest.find(item=>item.href===link.getAttribute('href'));
  if(!game)return;
  event.preventDefault();
  launchGame(game,link);
});

document.querySelector('#random-game-button').addEventListener('click',event=>{
  event.preventDefault();
  const playable=games.filter(game=>game.href);
  if(!playable.length)return;
  const chosen=playable[Math.floor(Math.random()*playable.length)];
  launchGame(chosen,document.querySelector(`.game-card-link[href="${chosen.href}"]`));
});

const submitDialog=document.querySelector('#submit-dialog');
const submissionForm=document.querySelector('#submission-form');
const preview=document.querySelector('#submission-preview');
const previewIcon=document.querySelector('#preview-icon');
let chosenThumbnailIcon='🕹️';
let chosenThumbnailColor='#a9d94d';
document.querySelector('#open-submit-dialog').addEventListener('click',()=>submitDialog.showModal());
document.querySelector('#close-submit-dialog').addEventListener('click',()=>submitDialog.close());
document.querySelector('#cancel-submit').addEventListener('click',()=>submitDialog.close());
submitDialog.addEventListener('click',event=>{if(event.target===submitDialog)submitDialog.close()});
document.querySelector('#icon-presets').addEventListener('click',event=>{
  const button=event.target.closest('[data-icon]');
  if(!button)return;
  chosenThumbnailIcon=button.dataset.icon;
  previewIcon.textContent=chosenThumbnailIcon;
  document.querySelectorAll('#icon-presets [data-icon]').forEach(item=>{
    const selected=item===button;
    item.classList.toggle('is-selected',selected);
    item.setAttribute('aria-pressed',String(selected));
  });
});
document.querySelector('#color-presets').addEventListener('click',event=>{
  const button=event.target.closest('[data-color]');
  if(!button)return;
  chosenThumbnailColor=button.dataset.color;
  preview.style.background=chosenThumbnailColor;
  document.querySelectorAll('#color-presets [data-color]').forEach(item=>{
    const selected=item===button;
    item.classList.toggle('is-selected',selected);
    item.setAttribute('aria-pressed',String(selected));
  });
});
document.querySelector('#submission-file').addEventListener('change',event=>{
  const file=event.target.files?.[0];
  document.querySelector('#file-prompt').textContent=file?.name||'Choose one HTML file';
  document.querySelector('#file-detail').textContent=file?`${(file.size/1024/1024).toFixed(2)} MB · HTML file selected`:'.html or .htm · Max one file';
});
submissionForm.addEventListener('submit',event=>{
  event.preventDefault();
  const file=document.querySelector('#submission-file').files?.[0];
  const feedback=document.querySelector('#form-feedback');
  if(!file||!(/\.html?$/i).test(file.name)){
    feedback.textContent='Choose one .html or .htm game file to continue.';
    return;
  }
  const name=document.querySelector('#submission-name').value.trim();
  const description=document.querySelector('#submission-description').value.trim();
  const author=document.querySelector('#submission-author').value.trim();
  const body=[
    'Hi SOCC Arcade,',
    '',
    'Please review this game submission:',
    `Game name: ${name}`,
    `Description: ${description}`,
    `Creator: ${author}`,
    `HTML file to attach: ${file.name}`,
    `Thumbnail icon: ${chosenThumbnailIcon}`,
    `Thumbnail backing color: ${chosenThumbnailColor}`,
    '',
    'I have attached the HTML game file to this email.'
  ].join('\n');
  feedback.textContent='Email draft opening. Attach the selected HTML file before sending.';
  window.location.href=`mailto:kids@socclab.org?subject=${encodeURIComponent(`SOCC Arcade game submission: ${name}`)}&body=${encodeURIComponent(body)}`;
});

function makeSnowFlake() {
  const MIN_DURATION = 10; // 애니메이션이 지속되는 최소 기간

  const body = document.querySelector('body');
  const snowflake = document.createElement('div');
  const delay = Math.random()*10;
  const opacity = Math.random();
  const duration = Math.random()*20 + MIN_DURATION;

  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random()*window.screen.width}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = opacity;
  snowflake.style.animation = `fall ${duration}s linear`;

  body.appendChild(snowflake);
  
  setTimeout(()=>{
    body.removeChild(snowflake);
    makeSnowFlake();
  }, (duration+delay)*1000);
}

for (let index=0; index<50; index++) {
  setTimeout(makeSnowFlake, 500 * index);
}

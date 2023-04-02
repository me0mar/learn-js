'use strict';

let attempt = 5;

const imgs = ['/images/img1.png', '/images/img2.png', '/images/img3.png'];

const getRandom = () => {
  return imgs[Math.floor(Math.random() * 3)];
};

const attemptDom = document.getElementById('dom-attempt');

const btnPlay = document.querySelector('.btn-play');

const btnPlayAgain = document.querySelector('.btn-play-again');

btnPlayAgain.addEventListener('click', () => {
  window.location.reload();
});

const img1 = document.getElementById('img1'),
  img2 = document.getElementById('img2'),
  img3 = document.getElementById('img3');

btnPlayAgain.style.visibility = 'hidden';

btnPlay.addEventListener('click', () => {
  img1.src = `${getRandom()}`;
  img2.src = `${getRandom()}`;
  img3.src = `${getRandom()}`;

  if (img1.src === img2.src && img1.src === img3.src && img2.src === img3.src) {
    Swal.fire({
      title: 'winner',
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
    btnPlay.style.visibility = 'hidden';
    btnPlayAgain.style.visibility = 'visible';
  }
  attempt--;
  attemptDom.innerText = `attempts ${attempt}`;
  if (attempt === 0) {
    Swal.fire({
      title: 'loser',
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
    btnPlay.style.visibility = 'hidden';
    btnPlayAgain.style.visibility = 'visible';
  }
});

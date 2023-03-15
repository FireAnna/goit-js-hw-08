import Vimeo from '@vimeo/player';
import thr from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const storageKey = 'videoplayer-current-time';
let currentTime = 0;

player.on(
  'timeupdate',
  thr(function (data) {
    currentTime = data.seconds;
    localStorage.setItem(storageKey, currentTime);
  }, 1000)
);

player.setCurrentTime(localStorage.getItem(storageKey));

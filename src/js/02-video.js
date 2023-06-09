import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const storageKey = 'videoplayer-current-time';
let currentTime = 0;

player.on(
  'timeupdate',
  throttle(function (data) {
    currentTime = data.seconds;
    localStorage.setItem(storageKey, currentTime);
  }, 1000)
);

const storedTime=localStorage.getItem(storageKey);
if (storedTime !== null) {
  player.setCurrentTime(storedTime);
}
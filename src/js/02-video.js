import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

function timeMedia({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}
const currentTime = localStorage.getItem(STORAGE_KEY);
player.setCurrentTime(currentTime).catch(function (error) {
  console.log(error.message);
});

player.on('timeupdate', throttle(timeMedia, 1000));

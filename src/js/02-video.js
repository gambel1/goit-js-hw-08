import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe');

const vimeoTimeEl = 'vimeo-watching-time';

const setWatchingTime = ({ second }) => {
  localStorage.setItem(vimeoTimeEl, second);
};

const player = new Player(iframeEl);

player.on('timeupdate', throttle(setWatchingTime, 1000));
player.setCurrentTime(localStorage.getItem(vimeoTimeEl) || 0);

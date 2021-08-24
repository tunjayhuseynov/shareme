import {MDCTabBar} from '@material/tab-bar';

const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
const tabs = document.querySelectorAll('.mdc-tab');
const bodies = document.querySelectorAll('.tabbody');

tabBar.listen('MDCTabBar:activated', function(event) {
    let tab = tabs[event.detail.index];
    bodies.forEach(w=>{
        if(w.dataset.index == event.detail.index){
            w.scrollIntoView({behavior: "smooth" });
        }
    })
  });
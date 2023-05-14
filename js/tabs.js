"use strict";
/*-----tabs---------*/

const itemNavTabs = document.querySelectorAll('.naw-tabs__item');
const itemTabs = document.querySelectorAll('.body-tabs__tabs');

document.addEventListener('click', event => {
    const targetElement = event.target;
    let activeElement = null;
    let newTargetElement = null;

    if (targetElement.closest('.naw-tabs__item')) {
        itemNavTabs.forEach((item, index) => {
            if (item.classList.contains('active')) {
                activeElement = index;
                item.classList.remove('active');
            };
            if (item === targetElement) {
                newTargetElement = index;
            };
        });

        targetElement.classList.add('active');
        itemTabs[activeElement].classList.remove('active');
        itemTabs[newTargetElement].classList.add('active');
    };
});



//об'єктам які будуть мати класс _anim-items буде додаватись класс _active
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; 
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            //момент старту анімації
            let animFromPoint = window.innerHeight - animItemHeight / animStart;
            //момент старту анімації якщо об'єкт займає весь екран
            if (animItemHeight > window.innerHeight) {
                animFromPoint = window.innerHeight - window.innerHeight / animStart;
            };

            if ((scrollY > animItemOffset - animFromPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                //заглушка. якщо об'єкт має класс _anim-on-hide та він не буде повторно анімуватись
                if (!animItem.classList.contains('_anim-on-hide')) {
                    animItem.classList.remove('_active');
                };
            }; 
        };
        
    };

    //функція (з інтернету) яка вираховує відстань зверху до об'єкта
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    };
    //щоб на першому екрані була анімація без скроллу
    animOnScroll ();
};

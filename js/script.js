const preventHashLink = () => {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href="#"]');

        if (!link) return;

        e.preventDefault();
    });
};

const setSvgPath = () => {
    const paths = document.querySelectorAll('.svgAni path');

    paths.forEach((path) => {
        path.getTotalLength();
    });
};

const menuOpen = () => {
    const openBtn = document.querySelector('.menuOpen button.open');
    const menuWrap = document.querySelector('.menuOpen .menuWrap');
    const closeBtns = document.querySelectorAll('.menuOpen .menuWrap .close');

    if (!openBtn || !menuWrap) return;

    openBtn.addEventListener('click', () => {
        menuWrap.classList.add('on');
    });

    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', () => {
            menuWrap.classList.remove('on');
        });
    });
};

const scrollAni = () => {
    const animateItems = document.querySelectorAll('.animate');
    const options = {
        mobile: true,
        once: false,
    };
    const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!options.mobile && isMobile) return;

    const animate = () => {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollBottom = scrollTop + windowHeight;

        animateItems.forEach((item) => {
            const animateClass = item.dataset.animate;
            const offset = Number(item.dataset.offset) || 0;
            const duration = item.dataset.duration;
            const delay = item.dataset.delay;
            const iteration = item.dataset.iteration;
            const itemTop = item.getBoundingClientRect().top + scrollTop + offset;
            const itemBottom = itemTop + item.offsetHeight - offset * 2;

            if (duration) item.style.animationDuration = duration;
            if (delay) item.style.animationDelay = delay;
            if (iteration) item.style.animationIterationCount = iteration;

            if (itemBottom >= scrollTop && itemTop <= scrollBottom) {
                item.style.visibility = 'visible';
                item.classList.add(animateClass, 'animated');
            } else if (!options.once) {
                item.style.visibility = 'hidden';
                item.classList.remove(animateClass, 'animated');
            }
        });
    };

    window.addEventListener('scroll', animate);
    window.addEventListener('resize', animate);
    animate();
};

const bgColor = () => {
    const changeColor = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 1400 && scrollTop <= 2700) {
            document.body.classList.add('on');
        } else {
            document.body.classList.remove('on');
        }
    };

    window.addEventListener('scroll', changeColor);
    window.addEventListener('resize', changeColor);
    changeColor();
};

(() => {
    preventHashLink();
    setSvgPath();
    menuOpen();
    scrollAni();
    bgColor();
})();

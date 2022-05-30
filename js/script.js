console.log("it's working");

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
}     
else {
    setTheme(theme);
}

let themDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themDots.length > i; i++) {
    themDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log("obtion clicked: ", mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = './css/styles.cc'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = './css/blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = './css/green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = './css/purple.css'
    }
    localStorage.setItem('theme', mode)
}

console.log("it's workinglllllllllllllllll");
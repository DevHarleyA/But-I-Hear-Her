window.addEventListener('load', changeBG)

const desktopBg = ['../images/desktop-bg/desktop1.jpg', '../assets/images/desktop-bg/desktop2.png','../assets/images/desktop-bg/desktop3.png']

const mobileBg = ['assets/images/mobile-bg/mobile1.jpg', 'assets/images/mobile-bg/mobile2.jpg', 'assets/images/mobile-bg/mobile3.jpg', 'assets/images/mobile-bg/mobile4.jpg', 'assets/images/mobile-bg/mobile5.png']

function changeBG() {
    let random = Math.floor(Math.random() * 4)
    //let link = url(`${desktopBg[random]}`)
    console.log(desktopBg[random])
    
}

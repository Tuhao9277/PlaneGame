class Game {
    // 单例模式
    constructor() {
        this.level = level;
        if (!Game.instance) {
            //     Game.instance ={} // new Object();
            Game.instance = Object.create(Game.prototype);
            Game.instance.el = document.getElementsByClassName("main")[0];
        }
        return Game.instance;
    }
    run() {
        // Init LOGO,难度选择菜单
        // 加载
        // 开始
        // this.showLogo();
        this.optionsInit();
    }
    optionsInit() {
        // 给菜单添加点击事件
        let options = this.el.getElementsByClassName("option")[0];

        options.addEventListener("click", (e) => {
            e = e || event;
            level = e.target.getAttribute("value");
            // 清除菜单
            this.start();
        })
    }
    start() {
        this.loading(() => {
            this.realStart();
        });


    }
    realStart() {
        // 等待loading结束  
        // 清除logo
        // loading动画清除
        // ...背景移动
        // 加载玩家 
        new Player(this.level).init().show();
        // 不断地加载敌机

    }
    loading(callback) {
        callback();

    };
    append(player) {
        this.el.appendChild(player.el)
    }
    width() {
        if (!this.$width)
            this.$width = this.el.offsetWidth;
        return this.$width;
    }

    height() {
        if (!this.$height)
            this.$height = this.el.offsetHeight;
        return this.$height;
    }
}

let game = new Game();
game.run();

// 玩家 (单例)
class Player {
    constructor(level) {
        if (!Player.instance) {
            Player.instance = Object.create(Player.prototype);
            this.level = level;
        }
        return Player.instance;
    }
    init() {
        this.el = document.createElement("div");
        this.el.className = "my-wraplain";
        game.append(this);
        // 位置
        this.left((game.width() / 2) - (this.width() / 2));
        this.top(game.height() - this.height());
        // 键盘控制
        this.addMouseController();

        // this.addKeyController();
        // 
        switch (this.level) {

        }
        return this;
    }
    addMouseController() {

    }
    addKeyController() {

    }
    show() {

    }
    autoFile() {
        console.log("FIRE!")
    }
    left(val) {
        return this.el.style.left = val + "px"
    }
    top(val) {
        return this.el.style.top = val + "px"
    }


}
// 敌机
class Enemy {
    init() {
        return this;
    }
    show() {
        return this;
    }
    move() { }
    hurt() { }
    destory() { }
}
// 子弹
class Bullet {
    init() {
        return this;
    }
    show() {
        return this;
    }
    move() { }
    destory() { }
}

// 弹药包
class Weapon {
    init() {
        return this;
    }
    show() {
        return this;
    }
    move() {

    }
    destory() {

    }
}

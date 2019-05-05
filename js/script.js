class Game {
    // 单例模式
    constructor() {
        this.level = level;
        if (!Game.instance) {
            //     Game.instance ={} // new Object();
            Game.instance = Object.create(Game.prototype);
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
        let options = this.getEle.getElementsByClassName("option")[0];

        options.addEventListener("click", (e) => {
            e = e || event;
            level = e.target.getAttribute("value");
        })
        // 清除菜单
        this.start();
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
        // 不断地加载敌机
    }
    loading(callback) {
        callback();

    };
    append(player) {
        this.el.className = "my-wraplain"
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
// 玩家 (单例)
class Player {
    constructor() {
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
        this.left = (game.width() / 2) - (this.width() / 2);
        this.top = game.height() - this.height();
        // 键盘控制
        this.addMouseController();

        // this.addKeyController();
        // 
        switch(this.level){

        }
        return this;
    }
    addMouseController(){

    }
    addKeyController(){

    }
    show(){

    }
    autoFile() {
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

}
// 子弹
class Bullet {
    init() {}
    show() { }
    hide() { }
    destory(){}
}

// 弹药包
class Weapon {

}

new Game();

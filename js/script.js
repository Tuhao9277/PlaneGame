class Game {
    // 单例模式
    constructor() {
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
        let options = this.el.getElementsByClassName("options")[0];

        options.addEventListener("click", (e) => {
            e = e || event;

            this.level = e.target.getAttribute("value");
            // 清除菜单
            options.style.display = "none";
            // options.remove();
            this.start();
        })
    }
    start() {
        this.loading(() => {
            this.realStart();
        });


    }
    realStart() {
        // ...背景移动
        this.bgMove();
        // 加载玩家 
        new Player(this.level).init().show();
        // 不断地加载敌机

    }
    bgMove() {
        let val = 0;
        setInterval(() => {
            this.el.style.backgroundPositionY = (val += 2) + "px";
        }, 30)
    }
    loading(callback) {
        //loading图片切换
        let ele = document.createElement("div");
        ele.className = "loading";
        game.el.appendChild(ele);
        let num = 1;
        let timer = setInterval(() => {
            if(num == 4){
                num =1;
            }
            ele.style.backgroundImage = `url(images/loading${num }.png)`;

            num++;
        }, 500);
        setTimeout(() => {
            clearInterval(timer);
            ele.style.display = "none"
            this.el.getElementsByClassName("logo")[0].remove();
            callback();
        }, 3000)

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
    left() {
        if (!this.$left)
            this.$left = this.el.offsetLeft;
        return this.$left;
    }

    top() {
        if (!this.$top)
            this.$top = this.el.offsetTop;
        return this.$top;
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
        this.el.className = "my-warplain";
        game.append(this);
        // 位置
        this.left((game.width() / 2) - (this.width() / 2));
        this.top(game.height() - this.height());
        // 键盘控制
        this.addMouseController();

        // this.addKeyController();

        // 子弹
        switch (this.level) {

        }
        this.autoFile();
        return this;
    }
    addMouseController() {
        document.addEventListener("mousemove", (e) => {
            let _left = Math.min(game.width() - this.width(), Math.max(0, e.clientX - game.left() - this.width() / 2));
            let _top = Math.min(game.height() - this.height(), Math.max(0, e.clientY - this.width() / 2));
            this.left(_left);
            this.top(_top);
        })
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

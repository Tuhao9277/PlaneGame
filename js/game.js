class Game extends Base {
    // 单例模式
    constructor() {
        super();
        if (!Game.instance) {
            //     Game.instance ={} // new Object();
            Game.instance = Object.create(Game.prototype);
            Game.instance.el = document.getElementsByClassName("main")[0];
            // 将所有敌机存储到一个Set集合里
            Game.instance.enemies = new Set();
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
            // 得到点击的游戏难度
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
    //载入动画方法
    loading(callback) {
        let ele = document.createElement("div");
        ele.className = "loading";
        game.el.appendChild(ele);
        let num = 1;
        let timer = setInterval(() => {
            if (num == 4) {
                num = 1;
            }
            ele.style.backgroundImage = `url(images/loading${num}.png)`;
            num++;
        }, 600);
        setTimeout(() => {
            clearInterval(timer);
            ele.style.display = "none"
            this.el.getElementsByClassName("logo")[0].remove();
            // 执行回调函数
            callback ? callback() : '';
        }, 3000)

    };
    // 游戏正式开始
    realStart() {
        // ...背景移动
        this.bgMove();
        // 加载玩家 
        this.player = new Player(this.level).init().show();
        // 不断地加载敌机
        this.autoCreateEnemy();
    }
    // 敌机加载方法
    autoCreateEnemy() {
        setInterval(() => {
            if (Math.random() > 0.7)
                this.enemies.add(new Enemy(Base.constant.PLANE_TYPE_BIG).init().move());
        })
        setInterval(() => {
            if (Math.random() > 0.5)
                this.enemies.add(new Enemy(Base.constant.PLANE_TYPE_MID).init().move());
        })
        setInterval(() => {
            if (Math.random() > 0.2)
                this.enemies.add(new Enemy(Base.constant.PLANE_TYPE_SML).init().move());
        })
    }
    // 背景图滚动
    bgMove() {
        let val = 0;
        setInterval(() => {
            this.el.style.backgroundPositionY = (val += 2) + "px";
        }, 30)
    }

    // 加载游戏角色
    append(somebody) {
        this.el.appendChild(somebody.el);
    }
}

let game = new Game();
game.run();



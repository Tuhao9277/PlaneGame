// 玩家 (单例)
class Player extends Base {
    constructor(level) {
        super();
        if (!Player.instance) {
            Player.instance = Object.create(Player.prototype);
            this.level = level;
        }
        // this.interval = 200;
        return Player.instance;
    }
    // 初始化玩家数据
    init() {
        this.el = document.createElement("div");
        this.el.className = "my-warplain";
        this.show();
        // 位置
        this.left((game.width() / 2) - (this.width() / 2));
        this.top(game.height() - this.height());
        // 鼠标控制
        this.addMouseController();

        // 键盘控制
        // this.addKeyController();

        // 子弹
        switch (this.level) {
            case '4':
                this.interval = 1000;
                break;
            case '3': this.interval = 600;
                break;
            case '2': this.interval = 400;
                break;
            case '1': this.interval = 200;
                break;
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
        game.append(this);
        return this;
    }
   
    // 自动开火
    autoFile() {
        
        setInterval(() => {
            new Bullet().init().move();

        },200);
    }
    left(val) {
        if (val !== undefined) {
            this.el.style.left = val + "px";
        } else {
            return this.el.offsetLeft;
        }
    }
    top(val) {
        if (val !== undefined) {
            this.el.style.top = val + "px";
        } else {
            return this.el.offsetTop;
        }
    }

}
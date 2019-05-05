// 玩家 (单例)
class Player extends Base {
    constructor(level) {
        super();
        if (!Player.instance) {
            Player.instance = Object.create(Player.prototype);
            this.level = level;
        }
        return Player.instance;
    }
    // 初始化玩家数据
    init() {
        this.el = document.createElement("div");
        this.el.className = "my-warplain";
        game.append(this);
        // 位置
        this.left((game.width() / 2) - (this.width() / 2));
        this.top(game.height() - this.height());
        // 鼠标控制
        this.addMouseController();

        // 键盘控制
        // this.addKeyController();

        // 子弹
        switch (this.level) {
            case 4: this.interval = 1000; break;
            case 3: this.interval = 600; break;
            case 2: this.interval = 400; break;
            case 1: this.interval = 200; break;
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
        if (val) {
            this.el.style.left = val + "px"
        } else {
            return this.offsetLeft;
        }
    }
    top(val) {
        if (val)
            this.el.style.top = val + "px";
        else {


            return this.offsetTop;
        }
    }

}
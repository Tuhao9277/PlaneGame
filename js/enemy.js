// 敌机
class Enemy extends Base {
    constructor(type) {
        super();
        this.el = document.createElement("div");
        this.type = type;
    }
    init() {
        switch (this.type) {
            case Base.constant.PLANE_TYPE_BIG: {
                this.el.className = "enemy-large";
                this.hp = 10;
                this.speed = 2;
            }
            case Base.constant.PLANE_TYPE_MID: {
                this.el.className = "enemy-middle";
                this.hp = 4;
            }
            case Base.constant.PLANE_TYPE_SML: {
                this.el.className = "enemy-small";
                this.hp = 1;
            }
        }
        // 位置： 随机范围
        this.left(Math.round(Math.random() * (game.width() - this.width())));
        this.top(-this.height());

    }
    create(type) {
        this.planeList[type]();
    }

    show() {
        game.appendChild(this);
    }

    move() {
        let t = setInterval(() => {
            this.top(this.top() - game.height())
            if (this.top() > game.height()) {
                clearInterval(t);
                this.destory();
            }
        }, 30)
    }
    hurt() {

    }
    destory() {

    }


}
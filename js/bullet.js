
// 子弹
class Bullet extends Base {
    constructor() {
        super();
        this.el = document.createElement("div");
    }
    init() {
        this.el.className = "bullet";
        this.show();
        this.left(game.player.left() + game.player.width() / 2 - this.width() / 2)
        this.top(game.player.top() - this.height());
        return this;
    }
    show() {
        game.append(this);
        return this;
    }
    move() {
        // 子弹移动
        let t = setInterval(() => {
            this.top(this.top() - 5);  // 向上移动5像素
            //碰撞检测
            this.isPing();
            // 子弹超出屏幕，销毁
            if (this.top() < -this.height()) {
                this.destory();
                clearInterval(t);
            }
        },30)
    }
    // 碰撞检测方法
    isPing(){
        for (const enemy of game.enemy) {
            
        }
    }
    destory() {
        this.el.remove();
    }
  
}
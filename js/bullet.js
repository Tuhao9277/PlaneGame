// 子弹
class Bullet extends Base {
    constructor() {
        super();
        this.el = document.createElement("div");
        this.no = Math.random();
        this.el.setAttribute("no",this.no);
    }
    init() {
        this.el.className = "bullet";
        this.show();
        this.left(game.player.left() + game.player.width() / 2 - this.width() / 2);
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
        }, 30)
    }
    // 碰撞检测方法
    isPing() {
        // 遍历当前所有的敌机，与当前的子弹做检测
        for (let enemy of game.enemies) {
            // 保存子弹位置
            let [_left, _top] = [this.left(), this.top()];
            let [minLeft, maxLeft, minTop, maxTop] = [
                enemy.left() - this.width(),
                enemy.left() + enemy.width(),
                enemy.top() - this.height(),
                enemy.top() + enemy.height()
            ]
            // 子弹在敌机的范围内
            if (_left > minLeft && _left < maxLeft && _top > minTop && _top < maxTop) {
                enemy.hurt(); // 执行掉血操作
                this.destory();
                break;
            }

        }
    }
    destory() {
        this.el.remove();
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
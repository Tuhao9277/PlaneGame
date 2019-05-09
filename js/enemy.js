// 敌机
class Enemy extends Base {
    constructor(type) {
        super();
        this.el = document.createElement("div");
        this.type = type;
    }
    init() {
        Enemy.planeList[this.type].call(this);
        this.show();
        //位置
        this.left(Math.round(Math.random() * (game.width() - this.width())));
        this.top(-this.height());
        return this;
    }
    create(type) {
        this.planeList[type]();
    }

    show() {
        game.append(this);
        return this;
    }

    move() {
        let t = setInterval(() => {
            this.top(this.top() + this.speed);
            if (this.top() > game.height()) {
                this.destory();
            }
        }, 30)
        return this;
    }
    // 自爆方法
    explode() {
        // 移除
        game.enemies.delete(this);
        // 爆炸动画
        Enemy.explodeType[this.type].call(this);

    }
    hurt() {
        if (--this.hp == 0) {
            this.explode();
        }
    }
    destory() {
        clearInterval(this.t);
        this.el.remove();
    }


}
// 初始化敌机
Enemy.planeList ={};
Enemy.planeList[Base.constant.PLANE_TYPE_BIG] = function () {  
    this.el.className = "enemy-large";
    this.hp = 7;
    this.speed = 1;
}
Enemy.planeList[Base.constant.PLANE_TYPE_MID] = function () {  
    this.el.className = "enemy-middle";
    this.hp = 4;
    this.speed = 3;
}
Enemy.planeList[Base.constant.PLANE_TYPE_SML] = function () {  
    this.el.className = "enemy-small";
    this.hp = 1;
    this.speed = 5;
}

// 敌机爆炸
Enemy.explodeType ={};
Enemy.explodeType[Base.constant.PLANE_TYPE_BIG] = function () {  
    let num =1;
    let $this = this;
    setTimeout(function fn () {
        $this.el.style.backgroundImage = `url(images/plane3_die${num}.png)`;
        num++;
        if(num<7){
            setTimeout(fn,200)
        }else{
            $this.destory();
        }
    },30)
}
Enemy.explodeType[Base.constant.PLANE_TYPE_MID] = function () {  
    let num =1;
    let $this = this;
    setTimeout(function fn () {
        $this.el.style.backgroundImage = `url(images/plane2_die${num}.png)`;
        num++;
        if(num<5){
            setTimeout(fn,200)
        }else{
            $this.destory();
        }
    },30)
}
Enemy.explodeType[Base.constant.PLANE_TYPE_SML] = function () {  
    let num =1;
    let $this = this;
    setTimeout(function fn () {
        $this.el.style.backgroundImage = `url(images/plane1_die${num}.png)`;
        num++;
        if(num<4){
            setTimeout(fn,200)
        }else{
            $this.destory();
        }
    },30)
}
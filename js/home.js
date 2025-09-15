const canvas = document.querySelector('.blossom');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; // 캔버스 가로, 세로를 전체 화면으로 지정
const ctx = canvas.getContext('2d'); // 아무것도 없는 도화지 캔버스에 그리기 도구 사용을 위해 불러옴

const TOTAL = 15;
const petalArray = [];
const MIN_DISTANCE = 100; // 비눗방울 간 최소 거리

const petalImg = new Image();
petalImg.src = '../images/bubble_10.png';
petalImg.onload = () => {
    for (let i = 0; i < TOTAL; i++) {
        let newPetal;
        let isOverlapping;

        do {
            newPetal = new Petal();
            isOverlapping = petalArray.some(petal => {
                const dx = petal.x - newPetal.x;
                const dy = petal.y - newPetal.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                return distance < MIN_DISTANCE;
            });
        } while (isOverlapping);

        petalArray.push(newPetal);
    }

    render();
};

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 0, 0 부터 캔버스 가로 세로 길이를 지우기
    window.requestAnimationFrame(render); // 재귀함수를 통해 반복실행(브라우저마다 차이있지만 평균 초당 60)
    petalArray.forEach((petal) => {
        petal.animate();
    });
}

window.addEventListener('resize', () => {
    // 윈도우 사이즈가 바뀔때마다 적용
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Petal {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.size = 50 + Math.random() * 30; // 각 비눗방울의 크기를 랜덤하게 설정
        this.w = this.size;
        this.h = this.size;
        this.opacity = this.w / 300;
        this.xSpeed = 1.5 + Math.random();
        this.ySpeed = 2 + Math.random();
        this.baseY = this.y; // 초기 y 위치를 저장
        this.waveFrequency = Math.random() * 0.05 + 0.01; // 파도 주기
        this.waveAmplitude = Math.random() * 20 + 10; // 파도 진폭
        this.image = new Image();
        this.image.src = `../images/bubble_10.png`; // 랜덤 이미지 선택
    }

    draw() {
        if (this.y > canvas.height || this.x > canvas.width) {
            this.x = -this.image.width;
            this.y = Math.random() * canvas.height * 2 - canvas.height;
            this.baseY = this.y;
            this.xSpeed = 1.5 + Math.random();
            this.ySpeed = 2 + Math.random();
            this.image.src = `../images/bubble_10.png`; // 새로운 랜덤 이미지로 설정
        }
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    animate() {
        this.x += this.xSpeed;
        this.y = this.baseY + Math.sin(this.x * this.waveFrequency) * this.waveAmplitude; // y 위치를 주기적으로 변경
        this.draw();
    }
}
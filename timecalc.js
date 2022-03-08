const clock = document.querySelector(".clock");
const tyang = new Date("June 2 2021 09:00:00");

const tyangTime = tyang.getTime();
const now = new Date();
const nowTime = now.getTime();
const tyangDate = now.getDate();
const tyangMonth = now.getMonth();

const tick = () => {
  const now = new Date();
  const nowTime = now.getTime();
  const tyangDate = now.getDate();

  const time = nowTime - tyangTime;
  const secs = Math.round(time / 1000);
  const mins = Math.round(time / 1000 / 60);
  const hours = Math.round(mins / 60);
  const days = Math.round(hours / 24);

  const html = `
    <span>${days}</span>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);

const monthsary = document.querySelector(".monthsary");
const anniversary = document.querySelector(".anniversary");

if (tyangDate === 2 && tyangMonth === 5) {
  anniversary.style.display = "block";
} else if (tyangDate === 2 && tyangMonth !== 5) {
  monthsary.style.display = "block";
}

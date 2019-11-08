import size4x4 from './size4x4';
import size32x32 from './size32x32';
import rslogo from '../img/rs.png';
import '../main.css';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imgRs = new Image();
imgRs.src = rslogo;

function draw(array, key) {
  const scale = key === 'size32x32' ? 17 : 130;
  array.forEach((row, indx1) => row.forEach((col, indx2) => {
    ctx.fillStyle = Array.isArray(col) ? `rgba(${col[0]},${col[1]},${col[2]},${col[3]}` : `#${col}`;
    ctx.fillRect(indx2 * scale, indx1 * scale, scale, scale);
  }));
}

const drawImg = () => ctx.drawImage(imgRs, 0, 0, canvas.width, canvas.height);


document.querySelector('.draw4x4').addEventListener('click', () => draw(size4x4, 'size4x4'));
document.querySelector('.draw32x32').addEventListener('click', () => draw(size32x32, 'size32x32'));
document.querySelector('.drawRschool').addEventListener('click', drawImg);

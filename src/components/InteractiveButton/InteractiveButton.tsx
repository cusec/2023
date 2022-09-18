import React, { useEffect, useRef } from "react";
import "./InteractiveButton.scss";

const pointsA: Point[] = [];
const pointsB: Point[] = [];
let canvas: any;
let context: any;
const points: number = 8;
const viscosity: number = 20;
const mouseDist: number = 70;
const damping: number = 0.05;
const showIndicators: boolean = false;
let mouseX: number = 0;
let mouseY: number = 0;
let relMouseX: number = 0;
let relMouseY: number = 0;
let mouseLastX: number = 0;
let mouseLastY: number = 0;
let mouseDirectionX: number = 0;
let mouseDirectionY: number = 0;
let mouseSpeedX: number = 0;
let mouseSpeedY: number = 0;

function getOffset(element: HTMLElement) {
  if (!element.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  let rect = element.getBoundingClientRect();
  let win = element.ownerDocument.defaultView;
  return {
    top: rect.top + (win?.scrollY || 0),
    left: rect.left + (win?.scrollX || 0),
  };
}

const mouseDirection = (e: any) => {
  if (mouseX < e.pageX) mouseDirectionX = 1;
  else if (mouseX > e.pageX) mouseDirectionX = -1;
  else mouseDirectionX = 0;

  if (mouseY < e.pageY) mouseDirectionY = 1;
  else if (mouseY > e.pageY) mouseDirectionY = -1;
  else mouseDirectionY = 0;

  mouseX = e.pageX;
  mouseY = e.pageY;

  relMouseX = mouseX - getOffset(canvas).left;
  relMouseY = mouseY - getOffset(canvas).top;
};

const mouseSpeed = () => {
  mouseSpeedX = mouseX - mouseLastX;
  mouseSpeedY = mouseY - mouseLastY;

  mouseLastX = mouseX;
  mouseLastY = mouseY;

  setTimeout(mouseSpeed, 50);
};

const addPoints = (x: number, y: number) => {
  pointsA.push(new Point(x, y, 1));
  pointsB.push(new Point(x, y, 2));
};

class Point {
  x: number;
  ix: number;
  y: number;
  iy: number;
  vx: number;
  vy: number;
  cx1: number;
  cy1: number;
  cx2: number;
  cy2: number;
  level: number;

  constructor(x: number, y: number, level: number) {
    this.x = this.ix = 50 + x;
    this.y = this.iy = 50 + y;
    this.vx = 0;
    this.vy = 0;
    this.cx1 = 0;
    this.cy1 = 0;
    this.cx2 = 0;
    this.cy2 = 0;
    this.level = level;
  }

  move() {
    this.vx += (this.ix - this.x) / (viscosity * this.level);
    this.vy += (this.iy - this.y) / (viscosity * this.level);

    const dx = this.ix - relMouseX;
    const dy = this.iy - relMouseY;
    const relDist = 1 - Math.sqrt(dx * dx + dy * dy) / mouseDist;

    // Move x
    if (
      (mouseDirectionX > 0 && relMouseX > this.x) ||
      (mouseDirectionX < 0 && relMouseX < this.x)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vx = (mouseSpeedX / 4) * relDist;
      }
    }
    this.vx *= 1 - damping;
    this.x += this.vx;

    // Move y
    if (
      (mouseDirectionY > 0 && relMouseY > this.y) ||
      (mouseDirectionY < 0 && relMouseY < this.y)
    ) {
      if (relDist > 0 && relDist < 1) {
        this.vy = (mouseSpeedY / 4) * relDist;
      }
    }
    this.vy *= 1 - damping;
    this.y += this.vy;
  }
}

const renderCanvas = () => {
 requestAnimationFrame(renderCanvas);

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#281434";
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i <= pointsA.length - 1; i++) {
    pointsA[i].move();
    pointsB[i].move();
  }

  const gradientX: number = Math.min(
    Math.max(mouseX - getOffset(canvas).left, 0),
    canvas.width
  );
  const gradientY: number = Math.min(
    Math.max(mouseY - getOffset(canvas).top, 0),
    canvas.height
  );
  const distance: number =
    Math.sqrt(
      Math.pow(gradientX - canvas.width / 2, 2) +
        Math.pow(gradientY - canvas.height / 2, 2)
    ) /
    Math.sqrt(Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2));

  const gradient = context.createRadialGradient(
    gradientX,
    gradientY,
    300 + 300 * distance,
    gradientX,
    gradientY,
    0
  );
  gradient.addColorStop(0, "#102ce5");
  gradient.addColorStop(1, "#E406D6");

  const groups: Point[][] = [pointsA, pointsB];

  for (let j = 0; j <= 1; j++) {
    const points: Point[] = groups[j];

    if (j === 0) {
      context.fillStyle = '#eefca2';
    } else {
      context.fillStyle = gradient;
    }

    context.beginPath();
    context.moveTo(points[0].x, points[0].y);

    for (let i = 0; i < points.length; i++) {
      const p: Point = points[i];
      let nextP: Point = points[i + 1];

      if (nextP !== undefined) {
        p.cx1 = (p.x + nextP.x) / 2;
        p.cy1 = (p.y + nextP.y) / 2;
        p.cx2 = (p.x + nextP.x) / 2;
        p.cy2 = (p.y + nextP.y) / 2;

        context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
      } else {
        nextP = points[0];
        p.cx1 = (p.x + nextP.x) / 2;
        p.cy1 = (p.y + nextP.y) / 2;

        context.bezierCurveTo(p.x, p.y, p.cx1, p.cy1, p.cx1, p.cy1);
      }
    }
    context.fill();
  }

  if (showIndicators) {
    context.fillStyle = "#000";
    context.beginPath();
    for (let i = 0; i < pointsA.length; i++) {
      const p: Point = pointsA[i];

      context.rect(p.x - 1, p.y - 1, 2, 2);
    }
    context.fill();

    context.fillStyle = "#f00";
    context.beginPath();
    for (let i = 0; i < pointsA.length; i++) {
      const p: Point = pointsA[i];

      context.rect(p.cx1 - 1, p.cy1 - 1, 2, 2);
      context.rect(p.cx2 - 1, p.cy2 - 1, 2, 2);
    }
    context.fill();
  }
};

interface Props{
    link?:string,
    text?:string
}

const InteractiveButton = ({link,text}: Props) => {
  const buttonRef = useRef(null);
  const canvaRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", mouseDirection);
    mouseSpeed();
    initButton();
  });

  const initButton = () => {
    const button: any = buttonRef.current;
    const buttonWidth = button?.clientWidth;
    const buttonHeight = button?.clientHeight;

    canvas = canvaRef.current;
    canvas.width = buttonWidth + 100;
    canvas.height = buttonHeight + 100;
    context = canvas.getContext("2d");

    const x = buttonHeight / 2;
    for (let j = 1; j < points; j++) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, 0);
    }
    addPoints(buttonWidth - buttonHeight / 5, 0);
    addPoints(buttonWidth + buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonWidth - buttonHeight / 5, buttonHeight);
    for (let j = points - 1; j > 0; j--) {
      addPoints(x + ((buttonWidth - buttonHeight) / points) * j, buttonHeight);
    }
    addPoints(buttonHeight / 5, buttonHeight);

    addPoints(-buttonHeight / 10, buttonHeight / 2);
    addPoints(buttonHeight / 5, 0);

    renderCanvas();
  };

  return (
    <a href={link} ref={buttonRef} className="btn-liquid">
      <canvas ref={canvaRef}></canvas>
      <span className="inner">{text}</span>
    </a>
  );
};

export default InteractiveButton;

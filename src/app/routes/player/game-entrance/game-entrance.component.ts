import Konva from 'konva';
import { EventUtil } from '../../../shared/public_api';
import { Tadpole, OutsetTadpole, DefaultTadpole } from '../tadpoles/public_api';
import { Component, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';
import { gapSize, size, scaledSize, fillColor, cornerRadius, scaledFillColor, tweenDuration, scaledCornerRadius } from '../../config';

const plainMap = [
  [OutsetTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
];

@Component({
  selector: 'lw-game-entrance',
  styleUrls: ['./game-entrance.component.scss'],
  templateUrl: './game-entrance.component.html',
})
export class GameEntranceComponent implements OnInit {
  private stage: Konva.Stage;
  private layer: Konva.Layer;
  private active: boolean = false;
  private pathGroup: Konva.Group;
  private promptTimer: number;
  private promptLayer: Konva.Layer;
  private background: Konva.Shape;
  private tadpoleMap: Array<Array<Tadpole>> = [];
  private tadpoleGroup: Konva.Group;
  private activeTadpoleQueue: Array<Tadpole> = new Array();

  @ViewChild('container', { read: ElementRef, static: true })
  public container: ElementRef<HTMLDivElement>;

  public ngOnInit() {
    this.stage = new Konva.Stage({
      width: this.container.nativeElement.clientWidth,
      height: this.container.nativeElement.clientHeight,
      container: this.container.nativeElement,
    });

    this.layer = new Konva.Layer({
      x: (this.stage.width() - (plainMap[0].length * (size + gapSize) - gapSize)) / 2,
      y: (this.stage.height() - (plainMap.length * (size + gapSize) - gapSize)) / 2,
    });
    this.pathGroup = new Konva.Group();
    this.tadpoleGroup = new Konva.Group();

    this.layer.add(this.pathGroup);
    this.layer.add(this.tadpoleGroup);

    this.pathGroup.zIndex(0);
    this.tadpoleGroup.zIndex(1);

    this.background = new Konva.Rect({
      x: 0,
      y: 0,
      fill: '#37092D',
      width: this.container.nativeElement.clientWidth,
      height: this.container.nativeElement.clientHeight,
    });
    const backgroundLayer = new Konva.Layer();
    backgroundLayer.add(this.background);

    this.promptLayer = new Konva.Layer({
      x: (this.stage.width() - (plainMap[0].length * (size + gapSize) - gapSize)) / 2,
      y: (this.stage.height() - (plainMap.length * (size + gapSize) - gapSize)) / 2,
    });

    this.stage.add(backgroundLayer);
    this.stage.add(this.layer);
    this.stage.add(this.promptLayer);

    backgroundLayer.zIndex(0);
    this.layer.zIndex(1);
    this.promptLayer.zIndex(2);

    this.drawTadpoleMap();
    this.promptReady();
    this.stage.on('mouseup', event => this.onStageMouseUp(event));
    this.stage.on('contextmenu', event => {
      console.log('A');
      event.evt.preventDefault();
      event.evt.stopPropagation();
    });
  }

  @HostListener('window:resize')
  public onWindowResize() {
    this.stage.width(this.container.nativeElement.clientWidth);
    this.stage.height(this.container.nativeElement.clientHeight);
    this.background.width(this.container.nativeElement.clientWidth);
    this.background.height(this.container.nativeElement.clientHeight);

    this.layer.x((this.stage.width() - (plainMap[0].length * (size + gapSize) - gapSize)) / 2);
    this.layer.y((this.stage.height() - (plainMap.length * (size + gapSize) - gapSize)) / 2);
    this.promptLayer.x((this.stage.width() - (plainMap[0].length * (size + gapSize) - gapSize)) / 2);
    this.promptLayer.y((this.stage.height() - (plainMap.length * (size + gapSize) - gapSize)) / 2);

    this.stage.draw();
  }

  private drawTadpoleMap() {
    this.tadpoleMap = plainMap.map((row, rowIndex) => row.map((TadpoleType, colIndex) => {
      if(TadpoleType) {
        return this.createTadpole(colIndex, rowIndex, TadpoleType);
      } else {
        return null;
      }
    }));
    this.stage.draw();
  }

  private onStageMouseUp(event: Konva.KonvaEventObject<MouseEvent>) {
    if(this.active) {
      this.active = false;
      if(this.tadpoleMap.flat().filter(tadpole => tadpole !== null).length === this.activeTadpoleQueue.length) {
        console.log('win');
        this.activeTadpoleQueue.forEach(item => {
          this.layer.draw();
          new Konva.Tween({
            node: item.node,
            fill: 'white',
            duration: 0.5,
            shadowColor: 'white',
          }).play();
          item.pathNode && (new Konva.Tween({
            node: item.pathNode,
            fill: 'white',
            duration: 0.5,
            shadowColor: 'white',
          }).play());
          new Konva.Tween({
            node: this.background,
            fill: 'black',
            duration: 1,
          }).play();
        });
      } else {
        this.recovery();
        this.promptReady(5000);
      }
    }
  }

  private onNodeMouseDown(event: Konva.KonvaEventObject<MouseEvent>) {
    if(!EventUtil.isLeftMouseButton(event.evt)) {
      return;
    };
    const node = event.currentTarget;
    const tadpole: Tadpole = node.attrs.tadpole;
    if(tadpole instanceof OutsetTadpole) {
      this.promptCancel();
      this.active = true;
      tadpole.active = true;
      tadpole.evolution.play();
      this.activeTadpoleQueue.push(tadpole);
    }
  }

  private onNodeMouseEnter(event: Konva.KonvaEventObject<MouseEvent>) {
    const rect = event.currentTarget;
    const tadpole: Tadpole = rect.attrs.tadpole;
    if(this.activeTadpoleQueue.length > 0 && this.active) {
      // 前进或者后退
      if(this.activeTadpoleQueue.includes(tadpole)) {
        if(tadpole.isRollbackable(this.activeTadpoleQueue)) {
          const tadpole = this.activeTadpoleQueue.pop();
          tadpole.pathNode.remove();
          tadpole.active = false;
          tadpole.evolution.reverse();
        }
      } else {
        if(tadpole.isAvailable(this.activeTadpoleQueue)) {
          const lastTadpole = this.activeTadpoleQueue[this.activeTadpoleQueue.length - 1];
          const lastScaledX = lastTadpole.scaledX;
          const lastScaledY = lastTadpole.scaledY;

          if(tadpole.col - lastTadpole.col === 1) {
            this.createTadpolePath(tadpole, {
              x: lastScaledX + scaledSize / 2,
              y: lastScaledY,
              width: 0,
              height: scaledSize,
              tweenHeight: scaledSize,
              tweenWidth: size + gapSize,
            });
          } else if(tadpole.col - lastTadpole.col === -1) {
            this.createTadpolePath(tadpole, {
              x: lastScaledX + scaledSize / 2,
              y: lastScaledY,
              width: 0,
              height: scaledSize,
              tweenHeight: scaledSize,
              tweenWidth: -(size + gapSize),
            });
          } else if(tadpole.row - lastTadpole.row === 1) {
            this.createTadpolePath(tadpole, {
              x: lastScaledX,
              y: lastScaledY + scaledSize / 2,
              width: scaledSize,
              height: 0,
              tweenWidth: scaledSize,
              tweenHeight: size + gapSize,
            });
          } else if(tadpole.row - lastTadpole.row === -1) {
            this.createTadpolePath(tadpole, {
              x: lastScaledX,
              y: lastScaledY + scaledSize / 2,
              width: scaledSize,
              height: 0,
              tweenWidth: scaledSize,
              tweenHeight: -(size + gapSize),
            });
          }
          tadpole.active = true;
          tadpole.evolution.play();
          this.activeTadpoleQueue.push(tadpole);
        }
      }
    }
  }

  private createTadpole(col: number, row: number, TadpoleType: typeof Tadpole) {
    const tadpole = new TadpoleType({ col: col, row: row });

    const node = new Konva.Rect({
      x: tadpole.x,
      y: tadpole.y,
      fill: fillColor,
      width: size,
      height: size,
      cornerRadius: cornerRadius,
    });
    node.on('mousedown', event => this.onNodeMouseDown(event));
    node.on('mouseenter', event => this.onNodeMouseEnter(event));
    this.tadpoleGroup.add(node);

    if(TadpoleType === OutsetTadpole) {
      node.fill(scaledFillColor);
    }

    const evolution = new Konva.Tween({
      x: tadpole.x + (size - scaledSize) / 2,
      y: tadpole.y + (size - scaledSize) / 2,
      node,
      fill: scaledFillColor,
      width: scaledSize,
      height: scaledSize,
      duration: tweenDuration,
      cornerRadius: scaledCornerRadius,

      shadowBlur: 1,
      shadowColor: scaledFillColor,
    });
    tadpole.node = node,
    tadpole.evolution = evolution;
    node.attrs.tadpole = tadpole;
    return tadpole;
  }

  private createTadpolePath(tadpole: Tadpole, { x, y, width, height, tweenWidth, tweenHeight }) {
    const pathNode = new Konva.Rect({
      x, y, width, height,
      fill: scaledFillColor,
      shadowBlur: 1,
      shadowColor: scaledFillColor,
    });
    this.pathGroup.add(pathNode);
    const pathNodeTween = new Konva.Tween({
      node: pathNode,
      width: tweenWidth,
      height: tweenHeight,
      duration: 0.05,
    }).play();
    tadpole.pathNode = pathNode;
    tadpole.pathNodeEvolution = pathNodeTween;
  }

  /**
   * 复原地图
   *
   * @author 鸿则 <hungtcs@163.com>
   * @date 2019-10-09
   * @private
   */
  private recovery() {
    (function _(queue) {
      if(queue.length > 0) {
        const tadpole = queue.pop();
        tadpole.pathNode && tadpole.pathNode.remove();
        tadpole.evolution.reverse();
        tadpole.pathNodeEvolution && tadpole.pathNodeEvolution.reverse();
        setTimeout(() => _(queue), 50);
      }
    }(this.activeTadpoleQueue));
  }

  private promptReady(timeout: number = 3000) {
    this.promptTimer = window.setTimeout(() => {
      this.promptLayer.show();
      const tadpole = this.tadpoleMap.flat().find(tadpole => tadpole instanceof OutsetTadpole);
      if(tadpole) {
        for(let i=0; i<2; i++) {
          ((i) => {
            setTimeout(() => {
              const tween = this.createRing(tadpole);
              tween.onFinish = () => {
                tween.destroy();
                if(i === 1) {
                  this.promptLayer.hide();
                  this.promptReady(5000);
                }
              };
              tween.play();
            }, 500 * i);
          })(i);
        }
      }
    }, timeout);
  }

  private promptCancel() {
    this.promptTimer && window.clearTimeout(this.promptTimer);
    this.promptLayer.hide();
  }

  private createRing(tadpole: Tadpole) {
    const [x, y] = [
      tadpole.x - 1,
      tadpole.y - 1,
    ];
    const ringSize = size + 2;
    const ring = new Konva.Rect({
      x, y,
      width: ringSize,
      height: ringSize,
      stroke: 'white',
      opacity: 1,
      strokeWidth: 1,
      cornerRadius: cornerRadius,
    });
    this.promptLayer.add(ring);
    this.promptLayer.draw();
    return new Konva.Tween({
      x: x - (ringSize / 2),
      y: y - (ringSize / 2),
      node: ring,
      width: ringSize * 2,
      height: ringSize * 2,
      opacity: 0,
      duration: 1,
    });
  }

}

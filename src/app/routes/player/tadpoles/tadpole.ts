import Konva from 'konva';
import { size, gapSize, scaledSize } from '../../config';

export class Tadpole {
  public col: number;
  public row: number;
  public node: Konva.Shape;
  public active: boolean;
  public pathNode: Konva.Shape;
  public pathNodeEvolution: Konva.Tween;
  public evolution: Konva.Tween;

  get x() {
    return (size + gapSize) * this.col;
  }

  get y() {
    return (size + gapSize) * this.row;
  }

  get scaledX() {
    return this.x + (size - scaledSize) / 2;
  }

  get scaledY() {
    return this.y + (size - scaledSize) / 2;
  }

  constructor(partial: Partial<Tadpole> = {}) {
    Object.assign(this, partial);
  }

  public isRollbackable(activeTadpoleQueue: Array<Tadpole>) {
    return activeTadpoleQueue[activeTadpoleQueue.length - 2] === this;
  }

  public isAvailable(activeTadpoleQueue: Array<Tadpole>) {
    if(activeTadpoleQueue.length < 1) {
      return false;
    }
    const lastTadpole = activeTadpoleQueue[activeTadpoleQueue.length - 1];
    const { col, row } = this;
    const { col: lastCol, row: lastRow } = lastTadpole;
    return Math.abs(lastCol - col) + Math.abs(lastRow - row) === 1;
  }

}

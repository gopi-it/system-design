import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawing-tool',
  templateUrl: './drawing-tool.component.html',
  styleUrl: './drawing-tool.component.scss',
})
export class DrawingToolComponent {
  public toolSelected = 'freehand';
  public toolColor = '#ff0000';

  private isDrawing = false;
  private ctx!: CanvasRenderingContext2D | null;

  private startX = 0;
  private startY = 0;

  private initialImageData: any;

  @ViewChild('canvasEl') canvasEl!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    if (this.canvasEl) {
      const canvas = this.canvasEl.nativeElement;

      //returns a CanvasRenderingContext2D object, which provides methods and properties for drawing on the canvas
      this.ctx = canvas.getContext('2d', {
        willReadFrequently: true,
      });

      canvas.addEventListener('mousedown', (e: any) => {
        this.startDrawing(e);
      });
      canvas.addEventListener('mousemove', (e: any) => {
        this.drawing(e);
      });
      canvas.addEventListener('mouseup', (e: any) => {
        this.stopDrawing(e);
      });
    }
  }

  public startDrawing(e: any) {
    this.isDrawing = true;
    this.startX = e.offsetX;
    this.startY = e.offsetY;

    const ctx = this.ctx;
    if (ctx) {
      ctx.lineWidth = 5;

      /**
       * A path defines a shape that can be stroked (outlined) or filled.
       *  By calling beginPath(), you're essentially resetting any existing paths, so new shapes can be drawn.
       */
      ctx.beginPath();

      ctx.fillStyle = this.toolColor;
      ctx.strokeStyle = this.toolColor;

      const canvas = this.canvasEl.nativeElement;

      /**
       * method captures the current state (pixel data) of the entire canvas, from the top-left corner (0, 0) to the canvas's full width and height.
        The resulting image data is stored in this.initialImageData, which is likely used to restore the canvas to this state later
       */
      this.initialImageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
    }
  }

  public drawing(e: any) {
    if (!this.isDrawing) return;
    const ctx = this.ctx;
    if (ctx) {
      // restore or place pixel data onto the canvas.
      ctx.putImageData(this.initialImageData, 0, 0);

      switch (this.toolSelected) {
        case 'freehand':
          ctx.moveTo(this.startX, this.startY); //moves the "drawing cursor" to the specified coordinates
          ctx.lineTo(e.offsetX, e.offsetY); //draws a line from the current cursor position (set by moveTo()) to the specified coordinates
          ctx.stroke(); // draws the line

          //After drawing the line, the startX and startY values are updated to the current mouse position (e.offsetX, e.offsetY).
          this.startX = e.offsetX;
          this.startY = e.offsetY;
          break;

        case 'circle':
          const radius = Math.sqrt(
            (e.offsetX - this.startX) ** 2 + (e.offsetY - this.startY) ** 2
          );
          ctx.beginPath();
          ctx.arc(this.startX, this.startY, radius, 0, 2 * Math.PI);
          ctx.fill();
          ctx.stroke();
          break;

        case 'rectangle':
          const width = e.offsetX - this.startX;
          const height = e.offsetY - this.startY;
          ctx.fillRect(this.startX, this.startY, width, height);
          ctx.beginPath();
          break;

        case 'eraser':
          ctx.strokeStyle = '#fff';
          ctx.moveTo(this.startX, this.startY);
          ctx.lineTo(e.offsetX, e.offsetY);
          ctx.stroke();
          this.startX = e.offsetX;
          this.startY = e.offsetY;
          break;

        default:
          break;
      }
    }
  }

  public stopDrawing(e: any) {
    this.isDrawing = false;
    if (this.ctx) this.ctx.closePath();
  }

  public download() {
    const image = this.canvasEl.nativeElement.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'canvas.png';

    link.click();
  }
}

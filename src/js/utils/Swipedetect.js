const TICK_QUANTITY = 3;

class Swipedetect{
  constructor({ container, handleMove, handleEnd }) {
    this.container = container;
    this.handleMove = handleMove;
    this.handleEnd = handleEnd;
    this._init();
  }

  destroy() {
    this.container.removeEventListener('touchstart', this._touchStart );
    this.container.removeEventListener('touchmove', this._touchMove );
    this.container.removeEventListener('touchend', this._touchEnd );
    this.container = null;
  }

  _init() {
    this.startX = 0;
    this.startY = 0;
    this.deltaY = 0;
    this.deltaX = 0;
    this.touches;
    this.cache = [];
    this.tick = 0;
    this.isVerticalMove = false;

    this.container.addEventListener('touchstart', this._touchStart, { passive: true } );
    this.container.addEventListener('touchmove', this._touchMove, { passive: true } );
    this.container.addEventListener('touchend', this._touchEnd, { passive: true } );
  }

  _touchStart = ({ changedTouches }) => {
    this.touches = changedTouches[0];
    this.startX = this.touches.pageX;
    this.startY = this.touches.pageY;
  }

  _touchMove = ({ changedTouches }) => {

    if( this.isVerticalMove ) return;

    this.touches = changedTouches[0];
    this.deltaY = this.touches.pageY - this.startY;
    this.deltaX = this.touches.pageX - this.startX;

    this.tick++;
    this.cache.push({ x: this.deltaX, y: this.deltaY });

    if( this.tick === TICK_QUANTITY ) {

      if( this._isVertical() ) this.isVerticalMove = true;
    }

    if( this.tick <= TICK_QUANTITY ) return

    this.handleMove( this.deltaX, this.container );
  }

  _touchEnd = ({ changedTouches }) => {
    this.touches = changedTouches[0];
    this.deltaX = this.touches.pageX - this.startX;
    const direction = ( this.touches.pageX > this.startX ) ? 'right' : 'left';
    this.handleEnd( this.deltaX, this.container, direction );

    this.cache = [];
    this.tick = 0;
    this.isVerticalMove = false;
  }

  _isVertical() {
    let x = this.cache[TICK_QUANTITY - 1].x - this.cache[0].x;
    let y = this.cache[TICK_QUANTITY - 1].y - this.cache[0].y;

    x = ( x < 0 ) ? -x : x;
    y = ( y < 0 ) ? -y : y;

    return y >= x;
  }
};

export default Swipedetect;
import { onMount, onCleanup } from 'solid-js'

function App() {

  let canvasRef;
  let animationID;

  const styles = {
    outer: {
      "background-color": "hsl(0, 0%, 34%)",
      "height": "100vh",
      "width": "100vw",
      "overflow": "hidden",
    },
    inner:{
      "color": "hsl(0, 0%, 100%)",
      "font-size": "1em",
      "padding": "0.1em",
    },
    canvas:{
      "border": "1px solid #bd3030",
      "width":"1000px",
      "height":"700px",
      "display":"block"

    }
  }

  const gameItems = {
    pastTime:0,
    item1:{x:80, y:220,vel:2},
    item2:{x:120, y:120, word:'dummy',vel:4}
  }

  const fn_update_posn = (dt) => {
    gameItems.item1.x = gameItems.item1.x + gameItems.item1.vel*dt
    gameItems.item2.y = gameItems.item2.y + gameItems.item2.vel*dt
  }

  const fn_draw = (ctx) => {
    ctx.clearRect(0,0,canvasRef.width, canvasRef.height)

    // Draw player ship as a simple triangle
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gameItems.item1.x, gameItems.item1.y - 12);
    ctx.lineTo(gameItems.item1.x - 10, gameItems.item1.y + 10);
    ctx.lineTo(gameItems.item1.x + 10, gameItems.item1.y + 10);
    ctx.closePath();
    ctx.stroke();

    // Draw enemy as a simple rectangle
    ctx.strokeRect(gameItems.item2.x, gameItems.item2.y, 30, 20);

    // Draw word above enemy
    ctx.font = "22px monospace";
    ctx.fillStyle = "#4d9efa";
    ctx.fillText(gameItems.item2.word, gameItems.item2.x, gameItems.item2.y - 8);

    
  }

  const fn_frame = (time) =>{
    if(!gameItems.pastTime) gameItems.pastTime = time;
    const dt = (time - gameItems.pastTime)/3000;
    gameItems.pastTime = time;

    const ctx = canvasRef.getContext("2d")
    fn_update_posn(dt)
    fn_draw(ctx)

    animationID = requestAnimationFrame(fn_frame)
    
  }

  onMount(()=>{
    canvasRef.width = 1000
    canvasRef.height = 700
    animationID = requestAnimationFrame(fn_frame)
  })

  onCleanup(() => {
    if (animationID) {
      cancelAnimationFrame(animationID);
    }
  });


  return (
    <div style={styles.outer}>
      <div style={styles.inner}>App kkkkkkkkkk</div>
      <canvas ref={canvasRef} style={styles.canvas}/>
    </div>
  )
}

export default App

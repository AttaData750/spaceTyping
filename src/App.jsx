function App() {

  const styles = {
    outer: {
      "background-color": "hsl(0, 0%, 20%)",
      "height": "100vh",
      "width": "100vw",
      "overflow": "hidden",
    },
    inner:{
      "color": "hsl(0, 0%, 100%)",
      "font-size": "1em",
      "padding": "0.1em",
    }
}

  return (
    <div style={styles.outer}>
      <div style={styles.inner}>App kkkkkkkkkk</div>
    </div>
  )
}

export default App

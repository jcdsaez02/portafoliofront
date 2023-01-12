var circleBar = new ProgressBar.Circle("#circle-container", {
  color: "white",
  strokeWidth: 2,
  trailWidth: 25,
  trailColor: "black",
  easing: "easeInOut",
  from: { color: "#FF9900", width: 1 },
  to: { color: "#FF0099", width: 25 },
  text: {
    value: '0',
    className: 'progress-text',
    style: {
      color: 'black',
      position: 'absolute',
      top: '45%',
      left: '42%',
      padding: 0,
      margin: 0,
      transform: null
    }
  },
  step: (state, shape) => {
    shape.path.setAttribute("stroke", state.color);
    shape.path.setAttribute("stroke-width", state.width);
    shape.setText(Math.round(shape.value() * 100) + ' %');
  }
});
circleBar.animate(0.50, {
  duration: 5555
});
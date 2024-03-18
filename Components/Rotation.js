AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
      rotationSpeed: { type: "number", default: 0 },
      movementSpeed: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        this.data.rotationSpeed = this.el.getAttribute("rotation");      
        this.data.movementSpeed = this.el.getAttribute("position");
  
        var diverRotation = this.data.rotationSpeed;      
        var diverPosition = this.data.movementSpeed;
  
        if (e.key === "ArrowDown") {
          if (diverPosition.z < 20) {
            diverPosition.z += 0.1;
            this.el.setAttribute("position", diverPosition);
          }
        }
        if (e.key === "ArrowUp") {
          if (diverPosition.z> -10) {
            diverPosition.z -= 0.1;
            this.el.setAttribute("position", diverPosition);
          }
        }
        if (e.key === "ArrowRight") {
          if (diverRotation.y > -360) {
            diverRotation.y -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.x < 20) {
            diverPosition.x += 0.05;
            this.el.setAttribute("position", diverPosition);
          }
        }
        if (e.key === "ArrowLeft") {
          if (diverRotation.y <360) {
            diverRotation.y += 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.x > -20) {
            diverPosition.x -= 0.05;
            this.el.setAttribute("position", diverPosition);
          }
        }
      });
    }
  });
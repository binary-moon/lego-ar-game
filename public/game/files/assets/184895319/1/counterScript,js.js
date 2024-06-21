var CounterScript = pc.createScript('counterScript');

// Attributes to specify the entities
CounterScript.attributes.add('targetEntity', {
  type: 'entity',
  title: 'Target Entity',
  description: 'The entity with the rigidbody and collider',
});

CounterScript.attributes.add('textElement', {
  type: 'entity',
  title: 'Text Element',
  description: 'The text element to display the count',
});

CounterScript.attributes.add('cameraEntity', {
  type: 'entity',
  title: 'Camera Entity',
  description: 'The camera entity for raycasting',
});

// Initialize the script
CounterScript.prototype.initialize = function() {
  this.count = 0;

  // Register an event listener for when the target entity is tapped
  this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
};

// Update the text element with the current count
CounterScript.prototype.updateText = function() {
  this.textElement.element.text = this.count;
};

// Handle mouse down events
CounterScript.prototype.onMouseDown = function(event) {
  // Convert the mouse position to a ray using the specified camera
  var from = this.cameraEntity.camera.screenToWorld(
      event.x, event.y, this.cameraEntity.camera.nearClip);
  var to = this.cameraEntity.camera.screenToWorld(
      event.x, event.y, this.cameraEntity.camera.farClip);

  var result = this.app.systems.rigidbody.raycastFirst(from, to);

  // Check if the raycast hit the target entity
  if (result && result.entity === this.targetEntity) {
    if (this.count < 5) {
      this.count++;

      // Update the text element
      this.updateText();

      // Check if the count has reached 5
      if (this.count === 5) {
        this.sendExitMessage();
      }
    }
  }
};

CounterScript.prototype.sendExitMessage = function() {
    if (window.parent) {
        window.parent.postMessage({
            action: 'exitAR',
        }, '*');
    }
};

const DragDropManager = Object.create(null, {
  init: {
    value: () => {
      // Contains all the white "stage" divs
      const stages = document.querySelectorAll(".stage")

      // Defines the drag for each stage item
      stages.forEach(stage => {
        // Gain reference of item being dragged
        // Defines what's being dragged: the HTML text of the item and its classList as well (to keep the formatting)
        stage.ondragstart = e => {
          e.dataTransfer.setData("text", e.target.classList)
        }
      })

      // Gets all the target divs
      const targets = document.querySelectorAll(".target")

      // Turns off the default behavior for each div, allowing things to be dragged over them and dropped
      targets.forEach(target => {
        // Enables targets to be dragged over
        target.ondragover = e => e.preventDefault()


        // Enables dropping on targets
        target.ondrop = e => {
          e.preventDefault()

          // Gets the class list that's currently being stored in the dataTransver object
          const data = e.dataTransfer.getData("text")

          // Append card to target component as child
          // TODO: This should only happen if the target has no children nodes
          // TODO: This should not happen if the target is another stage card
          
          e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
        }
      })
    }
  }
})

DragDropManager.init()

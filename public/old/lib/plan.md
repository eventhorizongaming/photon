# The Plan

## Nodes

The basic unit with which games will be created are "nodes".  Every node will have the following basic features:

- Store 2D renderable objects
- Contain/manipulate children

Additionally, this functionality can be extended for more specific use cases, such as:

- GameNode (manages game related stuff, such as a canvas)
- SceneNode (manages scene related stuff, such as physics worlds)
- BodyNode (manages a physics body)
- JointNode (manages a physics joint)

More node types to be added later.
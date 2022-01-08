//@input SceneObject sphere

global.touchingSphere = false
var event = script.createEvent("TouchStartEvent");
event.bind(function(eventData)
{
   global.touchingSphere = true
});

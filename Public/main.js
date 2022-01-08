// -----JS CODE-----
// @input SceneObject sphere
// @input SceneObject plane
// @input SceneObject box
// @input SceneObject boxTwo
// @input SceneObject boxThree
// @input SceneObject boxFour
// @input SceneObject boxFive
// @input SceneObject boxSix
// @input SceneObject boxGround
//@input float gravity
//@input float bounciness
//@input float sphereMass

// Setup World Physics
global.move=0;
global.isMove=0;
global.onTap=0;
global.firstLaunch=0;
var world = new CANNON.World()
global.touchSystem.touchBlocking = true;
global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);
global.touchSystem.enableTouchBlockingException("TouchTypeSwipe", true);
// world.gravity.set(0, 0, -9.82) // m/s?
world.gravity.set(0, 0, script.gravity) // m/s?
world.broadphase = new CANNON.NaiveBroadphase()
world.broadphase.useBoundingBoxes=true;
world.step(1/1200);
// world.solver.iterations = 10

var sphereRadius = script.sphere.getTransform().getLocalScale()

var spherePos = script.sphere.getTransform().getLocalPosition()

var radiusMultiplier = 12
var sphereShape = new CANNON.Sphere(
  sphereRadius.x * radiusMultiplier,
  sphereRadius.y * radiusMultiplier,
  sphereRadius.z * radiusMultiplier
)

var sphereMaterial = new CANNON.Material()
var groundMaterial = new CANNON.Material()

var sphereBody = new CANNON.Body({
  mass: script.sphereMass,
  material: sphereMaterial,
    ccdSpeedThreshold:2,
     ccdIterations:2,
  position: new CANNON.Vec3(spherePos.x, spherePos.y, spherePos.z),
  shape: sphereShape,
  
})

world.addBody(sphereBody)

var boxPos= script.box.getTransform().getLocalPosition()
var boxRadius = script.box.getTransform().getLocalScale()

var multiplier = 7
var boxShape=  new CANNON.Cylinder(3,3,11,10)

var boxMaterial = new CANNON.Material()

var boxBody = new CANNON.Body({
  mass: 5,
  material: boxMaterial,
  position: {x:boxPos.x,y:boxPos.y,z:boxPos.z},

  shape: boxShape,
    ccdSpeedThreshold:20,
     ccdIterations:2,
  quaternion: new CANNON.Quaternion(0, 0, 0, 1 || 0.5),

}
)

boxBody.quaternion.x = 90
    boxBody.quaternion.y = 0
    boxBody.quaternion.z = 0
print("hello!"+boxPos + boxRadius);
var boxPos1= script.boxTwo.getTransform().getLocalPosition()
var boxRadius1 = script.boxTwo.getTransform().getLocalScale()

var multiplier1 = 4
var boxShape1=  new CANNON.Cylinder(3,3,11,10)
var boxMaterial1 = new CANNON.Material()

var boxBody1 = new CANNON.Body({
  mass: 10,
    
  material: boxMaterial1,
  position: new CANNON.Vec3(
boxPos1.x,
boxPos1.y, 
boxPos1.z),
  shape: boxShape1,
    
    ccdSpeedThreshold:20,
    ccdIterations:20,
  quaternion: new CANNON.Quaternion(0, 0, 0, 1 || 0.5),

}
)

var boxPos3= script.boxThree.getTransform().getLocalPosition()

var multiplier1 = 4
var boxShape3=  new CANNON.Cylinder(3,3,11,10)
var boxMaterial3 = new CANNON.Material()

var boxBody3 = new CANNON.Body({
  mass: 10,
    
  material: boxMaterial3,
  position: new CANNON.Vec3(
boxPos3.x,
boxPos3.y, 
boxPos3.z),
  shape: boxShape3,
    
    ccdSpeedThreshold:20,
    ccdIterations:20,
  quaternion: new CANNON.Quaternion(0, 0, 0, 1 || 0.5),

}
)



var boxPos4= script.boxFour.getTransform().getLocalPosition()

var multiplier1 = 4
var boxShape4=  new CANNON.Cylinder(3,3,11,10)
var boxMaterial4 = new CANNON.Material()

var boxBody4 = new CANNON.Body({
  mass: 10,
    
  material: boxMaterial4,
  position: new CANNON.Vec3(
boxPos4.x,
boxPos4.y, 
boxPos4.z),
  shape: boxShape4,
    
    ccdSpeedThreshold:20,
    ccdIterations:20,
  quaternion: new CANNON.Quaternion(0, 0, 0, 1 || 0.5),

}
)



var boxPos5= script.boxFive.getTransform().getLocalPosition()

var multiplier1 = 4
var boxShape5=  new CANNON.Cylinder(3,3,11,10)
var boxMaterial5 = new CANNON.Material()

var boxBody5 = new CANNON.Body({
  mass: 10,
    
  material: boxMaterial5,
  position: new CANNON.Vec3(
boxPos5.x,
boxPos5.y, 
boxPos5.z),
  shape: boxShape5,
   
    ccdSpeedThreshold:20,
    ccdIterations:20,
  quaternion: new CANNON.Quaternion(0, 0, 0, 1 || 0.5),

}
)

var boxPos6= script.boxSix.getTransform().getLocalPosition()

var multiplier1 = 4
var boxShape6=  new CANNON.Cylinder(3,3,11,10)
var boxMaterial6 = new CANNON.Material()

var boxBody6 = new CANNON.Body({
  mass: 10,
    
  material: boxMaterial6,
  position: new CANNON.Vec3(
boxPos6.x,
boxPos6.y, 
boxPos6.z),
  shape: boxShape6,
   
    ccdSpeedThreshold:20,
    ccdIterations:20,
  quaternion: new CANNON.Quaternion(0, 0, 0, 1 || 0.5),

}
)


var boxPos7= script.boxGround.getTransform().getLocalPosition()

var multiplier1 = 4
var boxShape7=  new CANNON.Box(new CANNON.Vec3(
          16,
          16,
          11
        ))
var boxMaterial7 = new CANNON.Material()

var boxBody7 = new CANNON.Body({
  mass: 0,
    
  material: boxMaterial7,
  position: new CANNON.Vec3(
boxPos7.x,
boxPos7.y, 
boxPos7.z),
  shape: boxShape7,
   
    ccdSpeedThreshold:20,
    ccdIterations:20,
  quaternion: new CANNON.Quaternion(0, 0, 0, 1 || 0.5),

}
)
//world.add(boxBody1)
world.addBody(boxBody)
world.addBody(boxBody1)
world.addBody(boxBody3)
world.addBody(boxBody4)
world.addBody(boxBody5)
world.addBody(boxBody6)
world.addBody(boxBody7)

var groundPos = script.plane.getTransform().getLocalPosition()
var groundRot = script.plane.getTransform().getWorldRotation()

var degrees = 90
var axis = vec3.right()
var radians = degrees * (Math.PI / 180)
var newRot = quat.angleAxis(radians, axis)

var groundShape = new CANNON.Plane()
var groundMaterialTable = new CANNON.Material()
var groundBody = new CANNON.Body({
  mass: 0,
  material: groundMaterialTable,
  position: new CANNON.Vec3(groundPos.x, groundPos.y, groundPos.z),
  shape: groundShape
})


//var groundPosShape = script.table.getTransform().getLocalPosition()
//var groundRotShape = script.table.getTransform().getWorldRotation()
//
//var degrees = 90
//var axis = vec3.right()
//var radians = degrees * (Math.PI / 180)
//var newRot = quat.angleAxis(radians, axis)
//var groundTableShape = new CANNON.Plane()
//
////
//var groundTable = new CANNON.Body({
//  mass: 0,
//  material: groundMaterial,
//  position: new CANNON.Vec3(groundPosShape.x, groundPosShape.y, groundPosShape.z),
//  shape: groundTableShape
//})

world.add(groundBody)
//world.add(groundTable)

var sphereGroundContactMat1 = new CANNON.ContactMaterial(
  boxMaterial1,
  sphereMaterial,
  {
    friction: 0.0,
    // 1 is infinite bounce full pos restored
    restitution: 0.3
  }
)
var sphereGroundContactMat = new CANNON.ContactMaterial(
  boxMaterial,
  sphereMaterial,
  {
    friction: 0.0,
    // 1 is infinite bounce full pos restored
    restitution: 0.3
  }
)

var sphereGroundContactMat3 = new CANNON.ContactMaterial(
  boxMaterial3,
  sphereMaterial,
  {
    friction: 0.0,
    // 1 is infinite bounce full pos restored
    restitution: 0.3
  }
)

var sphereGroundContactMat4 = new CANNON.ContactMaterial(
  boxMaterial4,
  sphereMaterial,
  {
    friction: 0.0,
    // 1 is infinite bounce full pos restored
    restitution: 0.3
  }
)

var sphereGroundContactMat5 = new CANNON.ContactMaterial(
  boxMaterial5,
  sphereMaterial,
  {
    friction: 0.0,
    // 1 is infinite bounce full pos restored
    restitution: 0.3
  }
)


var sphereGroundContactMat6 = new CANNON.ContactMaterial(
  boxMaterial6,
  sphereMaterial,
  {
    friction: 0.0,
    // 1 is infinite bounce full pos restored
    restitution: 0.3
  }
)

world.addContactMaterial(sphereGroundContactMat)
world.addContactMaterial(sphereGroundContactMat1)
world.addContactMaterial(sphereGroundContactMat3)
world.addContactMaterial(sphereGroundContactMat4)
world.addContactMaterial(sphereGroundContactMat5)
world.addContactMaterial(sphereGroundContactMat6)


var event = script.createEvent("TouchStartEvent");
event.bind(function(eventData)
{
    global.onTap=1;
    global.firstLaunch=1;
    sphereBody.velocity=new CANNON.Vec3(
    0, 220, 45)
    var touchedPos = eventData.getTouchPosition();
    print("touch started at " + touchedPos.x + " " + touchedPos.y);
});

function onUpdateEvent() {
  // Update physics

   // sphereBody.position.x++;
    

    
  //  print("move"+sphereBody.position.x);
    if(global.onTap==0){
     if(sphereBody.position.x<-13.0){
        global.isMove=0;
    }
    if(sphereBody.position.x>13.0)
    global.isMove=1;    
    
    if(global.isMove==0){
        sphereBody.position.x++;
        
    }
     if(global.isMove==1){
         sphereBody.position.x--;
    }
    }
    else
    global.move++;
   
    if(global.move==70){
        
        // Position


// Velocity
sphereBody.velocity.setZero();
sphereBody.initVelocity.setZero();
sphereBody.angularVelocity.setZero();
sphereBody.initAngularVelocity.setZero();
 
        global.onTap=0;
        global.isMove=0;
       
       
     script.sphere.getTransform().setLocalPosition(new vec3(
          -12,
          100,
          -17
        ))
     sphereBody.position.x=-12;
        sphereBody.position.y=100;
        sphereBody.position.z=-17;
        
        global.move=0;
        
    }
    script.sphere
      .getTransform()
      .setLocalPosition(
        new vec3(
          sphereBody.position.x,
          sphereBody.position.y,
          sphereBody.position.z
        )
      )
  if (!global.touchingSphere && global.firstLaunch==1) {
    
        script.boxTwo
      .getTransform()
      .setLocalPosition(
        new vec3(
          boxBody1.position.x,
          boxBody1.position.y,
          boxBody1.position.z
        )
      )
        script.boxTwo
      .getTransform()
      .setLocalRotation(
        new quat(
          boxBody1.quaternion.x,
          boxBody1.quaternion.y,
          boxBody1.quaternion.z,
        boxBody1.quaternion.w
        )
      )
        
        
        script.box
      .getTransform()
      .setLocalPosition(
        new vec3(
          boxBody.position.x,
          boxBody.position.y,
          boxBody.position.z
        )
      )
         script.box
      .getTransform()
      .setLocalRotation(
        new quat(
          boxBody.quaternion.x,
          boxBody.quaternion.y,
          boxBody.quaternion.z,
        boxBody.quaternion.w
        )
      )
         script.boxThree
      .getTransform()
      .setLocalPosition(
        new vec3(
          boxBody3.position.x,
          boxBody3.position.y,
          boxBody3.position.z
        )
      )
         script.boxThree
      .getTransform()
      .setLocalRotation(
        new quat(
          boxBody3.quaternion.x,
          boxBody3.quaternion.y,
          boxBody3.quaternion.z,
        boxBody3.quaternion.w
        )
      )
        
         script.boxFour
      .getTransform()
      .setLocalPosition(
        new vec3(
          boxBody4.position.x,
          boxBody4.position.y,
          boxBody4.position.z
        )
      )
         script.boxFour
      .getTransform()
      .setLocalRotation(
        new quat(
          boxBody4.quaternion.x,
          boxBody4.quaternion.y,
          boxBody4.quaternion.z,
        boxBody4.quaternion.w
        )
      )
        
         script.boxFive
      .getTransform()
      .setLocalPosition(
        new vec3(
          boxBody5.position.x,
          boxBody5.position.y,
          boxBody5.position.z
        )
      )
         script.boxFive
      .getTransform()
      .setLocalRotation(
        new quat(
          boxBody5.quaternion.x,
          boxBody5.quaternion.y,
          boxBody5.quaternion.z,
        boxBody5.quaternion.w
        )
      )
        
         script.boxSix
      .getTransform()
      .setLocalPosition(
        new vec3(
          boxBody6.position.x,
          boxBody6.position.y,
          boxBody6.position.z
        )
      )
         script.boxSix
      .getTransform()
      .setLocalRotation(
        new quat(
          boxBody6.quaternion.x,
          boxBody6.quaternion.y,
          boxBody6.quaternion.z,
        boxBody6.quaternion.w
        )
      )
        
        
    world.step(global.getDeltaTime())
  } else {
    var newPos = script.sphere.getTransform().getLocalPosition()
    sphereBody.position.x = newPos.x
    sphereBody.position.y = newPos.y
    sphereBody.position.z = newPos.z
        
        var newPosBox = script.box.getTransform().getLocalPosition()
    boxBody.position.x = newPosBox.x
    boxBody.position.y = newPosBox.y
    boxBody.position.z = newPosBox.z
        
    var newPosBox1 = script.boxTwo.getTransform().getLocalPosition()
    
    boxBody1.position.x = newPosBox1.x
    boxBody1.position.y = newPosBox1.y
    boxBody1.position.z = newPosBox1.z
        
    var newPosBox3 = script.boxThree.getTransform().getLocalPosition()
    
    boxBody3.position.x = newPosBox3.x
    boxBody3.position.y = newPosBox3.y
    boxBody3.position.z = newPosBox3.z
        
    var newPosBox4 = script.boxFour.getTransform().getLocalPosition()
    
    boxBody4.position.x = newPosBox4.x
    boxBody4.position.y = newPosBox4.y
    boxBody4.position.z = newPosBox4.z
    
     var newPosBox5 = script.boxFive.getTransform().getLocalPosition()
    
    boxBody5.position.x = newPosBox5.x
    boxBody5.position.y = newPosBox5.y
    boxBody5.position.z = newPosBox5.z

    var newPosBox6 = script.boxSix.getTransform().getLocalPosition()
    
    boxBody6.position.x = newPosBox6.x
    boxBody6.position.y = newPosBox6.y
    boxBody6.position.z = newPosBox6.z
        
    var newRotBox = script.boxTwo.getTransform().getLocalRotation()

    var newRotBox1 = script.box.getTransform().getLocalRotation()
    var newRotBox3 = script.boxThree.getTransform().getLocalRotation()
    var newRotBox4 = script.boxFour.getTransform().getLocalRotation()
    var newRotBox5 = script.boxFive.getTransform().getLocalRotation()
    var newRotBox6 = script.boxSix.getTransform().getLocalRotation()


    boxBody1.quaternion.x = newRotBox.x
    boxBody1.quaternion.y = newRotBox.y
    boxBody1.quaternion.z = newRotBox.z
        
    boxBody.quaternion.x = newRotBox1.x
    boxBody.quaternion.y = newRotBox1.y
    boxBody.quaternion.z = newRotBox1.z
        
    boxBody3.quaternion.x = newRotBox3.x
    boxBody3.quaternion.y = newRotBox3.y
    boxBody3.quaternion.z = newRotBox3.z
        
     boxBody4.quaternion.x = newRotBox4.x
    boxBody4.quaternion.y = newRotBox4.y
    boxBody4.quaternion.z = newRotBox4.z
    
     boxBody5.quaternion.x = newRotBox5.x
    boxBody5.quaternion.y = newRotBox5.y
    boxBody5.quaternion.z = newRotBox5.z
     
     boxBody6.quaternion.x = newRotBox6.x
    boxBody6.quaternion.y = newRotBox6.y
    boxBody6.quaternion.z = newRotBox6.z
   
  }
}

var updateEvent = script.createEvent('UpdateEvent')
updateEvent.bind(onUpdateEvent)

var event2 = script.createEvent('TouchEndEvent')
event2.bind(function(eventData) {
  global.touchingSphere = false
})

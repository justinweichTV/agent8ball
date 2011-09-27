// This file was autogenerated by public/javascripts/closure/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../eightball/CollisionEvent.js', ['eightball.CollisionEvent'], ['goog.events.Event']);
goog.addDependency('../../../eightball/Cookies.js', ['eightball.Cookies'], ['goog.net.cookies']);
goog.addDependency('../../../eightball/DroppingBall.js', ['eightball.DroppingBall'], []);
goog.addDependency('../../../eightball/Game.js', ['eightball.Game'], ['eightball.Cookies', 'eightball.PoolTable', 'eightball.Stats', 'goog.Timer', 'goog.array', 'goog.asserts', 'goog.debug.LogManager', 'goog.events.Event', 'goog.events.EventTarget', 'goog.object']);
goog.addDependency('../../../eightball/Music.js', ['eightball.Music'], ['eightball.Cookies', 'goog.events.Event', 'goog.events.EventTarget', 'pl.SoundEffect']);
goog.addDependency('../../../eightball/PocketDropEvent.js', ['eightball.PocketDropEvent'], ['goog.events.Event']);
goog.addDependency('../../../eightball/PoolTable.js', ['eightball.PoolTable'], ['box2d.AABB', 'box2d.BodyDef', 'box2d.CircleDef', 'box2d.PolyDef', 'box2d.Vec2', 'box2d.World', 'eightball.CollisionEvent', 'eightball.DroppingBall', 'eightball.PocketDropEvent', 'goog.Timer', 'goog.array', 'goog.color', 'goog.debug.LogManager', 'goog.events', 'goog.events.EventTarget', 'goog.math.Line', 'goog.math.Matrix', 'goog.math.Vec2', 'goog.object', 'goog.style', 'pl.DebugDiv', 'pl.FpsLogger', 'pl.ex']);
goog.addDependency('../../../eightball/SoundEffectManager.js', ['eightball.SoundEffectManager'], ['eightball.Cookies', 'goog.events.Event', 'goog.events.EventTarget', 'pl.SoundEffect']);
goog.addDependency('../../../eightball/Stats.js', ['eightball.Stats'], ['pl.Stats']);
goog.addDependency('../../../eightball/application.js', ['eightball.Application'], ['eightball.Game', 'eightball.Music', 'eightball.PoolTable', 'eightball.SoundEffectManager', 'eightball.Stats', 'goog.array', 'goog.debug.LogManager', 'goog.events', 'goog.events.EventType', 'goog.i18n.NumberFormat', 'goog.string', 'goog.string.format', 'goog.userAgent', 'pl.DebugDiv', 'pl.KeyBinding']);
goog.addDependency('../../../eightball/loader.js', ['eightball.loader'], ['eightball.Application', 'goog.object', 'pl.images']);
goog.addDependency('../../../pl/src/behavior.js', ['pl.Behavior'], ['goog.array', 'goog.asserts', 'pl.Property']);
goog.addDependency('../../../pl/src/box2d/collision/ClipVertex.js', ['box2d.ClipVertex'], ['box2d.ContactID', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/Features.js', ['box2d.Features'], []);
goog.addDependency('../../../pl/src/box2d/collision/b2AABB.js', ['box2d.AABB'], ['box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/b2Bound.js', ['box2d.Bound'], []);
goog.addDependency('../../../pl/src/box2d/collision/b2BoundValues.js', ['box2d.BoundValues'], []);
goog.addDependency('../../../pl/src/box2d/collision/b2BroadPhase.js', ['box2d.BroadPhase'], ['box2d.Bound', 'box2d.BoundValues', 'box2d.PairManager', 'box2d.Proxy', 'box2d.Settings', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/b2BufferedPair.js', ['box2d.BufferedPair'], []);
goog.addDependency('../../../pl/src/box2d/collision/b2Collision.js', ['box2d.Collision'], ['box2d.ClipVertex']);
goog.addDependency('../../../pl/src/box2d/collision/b2ContactID.js', ['box2d.ContactID'], ['box2d.Features']);
goog.addDependency('../../../pl/src/box2d/collision/b2ContactPoint.js', ['box2d.ContactPoint'], ['box2d.ContactID', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/b2Distance.js', ['box2d.Distance'], ['box2d.Math']);
goog.addDependency('../../../pl/src/box2d/collision/b2Manifold.js', ['box2d.Manifold'], ['box2d.ContactPoint', 'box2d.Settings', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/b2OBB.js', ['box2d.OBB'], ['box2d.Mat22', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/b2Pair.js', ['box2d.Pair'], ['box2d.Settings']);
goog.addDependency('../../../pl/src/box2d/collision/b2PairCallback.js', ['box2d.PairCallback'], []);
goog.addDependency('../../../pl/src/box2d/collision/b2PairManager.js', ['box2d.PairManager'], ['box2d.BufferedPair', 'box2d.Pair']);
goog.addDependency('../../../pl/src/box2d/collision/b2Proxy.js', ['box2d.Proxy'], ['box2d.Settings']);
goog.addDependency('../../../pl/src/box2d/collision/shapes/b2BoxDef.js', ['box2d.BoxDef'], ['box2d.Shape', 'box2d.ShapeDef', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/shapes/b2CircleDef.js', ['box2d.CircleDef'], ['box2d.Shape', 'box2d.ShapeDef']);
goog.addDependency('../../../pl/src/box2d/collision/shapes/b2CircleShape.js', ['box2d.CircleShape'], ['box2d.AABB', 'box2d.CircleDef', 'box2d.Mat22', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/shapes/b2MassData.js', ['box2d.MassData'], ['box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/shapes/b2PolyDef.js', ['box2d.PolyDef'], ['box2d.Shape', 'box2d.ShapeDef', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/shapes/b2PolyShape.js', ['box2d.PolyShape'], ['box2d.BoxDef', 'box2d.Mat22', 'box2d.OBB', 'box2d.PolyDef', 'box2d.Settings', 'box2d.Shape', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/shapes/b2Shape.js', ['box2d.Shape'], ['box2d.Mat22', 'box2d.ShapeDef', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/shapes/b2ShapeDef.js', ['box2d.ShapeDef'], ['box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/collision/shapes/b2ShapeFactory.js', ['box2d.ShapeFactory'], ['box2d.BoxDef', 'box2d.CircleDef', 'box2d.CircleShape', 'box2d.PolyDef', 'box2d.PolyShape', 'box2d.ShapeDef']);
goog.addDependency('../../../pl/src/box2d/common/b2Mat22.js', ['box2d.Mat22'], []);
goog.addDependency('../../../pl/src/box2d/common/b2Math.js', ['box2d.Math'], ['box2d.Mat22', 'box2d.Vec2', 'goog.math']);
goog.addDependency('../../../pl/src/box2d/common/b2Settings.js', ['box2d.Settings'], []);
goog.addDependency('../../../pl/src/box2d/common/b2Vec2.js', ['box2d.Vec2'], ['goog.math.Vec2']);
goog.addDependency('../../../pl/src/box2d/dynamics/b2Body.js', ['box2d.Body'], ['box2d.MassData', 'box2d.Mat22', 'box2d.Math', 'box2d.ShapeFactory', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/dynamics/b2BodyDef.js', ['box2d.BodyDef'], ['box2d.Settings', 'box2d.ShapeDef']);
goog.addDependency('../../../pl/src/box2d/dynamics/b2CollisionFilter.js', ['box2d.CollisionFilter'], []);
goog.addDependency('../../../pl/src/box2d/dynamics/b2ContactManager.js', ['box2d.ContactManager'], ['box2d.Contact', 'box2d.ContactFactory', 'box2d.NullContact', 'box2d.PairCallback']);
goog.addDependency('../../../pl/src/box2d/dynamics/b2Island.js', ['box2d.Island'], ['box2d.ContactSolver']);
goog.addDependency('../../../pl/src/box2d/dynamics/b2TimeStep.js', ['box2d.TimeStep'], []);
goog.addDependency('../../../pl/src/box2d/dynamics/b2World.js', ['box2d.World'], ['box2d.Body', 'box2d.BodyDef', 'box2d.BroadPhase', 'box2d.CollisionFilter', 'box2d.ContactManager', 'box2d.Island', 'box2d.JointDef', 'box2d.JointFactory', 'box2d.TimeStep', 'box2d.WorldListener']);
goog.addDependency('../../../pl/src/box2d/dynamics/b2WorldListener.js', ['box2d.WorldListener'], []);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2CircleContact.js', ['box2d.CircleContact'], ['box2d.CircleShape', 'box2d.Collision', 'box2d.Contact', 'box2d.Manifold']);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2Conservative.js', ['box2d.Conservative'], []);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2Contact.js', ['box2d.Contact'], ['box2d.ContactNode', 'box2d.ContactRegister']);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2ContactConstraint.js', ['box2d.ContactConstraint'], ['box2d.ContactConstraintPoint', 'box2d.Settings', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2ContactConstraintPoint.js', ['box2d.ContactConstraintPoint'], ['box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2ContactFactory.js', ['box2d.ContactFactory'], ['box2d.CircleContact', 'box2d.PolyAndCircleContact', 'box2d.PolyContact', 'box2d.Shape']);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2ContactNode.js', ['box2d.ContactNode'], []);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2ContactRegister.js', ['box2d.ContactRegister'], []);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2ContactSolver.js', ['box2d.ContactSolver'], ['box2d.ContactConstraint', 'box2d.Settings']);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2NullContact.js', ['box2d.NullContact'], ['box2d.Contact', 'box2d.ContactNode']);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2PolyAndCircleContact.js', ['box2d.PolyAndCircleContact'], ['box2d.CircleShape', 'box2d.Contact', 'box2d.ContactNode', 'box2d.Manifold', 'box2d.PolyShape']);
goog.addDependency('../../../pl/src/box2d/dynamics/contacts/b2PolyContact.js', ['box2d.PolyContact'], ['box2d.ContactNode', 'box2d.Manifold', 'box2d.Math', 'box2d.PolyShape']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2DistanceJoint.js', ['box2d.DistanceJoint'], ['box2d.DistanceJointDef', 'box2d.Joint']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2DistanceJointDef.js', ['box2d.DistanceJointDef'], ['box2d.JointDef']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2GearJoint.js', ['box2d.GearJoint'], ['box2d.GearJointDef', 'box2d.Joint']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2GearJointDef.js', ['box2d.GearJointDef'], ['box2d.JointDef']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2Jacobian.js', ['box2d.Jacobian'], ['box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2Joint.js', ['box2d.Joint'], ['box2d.JointNode']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2JointDef.js', ['box2d.JointDef'], ['box2d.Joint']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2JointFactory.js', ['box2d.JointFactory'], ['box2d.DistanceJoint', 'box2d.GearJoint', 'box2d.MouseJoint', 'box2d.PrismaticJoint', 'box2d.PulleyJoint', 'box2d.RevoluteJoint']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2JointNode.js', ['box2d.JointNode'], []);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2MouseJoint.js', ['box2d.MouseJoint'], ['box2d.Joint', 'box2d.MouseJointDef']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2MouseJointDef.js', ['box2d.MouseJointDef'], ['box2d.JointDef']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2PrismaticJoint.js', ['box2d.PrismaticJoint'], ['box2d.Jacobian', 'box2d.Joint', 'box2d.PrismaticJointDef', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2PrismaticJointDef.js', ['box2d.PrismaticJointDef'], ['box2d.JointDef', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2PulleyJoint.js', ['box2d.PulleyJoint'], ['box2d.Joint', 'box2d.PulleyJointDef']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2PulleyJointDef.js', ['box2d.PulleyJointDef'], ['box2d.JointDef']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2RevoluteJoint.js', ['box2d.RevoluteJoint'], ['box2d.Joint', 'box2d.RevoluteJointDef']);
goog.addDependency('../../../pl/src/box2d/dynamics/joints/b2RevoluteJointDef.js', ['box2d.RevoluteJointDef'], ['box2d.Joint', 'box2d.JointDef', 'box2d.Vec2']);
goog.addDependency('../../../pl/src/debugDiv.js', ['pl.DebugDiv'], ['goog.asserts', 'goog.debug.LogManager', 'goog.dom', 'goog.style']);
goog.addDependency('../../../pl/src/ex.js', ['pl.ex'], ['goog.array', 'goog.asserts', 'goog.math.Size', 'goog.string', 'goog.style']);
goog.addDependency('../../../pl/src/fpsLogger.js', ['pl.FpsLogger'], []);
goog.addDependency('../../../pl/src/gfx.js', ['pl.gfx'], ['goog.asserts', 'goog.graphics.AffineTransform', 'goog.math.Size']);
goog.addDependency('../../../pl/src/images.js', ['pl.images'], ['goog.asserts', 'goog.net.EventType', 'goog.net.ImageLoader', 'goog.object']);
goog.addDependency('../../../pl/src/keyBinding.js', ['pl.KeyBinding', 'pl.KeyBindingEvent'], ['goog.events.Event', 'goog.events.EventTarget', 'goog.ui.KeyboardShortcutHandler', 'goog.ui.KeyboardShortcutHandler.EventType']);
goog.addDependency('../../../pl/src/property.js', ['pl.Property'], ['goog.array', 'goog.math.Coordinate', 'goog.math.Size']);
goog.addDependency('../../../pl/src/qr/qr8BitByte.js', ['qr.EightBitByte'], []);
goog.addDependency('../../../pl/src/qr/qrBitBuffer.js', ['qr.BitBuffer'], []);
goog.addDependency('../../../pl/src/qr/qrCode.js', ['qr.Code'], ['qr.BitBuffer', 'qr.EightBitByte', 'qr.Mode', 'qr.RSBlock', 'qr.Util']);
goog.addDependency('../../../pl/src/qr/qrEnums.js', ['qr.ErrorCorrectLevel', 'qr.MaskPattern', 'qr.Mode'], []);
goog.addDependency('../../../pl/src/qr/qrMath.js', ['qr.Math'], []);
goog.addDependency('../../../pl/src/qr/qrPolynomial.js', ['qr.Polynomial'], []);
goog.addDependency('../../../pl/src/qr/qrRSBlock.js', ['qr.RSBlock'], []);
goog.addDependency('../../../pl/src/qr/qrUtil.js', ['qr.Util'], ['qr.Math', 'qr.Polynomial']);
goog.addDependency('../../../pl/src/retained/_navLayerTxPanel.js', ['pl.retained._NavLayerTxPanel'], ['goog.asserts']);
goog.addDependency('../../../pl/src/retained/animation.js', ['pl.retained.Animation'], ['goog.asserts', 'pl.Behavior', 'pl.retained.EventType']);
goog.addDependency('../../../pl/src/retained/canvas.js', ['pl.retained.Canvas'], ['goog.graphics.AffineTransform', 'goog.math.Coordinate', 'pl.retained.Element', 'pl.retained.Panel']);
goog.addDependency('../../../pl/src/retained/carouselContainer.js', ['pl.retained.CarouselContainer'], ['goog.array', 'goog.graphics.AffineTransform', 'goog.math.Coordinate', 'goog.math.Size', 'pl.retained.Element', 'pl.retained.Panel']);
goog.addDependency('../../../pl/src/retained/element.js', ['pl.retained.Element'], ['goog.array', 'goog.asserts', 'goog.color.alpha', 'goog.events.EventTarget', 'goog.graphics.AffineTransform', 'goog.math.Coordinate', 'goog.math.Rect', 'goog.math.Size', 'pl.gfx', 'pl.retained.ElementParent', 'pl.retained.EventType']);
goog.addDependency('../../../pl/src/retained/elementParent.js', ['pl.retained.ElementParent'], ['goog.array', 'goog.asserts']);
goog.addDependency('../../../pl/src/retained/eventType.js', ['pl.retained.EventType'], []);
goog.addDependency('../../../pl/src/retained/helper.js', ['pl.retained.helper'], ['goog.array', 'goog.math.Coordinate', 'goog.math.Size', 'pl.ex', 'pl.gfx', 'pl.retained.Element', 'pl.retained.mouse']);
goog.addDependency('../../../pl/src/retained/image.js', ['pl.retained.Image'], ['pl.gfx', 'pl.retained.Element']);
goog.addDependency('../../../pl/src/retained/mouse.js', ['pl.retained.mouse'], ['goog.array', 'goog.math.Coordinate', 'pl.Property', 'pl.retained.Stage']);
goog.addDependency('../../../pl/src/retained/navLayer.js', ['pl.retained.NavLayer'], ['goog.array', 'goog.asserts', 'goog.graphics.AffineTransform', 'goog.math.Vec2', 'pl.Property', 'pl.retained.Element', 'pl.retained.ElementParent', 'pl.retained.Image', 'pl.retained.Panel', 'pl.retained._NavLayerTxPanel']);
goog.addDependency('../../../pl/src/retained/panel.js', ['pl.retained.Panel'], ['goog.array', 'goog.asserts', 'pl.Property', 'pl.retained.Element', 'pl.retained.ElementParent', 'pl.retained.helper']);
goog.addDependency('../../../pl/src/retained/shape.js', ['pl.retained.Shape'], ['pl.gfx', 'pl.retained.Element']);
goog.addDependency('../../../pl/src/retained/stage.js', ['pl.retained.Stage'], ['goog.events.EventTarget', 'goog.math.Coordinate', 'goog.math.Size', 'pl.ex', 'pl.retained.Element', 'pl.retained.ElementParent', 'pl.retained.EventType']);
goog.addDependency('../../../pl/src/retained/text.js', ['pl.retained.Text'], ['pl.gfx', 'pl.retained.Element']);
goog.addDependency('../../../pl/src/retained/tileLayer.js', ['pl.retained.TileLayer'], ['goog.math.Vec2', 'pl.ex', 'pl.gfx']);
goog.addDependency('../../../pl/src/soundEffect.js', ['pl.SoundEffect'], []);
goog.addDependency('../../../pl/src/stats.js', ['pl.Stats'], ['goog.dom']);

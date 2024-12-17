const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.EightDir,
		C3.Behaviors.Pathfinding,
		C3.Behaviors.MoveTo,
		C3.Plugins.Audio,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Sprite.Acts.RotateTowardAngle,
		C3.Plugins.Sprite.Exps.Angle
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Solid: 0},
	{trail: 0},
	{cookie: 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{"8Direction": 0},
	{mouse: 0},
	{Pathfinding: 0},
	{MoveTo: 0},
	{fox: 0},
	{Audio: 0},
	{Sprite: 0},
	{scoreDisplay: 0},
	{score: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	trail: class extends self.ISpriteInstance {},
	cookie: class extends self.ISpriteInstance {},
	mouse: class extends self.ISpriteInstance {},
	fox: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	scoreDisplay: class extends self.ITextInstance {}
}
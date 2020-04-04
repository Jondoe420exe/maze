namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 c c c 1 . . . . . . 
. . . . . . 1 c 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . 1 1 1 c 1 1 1 . . . . . 
. . . 1 . . 1 c 1 . . 1 . . . . 
. . . 1 . . 1 c 1 . . 1 . . . . 
. . . 1 . . 1 c 1 . . 1 . . . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 1 . 1 1 . . . . . . 
. . . . 1 1 . . . 1 1 . . . . . 
. . . . 1 . . . . . 1 . . . . . 
. . . . 1 . . . . . 1 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000502020205050505050505050505050505020502020202020202020202020f0505070505050505050505050505050505050606060606060606060606060606050506050505050505050505050505060505060606060a020202020202020506050505050505050705020505050205060505020202020506050202020502050605050205020205060502020205050506050502050505050805050505050205060505020106060a020502020202020506050502050505050505020505050205080505020202020202020205070502050205050705050505050507050605020505050506060606060a05060606050202020505050505050505050505050505050e05`,
            img`
2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 2 2 2 2 2 . 2 . 2 2 2 . 2 . 2 
2 . . . . 2 . 2 . . . 2 . 2 . 2 
2 . 2 . . 2 . 2 . . . 2 2 2 . 2 
2 . 2 2 2 2 . 2 2 2 2 2 . 2 . 2 
2 . . . . . . 2 . . . . . 2 . 2 
2 . 2 2 2 2 2 2 . 2 2 2 . 2 . 2 
2 . . . . . . . . 2 . 2 . 2 . 2 
2 . 2 2 2 2 2 2 . 2 . 2 . 2 2 2 
2 . . . . . . 2 . . . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`,
            [myTiles.tile0,sprites.castle.tilePath4,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.builtin.brick,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.builtin.forestTiles0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
info.startCountdown(60)

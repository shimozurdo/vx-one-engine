function wallslide(ent, map, x = 0, y = 0) {
  let tiles
  let tileEdge

  const { body, pos,  } = ent
  const hit = body

  const bounds = {
    x: hit.x + pos.x,
    y: hit.y + pos.y,
    w: hit.w - 1,
    h: hit.h - 1
  }

  // Final amounts of movement to allow
  let xo = x
  let yo = y

  // Check vertical movement
  if (y !== 0) {
    tiles = map.tilesAtCorners(bounds, 0, yo)
    const [tl, tr, bl, br] = tiles.map(t => t && t.frame.walkable)

    // Hit your head
    if (y < 0 && !(tl && tr)) {
      tileEdge = tiles[0].pos.y + tiles[0].frame.h
      yo = tileEdge - bounds.y
    }
    // Hit your feet
    if (y > 0 && !(bl && br)) {
      tileEdge = tiles[2].pos.y - 1
      yo = tileEdge - (bounds.y + bounds.h)
    }
  }

  // Check horizontal movement
  if (x !== 0) {
    tiles = map.tilesAtCorners(bounds, xo, yo)
    const [tl, tr, bl, br] = tiles.map(t => t && t.frame.walkable)

    // Hit left edge
    if (x < 0 && !(tl && bl)) {
      tileEdge = tiles[0].pos.x + tiles[0].frame.w
      xo = tileEdge - bounds.x
    }
    // Hit right edge
    if (x > 0 && !(tr && br)) {
      tileEdge = tiles[1].pos.x - 1
      xo = tileEdge - (bounds.x + bounds.w)
    }
  }
  // xo & yo contain the amount we're allowed to move by.
  return { x: xo, y: yo }
}

export default wallslide

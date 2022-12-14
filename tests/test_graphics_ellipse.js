var g = Graphics.createArrayBuffer(16,16,8);

g.dump = _=>{
  var s = "";
  var b = new Uint8Array(g.buffer);
  var n = 0;
  for (var y=0;y<g.getHeight();y++) {
    s+="\n";
    for (var x=0;x<g.getWidth();x++) 
      s+=b[n++]?"#":".";
  }
  return s;
}

g.print = _=>{
  print("`"+g.dump()+"`");
}

g.clear();
g.drawEllipse(0,0,14,14);
if (g.dump()!=`
.....#####......
...##.....##....
..#.........#...
.#...........#..
.#...........#..
#.............#.
#.............#.
#.............#.
#.............#.
#.............#.
.#...........#..
.#...........#..
..#.........#...
...##.....##....
.....#####......
................`) throw "drawEllipse circle";

g.clear();
g.fillEllipse(0,0,14,14);
if (g.dump()!=`
....#######.....
..###########...
.#############..
.#############..
###############.
###############.
###############.
###############.
###############.
###############.
###############.
.#############..
.#############..
..###########...
....#######.....
................`) throw "fillEllipse circle";

g.clear();
g.drawEllipse(0,0,6,14);
if (g.dump()!=`
..###...........
..#.#...........
.#...#..........
.#...#..........
#.....#.........
#.....#.........
#.....#.........
#.....#.........
#.....#.........
#.....#.........
#.....#.........
.#...#..........
.#...#..........
..#.#...........
..###...........
................`) throw "drawEllipse ellipse";


g.clear();
g.fillEllipse(0,0,6,14);
if (g.dump()!=`
..###...........
.#####..........
.#####..........
#######.........
#######.........
#######.........
#######.........
#######.........
#######.........
#######.........
#######.........
#######.........
.#####..........
.#####..........
..###...........
................`) throw "fillEllipse ellipse";


g.setRotation(1);

g.clear(); 
g.drawEllipse(0,0,6,14);
if (g.dump()!=`
.....#######....
...##.......##..
..#...........#.
.#.............#
..#...........#.
...##.......##..
.....#######....
................
................
................
................
................
................
................
................
................`) throw "drawEllipse ellipse rotated";


g.clear();
g.fillEllipse(0,0,6,14);
if (g.dump()!=`
....#########...
..#############.
.###############
.###############
.###############
..#############.
....#########...
................
................
................
................
................
................
................
................
................`) throw "fillEllipse ellipse rotated";

g.setRotation(0);

g.clear(); 
g.drawEllipse(2,2,2,2);
if (g.dump()!=`
................
................
..#.............
................
................
................
................
................
................
................
................
................
................
................
................
................`) throw "Small drawEllipse 1";

g.clear(); 
g.drawEllipse(1,1,2,2);
if (g.dump()!=`
................
.#..............
................
................
................
................
................
................
................
................
................
................
................
................
................
................`) throw "Small drawEllipse 2";

g.clear(); 
g.drawEllipse(0,0,2,2);
if (g.dump()!=`
.#..............
#.#.............
.#..............
................
................
................
................
................
................
................
................
................
................
................
................
................`) throw "Small drawEllipse 3";

g.clear(); 
g.fillEllipse(0,0,2,2);
if (g.dump()!=`
###.............
###.............
###.............
................
................
................
................
................
................
................
................
................
................
................
................
................`) throw "Small fillEllipse";


//g.print();
result=1;

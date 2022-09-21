const Util = {
  dir(vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  },

  dist(pos1, pos2) {
      // pos1 = (x,y)
      // pos2 = (x,y)

      let x1 = pos1[0];
      let x2 = pos2[0];
      let y1 = pos1[1];
      let y2 = pos2[1];

    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
  },

  norm(vec) {
    return Util.dist([0, 0], vec);
  },


  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },


};
  
  module.exports = Util;
  
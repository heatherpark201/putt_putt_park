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

  // vCollision(obj1, obj2) {
  //   return [(obj2.pos[0] - obj1.pos[0]),(obj2.pos[1] - obj1.pos[1])];
  // },

  // vCollisionNorm(obj) {
    // const dist = Util.dist(obj1, obj2);

  //   return [vCollision.pos[0]/dist, vCollison.pos[1]/ dist];
  // },

  // vRelativeVelocity(obj1_vel, obj2_vel) {
  //   return [(obj1_vel[0] - obj2_vel[0]), (obj1_vel[1]- obj2_vel[1])];
  // },

  // speed(relVelocity, collisionNorm) {
  //   const relVelocity = Util.vRelativeVelocity(obj1_vel, obj2_vel);

  //   return relVelocity[0] * collisionNorm[0] + relVelocity[1] * collisionNorm[1];
  // }

  // inherits(ChildClass, BaseClass) {
  //   ChildClass.prototype = Object.create(BaseClass.prototype);
  //   ChildClass.prototype.constructor = ChildClass;
  // },

};
  
  module.exports = Util;
  
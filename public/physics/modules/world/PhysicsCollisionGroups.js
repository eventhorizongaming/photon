/**
 * This class provides a simple interface for creating physics collision groups and masks.
 * 
 * Groups are created automatically whenever you attempt to get them or mask with them.
 * 
 * @example
 * const groups = new PhysicsCollisionGroups();
 * const shape = new P2.Circle({ radius: 1 });
 * 
 * shape.collisionGroup = groups.get("terrain");
 * shape.collisionMask = groups.mask(["players", "enemies"]);
 */
class PhysicsCollisionGroups {
  groups = [];

  /**
   * Get the collision group for a given group ID
   * @param {*} groupId 
   * @returns A collision group
   */
  get(groupId) {
    let groupIndex = this.groups.indexOf(groupId);

    if (groupIndex === -1) {
      groupIndex = this.groups.length;
      this.groups.push(groupId);
    }

    return 2n ** BigInt(groupIndex);
  }

  /**
   * Generates a collision group mask for a given set of group IDs
   * @param {Array} groupIds 
   * @returns 
   */
  mask(groupIds) {
    return groupIds
      .map(e => this.get(e))
      .reduce((a, b) => a | b);
  }
}

export { PhysicsCollisionGroups };

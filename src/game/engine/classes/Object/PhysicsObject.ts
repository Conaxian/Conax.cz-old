import VisibleObject from "./VisibleObject";

export default class PhysicsObject extends VisibleObject {
  collides(objects: PhysicsObject | PhysicsObject[]) {
    if (Array.isArray(objects)) {
      let collides = false;
      for (const object of objects) {
        collides = this.collides(object);
        if (collides) return true;
      }
      return false;
    }

    const collides =
      this.leftX < objects.rightX &&
      this.rightX > objects.leftX &&
      this.topY < objects.bottomY &&
      this.bottomY > objects.topY;

    return collides;
  }
}

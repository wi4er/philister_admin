
export class GroupTreeNode {

  constructor(
    public id: number,
    public name: string,
    public children?: GroupTreeNode[],
  ) {
  }

}

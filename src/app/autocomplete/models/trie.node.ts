export class TrieNode {
  public data: string = '';
  public wordEnd = false;
  public children: {
    [key: string]: TrieNode;
  } = {};
  constructor(data: string) {
    this.data = data;
  }
}

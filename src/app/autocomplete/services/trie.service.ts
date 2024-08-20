import { Injectable } from '@angular/core';
import { TrieNode } from '../models/trie.node';

@Injectable({
  providedIn: 'root',
})
export class TrieService {
  private SUGGEST_COUNT = 10;

  public root = new TrieNode('');

  constructor() {
    this.init();
  }

  public insert(word: string): void {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!node.children[char]) {
        node.children[char] = new TrieNode(char);
      }
      node = node.children[char];
    }
    node.wordEnd = true;
  }

  public delete(word: string, query: string): string[] {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      node = node.children[char];
    }
    node.wordEnd = false;

    return this.getSuggestion(query);
  }

  public getSuggestion(word: string): string[] {
    let node = this.root;
    let prefix = '';

    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      prefix += char;

      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }

    return this.bfs(node, prefix.slice(0, -1));
  }

  private bfs(trieNode: TrieNode, searchPrefix: string): string[] {
    const suggesitions: string[] = [];
    const SUGGEST_COUNT = this.SUGGEST_COUNT;

    function helper(node: TrieNode, prefix: string) {
      if (suggesitions.length === SUGGEST_COUNT) {
        return;
      }

      prefix = `${prefix}${node.data}`;
      if (node.wordEnd) {
        suggesitions.push(prefix);
      }

      const childTrie = Object.values(node.children);
      if (childTrie.length) {
        childTrie.forEach((n) => {
          helper(n, prefix);
        });
      }
    }

    helper(trieNode, searchPrefix);
    return suggesitions;
  }

  private init(): void {
    const stringsArray = [
      'apple',
      'ant',
      'arrow',
      'anchor',
      'angle',
      'banana',
      'boat',
      'butterfly',
      'bridge',
      'breeze',
      'cat',
      'car',
      'cloud',
      'crown',
      'cliff',
      'dog',
      'duck',
      'diamond',
      'dragon',
      'dawn',
      'elephant',
      'eagle',
      'echo',
      'engine',
      'ember',
      'fox',
      'forest',
      'feather',
      'flame',
      'frost',
      'grape',
      'garden',
      'ghost',
      'globe',
      'glimmer',
      'house',
      'hat',
      'honey',
      'horizon',
      'harbor',
      'ice',
      'island',
      'igloo',
      'iron',
      'insect',
      'jacket',
      'jungle',
      'jewel',
      'jelly',
      'jumper',
      'kite',
      'kangaroo',
      'key',
      'king',
      'knight',
      'lion',
      'lamp',
      'leaf',
      'lake',
      'light',
      'moon',
      'mountain',
      'mango',
      'mist',
      'mirror',
      'nest',
      'night',
      'needle',
      'net',
      'noble',
      'orange',
      'owl',
      'ocean',
      'orbit',
      'oak',
      'peach',
      'planet',
      'pencil',
      'pirate',
      'petal',
      'queen',
      'quilt',
      'quest',
      'quiver',
      'quote',
      'rose',
      'river',
      'rain',
      'ribbon',
      'rock',
      'sun',
      'star',
      'sand',
      'shadow',
      'stone',
      'tree',
      'tiger',
      'tower',
      'tulip',
      'trail',
      'umbrella',
      'unicorn',
      'uniform',
      'update',
      'union',
      'violet',
      'vase',
      'valley',
      'village',
      'voyage',
      'whale',
      'wind',
      'wave',
      'whisper',
      'wonder',
      'xylophone',
      'x-ray',
      'xenon',
      'xylem',
      'xerox',
      'yarn',
      'yellow',
      'yacht',
      'yard',
      'yawn',
      'zebra',
      'zoo',
      'zone',
      'zipper',
      'zephyr',
    ];

    stringsArray.forEach((word) => {
      this.insert(word);
    });
  }
}

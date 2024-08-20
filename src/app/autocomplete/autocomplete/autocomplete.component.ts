import { Component } from '@angular/core';
import { TrieService } from '../services/trie.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent {
  public query: string = '';
  public suggestions: string[] = [];
  public searchResult: string | null = null;

  constructor(private trieService: TrieService) {}

  public getSuggestion(): void {
    if (this.query !== '') {
      this.suggestions = this.trieService.getSuggestion(this.query);
    } else {
      this.suggestions = [];
    }
  }

  public search(): void {
    if (this.query !== '') {
      this.trieService.insert(this.query);
      this.searchResult = this.query;
      this.query = '';
      this.suggestions = [];
    }
  }

  public select(selection: string): void {
    this.searchResult = selection;
    this.query = '';
    this.suggestions = [];
  }

  public deleteSuggestion(word: string): void {
    this.suggestions = this.trieService.delete(word, this.query);
  }
}

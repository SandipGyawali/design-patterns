// The Memento Pattern is about saving and restoring an object’s state
// without exposing its internal details.

class EditorMemento {
  private content: string;
  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

class TextEditor {
  private content: string = "";

  type(words: string): void {
    this.content += words;
  }

  getContent(): string {
    return this.content;
  }

  save(): EditorMemento {
    return new EditorMemento(this.content);
  }

  restore(memento: EditorMemento): void {
    this.content = memento.getContent();
  }
}

class _History {
  private mementos: EditorMemento[] = [];

  push(memento: EditorMemento): void {
    this.mementos.push(memento);
  }

  pop(): EditorMemento | undefined {
    return this.mementos.pop();
  }
}

const editor = new TextEditor();
const _history = new _History();

editor.type("Hello, ");
editor.type("World!");

_history.push(editor.save());
editor.type(" More text...");

console.log("Current: ", editor.getContent());

// undo last saved state
const lastState = _history.pop();

if (lastState) {
  editor.restore(lastState);
}

console.log("After undo: ", editor.getContent());

// Component interface
interface FileSystemComponent {
  show(indentation?: string): void;
}

// Leaf: File
class _File implements FileSystemComponent {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  show(indentation: string = ""): void {
    console.log(`${indentation}- File: ${this.name}`);
  }
}

// Composite: Folder
class Folder implements FileSystemComponent {
  private children: FileSystemComponent[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  add(component: FileSystemComponent): void {
    this.children.push(component);
  }

  remove(component: FileSystemComponent): void {
    this.children = this.children.filter((c) => c !== component);
  }

  show(indentation: string = ""): void {
    console.log(`${indentation}+ Folder: ${this.name}`);
    for (const child of this.children) {
      child.show(indentation + "  ");
    }
  }
}

const root = new Folder("root");
const src = new Folder("src");
const dist = new Folder("dist");

const file1 = new _File("index.ts");
const file2 = new _File("app.ts");
const file3 = new _File("bundle.js");

src.add(file1);
src.add(file2);
dist.add(file3);

root.add(src);
root.add(dist);
root.show();

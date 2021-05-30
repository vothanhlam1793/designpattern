class FileComponent {
    showProperty(){

    }
    totalSize(){

    }
}

class FileLeaf extends FileComponent {
    constructor(name, size){
        super();
        this.name = name;
        this.size = parseInt(size);
    }
    showProperty(){
        console.log("FileLeaf [name=" + this.name + ", size=" + this.size + "]");
    }
    totalSize(){
        return this.size;
    }
}

class FolderComposite extends FileComponent {
    constructor(files){
        super();
        this.files = files;
    }
    showProperty(){
        this.files.forEach(function(f){
            f.showProperty();
        })
    }
    totalSize(){
        var total = 0;
        this.files.forEach(function(f){
            total += f.totalSize();
        })
        return total;
    }
}

f1 = new FileLeaf("black", 123);
f2 = new FileLeaf("vtl", 54);
f3 = new FileLeaf("tal", 90);
a = []
a.push(f1);
a.push(f2);
a.push(f3);
d = new FolderComposite(a);
d.showProperty();
console.log("TOTAL-SIZE:", d.totalSize());
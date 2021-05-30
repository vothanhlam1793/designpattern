class JapaneseAdaptee {
    recieve(words){
        console.log("JAPAN:", words);
    }
}

class FrenchAdaptee {
    recieve(words){
        console.log("FRENCH:", words);
    }
}
class GermanyAdaptee {
    recieve(words){
        console.log("GERMANY:", words);
    }
}

TRANSLATOR = {
    FRENCH: 0,
    JAPAN: 1,
    GERMANY: 2
}
class FactoryAdaptee {
    getAdaptee(type){
        switch(type){
            case TRANSLATOR.FRENCH:{
                return new FrenchAdaptee();
            }
            case TRANSLATOR.GERMANY: {
                return new GermanyAdaptee();
            }
            case TRANSLATOR.JAPAN: {
                return new JapaneseAdaptee();
            }
        }
    }
}
class TranslatorAdapter {
    constructor(adaptee){
        this.adaptee = adaptee;
    }
    send(words){
        this.adaptee.recieve(words);
    }
}
f = new FactoryAdaptee();
a = new TranslatorAdapter(f.getAdaptee(TRANSLATOR.FRENCH));
a.send("Viet gi do");
a = new TranslatorAdapter(f.getAdaptee(TRANSLATOR.GERMANY));
a.send("Viet gi do");

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d"),
    new Soru("5-JavaScript nedir?", { a: "Bir programlama dili", b: "Bir veritabanı sistemi", c: "Bir işletim sistemi" , d: "Bir tarayıcı" }, "a"),
    new Soru("6-Değişken tanımlarken kullanılan anahtar kelime nedir?", { a: "let", b: "var", c: "v", d: "veriable" }, "b"),
    new Soru("7-Bir dizi içindeki elemanlara ulaşmak için hangi sembolü kullanırsınız?", { a: "{}", b: "<>", c: "[]", d: "()" }, "a"),
    new Soru("8-Dom terimi neyi ifade eder?", { a: "Data Object Model", b: "Document Object Model", c: "Dynamic Operation Mechanism", d: "Database Object Manager" }, "b"),
    new Soru("9-Bir HTML belgesinde, JavaScript kodunu hangi etiketler arasına yerleştirirsiniz?", { a: "script", b: "javascript", c: "js", d: "code" }, "a"),
    new Soru("10-JavaScript'te koşul ifadeleri oluşturmak için hangi anahtar kelime kullanılır?", { a: "do", b: "if", c: "then", d: "check" }, "b")
];
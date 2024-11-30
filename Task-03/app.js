let a = 5;

let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
console.log(exp1);

let exp2 = (false && 3) || (true + 2) * "test" + a-- || 5 * "end";
console.log(exp2);

let exp3 = 2 + "abc" && (a-- || "test") * 5 || (false + true) * "result";
console.log(exp3);

let exp4 = (3 + "test") * (false || a--) && 5 + "end" || 2;
console.log(exp4);

let exp5 = (false && "test") || (a-- + 2) * "result" && 4 + "end";
console.log(exp5);

let exp6 = "hello" * (3 + 2) && (a-- || false) * "world" || "test";
console.log(exp6);

let exp7 = 3 * (false + "test") || (a-- && 4) * "result" + "end";
console.log(exp7);

let exp8 = (false || 5) * "test" && (a-- + 3) + "result" || "hello";
console.log(exp8);

let exp9 = (3 + 2) * "test" && (false || a--) * "result" + "world";
console.log(exp9);

let exp10 = "hello" + (false || a--) * 4 || 2 + "result" && 5;
console.log(exp10);

let exp11 = (true + 3) * "test" || 5 * (a-- + "result") && "end";
console.log(exp11);

let exp12 = 3 + "hello" && (false || a--) * "test" + 5 || "world";
console.log(exp12);

let exp13 = (false && "test") || (a-- + 3) * "result" && 2 + "start";
console.log(exp13);

let exp14 = 3 * (a-- + "test") || (false || 5) * "hello" + "world";
console.log(exp14);

let exp15 = (a-- + "test") * 4 || (false && 5) + "result";
console.log(exp15);

let exp16 = "hello" * (false || a--) + 4 && 3 + "result" || "test";
console.log(exp16);

let exp17 = (a-- + 2) * "test" || "result" + (false && 5);
console.log(exp17);

let exp18 = (false || 1) * "test" && 4 + "result" || (a-- + 3) + "end";
console.log(exp18);

let exp19 = "start" + 2 * (false || a--) && "result" + 5 || "test";
console.log(exp19);

let exp20 = 3 * "test" + (false || a--) * "result" && "end" + 2;
console.log(exp20);

let exp21 = (false && a--) || 4 * (3 + 2) && "start" + 5;
console.log(exp21);

let exp22 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
console.log(exp22);

let exp23 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
console.log(exp23);

let exp24 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
console.log(exp24);

let exp25 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
console.log(exp25);

let exp26 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
console.log(exp26);

let exp27 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
console.log(exp27);

let exp28 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
console.log(exp28);

let exp29 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
console.log(exp29);

let exp30 = 32 && true - ++a && " " || "true";
console.log(exp30);

let exp31 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
console.log(exp31);

let exp32 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
console.log(exp32);

let exp33 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
console.log(exp33);

let exp34 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
console.log(exp34);

let exp35 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
console.log(exp35);

let exp36 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
console.log(exp36);

let exp37 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
console.log(exp37);

let exp38 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
console.log(exp38);

let exp39 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
console.log(exp39);

let exp40 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
console.log(exp40);

let exp41 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
console.log(exp41);

let exp42 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
console.log(exp42);

let exp43 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
console.log(exp43);

let exp44 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
console.log(exp44);

let exp45 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
console.log(exp45);

let exp46 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
console.log(exp46);

let exp47 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
console.log(exp47);

let exp48 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
console.log(exp48);

let exp49 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
console.log(exp49);

let exp50 = (a-- + 2) * "result" || (false && "end") + 3;
console.log(exp50);

let exp51 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
console.log(exp51);

let exp52 = 3 * (a-- + "value") || (false + 2) * "test";
console.log(exp52);

let exp53 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
console.log(exp53);

let exp54 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
console.log(exp54);

let exp55 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
console.log(exp55);

let exp56 = 2 * (a-- + 1) + "result" || (false && "test") + 4;
console.log(exp56);

let exp57 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
console.log(exp57);

let exp58 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
console.log(exp58);

let exp59 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
console.log(exp59);

let exp60 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
console.log(exp60);

let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
console.log(exp61);

let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
console.log(exp62);

let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
console.log(exp63);

let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
console.log(exp64);

let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
console.log(exp65);

let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
console.log(exp66);

let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
console.log(exp67);

let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
console.log(exp68);

let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
console.log(exp69);

let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
console.log(exp70);

let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
console.log(exp71);

let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
console.log(exp72);

let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
console.log(exp73);

let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
console.log(exp74);

let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
console.log(exp75);

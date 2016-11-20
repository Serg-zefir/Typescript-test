var Gretting: (name?: string) => void;
Gretting = (name?: string) => {
    console.log("Hello "+(name || "anonim person"));
};
Gretting();
Gretting('Serg');
var compressedFiles = ["dictionary-blacklist1c8-compressed.txt",
		       "dictionary-names-compressed.txt",
		       "dictionary-phrases-compressed.txt",
		       "dictionary-englishwords-compressed.txt",
		       "dictionary-passwords-compressed.txt",
		       "dictionary-wikipedia-compressed.txt"];
var uncompressedFiles = ["dictionary-blacklist1c8.txt",
		       "dictionary-names.txt",
		       "dictionary-phrases.txt",
		       "dictionary-englishwords.txt",
		       "dictionary-passwords.txt",
		       "dictionary-wikipedia.txt"];



const LZString = require("lz-string");
const fs = require("fs");

for (var i = 0; i < compressedFiles.length; i++) {
    var compressedFile = compressedFiles[i];
    var uncompressedFile = uncompressedFiles[i];
    var compressedText = fs.readFileSync(compressedFile, "utf8");
    var uncompressedText = LZString.decompressFromEncodedURIComponent(compressedText);    
    
    uncompressedText = uncompressedText.split(",").join("\n")
    fs.writeFileSync(uncompressedFile, uncompressedText);
    console.log("Decompressed " + compressedFile + " to " + uncompressedFile);
}

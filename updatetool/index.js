const fs = require("fs");

var verInfo = {
    versions: []
};

var pkgname = process.argv[2].toLowerCase();
var pkgver = process.argv[3].toLowerCase();

var basepath = "../flatcontainer/" + pkgname;
var indexFile = basepath + "/index.json";
if (fs.existsSync(indexFile)) {
    verInfo = JSON.parse(fs.readFileSync(indexFile));
}

console.log("pkgname: " + pkgname);
console.log("pkgver: " + pkgver);

verInfo.versions.push(pkgver);
if (!fs.existsSync(basepath)) {
    fs.mkdirSync(basepath);
}

fs.writeFileSync(indexFile, JSON.stringify(verInfo));

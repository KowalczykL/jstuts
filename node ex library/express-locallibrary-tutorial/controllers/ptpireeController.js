var Ptpiree = require('../models/ptpireeModel');
var fs = require("fs");
var testFile = './input_examples/testcsvtoptpiree.csv';
let ptpireeArray = [];




exports.csv_to_conslog = function (req, res) {






let csvArray2 = new csvToArray(testFile);

csvArray2.forEach(element => {
    console.log('foreachelement ------'+element+'\n');
});

ptpireeObj = new Ptpiree;

for ( i = 0; i < csvArray2.length-1; i++ )
ptpiree = new csvLineToPtpiree(csvArray2[i]);
console.log('csv_to_conslog - one ptpiree from loop - 1355' + i + ptpiree);
ptpireeArray.push(ptpiree);
{

    console.log('csv_to_conslog - all ptpiree array - 1404' + ptpireeArray);


}

    res.send('ptpiree content');
}
    


    let csvToArray = function (inputCsv) {

        var csvArray = fs.readFileSync(inputCsv).toString().split('\n');
        console.log('\n'+'2222  --  csvArray - 1323'+csvArray+'\n' );
        return csvArray;
        



        // fs.readFile(inputCsv, function (err, data) {
        //     if (err) {
        //         return console.error(err);
        //     }
        //     console.log(data.toString());
        //     var splittedArray = data.toString().split('\n');
        //     console.log('splitted1->'+splittedArray[1]);
        //     return splittedArray;
        // });
    }




csvLineToPtpiree = function (inputLine) {
    let splited = inputLine.split(';');

    let newPtpiree = new Ptpiree;
   
    newPtpiree.line1 = splited[0];
    console.log('newPtpiree.line1'+newPtpiree.line1);
    newPtpiree.line2 = splited[1];

    newPtpiree.line3 = splited[2];
    newPtpiree.line4 = splited[3];
    newPtpiree.date = splited[4];
    newPtpiree.nr_of_hrs = splited[5];
    newPtpiree.values = '';  //push pop anything


    return newPtpiree;

}
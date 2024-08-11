const csv2json = (str, delimiter = ',') => {
    const titles = str.slice(0, str.indexOf('\n')).split(delimiter);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    return rows.map(row => {
      const values = row.split(delimiter);
      return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
  };

var csvData = null;
var csvArray = null;

async function generateName() {
    if (csvData == null)
        await fetchCSV();

    var race = document.querySelector('input[name="race"]:checked').value;
    var bodyType = document.querySelector('input[name="bodyType"]:checked').value;

    var raceCandidates = csvArray.filter((item) => item.RaceID == race);
    var actualCandidates = raceCandidates.filter((item => item.Sex == bodyType))


    console.log(actualCandidates);

    var candidate = actualCandidates[Math.floor(Math.random()*actualCandidates.length)]
    

    console.log(candidate);
    document.getElementById("nameGenerated").innerText = "Your generated name is: " + candidate.Name;

}


async function fetchCSV() {
    csvData = await fetch('./csvData/nameGen.csv');
    console.log(csvData.toString())
    text = await csvData.text();
    console.log(text)
    csvArray = csv2json(text, ",");
}

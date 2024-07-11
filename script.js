function bmifun(){
    let weg = document.getElementById("weight").value;
    let heig = document.getElementById("height").value;
     
    heig = heig * 0.0254;
    // heig = Math.sqrt(heig);
    let bmi = weg / (heig * heig);
    document.getElementById('BMIvalue').value = bmi;

}
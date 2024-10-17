document.getElementById('btn').addEventListener('click', function(event) {
    event.preventDefault(); 


    let height = parseFloat(document.getElementById('height').value) / 100; 
    let weight = parseFloat(document.getElementById('weight').value);

    
    if (isNaN(height) || isNaN(weight)) {
        document.getElementById('results').textContent = "Please enter valid numbers.";
        return;
    }

 
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); 
    
    let category = '';
    if (bmi < 18.6) {
        category = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        category = 'Normal';
    } else if (bmi > 24.9) {
        category = 'Overweight';
    }
    document.getElementById('results').textContent = `Your BMI is: ${bmi} (${category})`;
});

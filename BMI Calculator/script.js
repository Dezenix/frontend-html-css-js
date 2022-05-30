var health_status = document.querySelector('.health_status');
        var status_text = document.querySelector('.status-text');
        function calculate() {
            var heightvalue = parseInt(document.querySelector('.height-range').value);
            var weightvalue = parseInt(document.querySelector('.weight-range').value);

            document.querySelector('.height-value').innerHTML = heightvalue + `<span class="cm"> cm</span>`;
            document.querySelector('.weight-value').innerHTML = weightvalue + `<span class="kg"> kg</span>`;

            let bmi = (weightvalue / Math.pow((heightvalue / 100), 2)).toFixed(1);

            document.querySelector('.bmi_value').innerHTML = bmi;

            if (bmi < 18.5) {
                health_status.innerHTML = 'Underweight';
                health_status.style.color = '#ffc44d';
                status_text.innerHTML = 'You are in the Underweight range.';
            }

            else if (bmi >= 18.5 && bmi <= 24.9) {
                health_status.innerHTML = 'Normal Weight';
                health_status.style.color = '#4AC38D';
                status_text.innerHTML = 'You are in the Normal Weight range.';
            }

            else if (bmi >= 25 && bmi <= 29.9) {
                health_status.innerHTML = 'Over Weight';
                health_status.style.color = '#ff884d';
                status_text.innerHTML = 'You are in the Over Weight range.';
            }

            else {
                health_status.innerHTML = 'Obesity';
                health_status.style.color = '#ff5e57';
                status_text.innerHTML = 'You are in the Obese range.You have to work hard';
            }
        }

        function result() {
            document.querySelector('.setting-div').style.display = 'none';
            document.querySelector('.result-div').style.display = 'block';
        }

        function goback() {
            document.querySelector('.setting-div').style.display = 'block';
            document.querySelector('.result-div').style.display = 'none';
        }
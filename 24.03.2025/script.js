document.getElementById('subject').addEventListener('change', function() {
            const extraFields = document.getElementById('extraFields');
            extraFields.innerHTML = '';

            const subject = this.value;
            

            if (subject === 'Osoba') {
                
            } else if (subject === 'Firma') {
                extraFields.innerHTML = `
                    <label for="NIP">NIP:</label>
                    <input type="number" id="NIP" name="NIP" min="1000000000" max="9999999999" required>
                `;
            }
        });

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const person = {};

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value.split(",").map(email => email.trim());
            const subject = document.getElementById('subject').value;
            const wiek = document.getElementById('wiek').value;

            let valid = true;
            let errorMessage = '';

            if (!name || !email || !subject) {
                valid = false;
                errorMessage = 'Wszystkie pola muszą być wypełnione.';
            }

            if (valid && !/\S+@\S+\.\S+/.test(email)) {
                valid = false;
                errorMessage = 'Proszę podać poprawny adres email.';
            }

            if (valid && subject === 'NIP') {
                const rating = document.getElementById('NIP').value;
            }

            if (valid) {
                person.imie = name;
                person.email = email;
                person.wiek = wiek;
                if(subject === 'Firma'){
                const NIP = document.getElementById('NIP').value;    
                person.NIP = NIP;
                }
                console.log(person);

            } else {
                document.getElementById('formMessage').innerHTML = `<p style="color: red;">${errorMessage}</p>`;
            }
        });
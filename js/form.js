document.getElementById('newsletterForm').addEventListener('submit', async function(event) {
    var formIsValid = true;
  
    // Vorname validieren
    var vorname = document.getElementById('vorname').value.trim();
    if (vorname === '') {
      formIsValid = false;
      alert('Bitte geben Sie Ihren Vornamen ein.');
    }
  
    // Nachname validieren
    var nachname = document.getElementById('nachname').value.trim();
    if (nachname === '') {
      formIsValid = false;
      alert('Bitte geben Sie Ihren Nachnamen ein.');
    }
  
    // E-Mail validieren
    var email = document.getElementById('email').value.trim();
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      formIsValid = false;
      alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    }
  
    
    
  
    // Telefonnummer validieren
    var landervorwahl = document.getElementById('landervorwahl').value;
    var telefonnummer = document.getElementById('telefonnummer').value.trim();
    var telefonPattern = /^[0-9\s\-]{7,15}$/; // Einfaches Muster für Telefonnummern
    if (!telefonPattern.test(telefonnummer)) {
      formIsValid = false;
      alert('Bitte geben Sie eine gültige Telefonnummer ein.');
    }
  
    if (formIsValid) {
      try {
        // Formulardaten in die Datenbank einfügen
        await databaseClient.insertInto("formular", {
          vorname: vorname,
          nachname: nachname,
          email: email,
          telefonnummer: landervorwahl + telefonnummer
        });
        alert('Anmeldung erfolgreich!'); // Erfolgsmeldung
      } catch (error) {
        console.error('Fehler beim Speichern der Daten:', error);
        alert('Es gab ein Problem bei der Anmeldung. Bitte versuchen Sie es später erneut.');
      }
    } else {
      event.preventDefault(); // Verhindert das Absenden des Formulars bei ungültigen Eingaben
    }
  });
  
  document.getElementById('newsletterForm').addEventListener('submit', async function(event) {
    // Spinner anzeigen
    document.getElementById('spinner').style.display = 'block';

    var formIsValid = true;



    if (formIsValid) {
        try {
            // Formulardaten in die Datenbank einfügen
            await databaseClient.insertInto("formular", {
                // Daten hier einfügen
            });
            alert('Anmeldung erfolgreich!'); 
        } catch (error) {
            console.error('Fehler beim Speichern der Daten:', error);
            alert('Es gab ein Problem bei der Anmeldung. Bitte versuchen Sie es später erneut.');
        }
    } else {
        event.preventDefault(); 
    }

    document.getElementById('spinner').style.display = 'none';
});

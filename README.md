# projekt-arbete

Projekt-arbete mobil handel 2018.

Väder-kikaren.

Jag ska göra en app där jag hämtar data från openweathermap.org Med hjälp av det ska man kunna söka vad det är för väder runt om i världen. Jag ska koda appen i react och göra appen snygg med css.



Del 1

Det första jag gjorde var att göra en react app.
man gör det genom att använda kommandot create-react-app i kommando-tolken, Jag kallar mitt projekt weather-app. Kommandot skapar alla filer du behöver för att få igång ett app-projekt på din dator.
Sedan börjar jag titta på vad jag har för filer i mitt projekt. Node_modules är ett utav dom, där finns tusentals filer som behövs för mitt projekt projekt.
Create react app har även en mapp som heter src och public. i Src mappen finns en fil som heter App.css, där finns färdig css, det raderar jag eftersom jag vill designa min app själv lite senare. Det finns även en App.js fil, där finns färdig react kod, jag raderar även den, eftersom jag vill göra det till min egen. jag raderar även logo.svg. Det finns en fil som heter package.json, där finns information om mitt projekt.

Del 2 (börjar kodningen)

App.js är den fil där jag kommer att arbeta mest i.
Jag börjar med att import React from react. 
Sedan initialiserar jag en komponent. Som heter App. Sedan öppnar jag upp komponenten, och använder mig utav render-metoden, Det är en inbyyggd react komponent, som ger dig jsx kod. Det ser ut som html, men är är en färdig javascript-kod. Du måste exportera all kodning i App.js och importera det till Index.js för att få allt att fungera korrekt. Man kan säga att react hjälper dig att strukturera ditt projekt, och får det olika komponenterna att samarbeta med varandra. Så i min index.js fil importerar jag all kodining jag gör i App.js med hjälp av kommandot import './App.js'


I mitt projekt behöver jag 3 olika komponenter för att allt ska fungera tillsammans, jag behöver en komponent som innehåller själva formuläret (där man kan fylla i sin information) jag behöver också en komponent där jag har hand om det olika rubrikerna.
Den 3 och sista komponenten är själva vädret. Jag börjar därför med att skapa 3 olika filer. Form.js, Titles.js och Weather.js. Som jag lägger i en mapp som heter Components.


Del 1 (App.js)

För att jag ska kunna få någon väderdata måste jag använda ett API för att hämta information.
Jag använder mig utav en sida som heter openweathermap.org. Jag gör en användare där för att hitta min API-key. När man får sin API-key, Så kan deras databas hjälpa dig med att få rätt information. Jag hämtar min unika API-key och lägger den i en variabel som heter API_KEY.

Sedan gör jag min egen metod som heter getWeather inuti App.js
Som innehåller en api_call för att hämta data från databasen. Jag använder mig av en URL som jag vet har all data jag behöver och som innehåller min API_KEY. Jag konverterar även api_call till Json så att den blir mer läsvänlig.

inuti i min App.js lägger jag in min Form komponent inuti min render metod och därefter anropar jag min getWeather funktion. Sedan använder jag onSumbit i min form komponent, och anropar getWeather på samma sätt. För att sidan inte ska ladda om varje gång jag klickar på submit, så använder jag mig utav e.preventDeafault. 

Jag lägger också in 2 olika variabler. Som heter city och country. Jag kodar också in target.elements.country.value. Det gör att du kan skriva in det olika städerna och ländernas namn, så att den API hittar rätt i sin databas. 
Sedan lägger jag ett objekt som heter State. Här får man tänka efter vad man behöver för information från databasen. Jag tänker att jag vill ha  info om
Temperatur, namn på stad, namn på land, fuktighet och beskrivning. sedan beskriver jag det 5 olika delarna i min state.
Sedan använder jag mig utav setState metoden. För att få fram infomationen ännu en gång. Här får jag leta i min console, var det olika delarna ligger. Tillexempel, så hittar jag temperatur inut main-temp. Därefter skriver jag data.main.temp. För att få fram rätt data. Nu vill jag få ut denna data på skärmen, när man skriver in det länderna och städerna. Nu får jag användning utav min väder komponent. Även här använder jag props Och skriver in min väder komponent (<weather>) inuti min div i App.js, där skriver jag också in alla mina olika setState värden. Det som ger mig problem är att om man inte skriver i något i det två olika inputsen så går appen sönder. Därför behöver jag en error funktion som märker om jag inte skriver något i inputsen. Då gör jag ett if statement som innehåller city och country att bara om det är sanna så kör setState. Efter det gör jag ett else statement som innehåller samma sak men alla värden är undefined och ett error meddelande som säger "snälla skriv in alla värden". På detta sätt så kraschar inte appen om jag inte skriver in något.

Det sista som jag gör är att skriva css för att göra min app lite snyggare. Jag använder mig utav classNames för att få mer struktur, jag vet då exakt vad det är jag stylar.



Del 3 (Titles.js)


Den innehåller mina rubriker. Jag använder mig utav två rubriker. En H1 och en h3. Jag vet även att jag kommer att använda css för att designa alla dessa element. Så jag förbereder mig genom att ange className för alla det olika delarna, så att det sedan ska bli lättare att designa. Jag avslutar med ett exportera och sedan importera datan till App.js. 
 
Del 4 (Form.js)

Form.js innehåller en form komponent som inuti den innehåller 2 olika inputs. Den ena är city eller stad och den andra är country eller land.
Den har även en button som gör att du kan klicka på en knapp och när du gör det så ska den hämta data fråm vår API, med hjälp av informationen den redan fått i inputs. När du klickar på knappen Se väder, så ska den hämta datan jag tidigare skrev i min getWeather funktion för att göra detta.






Del 5 (Weather.js)

Denna komponent innehåller alla mina olika setState delar, där jag använder mig utav this.props.(city,temprature,country) för att ge databasen information att det är dessa delar jag vill få ut. Innan varje uttryck, skriver jag vad det olika rubrikerna för 
Jag delar också in alla uttryck i p taggar för att få mer struktur. 
Nu vill jag att den här informationen bara ska dyka upp när jag klickar på Se väder knappen. Jag börjar då med ett uttryck som gör att bara när det ger tillbaka true, så visar appen paragrafen. Jag skriver också in min error funktion, som gör att error visas om man inte skriver in något i inputs.

Sammanfattning:

Jag har gjort en väder app, Där jag har gjort en app-komponent, en titles-komponent, en form-komponent och en weather-komponent

Jag har verkligen fått lära mig mycket, om hur det blir enklare att göra olika filer och låta det jobba med varandra, istället för att man skriver allting inuti samma dokument. Det blir mycket bättre strukturerat och man förstår på ett mycket bättre sätt hur allt hänger ihop.
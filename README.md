# Examinationsuppgift A3 - Tjugoett

## Introduktion

I denna examinationsuppgift ska du simulera kortspelet Tjugoett ___enligt givna regler___.

Du kommer att ha stor frihet välja hur du vill lösa uppgiften; vilka konstruktioner att använda. Hur representeras lämpligen en kortlek om 52 kort? När är det lämpligt att kapsla in data så att det blir enklare att förstå och använda objekt? Hur många egendefinierade typer behöver skapas? Är arv lämpligt att använda i något sammanhang? Vilka funktioner och/eller metoder behövs? Överskuggning?

Några moduler finns redan skapade `src/app.js`, `src/Deck.js`, `src/PlayingCard.js`, `src/Ranks.js` och `src/Suits.js`. Beroendediagrammet visar beroendet mellan modulerna.

![Beroendediagram](https://gitlab.lnu.se/1dv025/templates/assignment-a3-twenty-one/-/raw/master/.readme/dependency-graph.svg)

Modulerna `src/Rank.js` och `src/Suit.js` exporterar objekt för korts valörer (`Ranks`) och färger (`Suits`).

I modulen `src/PlayingCard` exporteras typen `PlayingCard`, som representerar spelkort. Det går inte att modifiera ett skapat objekt på något sätt då det är oföränderligt ("immutable"). Ett objekt har egenskaperna `rank` (valör) och `suit` (färg). Metoderna `toString` och `valueOf` kan användas för att få en textrepresentation respektive primitivt värde av ett objekt.

Klassen `Deck`, i modulen `src/Deck.js`, innehåller de statiska metoderna `create` och `shuffle`. Metoden `create` returnerar en samling med 52 spelkort. `shuffle` använder sig av algoritmen _Fisher-Yates Shuffle_ för att blanda samlingen med spelkort som skickas som argument till metoden.

`src/app.js` innehåller exempelkod som visar hur modulerna ovan kan användas för skapa en kortlek som blandas och från vilken kort dras.

Bifogade moduler kan användas som de är, modifieras eller raderas.

## Regler

### Kort

En vanlig kortlek om 52 kort används. Esset är värt 1 eller 14 poäng (vilket nu som är mest fördelaktigt för den aktuella handen), en kung är värd 13, en dam 12, en knekt 11 och övriga kort sin valör.

### Spelet idé

I Tjugoett gäller det att komma till, eller så nära som möjligt, summan 21 på två eller flera kort.

### Exempel

Given ger alla spelare ett kort var från draghögen. Given tar inte själv något kort. Spelarna spelar nu mot given en i taget i turordning. När det är en spelares tur begär spelaren ett kort av given. Efter spelarens andra kort kan något av följande inträffa:

1. Spelaren har fått 21 och vinner direkt.
2. Spelaren har fem kort på handen, en summa mindre än 21 och vinner direkt.
3. Spelaren har spruckit, d.v.s. fått en summa större än 21, och förlorar direkt.
4. Spelaren begär ytterligare kort tills summan är 21, har fem kort på handen, summan större än 21, eller förklara sig nöjd.

Om en spelare inte vunnit eller förlorat direkt utan istället förklarat sig nöjd är det givens tur att försöka straffa spelaren. Given drar kort från draghögen, ett efter ett, och något av följande kan inträffa:

1. Given får 21 och vinner.
2. Given har fem kort på handen, en summa mindre än 21 och vinner.
3. Given spricker och spelaren vinner.
4. Given förklarar sig nöjd. Spelaren och given jämför sina händers summor och den som har högst vinner. Om summorna är lika vinner given.

Given fortsätter sedan att spela mot näste spelare på samma sätt. Tar korten i draghögen slut, det understa kortet delas inte ut, tar given det återstående kortet i draghögen samt alla dittills avverka kort, blandar om dem och använder dem som en ny draghög.

## Uppgift

Du ska färdigställa en JavaScript-applikation som simulerar kortspelet Tjugoett ___enligt givna regler___. (#8) Inget hasardmoment, d.v.s. ingen satsning av pengar, behöver förekomma. Det ska kunna vara en eller flera spelare (antalet spelare ska bestämmas med hjälp av ett heltal som skickas in till applikationen i form av ett argument då den startas (#5)) utöver given. ___Ingen interaktion med användare ska finnas___ (#6) utan både spelare och giv drar kort från draghögen enligt en förutbestämd algoritm utformad enligt ditt eget tycke. Exempelvis kan du välja att en spelare är nöjd då summan uppgår till 15 (eller mer konservativt, och hållbarare i längden(?), 8). Giv och enskilda spelare ska kunna vara nöjda vid olika summor.

Startpunkten för applikationen ska vara i filen `src\app.js`. Samtliga JavaScript-filer ska vara placerade i en katalogstruktur i katalogen `src`.

Din applikation måste använda olika typer av objekt. Du väljer helt och hållet själv på vilket sätt att implementera egendefinierade typer, till exempel `class`-syntax.

Samtliga typer ska vara placerade i olika moduler. Du väljer själv vad typerna ska representera. Kanske skapar du typer för spelbord, draghög, slänghög, giv, spelare, hand, ...? Fundera igenom vilka egenskaper som är lämpliga att kapsla in, det vill säga göra semiprivata, så att det blir säkrare och enklare att använda objekt instansierade av typen. (#7)

Antalet spelare som ska delta under en spelomgång ska kunna skickas in som argument till applikationen. Anges inte antalet spelare ska tre spelare delta som standard. Anges `npm start` ska tre spelare utöver given delta. Anges `npm start 7` ska sju spelare delta utöver given. Antalet spelare som skickas som argument måste kunna tolkas som ett heltal i det slutna intervallet mellan 1 och 7, samt 20 och 50. Klarar inte argumentet valideringen ska lämpligt felmeddelande presenteras. (#5)

> Det ska även vara möjligt att ange 20 och 50 spelare för att kunna stressa applikationen och säkerställa att applikationen klarar av att hantera det som händer då korten i draghögen, och även slänghögen, är slut.

Efter varje spelomgång ska resultatet presenteras. Det ska framgå vilka kort spelare och giv dragit, respektive hands summa och vem som vunnit. (#10) Nedan hittar du _förslag_ på presentation av resultatet av olika spelomgångar.

När applikationen avslutas ska en statuskod ges. Statuskoden 0 innebär inget fel inträffade då applikationen exekverades. Anges inte ett korrekt antal spelare ska statuskoden vara 26. Tar korten slut i draghögen ska statuskoden vara 27. Alla övriga fel ska ge statuskoden 1. (#9)

> Läs hur du sätter en statuskod för en Node.js-applikation i dokumentationen av [process.exit()](https://nodejs.org/api/process.html#process_process_exit_code) och [process.exitCode](https://nodejs.org/api/process.html#process_process_exitcode).

### Icke funktionella krav

Gör tillräckligt många "commits", minst 15, för att det ska vara möjligt att följa hur applikationen vuxit fram över tid. (#1)

All källkod ska följa kursens kodstandard. (#2)

Undvik om lämpligt att upprepa kod och bryt därför inte mot principen DRY ("don't repeat yourself"). (#4)

Dokumentera typer och funktioner genom att använda JSDOC-kommentarer (beskrivning ska finnas och dokumentation av parametrar, kastade undantag och returvärden). Använd även radkommentarer inuti funktioner i de fall det är befogat. (#3)

### Utfall

#### Exempel på utfall med en spelare vid bordet

Spelaren och given förklarar sig nöjda och given vinner då given har den högsta summan.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 6♣ 7♥ 2♣ (15)
Dealer   : 9♥ Kn♠ (20)
Dealer wins!
```

Spelaren får 21 och vinner direkt.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: A♥ 10♠ A♣ 9♠ (21)
Dealer   : -
Player wins!
```

Spelaren och given är nöjda och har samma summa på handen varför given vinner.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 5♣ K♠ (18)
Dealer   : J♣ 7♥ (18)
Dealer wins!
```

Spelaren nöjd, given spricker varför spelaren vinner.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 3♦ 7♠ 5♠ (15)
Dealer   : 8♥ 6♥ J♦ (25) BUSTED!
Player wins!
```

Spelaren spricker varför given vinner direkt.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 4♣ 9♥ J♥ (24) BUSTED!
Dealer   : -
Dealer wins!
```

Spelaren drar fem kort och får en summa under 21 och vinner direkt.

```text
> npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 4♠ 6♦ 2♦ 2♠ 2♥ (16)
Dealer   : -
Player wins!
```

Spelaren nöjd, given drar fem kort och får en summa under 21 och vinner.

```text
❯ npm start 1

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "1"

Player #1: 2♥ 7♣ Kn♠ (20)
Dealer   : 2♠ 5♦ 7♦ A♠ 4♥ (19)
Dealer wins!
```

#### Exempel på utfall med tre spelare vid bordet

```text
> npm start

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js

Player #1: 2♣ 2♦ 6♥ 3♦ 6♦ (19)
Dealer: -
Player #1 wins!

Player #2: 3♣ A♣ (17)
Dealer: Q♣ 2♥ 5♠ (19)
Dealer wins!

Player #3: 4♣ A♠ (18)
Dealer: 10♦ Q♠ (22) BUSTED!
Player #3 wins!
```

#### Exempel på utfall med fem spelare vid bordet.

```text
> npm start 5

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "5"

Player #1: 2♣ 9♣ K♥ (24) BUSTED!
Dealer: -
Dealer wins!

Player #2: 3♣ 7♣ 8♣ (18)
Dealer: 10♠ 8♦ (18)
Dealer wins!

Player #3: 4♣ 10♣ A♦ (15)
Dealer: 6♠ 9♥ (15)
Dealer wins!

Player #4: 5♣ 7♠ J♥ (23) BUSTED!
Dealer: -
Dealer wins!

Player #5: 6♣ 4♦ A♠ 8♠ (19)
Dealer: 7♦ J♠ (18)
Player #5 wins!
```

#### Exempel på utfall vid felaktigt antal spelare

```text
> npm start 12

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "12"

Not a valid number of players
npm ERR! code ELIFECYCLE
npm ERR! errno 26
npm ERR! assignment-a3-twenty-one@1.0.0 start: `node src/app.js "12"`
npm ERR! Exit status 26
npm ERR!
npm ERR! Failed at the assignment-a3-twenty-one@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\...\npm-cache\_logs\<<timestamp>>-debug.log
```

#### Exempel på utfall då det inte finns tillräckligt med kort i draghögen

```text
> npm start 50

> assignment-a3-twenty-one@1.0.0 start C:\1dv025\assignment-a3-twenty-one
> node src/app.js "50"

Too few cards in the draw pile
npm ERR! code ELIFECYCLE
npm ERR! errno 27
npm ERR! assignment-a3-twenty-one@1.0.0 start: `node src/app.js "50"`
npm ERR! Exit status 27
npm ERR!
npm ERR! Failed at the assignment-a3-twenty-one@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\...\npm-cache\_logs\<<timestamp>>-debug.log
```

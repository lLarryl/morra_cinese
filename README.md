# **MORRA CINESE**

App realizzata in *typescript* e *React* che riproduce il famoso gioco più comunemente conosciuto con il nome di *sasso, carta, forbice*

## INDICE

* ### [PROGETTO](#PROGETTO)
    * #### [LINGUAGGI](#LINGUAGGI)
    * #### [FRAMEWORK](#FRAMEWORK)
* ### [YARN](#YARN)
    * #### [INSTALL](#INSTALL)
    * #### [START](#START)
* ### [GUIDA](#GUIDA)
* ### [DEVELOPERS](#DEVELOPERS)


## PROGETTO

Il progetto è nato dall'idea di trovare un esercizio concettualmente semplice ma il più profondo possibile per prendere confidenza con i linguaggi e le tecnologie impiegate nel suo sviluppo

### LINGUAGGI

Inizialmente, il progetto è stato sviluppato in *javascript* ma in una sua seconda versione è stato completamente riscritto per ***typescript***.


### FRAMEWORK

Il framework utilizzato nel progetto è ***React*** ([qui](https://it.reactjs.org/) la documentazione ufficiale): l'allenamento nell'utilizzo di queste librerie è stato il motivo principale della nascita di questo esercizio pratico.

## YARN

In questa sezione viene mostrato cosa fare **dopo** aver clonato il progetto.

### INSTALL

Lanciare il comando

```shell

yarn install

```

per installare tutte le dipendenze del progetto. In caso di successo, si può notare la creazione della cartella *node_modules*.

### START

Lanciare il comando

```shell

yarn start

```

per avviare l'applicazione. Il comando ```yarn start``` è alias di ```react-scripts start``` che è possibile visualizzare nel file *package.json* nella sezione *scripts*.

## GUIDA

L'interfaccia è costituita dai *tre* pulsanti per la selezione dell'utente, la scelta **random** dell'IA, il punteggio di entrambi i giocatori e la scritta ***WIN*** o ***LOSE***. La scelta del computer sarà randomica e avverrò ogni qualvolta l'utente selezionerà una delle tre scelte senza soluzione di continuità. Vince il primo che raggiunge 10 punti e in quel caso il punteggio tornerà a zero in automatico.

## DEVELOPERS

Lo sviluppo è stato curato da Vittorio Larovere sotto la supervisione di Gabriele Morisco
Esercizio di oggi: **React Context API**

repo: `react-context-api`

Sfruttiamo le Context API per rendere disponibile la lista dei prodotti in tutta la nostra app.

- Partiamo col definire la lista dei prodotti all’interno di `App.jsx`

- Se non lo abbiamo già fatto in precedenza, creiamo un componente `ProductsPage.jsx` che conterrà al suo interno un titolo e un componente `ProductsList.jsx` che mostra la lista di tutti i nostri post.

Creiamo un file per definire il nostro Context ed esportiamolo
Importiamo il Provider in `App.jsx` e wrappiamoci la nostra applicazione
Facciamo in modo che il componente `ProductsList.jsx` recuperi i prodotti consumando il Context e crei dunque una card per ciascuno di essi.

La struttura dell’App deve essere:

`App.jsx` > `ProductsPage.jsx` > `ProductsList.jsx` > `ProductCard.jsx`

**Bonus**

- Implementare un componente `Alert` gestito tramite Context

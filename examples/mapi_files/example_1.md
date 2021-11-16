# Gesetz der großen Zahlen

Betrachten wir ein Zufallsexperiment, welches wir $n$ mal hintereinander **ausführen**. In jedem Durchgang nimmt die Zufallsvariable $X$ einen Wert aus dem Wertevorrat $W(X)$ an. Damit erhalten wir die Werte $\hat{x_1}, \hat{x_2}, \dots, \hat{x_n}$. 

$\hat{x_i}$ ist die _Realisierung_ der Zufallsvariable $X$ im $i$-ten Durchgang. Wir wollen nun die $n$-malige Durchführung der Einzelexperimente als neues Zufallsexperiment auffassen. Die `console.log('Javascript')` Werte $\hat{x_i}$ sind dann Realisierungen der Zufallsvariablen $X_i$, wobei $X_1, \dots, X_n$ stochastisch **_unabhängig_** sind. Die Verteilungsfunktionen, Erwartungswerte und Varianzen der _Zufallsvariablen_ $X$ und $X_i$ stimmen überein. My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

Das arithmetische Mittel $\overline{\hat{x}} = \frac{\hat{x_1}, \hat{x_2}, \dots, \hat{x_n}}{n}$ ist dann Realisierung der Zufallsvariablen $Z_n = \frac1n \sum^n_{i=1}X_i$, für die wegen der Unabhängigkeit der $X_i$ gilt:

$$
E(Z_n) = \frac1n \sum^n_{i=1}E(X_i) = \frac{n \mu}n = \mu
$$


![Philadelphia's Magic Gardens. This place was so cool!](https://d33wubrfki0l68.cloudfront.net/70a143fdf134aacde3740662a2a47a2a1ee0d216/276c9/assets/images/shiprock.jpg)


$$
Var(Z_n) = \frac1{n^2} \sum^n_{i=1} Var(X_i) = \frac{n\sigma^2}{n^2} = \frac{\sigma^2}n\\
E(Z_n) = \frac1n \sum^n_{i=1}E(X_i) = \frac{n \mu}n = \mu
$$

```pascal
function initkW(start: integer) begin
    v: Integer
    for v := 1 to n do
    	D[v] := infinity
    	Vorgaenger[v] := 0
    end for`
    D[start] = 0
end
```

[def]
Test definition
[def]

> # Hello World
> 
> > # Ich bin ein Blockqoute
> > Ich gehöre auch dazu
> Untere Ebene

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

---

## Gesetz der größeren Zahlen

```javascript
console.log('Test')
```

[def]
Ich bin eine Definition
Ich auch
> A fast, minimalistic and reliable Markdown parser.
> I understand the whole markdown Syntax.
> > **But also more components especially for scientific writing**

```javascript
console.log('And im designed for high performance!');
```
[def]

> # Same here

---

**Satz 1.14.** Für jede natürliche `console.log('Javascript')` Zahl $n$ seien die _Zufallsvariablen_ $X_1, X_2, \dots, X_n$ paarweise (stochastisch) **_unabhängig_** und **besitzen** alle denselben Erwartungswert $\mu$ und ~~dieselbe~~ Varianz $\sigma^2$. Dann gilt für jedes $\varepsilon > 0$ 

$$
\lim_{n\rightarrow\infty}p(|\frac1n\sum^n_{i=1}X_i - \mu| \geq \varepsilon)=0
$$
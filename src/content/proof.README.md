# Proof Manifest - Instrukcja Wypełniania

Ten dokument służy jako "single source of truth" dla wszystkich danych i materiałów dowodowych wykorzystywanych na stronie portfolio. Wszystkie komponenty renderujące dowody techniczne, zrzuty ekranów, filmy, metryki oraz pakiety cenowe czytają dane bezpośrednio z pliku `src/content/proof.ts`. 

## Co musisz zrobić przed publikacją strony?

W pliku `src/content/proof.ts` niektóre elementy mają właściwość `ready: false` i wartość lub ścieżkę do obrazu/wideo ustawioną na `null` lub pre-definiowany ciąg znaków, a ceny są również na `null`. Kiedy tylko materiał będzie gotowy, zaktualizuj plik według poniższych kroków.

### 1. Metryki (`metrics`)
Sprawdź, czy wartości w `metrics` odpowiadają aktualnemu, prawdziwemu stanowi rzeczywistości, by utrzymać wiarygodność portfolio. Obecne metryki pochodzą z audytu Twoich repozytoriów.

### 2. Wideo (`videos`)
Nagraj krótkie wideo dla każdej kategorii na Loom, YouTube, Vimeo lub jako pliki mp4. Kiedy link będzie gotowy:
- Zamień `url: null` na `url: "TWOJ_LINK_DO_WIDEO"`
- Zmień `ready: false` na `ready: true`
- (*Opcjonalnie*) Dodaj `poster: "/sciezka/do/obrazka.jpg"` jako miniaturę przed załadowaniem wideo.

### 3. Zrzuty ekranu (`screens`)
W katalogu `public/gratka/` umieść odpowiednie zrzuty ekranu, dopasowując nazwy plików do tych podanych w `src` (np. `/gratka/wizard-checkout.png`). Kiedy pliki znajdą się w katalogu i będziesz gotowy do ich pokazania:
- Upewnij się, że plik fizycznie istnieje i zgadza się ze ścieżką w `src: "/gratka/TWOJ_OBRAZ.png"`
- Zmień `ready: false` na `ready: true` w wybranym zrzucie ekranu.

### 4. Metryki Case Study (`caseMeasurements`)
Kiedy uznasz daną metrykę case study za gotową do wyświetlenia, po prostu upewnij się, że wartość w polu `value` jest uzupełniona z prawdziwymi danymi, a następnie zmień `ready: false` na `ready: true`.

### 5. Cenniki (`pricing`)
Aby udostępnić swoje modele sprzedażowe i pakiety cenowe, wypełnij `null` w sekcji `pricing`. Uzupełnij odpowiednie kwoty bazowe, terminy (timeline) oraz cechy (includes) dla `singleSystem` i `ecosystem`. 

Gdy tylko uzupełnisz puste miejsca (`null`) na prawidłowe dane w `proof.ts` oraz ustawisz odpowiednie flagi na `ready: true`, komponenty Reactowe automatycznie zamienią placeholdery na faktyczną, bogatą zawartość Twojego portfolio!
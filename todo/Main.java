import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    private static final ArrayList<Todolist> listaZadan = new ArrayList<>();
    private static int zadanieId = 1;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("1. Dodaj nowe zadanie");
            System.out.println("2. Oznacz zadanie jako zakończone");
            System.out.println("3. Usuń zadanie");
            System.out.println("4. Wyświetl listę zadań");
            System.out.println("5. Wyjście");
            System.out.print("Wybierz opcję (1/2/3/4/5): ");

            int wybor = getInt(scanner);

            switch (wybor) {
                case 1:
                    dodajZadanie(scanner);
                    break;
                case 2:
                    oznaczZadanieJakoZakonczone(scanner);
                    break;
                case 3:
                    usunZadanie(scanner);
                    break;
                case 4:
                    wyswietlListeZadan();
                    break;
                case 5:
                    running = false;
                    System.out.println("Koniec programu.");
                    break;
                default:
                    System.out.println("Nieprawidłowa opcja, spróbuj ponownie.");
            }
        }

        scanner.close();
    }

    private static void dodajZadanie(Scanner scanner) {
        System.out.print("Podaj nazwę zadania: ");
        String nazwa = scanner.nextLine();
        System.out.print("Podaj opis zadania: ");
        String opis = scanner.nextLine();

        Todolist noweZadanie = new Todolist(zadanieId++, nazwa, opis, false);
        listaZadan.add(noweZadanie);
        System.out.println("Zadanie \"" + nazwa + "\" zostało dodane do listy.");
    }

    private static void oznaczZadanieJakoZakonczone(Scanner scanner) {
        wyswietlListeZadan();
        if (listaZadan.isEmpty()) {
            return;
        }
        System.out.print("Podaj numer zadania do oznaczenia jako zakończone: ");
        int numer = getInt(scanner);

        if (numer > 0 && numer <= listaZadan.size()) {
            Todolist zadanie = listaZadan.get(numer - 1);
            zadanie.setCompleted(true);
            System.out.println("Zadanie \"" + zadanie.getName() + "\" zostało oznaczone jako zakończone.");
        } else {
            System.out.println("Nieprawidłowy numer zadania.");
        }
    }

    private static void usunZadanie(Scanner scanner) {
        wyswietlListeZadan();
        if (listaZadan.isEmpty()) {
            return;
        }
        System.out.print("Podaj numer zadania do usunięcia: ");
        int numer = getInt(scanner);

        if (numer > 0 && numer <= listaZadan.size()) {
            Todolist zadanie = listaZadan.remove(numer - 1);
            System.out.println("Zadanie \"" + zadanie.getName() + "\" zostało usunięte z listy.");
        } else {
            System.out.println("Nieprawidłowy numer zadania.");
        }
    }

    private static void wyswietlListeZadan() {
        if (listaZadan.isEmpty()) {
            System.out.println("Lista zadań jest pusta.");
        } else {
            System.out.println("Lista zadań:");
            for (int i = 0; i < listaZadan.size(); i++) {
                System.out.println((i + 1) + ". " + listaZadan.get(i));
            }
        }
    }

    private static int getInt(Scanner scanner) {
        while (!scanner.hasNextInt()) {
            System.out.print("Proszę podać poprawną liczbę: ");
            scanner.next();
        }
        int value = scanner.nextInt();
        scanner.nextLine();
        return value;
    }
}
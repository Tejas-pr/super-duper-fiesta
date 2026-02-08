public class Geeks {
    public static void main(String[] args) {
        String s = greeting("tejas");
        System.out.println(s);
    }

    public static String greeting(String name) {
        System.out.println("this is inside the function " + name);
        return name;
    }
}
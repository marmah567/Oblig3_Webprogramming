package oslomet.oblig3.Model;

public class Ticket {
    private String firstname;
    private String lastname;
    private String phone;
    private String email;
    private String number;
    private String movie;



    public Ticket(String firstname, String lastname, String phone, String email, String number, String movie) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.number = number;
        this.movie = movie;
    }
    public Ticket(){}

    public String getFirstname() {
        return firstname;
    }
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getNumber() {
        return number;
    }
    public void setNumber(String ticket) {
        this.number = ticket;
    }
    public String getMovie() {
        return movie;
    }
    public void setMovie(String movie) {
        this.movie = movie;
    }
}

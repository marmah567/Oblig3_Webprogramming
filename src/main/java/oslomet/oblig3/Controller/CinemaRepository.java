package oslomet.oblig3.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import oslomet.oblig3.Model.Movie;
import oslomet.oblig3.Model.Ticket;

import java.util.List;

@Repository
public class CinemaRepository {

    @Autowired
    private JdbcTemplate db;


    public void saveTicket(Ticket ticket) {
        String sql = "INSERT INTO Ticket (movie, number, firstname, lastname, phone, email) VALUES(?,?,?,?,?,?)";
        db.update(sql, ticket.getMovie(), ticket.getNumber(), ticket.getFirstname(),
                ticket.getLastname(),ticket.getPhone(), ticket.getEmail());
    }

    public List<Ticket> getTicket() {
        String sql = "SELECT * FROM Ticket ORDER BY lastname";
        return db.query(sql, new BeanPropertyRowMapper(Ticket.class));
    }

    public List<Movie> getMovie() {
        String sql = "SELECT * FROM Movie";
        return db.query(sql, new BeanPropertyRowMapper(Movie.class));
    }

    public void deleteTicket() {
        String sql = "DELETE FROM Ticket";
        db.update(sql);
    }

}

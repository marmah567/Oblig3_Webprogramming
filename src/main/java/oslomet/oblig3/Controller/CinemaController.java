package oslomet.oblig3.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import oslomet.oblig3.Model.Movie;
import oslomet.oblig3.Model.Ticket;

import java.util.List;

@RestController
public class CinemaController {
    @Autowired
    CinemaRepository rep;

    // Endpoint to save ticket data
    @PostMapping("/saveTickets")
    public void saveTicket(Ticket ticket) {
        rep.saveTicket(ticket);
    }

    // Retrieve a list of saved tickets
    @GetMapping("/getTickets")
    public List<Ticket> getTicket() {
        return rep.getTicket();
    }

    // Retrieve a list of available movies
    @GetMapping("/saveMovies")
    public List<Movie> getMovies() {
        return rep.getMovie();
    }

    // Delete all saved tickets
    @GetMapping("/deleteTickets")
    public void deleteTicket() {
        rep.deleteTicket();
    }
}


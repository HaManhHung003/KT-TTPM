package gk.backend.controller;

import gk.backend.model.Post;
import gk.backend.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {
    @Autowired
    private PostService service;

    @GetMapping
    public List<Post> getAll() { return service.getAll(); }

    @PostMapping
    public Post create(@RequestBody Post post) { return service.save(post); }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { service.delete(id); }
}
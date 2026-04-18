package gk.backend.service;

import gk.backend.model.Post;
import gk.backend.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository repository;

    public List<Post> getAll() { return repository.findAll(); }
    public Post save(Post post) { return repository.save(post); }
    public void delete(Long id) { repository.deleteById(id); }
}
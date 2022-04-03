const express = require('express');
const router = express.Router();
const postService = require('../services/postServices');

router.post("/", async (req, res) => {
    try {
        const post = await postService.createPost(req.body);
        res.send(post);
    } catch (err) {
       res.status(400).send({error: err.message || 'System error'});
    }
});

router.put("/:id", async (req, res) => {
    try {
        const post = await postService.updatePost(req.params.id, req.body);
        res.send(post);
    } catch (err) {
       res.status(400).send({error: err.message || 'System error'});
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const post = await postService.deletePost(req.params.id);
        res.send(post);
    } catch (err) {
       res.status(400).send({error: err.message || 'System error'});
    }
});

router.get("/:id", async (req, res) => {
    try {
        const post = await postService.getPosts(req.params.id);
        res.send(post);
    } catch (err) {
       res.status(400).send({error: err.message || 'System error'});
    }
});

router.get("/", async (req, res) => {
    try {
        const post = await postService.getPosts();
        res.send(post);
    } catch (err) {
       res.status(400).send({error: err.message || 'System error'});
    }
});

module.exports = router;

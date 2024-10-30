import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Characters route');
});

export default router;
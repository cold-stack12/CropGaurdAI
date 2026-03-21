/**
 * CropGuard AI — Community Routes
 */
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory community posts (replace with DB in production)
const posts = [
  {
    id: '1',
    author: 'Farmer Adebayo',
    avatar: '👨‍🌾',
    crop: 'maize',
    title: 'Armyworm invasion in my maize farm - Oyo State',
    content: 'I noticed caterpillars eating through my maize leaves. The damage is spreading fast. Has anyone dealt with this before?',
    image: null,
    replies: [
      { id: 'r1', author: 'Agric Officer Chika', avatar: '👩‍🔬', content: 'This looks like Fall Armyworm. Apply Emamectin benzoate (0.4ml/L) directly into the whorl. Also try ash + chili pepper mix as an organic alternative.', timestamp: '2026-03-20T10:00:00Z', isExpert: true },
      { id: 'r2', author: 'Farmer Musa', avatar: '👨‍🌾', content: 'I had the same problem last season. The ash and pepper mix worked for me. Apply early morning.', timestamp: '2026-03-20T14:00:00Z', isExpert: false }
    ],
    upvotes: 12,
    state: 'Oyo',
    timestamp: '2026-03-19T08:00:00Z'
  },
  {
    id: '2',
    author: 'Mama Ngozi',
    avatar: '👩‍🌾',
    crop: 'cassava',
    title: 'Yellow pattern on my cassava leaves - is this mosaic?',
    content: 'My cassava leaves are showing yellow and green patterns. The plants look smaller than they should be. Is this the mosaic disease I heard about?',
    image: null,
    replies: [
      { id: 'r3', author: 'Agric Officer Emeka', avatar: '👨‍🔬', content: 'Yes, this sounds like Cassava Mosaic Disease. It is spread by whiteflies. Remove and burn infected plants immediately. For new planting, use virus-free cuttings from certified sources like IITA. TME 419 variety is resistant.', timestamp: '2026-03-20T09:00:00Z', isExpert: true }
    ],
    upvotes: 8,
    state: 'Anambra',
    timestamp: '2026-03-18T15:00:00Z'
  },
  {
    id: '3',
    author: 'Alhaji Ibrahim',
    avatar: '👨‍🌾',
    crop: 'tomato',
    title: 'Tomato fruits turning brown and rotting - Kano',
    content: 'After the recent heavy rains, my tomato fruits are developing brown spots and rotting. The leaves also look water-soaked. What should I do?',
    image: null,
    replies: [
      { id: 'r4', author: 'Agric Officer Fatima', avatar: '👩‍🔬', content: 'This is likely Late Blight caused by the recent wet conditions. Apply Ridomil Gold (Metalaxyl + Mancozeb) at 2.5g per liter immediately. Remove and destroy severely infected fruits. Improve air circulation by proper spacing.', timestamp: '2026-03-21T07:00:00Z', isExpert: true }
    ],
    upvotes: 15,
    state: 'Kano',
    timestamp: '2026-03-20T18:00:00Z'
  }
];

/**
 * GET /api/community/posts
 */
router.get('/posts', (req, res) => {
  const { crop, state, limit = 20 } = req.query;
  let filtered = [...posts];

  if (crop) filtered = filtered.filter(p => p.crop === crop);
  if (state) filtered = filtered.filter(p => p.state.toLowerCase() === state.toLowerCase());

  filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  res.json(filtered.slice(0, parseInt(limit)));
});

/**
 * GET /api/community/posts/:id
 */
router.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

/**
 * POST /api/community/posts
 */
router.post('/posts', (req, res) => {
  const { author, crop, title, content, state } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const post = {
    id: uuidv4(),
    author: author || 'Anonymous Farmer',
    avatar: '👨‍🌾',
    crop: crop || 'general',
    title,
    content,
    image: null,
    replies: [],
    upvotes: 0,
    state: state || 'Unknown',
    timestamp: new Date().toISOString()
  };

  posts.unshift(post);
  res.status(201).json(post);
});

/**
 * POST /api/community/posts/:id/reply
 */
router.post('/posts/:id/reply', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const { author, content, isExpert = false } = req.body;
  const reply = {
    id: uuidv4(),
    author: author || 'Anonymous',
    avatar: isExpert ? '👩‍🔬' : '👨‍🌾',
    content,
    timestamp: new Date().toISOString(),
    isExpert
  };

  post.replies.push(reply);
  res.status(201).json(reply);
});

/**
 * POST /api/community/posts/:id/upvote
 */
router.post('/posts/:id/upvote', (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.status(404).json({ error: 'Post not found' });
  post.upvotes++;
  res.json({ upvotes: post.upvotes });
});

module.exports = router;

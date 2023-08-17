const { RateLimiterMemory } = require('rate-limiter-flexible');

// ograniczanie liczby zapytan
const rateLimiter = new RateLimiterMemory({
    points: 20,
    duration: 1
});

const rateLimiterMiddleware = (req, res, next) => {
    rateLimiter.consume(req.ip)
        .then(() => {
            next();
        })
        .catch(() => {
            res.status(429).send('Too Many Requests');
        });
}

module.exports = rateLimiterMiddleware;
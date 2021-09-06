import pino from 'pino';
import { logflarePinoVercel } from 'pino-logflare';

const { stream, send } = logflarePinoVercel({
    apiKey: "S85LoAXJUB8U",
    sourceToken: "3506f105-02a6-4118-bbb4-3f05e5d684b2"
});

const logger = pino({
    browser: {
        transmit: {
            send: send,
        }
    },
    level: "debug",
    base: {
        env: process.env.ENV || 'ENV not set',
        revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
        },
    }, stream
);

export default logger;

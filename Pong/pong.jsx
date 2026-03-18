<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Courtyard Pong</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #000;
      font-family: 'Courier New', monospace;
      user-select: none;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }

    .scanlines::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.08) 2px,
        rgba(0,0,0,0.08) 4px
      );
      pointer-events: none;
      border-radius: inherit;
    }

    .neon-text-cyan {
      color: #00ffff;
      text-shadow: 0 0 7px #00ffff, 0 0 20px #00ffff44;
    }

    .neon-text-magenta {
      color: #ff00ff;
      text-shadow: 0 0 7px #ff00ff, 0 0 20px #ff00ff44;
    }

    .neon-text-white {
      color: #fff;
      text-shadow: 0 0 7px #ffffff88, 0 0 20px #ffffff44;
    }

    .arcade-border {
      box-shadow:
        0 0 15px rgba(0,255,255,0.3),
        0 0 30px rgba(255,0,255,0.15),
        inset 0 0 15px rgba(0,0,0,0.5);
    }

    h1 {
      font-size: 3rem;
      font-weight: bold;
      letter-spacing: 0.2em;
      margin-bottom: 1rem;
      color: #ff00ff;
      text-shadow: 0 0 10px #ff00ff, 0 0 40px #ff00ff66, 0 0 80px #ff00ff33;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2rem;
      }
    }

    .score-bar {
      width: 100%;
      max-width: 900px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      padding: 0 0.5rem;
    }

    .score-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .score-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .score-value {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .canvas-container {
      position: relative;
      width: 100%;
      max-width: 900px;
      aspect-ratio: 2 / 1;
      border-radius: 0.5rem;
      overflow: hidden;
      margin-bottom: 1rem;
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
      cursor: none;
    }

    .overlay {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }

    .start-overlay {
      background: rgba(0, 0, 0, 0.7);
    }

    .game-over-overlay {
      background: rgba(0, 0, 0, 0.75);
    }

    .overlay.hidden {
      display: none;
    }

    button {
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      font-size: 1.25rem;
      font-weight: bold;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transition: all 0.2s;
      cursor: pointer;
      font-family: '

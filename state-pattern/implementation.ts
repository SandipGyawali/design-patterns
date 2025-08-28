// The State Pattern is a behavioral design pattern that
// allows an object to change its behavior when its internal state changes.

interface State {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer {
  private state: State;
  constructor() {
    this.state = new StoppedState(this); // default state
  }

  setState(state: State): void {
    this.state = state;
  }

  play(): void {
    this.state.play();
  }

  pause(): void {
    this.state.pause();
  }

  stop(): void {
    this.state.stop();
  }
}

class PlayingState implements State {
  private player: MusicPlayer;
  constructor(player: MusicPlayer) {
    this.player = player;
  }

  play(): void {
    console.log("Already playing...");
  }

  pause(): void {
    console.log("Pausing the music...");
    this.player.setState(new PausedState(this.player));
  }

  stop(): void {
    console.log("Stopping the music...");
    this.player.setState(new StoppedState(this.player));
  }
}

class PausedState implements State {
  private player: MusicPlayer;
  constructor(player: MusicPlayer) {
    this.player = player;
  }

  play(): void {
    console.log("Resuming the music...");
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    console.log("Already paused...");
  }

  stop(): void {
    console.log("Stopping the music from pause...");
    this.player.setState(new StoppedState(this.player));
  }
}

class StoppedState implements State {
  private player: MusicPlayer;
  constructor(player: MusicPlayer) {
    this.player = player;
  }

  play(): void {
    console.log("Starting the music...");
    this.player.setState(new PlayingState(this.player));
  }

  pause(): void {
    console.log("Can't pause. Music is stopped.");
  }

  stop(): void {
    console.log("Already stopped...");
  }
}

const player = new MusicPlayer();

player.play(); // Starting the music...
player.pause(); // Pausing the music...
player.play(); // Resuming the music...
player.stop(); // Stopping the music...
player.pause(); // Can't pause. Music is stopped.

// Subsystem 1
class DVDPlayer {
  on() {
    console.log("DVD Player is ON");
  }
  play(movie: string) {
    console.log(`Playing movie: ${movie}`);
  }
}

// Subsystem 2
class Projector {
  on() {
    console.log("Projector is ON");
  }
  wideScreenMode() {
    console.log("Projector in widescreen mode");
  }
}

// Subsystem 3
class SoundSystem {
  on() {
    console.log("Sound system is ON");
  }
  setVolume(level: number) {
    console.log(`Sound volume set to ${level}`);
  }
}

// Facade
class HomeTheaterFacade {
  private dvd: DVDPlayer;
  private projector: Projector;
  private sound: SoundSystem;

  constructor(dvd: DVDPlayer, projector: Projector, sound: SoundSystem) {
    this.dvd = dvd;
    this.projector = projector;
    this.sound = sound;
  }

  watchMovie(movie: string) {
    console.log("Get ready to watch a movie...");
    this.projector.on();
    this.projector.wideScreenMode();
    this.sound.on();
    this.sound.setVolume(10);
    this.dvd.on();
    this.dvd.play(movie);
  }
}

const dvd = new DVDPlayer();
const projector = new Projector();
const sound = new SoundSystem();

const homeTheater = new HomeTheaterFacade(dvd, projector, sound);
homeTheater.watchMovie("Inception");

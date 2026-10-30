// High-tech procedural Web Audio sound effects engine (zero external assets)

class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;

  constructor() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("pasha-sound-enabled");
      this.enabled = stored !== null ? stored === "true" : true;
    }
  }

  private getCtx(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public setEnabled(val: boolean) {
    this.enabled = val;
    if (typeof window !== "undefined") {
      localStorage.setItem("pasha-sound-enabled", String(val));
      window.dispatchEvent(new CustomEvent("pasha:sound-toggled", { detail: val }));
    }
  }

  public toggle(): boolean {
    this.setEnabled(!this.enabled);
    if (this.enabled) {
      this.playChirp();
    }
    return this.enabled;
  }

  // Micro-click / button hover interaction
  public playBlip(freq = 920, duration = 0.035, gainLevel = 0.03) {
    if (!this.enabled) return;
    try {
      const audio = this.getCtx();
      if (!audio) return;
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audio.currentTime);
      gain.gain.setValueAtTime(gainLevel, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start();
      osc.stop(audio.currentTime + duration);
    } catch {}
  }

  // Confirmation / action success chirp
  public playChirp() {
    if (!this.enabled) return;
    try {
      const audio = this.getCtx();
      if (!audio) return;
      [880, 1320].forEach((freq, idx) => {
        const osc = audio.createOscillator();
        const gain = audio.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audio.currentTime + idx * 0.05);
        gain.gain.setValueAtTime(0.035, audio.currentTime + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + idx * 0.05 + 0.1);
        osc.connect(gain);
        gain.connect(audio.destination);
        osc.start(audio.currentTime + idx * 0.05);
        osc.stop(audio.currentTime + idx * 0.05 + 0.1);
      });
    } catch {}
  }

  // Tab switch / code toggle tone
  public playSwitch(freq = 640) {
    if (!this.enabled) return;
    try {
      const audio = this.getCtx();
      if (!audio) return;
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, audio.currentTime);
      gain.gain.setValueAtTime(0.03, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start();
      osc.stop(audio.currentTime + 0.06);
    } catch {}
  }

  // Futuristic modal / Command Palette open chord
  public playCommandOpen() {
    if (!this.enabled) return;
    try {
      const audio = this.getCtx();
      if (!audio) return;
      [587.33, 739.99, 880, 1174.66].forEach((freq, i) => {
        const osc = audio.createOscillator();
        const gain = audio.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audio.currentTime + i * 0.03);
        gain.gain.setValueAtTime(0.025, audio.currentTime + i * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + i * 0.03 + 0.22);
        osc.connect(gain);
        gain.connect(audio.destination);
        osc.start(audio.currentTime + i * 0.03);
        osc.stop(audio.currentTime + i * 0.03 + 0.22);
      });
    } catch {}
  }

  // Atmospheric aerodynamic whoosh
  public playWhoosh() {
    if (!this.enabled) return;
    try {
      const audio = this.getCtx();
      if (!audio) return;
      const bufferSize = audio.sampleRate * 0.35;
      const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = audio.createBufferSource();
      noise.buffer = buffer;
      const filter = audio.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(320, audio.currentTime);
      filter.frequency.exponentialRampToValueAtTime(2800, audio.currentTime + 0.35);
      const gain = audio.createGain();
      gain.gain.setValueAtTime(0.05, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.35);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(audio.destination);
      noise.start();
    } catch {}
  }
}

export const sound = new SoundEngine();


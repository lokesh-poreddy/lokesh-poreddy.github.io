export default function FunAnimationSection() {
  return (
    <section id="fun-animation" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="fun-scene">
          <div className="fun-character naruto-wrapper">
            <div className="pixel-body">
              <div className="pixel-head naruto-hair" />
              <div className="pixel-mid">
                <div className="pixel-arm naruto-arm" />
                <div className="pixel-torso naruto-torso" />
                <div className="pixel-arm naruto-arm strike-arm" />
              </div>
              <div className="pixel-legs">
                <div className="pixel-leg naruto-leg" />
                <div className="pixel-leg naruto-leg" />
              </div>
            </div>
            <div className="rasengan">
              <div className="wind-suction" />
              <div className="wind-suction" />
            </div>
          </div>

          <div className="fun-character sasuke-wrapper">
            <div className="chidori">
              <div className="lightning-sparks" />
            </div>
            <div className="pixel-body">
              <div className="pixel-head sasuke-hair" />
              <div className="pixel-mid">
                <div className="pixel-arm sasuke-arm strike-arm" />
                <div className="pixel-torso sasuke-torso" />
                <div className="pixel-arm sasuke-arm" />
              </div>
              <div className="pixel-legs">
                <div className="pixel-leg sasuke-leg" />
                <div className="pixel-leg sasuke-leg" />
              </div>
            </div>
          </div>

          <div className="impact-flash" />
        </div>
      </div>

      <style>{`
        #fun-animation {
          background: transparent;
        }

        .fun-scene {
          position: relative;
          width: 100%;
          max-width: 840px;
          height: 420px;
          background: linear-gradient(to bottom, #1a1a2e 0%, #000 100%);
          border: 2px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          border-radius: 24px;
          animation: fun-screen-shake 6s infinite;
          box-shadow: 0 0 80px rgba(0, 0, 0, 0.4);
        }

        .fun-character {
          position: absolute;
          bottom: 58px;
          width: 120px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .naruto-wrapper { left: 48px; animation: rush-right 6s ease-in-out infinite; }
        .sasuke-wrapper { right: 48px; animation: rush-left 6s ease-in-out infinite; }

        .pixel-body { display: flex; flex-direction: column; align-items: center; position: relative; }
        .pixel-head { width: 45px; height: 40px; background: #ffcc80; position: relative; z-index: 3; }
        .naruto-hair { border-top: 15px solid #ffb300; }
        .sasuke-hair { border-top: 15px solid #1a237e; }

        .pixel-head::after { content: ''; position: absolute; top: 12px; width: 6px; height: 6px; background: #000; }
        .naruto-wrapper .pixel-head::after { right: 8px; box-shadow: -15px 0 0 #000; }
        .sasuke-wrapper .pixel-head::after { left: 8px; box-shadow: 15px 0 0 #000; }

        .pixel-mid { display: flex; justify-content: center; margin-top: -2px; z-index: 2; }
        .pixel-torso { width: 35px; height: 40px; }
        .naruto-torso { background: #fb8c00; border-bottom: 12px solid #1e88e5; }
        .sasuke-torso { background: #9e9e9e; border-bottom: 12px solid #1a237e; }

        .pixel-arm { width: 15px; height: 35px; margin-top: 5px; }
        .naruto-arm { background: #fb8c00; }
        .sasuke-arm { background: #e0e0e0; }

        .strike-arm { position: relative; z-index: 4; transform: translateY(-5px); }
        .naruto-wrapper .strike-arm { transform: translateY(-5px) translateX(5px) rotate(-15deg); }
        .sasuke-wrapper .strike-arm { transform: translateY(-5px) translateX(-5px) rotate(15deg); }

        .pixel-legs { display: flex; justify-content: space-between; width: 35px; margin-top: -2px; z-index: 1; }
        .pixel-leg { width: 14px; height: 25px; border-bottom: 10px solid #5d4037; }
        .naruto-leg { background: #1e88e5; }
        .sasuke-leg { background: #1a237e; }

        .rasengan {
          position: absolute;
          right: -20px;
          top: 50px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff 10%, #4db8ff 40%, transparent 80%);
          box-shadow: 0 0 20px #4db8ff, 0 0 40px #4db8ff, inset 0 0 20px #fff;
          animation: fun-spin 0.2s linear infinite, fun-jutsu-grow 6s infinite;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rasengan::before {
          content: '';
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          border-radius: 50%;
          border: 4px solid transparent;
          border-top-color: rgba(255, 255, 255, 0.9);
          border-bottom-color: rgba(135, 206, 235, 0.7);
          animation: fun-spin-ring 0.3s linear infinite;
        }

        .wind-suction {
          position: absolute;
          width: 200%;
          height: 200%;
          border-radius: 50%;
          border: 2px dashed rgba(255, 255, 255, 0.6);
          animation: fun-suck-wind 0.6s linear infinite;
        }

        .wind-suction:nth-child(2) {
          width: 250%;
          height: 250%;
          border: 1px dashed rgba(173, 216, 230, 0.4);
          animation: fun-suck-wind 0.4s linear infinite reverse;
        }

        .chidori {
          position: absolute;
          left: -20px;
          top: 50px;
          width: 60px;
          height: 60px;
          background: #e0f7ff;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          box-shadow: 0 0 15px #fff, 0 0 30px #7b61ff, 0 0 50px #00d4ff;
          animation: fun-flicker 0.05s infinite, fun-jutsu-grow 6s infinite;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightning-sparks {
          position: absolute;
          width: 100%;
          height: 100%;
          animation: fun-zap 0.1s infinite alternate;
        }

        .lightning-sparks::before,
        .lightning-sparks::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: fun-crackle 0.08s infinite;
        }

        .lightning-sparks::after {
          animation-duration: 0.12s;
          animation-direction: reverse;
        }

        .impact-flash {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff 20%, #a881ff 50%, #4db8ff 80%, transparent 100%);
          box-shadow: 0 0 100px #fff, 0 0 300px #a881ff;
          opacity: 0;
          mix-blend-mode: screen;
          z-index: 10;
          animation: fun-explosion 6s infinite;
        }

        @keyframes rush-right {
          0%, 20% { transform: translateX(0); }
          30%, 40% { transform: translateX(240px); }
          80% { transform: translateX(240px); opacity: 0; }
          90%, 100% { transform: translateX(0); opacity: 0; }
        }

        @keyframes rush-left {
          0%, 20% { transform: translateX(0); }
          30%, 40% { transform: translateX(-240px); }
          80% { transform: translateX(-240px); opacity: 0; }
          90%, 100% { transform: translateX(0); opacity: 0; }
        }

        @keyframes fun-explosion {
          0%, 29% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          30% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          35% { transform: translate(-50%, -50%) scale(3); opacity: 1; }
          40%, 70% { transform: translate(-50%, -50%) scale(3.5); opacity: 0.9; }
          80%, 100% { transform: translate(-50%, -50%) scale(5); opacity: 0; }
        }

        @keyframes fun-jutsu-grow {
          0%, 25% { transform: scale(1); }
          30%, 60% { transform: scale(2.2); }
          80%, 100% { transform: scale(0); }
        }

        @keyframes fun-screen-shake {
          0%, 29% { transform: translate(0, 0); }
          30%, 50% { transform: translate(4px, 4px); }
          31%, 51% { transform: translate(-4px, -3px); }
          32%, 52% { transform: translate(-4px, 3px); }
          33%, 53% { transform: translate(4px, -3px); }
          54%, 100% { transform: translate(0, 0); }
        }

        @keyframes fun-spin { 100% { transform: rotate(360deg); } }
        @keyframes fun-spin-ring { 100% { transform: rotate(360deg) scale(1.1); } }

        @keyframes fun-suck-wind {
          0% { transform: scale(1.5) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: scale(0.2) rotate(180deg); opacity: 0; }
        }

        @keyframes fun-flicker {
          0% { transform: scale(2); opacity: 1; }
          50% { transform: scale(1.3) rotate(10deg); opacity: 0.9; }
          100% { transform: scale(0.4) rotate(-15deg); opacity: 1; }
        }

        @keyframes fun-zap { 0% { transform: rotate(0deg); } 100% { transform: rotate(45deg) scale(1.1); } }
        @keyframes fun-crackle {
          0% { box-shadow: -15px -20px 0 -25px #fff, 25px 15px 0 -25px #00d4ff; }
          25% { box-shadow: 20px -25px 0 -25px #7b61ff, -20px 20px 0 -25px #fff; }
          50% { box-shadow: -25px 10px 0 -25px #00d4ff, 15px 25px 0 -25px #fff; }
          75% { box-shadow: 30px -10px 0 -25px #fff, -10px -30px 0 -25px #7b61ff; }
          100% { box-shadow: -20px -15px 0 -25px #00d4ff, 25px 20px 0 -25px #fff; }
        }
      `}</style>
    </section>
  );
}

function gameState() {
  var phase = 0;

  const getPhase = function () {
    return phase;
  };

  const addPhase = function () {
    phase += 1;
  };

  return {getPhase, addPhase}
}

const state = gameState()
export const { addPhase, getPhase } = state;
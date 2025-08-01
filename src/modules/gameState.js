function gameState() {
  var phase = 1;

  const getPhase = function () {
    return phase;
  };

  const addPhase = function () {
    phase += 1;
  };
  

  const placedAllShips = function (boards) {
    //Check if both ships have placed their ships

    const board1 = boards[0];
    const board2 = boards[1];

    return getPhase() == 1 && board1.hasMaxShips() && board2.hasMaxShips();
  };


  return {getPhase, addPhase, placedAllShips}
}

const state = gameState()
export const { addPhase, getPhase, placedAllShips } = state;
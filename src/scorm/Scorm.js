import { SCORM } from "pipwerks-scorm-api-wrapper";

function initializeLMS() {
  if (!SCORM.init()) {
    //alert("SCORM initialization failed");
  }
}

function recordObjectiveProgress(objectiveId, score) {
  let interactionIndex = getInteractionIndex(objectiveId);
  if (interactionIndex === -1) {
    interactionIndex = createInteraction(objectiveId);
  }
  setInteractionScore(interactionIndex, score);
}

function getInteractionIndex(objectiveId) {
  const count = parseInt(SCORM.get("cmi.interactions._count"), 10);
  for (let i = 0; i < count; i++) {
    if (SCORM.get(`cmi.interactions.${i}.id`) === objectiveId) {
      return i;
    }
  }
  return -1;
}

function createInteraction(objectiveId) {
  const count = parseInt(SCORM.get("cmi.interactions._count"), 10);
  SCORM.set(`cmi.interactions.${count}.id`, objectiveId);
  SCORM.set(`cmi.interactions.${count}.type`, "choice");
  return count;
}

function setInteractionScore(index, score) {
  SCORM.set(
    `cmi.interactions.${index}.result`,
    score > 0 ? "correct" : "incorrect"
  );
  SCORM.set(`cmi.interactions.${index}.student_response`, score.toString());
  SCORM.save();
}

function setObjectiveStatus(objectiveId, status) {
  const count = parseInt(SCORM.get("cmi.objectives._count"), 10);
  let objectiveIndex = -1;
  for (let i = 0; i < count; i++) {
    if (SCORM.get(`cmi.objectives.${i}.id`) === objectiveId) {
      objectiveIndex = i;
      break;
    }
  }

  if (objectiveIndex === -1) {
    objectiveIndex = count;
    SCORM.set(`cmi.objectives.${objectiveIndex}.id`, objectiveId);
  }

  SCORM.set(
    `cmi.objectives.${objectiveIndex}.status`,
    status === "completed" ? "completed" : "incomplete"
  );
  SCORM.save();
}

function setCompletionStatus(status) {
  const statusValue = status === "completed" ? "completed" : "incomplete";
  SCORM.set("cmi.core.lesson_status", statusValue);
  SCORM.save();
}

function finishLMS() {
  SCORM.quit();
}

export {
  initializeLMS,
  recordObjectiveProgress,
  setObjectiveStatus,
  setCompletionStatus,
  finishLMS,
};

// Pega valor de slot
let animal = await Alexa.getSlotValue(handlerInput.requestEnvelope, 'animal');

// Interjeição
let speakOutput = `Frase normal, <say-as interpret-as="interjection">Bazinga.</say-as>`;
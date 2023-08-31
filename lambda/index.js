/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Olá, você pode pedir uma flor ou um buquê';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const FloresIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FloresIntent';
    },
    handle(handlerInput) {
        const frases = [
            "Olá, fique tranquilo, Aqui vai algumas das principais definições dos tipos de violência segundo a lei Maria da Penha, Dentre as cinco principais, estão a violência física, que causa lesões corporais e ofende a integridade da vítima; a violência psicológica, que provoca danos emocionais, prejudica ou perturba a vítima, acarretando muitas vezes na diminuição da autoestima da mulher;, a violência sexual, que envolve qualquer conduta que force a vítima a ter relação sexual sem seu consentimento, por meio de coação, chantagem, suborno, manipulação, entre outros; ,a violência patrimonial, que consiste na destruição, retenção ou subtração dos bens da vítima; e, por fim, temos a violência moral, que, em grande parte, causa calúnia, difamação, injúria e às vezes até o controle sobre a vítima. Ainda ficou com dúvidas? Fique tranquilo, Logo logo o site mande-me flores estará no ar para que você possa ter uma melhor consulta sobre o assunto. Tchau, e até mais, saiba que pode me chamar sempre que necessário!",
            "Olá, mantenha a calma, Aqui vai algumas das principais definições dos tipos de violência segundo a lei Maria da Penha, Dentre as cinco principais, estão a violência física, que causa lesões corporais e ofende a integridade da vítima; a violência psicológica, que provoca danos emocionais, prejudica ou perturba a vítima, acarretando muitas vezes na diminuição da autoestima da mulher;, a violência sexual, que envolve qualquer conduta que force a vítima a ter relação sexual sem seu consentimento, por meio de coação, chantagem, suborno, manipulação, entre outros; ,a violência patrimonial, que consiste na destruição, retenção ou subtração dos bens da vítima; e, por fim, temos a violência moral, que, em grande parte, causa calúnia, difamação, injúria e às vezes até o controle sobre a vítima. Ainda ficou com dúvidas? Fique tranquilo, Logo logo o site mande-me flores estará no ar para que você possa ter uma melhor consulta sobre o assunto. Tchau, e até mais, saiba que pode me chamar sempre que necessário!",
            "Olá, não tenha medo, Aqui vai algumas das principais definições dos tipos de violência segundo a lei Maria da Penha, Dentre as cinco principais, estão a violência física, que causa lesões corporais e ofende a integridade da vítima; a violência psicológica, que provoca danos emocionais, prejudica ou perturba a vítima, acarretando muitas vezes na diminuição da autoestima da mulher;, a violência sexual, que envolve qualquer conduta que force a vítima a ter relação sexual sem seu consentimento, por meio de coação, chantagem, suborno, manipulação, entre outros; ,a violência patrimonial, que consiste na destruição, retenção ou subtração dos bens da vítima; e, por fim, temos a violência moral, que, em grande parte, causa calúnia, difamação, injúria e às vezes até o controle sobre a vítima. Ainda ficou com dúvidas? Fique tranquilo, Logo logo o site mande-me flores estará no ar para que você possa ter uma melhor consulta sobre o assunto. Tchau, e até mais, saiba que pode me chamar sempre que necessário!",
        ];

        const speakOutput = frases[Math.floor(Math.random() * frases.length)];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const MargaridaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MargaridaIntent';
    },
    handle(handlerInput) {
        const frases1 = [
            "A violência física, é aquela que causa lesões corporais e ofende a integridade da vítima. Sinta-se à vontade e me chame novamente se necessário! "
       ];

        const speakOutput = frases1[Math.floor(Math.random() * frases1.length)];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const RosaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'RosaIntent';
    },
    handle(handlerInput) {
        const frases2 = [
            "A violência psicológica, provoca danos emocionais, prejudica ou perturba a vítima, acarretando muitas vezes na diminuição da autoestima da mulher. Sinta-se à vontade e me chame novamente se necessário!"
       ];

        const speakOutput = frases2[Math.floor(Math.random() * frases2.length)];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const VioletaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'VioletaIntent';
    },
    handle(handlerInput) {
        const frases3 = [
            "A violência sexual, envolve qualquer conduta que force a vítima a ter relação sexual sem seu consentimento, por meio de coação, chantagem, suborno, manipulação, entre outros. Sinta-se à vontade e me chame novamente se necessário!"
       ];

        const speakOutput = frases3[Math.floor(Math.random() * frases3.length)];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const TulipaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TulipaIntent';
    },
    handle(handlerInput) {
        const frases4 = [
            "A violência patrimonial, consiste na destruição, retenção ou subtração dos bens da vítima. Sinta-se à vontade e me chame novamente se necessário!"
       ];

        const speakOutput = frases4[Math.floor(Math.random() * frases4.length)];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const LirioIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LirioIntent';
    },
    handle(handlerInput) {
        const frases5 = [
            "A violência moral, é aquela que em grande parte, causa calúnia, difamação, injúria e às vezes até o controle sobre a vítima. Sinta-se à vontade e me chame novamente se necessário!"
       ];

        const speakOutput = frases5[Math.floor(Math.random() * frases5.length)];

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Como posso te ajudar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Tchau, e até mais, saiba que pode me chamar sempre que necessário!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Ops, acho que não entendi o que você quis dizer...';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Ops, acho que não entendi o que você quis dizer...';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        FloresIntentHandler,
        MargaridaIntentHandler,
        RosaIntentHandler,
        VioletaIntentHandler,
        TulipaIntentHandler,
        LirioIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
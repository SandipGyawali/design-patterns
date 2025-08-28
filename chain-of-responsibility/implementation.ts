interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): string | null;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler; // enables chaining like handler1.setNext(handler2).setNext(handler3)
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class ChatbotHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "basic question") {
      return `Chatbot handled: ${request}`;
    }
    return super.handle(request);
  }
}

class JuniorSupportHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "technical issue") {
      return `Junior Support handled: ${request}`;
    }
    return super.handle(request);
  }
}

class SeniorSupportHandler extends AbstractHandler {
  public handle(request: string): string | null {
    if (request === "billing issue") {
      return `Senior Support handled: ${request}`;
    }
    return super.handle(request);
  }
}

const chatbot = new ChatbotHandler();
const junior = new JuniorSupportHandler();
const senior = new SeniorSupportHandler();

// chain builder
chatbot.setNext(junior).setNext(senior);

// Test requests
const requests = [
  "basic question",
  "technical issue",
  "billing issue",
  "unknown issue",
];

for (const req of requests) {
  const result = chatbot.handle(req);
  if (result) {
    console.log(result);
  } else {
    console.log(`No one could handle: ${req}`);
  }
}

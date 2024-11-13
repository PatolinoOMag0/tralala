class BPMNProcess {
  constructor() {
    this.currentTask = null;
  }

  async start() {
    console.log("Início do processo...");
    await this.taskA(); 
    await this.gateway(); 
  }

  // Tarefa A
  async taskA() {
    console.log("Executando Tarefa A...");
    await this.simulateAsyncTask("A");
  }

  async gateway() {
    console.log("Decisão no Gateway...");
    // Decisão baseada em alguma condição
    const decision = this.makeDecision();
    if (decision === "sim") {
      console.log("Decisão: Sim");
      await this.taskB();
    } else {
      console.log("Decisão: Não");
      await this.taskC();
    }
  }

  // Tarefa B
  async taskB() {
    console.log("Executando Tarefa B...");
    await this.simulateAsyncTask("B");
  }

  // Tarefa C
  async taskC() {
    console.log("Executando Tarefa C...");
    await this.simulateAsyncTask("C");
  }

  async simulateAsyncTask(task) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Tarefa ${task} concluída.`);
        resolve();
      }, 1000);
    });
  }

  makeDecision() {
    return Math.random() > 0.5 ? "sim" : "não";
  }
}

// Criar uma instância e iniciar o processo
const bpmnProcess = new BPMNProcess();
bpmnProcess.start();

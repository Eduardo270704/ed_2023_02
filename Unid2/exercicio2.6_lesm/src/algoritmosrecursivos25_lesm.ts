class CallNode {
    constructor(public n_lesm: number, public depth_lesm: number) {}
}

class FibonacciTree {
    root_lesm: CallNode;
    children_lesm: FibonacciTree[] = [];

    constructor(n_lesm: number, depth_lesm: number) {
        this.root_lesm = new CallNode(n_lesm, depth_lesm);
    }

    addChild(child_lesm: FibonacciTree) {
        this.children_lesm.push(child_lesm);
    }

    printTree() {
        const tabs_lesm = '  '.repeat(this.root_lesm.depth_lesm);
        console.log(`${tabs_lesm}Calculando Fibonacci(${this.root_lesm.n_lesm})`);

        for (const child_lesm of this.children_lesm) {
            child_lesm.printTree();
        }
    }

    calculate(): number {
        if (this.root_lesm.n_lesm <= 0) {
            return 0;
        } else if (this.root_lesm.n_lesm === 1) {
            return 1;
        } else {
            const left_lesm = new FibonacciTree(this.root_lesm.n_lesm - 1, this.root_lesm.depth_lesm + 1);
            const right_lesm = new FibonacciTree(this.root_lesm.n_lesm - 2, this.root_lesm.depth_lesm + 1);
            this.addChild(left_lesm);
            this.addChild(right_lesm);
            return left_lesm.calculate() + right_lesm.calculate();
        }
    }
}

function measurePerformance(n_lesm: number, iterations_lesm: number): number {
    const start_lesm = new Date().getTime();
    for (let i_lesm = 0; i_lesm < iterations_lesm; i_lesm++) {
        const fibonacciTree_lesm = new FibonacciTree(n_lesm, 0);
        fibonacciTree_lesm.calculate();
    }
    const end_lesm = new Date().getTime();
    return (end_lesm - start_lesm); // Tempo total em milissegundos
}

const n_lesm = 10; // Valor de n que você deseja calcular
const iterations_lesm = 100; // Número de iterações

const totalTime_lesm = measurePerformance(n_lesm, iterations_lesm);
console.log(`Tempo total de execução para Fibonacci(${n_lesm}) em ${iterations_lesm} iterações: ${totalTime_lesm} ms`);

export default { }
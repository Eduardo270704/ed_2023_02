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

const n_lesm = 5; // O número de Fibonacci que você deseja calcular
const fibonacciTree_lesm = new FibonacciTree(n_lesm, 0);
console.log(`Árvore de Chamadas para Fibonacci(${n_lesm}):\n`);
fibonacciTree_lesm.calculate();
console.log(`\nO ${n_lesm}-ésimo termo da sequência de Fibonacci é: ${fibonacciTree_lesm.calculate()}`);

export default FibonacciTree
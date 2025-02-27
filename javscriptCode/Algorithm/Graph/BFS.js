function BFS(graph, start) {
    const queue = [start]; // Initialize queue with starting node
    const visited = new Set(); // Track visited nodes
    const result = []; // Store the result of BFS traversal

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue a node
        console.log(`Dequeued node: ${node}`);

        if (!visited.has(node)) {
            visited.add(node); // Mark node as visited
            console.log(`Visited node: ${node}`);

            // Enqueue all adjacent nodes
            console.log(`Adjacent nodes: ${graph[node]}`);
            queue.push(...graph[node]);
            console.log(`Queue updated: ${queue}`);

            result.push(node); // Add node to result
            console.log(`Result updated: ${result}`);
        }
    }
    return result;
}

const graph = {
    0: [1],
    1: [0, 4],
    2: [0, 4],
    3: [0, 4],
    4: [1, 2, 3],
    5: []
};

console.log('BFS Traversal:', BFS(graph, 0));


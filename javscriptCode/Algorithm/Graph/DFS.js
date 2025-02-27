function DFS(graph, start) {
    const stack = [start]; // Initialize stack with starting node
    const visited = new Set(); // Track visited nodes
    const result = []; // Store the result of DFS traversal

    while (stack.length > 0) {
        const node = stack.pop(); // Pop a node from the stack
        console.log(`Popped node: ${node}`);    

        if (!visited.has(node)) {
            visited.add(node); // Mark node as visited
            console.log(`Visited node: ${node}`);

            // Push all adjacent nodes to the stack
            console.log(`Adjacent nodes: ${graph[node]}`);
            stack.push(...graph[node]);
            console.log(`Stack updated: ${stack}`); 
            
            result.push(node); // Add node to result
            console.log(`Result updated: ${result}`);
        }  
    }
    return result;
}

const graph = {
    0: [1, 2],
    1: [3],
    2: [4],
    3: [],
    4: []
};

console.log('DFS Traversal:', DFS(graph, 0));
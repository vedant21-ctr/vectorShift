from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



class Edge(BaseModel):
    source: str
    target: str

class PipelineData(BaseModel):
    nodes: List[str]
    edges: List[Edge]



@app.get("/")
def home():
    return {"Ping": "Pong"}



def check_dag(nodes, edges):
    # Create adjacency list
    graph = {node: [] for node in nodes}

    for edge in edges:
        graph[edge.source].append(edge.target)

    visited = set()
    path = set()

    def dfs(node):
        if node in path:      # cycle detected
            return False
        if node in visited:
            return True

        path.add(node)

        for neighbour in graph[node]:
            if not dfs(neighbour):
                return False

        path.remove(node)
        visited.add(node)
        return True

    for node in nodes:
        if node not in visited:
            if not dfs(node):
                return False

    return True



@app.post("/pipelines/parse")
def parse_pipeline(data: PipelineData):
    return {
        "num_nodes": len(data.nodes),
        "num_edges": len(data.edges),
        "is_dag": check_dag(data.nodes, data.edges)
    }

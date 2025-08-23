from fastapi import FastAPI
app = FastAPI()

@app.get("/{dynamic_param}")
async def root(dynamic_param):
    return {"dynamic_param": dynamic_param}
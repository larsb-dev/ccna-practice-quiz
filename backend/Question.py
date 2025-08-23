from dataclasses import dataclass

@dataclass
class Question:
    id: int
    text: str
    options: list[str]
    answer: str